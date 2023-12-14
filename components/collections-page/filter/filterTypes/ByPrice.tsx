'use client'
import './filter-types.scss'
import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from 'next/navigation'
export default function ByPrice() {
    const [price, setPrice] = useState<number>(0)
    const router = useRouter()
    const params = useSearchParams()
    function pricingHandler(e: any) {
        setPrice(e.target.value)
    }
    useEffect(() => {
        const queriedParams = params.toString()
        const queriedPrice = 'price='.concat(price.toString())
        if (queriedParams && price !== 0) {
            if (!params.get('goal')) {
                router.push('?'.concat(queriedPrice), { scroll: false })
            } else {
                router.push('?goal=' + params.getAll('goal').join('&goal=') + '&'.concat(queriedPrice), { scroll: false })

            }

        } else if (!queriedParams && price !== 0) {
            router.push('?'.concat(queriedPrice), { scroll: false })
        }
    }, [price])
    return <div className='price-box-container'>
        <div>
            <span>Products Under ${price}</span>
        </div>
        <input type='range' value={price} onChange={pricingHandler} />
    </div>
}