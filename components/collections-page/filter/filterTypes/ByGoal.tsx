'use client'
import './filter-types.scss'
import type { Goals } from '@/utils/types'
import { useState, useEffect, useCallback } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
export default function ByGoal() {
    const [goals, setGoals] = useState<Goals[]>([])
    const router = useRouter()
    const params = useSearchParams()

    function filterHandler(goal: Goals) {
        setGoals(includedGoals => {
            if (!includedGoals.includes(goal)) return [...includedGoals, goal]
            return includedGoals.filter(inclGoal => inclGoal !== goal)
        })
    }
    useEffect(() => {
        const currentParams = params.toString()
        const queriedGoals = goals.join('&goal=')
        console.log(currentParams)
        if (!currentParams) {
            if (queriedGoals) {
                router.push('?goal=' + queriedGoals, { scroll: false })
            }
        } else {
            if (queriedGoals) {
                if (!params.get('price')) {
                    router.push('?goal=' + queriedGoals, { scroll: false })
                } else {
                    router.push('?price=' + params.get('price') + '&' + 'goal=' + goals.join('&goal='), { scroll: false })
                }
            } else {
                if (!params.get('price')) {
                    if (params.getAll("goal")) {
                        router.push('?' + currentParams, { scroll: false })
                    } else {
                        router.push('?', { scroll: false })
                    }
                } else {
                    router.push('?price=' + params.get('price'), { scroll: false })
                }
            }
        }
    }, [goals])
    return <>
        <div className='filter-box-container'>
            <input type='checkbox' checked={params.getAll('goal').includes('muscle-build')} id='build-muscle' onChange={filterHandler.bind(null, 'muscle-build')} />
            <label htmlFor="build-muscle">Build Muscle</label>
        </div>
        <div className='filter-box-container'>
            <input type='checkbox' checked={params.getAll('goal').includes('lose-weight')} id='lose-weight' onChange={filterHandler.bind(null, 'lose-weight')} />
            <label htmlFor="lose-weight" >Lose Weight</label>
        </div>
        <div className='filter-box-container'>
            <input type='checkbox' checked={params.getAll('goal').includes('general-wellness')} id='general-wellness' onChange={filterHandler.bind(null, 'general-wellness')} />
            <label htmlFor="general-wellness">General Wellness</label>
        </div>
    </>

}