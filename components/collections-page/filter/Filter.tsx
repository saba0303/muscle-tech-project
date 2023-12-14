'use client'
import { motion, useAnimate, AnimatePresence } from 'framer-motion'
import { useReducer } from 'react'
import ByCategory from './filterTypes/ByCategory'
import ByPrice from './filterTypes/ByPrice'
import ByGoal from './filterTypes/ByGoal'
import Image from 'next/image'
import arrow from '@/public/icons/down-arrow.png'
import './filter.scss'
const initial: State = {
    byCategory: false,
    byGoal: false,
    byPrice: false
}
interface State {
    byCategory: boolean
    byGoal: boolean
    byPrice: boolean
}
type filterBy = 'category' | 'goal' | 'price'
interface Action {
    activated: filterBy
}
function reducer(state: State = initial, { activated }: Action): State {
    if (activated === 'category') return { ...state, byCategory: !state.byCategory }
    if (activated === 'goal') return { ...state, byGoal: !state.byGoal }
    if (activated === 'price') return { ...state, byPrice: !state.byPrice }
    return state
}
export default function Filter() {
    const [scope, animate] = useAnimate()
    const [state, dispatch] = useReducer(reducer, initial)
    function filterExpander(by: filterBy) {
        if (state.byCategory && by === 'category') {
            animate(`#${by}-arrow`, { rotate: 0 }, { type: 'spring' })
        } else if (state.byGoal && by === 'goal') {
            animate(`#${by}-arrow`, { rotate: 0 }, { type: 'spring' })
        } else if (state.byPrice && by === 'price') {
            animate(`#${by}-arrow`, { rotate: 0 }, { type: 'spring' })
        } else {
            animate(`#${by}-arrow`, { rotate: 180 }, { type: 'spring' })
        }
        dispatch({ activated: by })
    }


    return <AnimatePresence>
        <motion.aside ref={scope} className={`filter-aside`} >
            <h2>Filters</h2>
            <motion.div layout className='filter-box'>
                <motion.div layout className='filter-type' onClick={filterExpander.bind(null, 'category')}>
                    <h3>By Category</h3>
                    <Image src={arrow} width={20} height={20} alt='arrow' id='category-arrow' />
                </motion.div>
                {state.byCategory && <motion.div exit={{ opacity: 0, y: 25 }} initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} key='category' className='category-filter-box' layout>
                    <ByCategory />
                </motion.div>}
            </motion.div>
            <motion.div layout className='filter-box'>
                <motion.div layout className='filter-type' onClick={filterExpander.bind(null, 'goal')}>
                    <h3>By Goal</h3>
                    <Image src={arrow} width={20} height={20} alt='arrow' id='goal-arrow' />
                </motion.div>
                {state.byGoal && <motion.div exit={{ opacity: 0, y: 25 }} initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} key='goal' className='category-filter-box' layout>
                    <ByGoal />
                </motion.div>}

            </motion.div>
            <motion.div layout className='filter-box'>
                <motion.div layout className='filter-type' onClick={filterExpander.bind(null, 'price')}>
                    <h3>Price</h3>
                    <Image src={arrow} width={20} height={20} alt='arrow' id='price-arrow' />
                </motion.div>
                {state.byPrice && <motion.div
                    exit={{ opacity: 0, y: 25 }}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    key='price'
                    layout>
                    <ByPrice />
                </motion.div>}
            </motion.div>
        </motion.aside>
    </AnimatePresence>
}