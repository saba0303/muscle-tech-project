'use client'
import './recomendeds.scss'
import { motion, AnimatePresence } from 'framer-motion'
import { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import star from '../../public/icons/star.png'
import { context } from '@/context/app'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '@/store/app-store'
import CartActions from '../p-details-page/CartActions'
import type { RootState } from '@/store/app-store'
import { getRecomendedProducts } from '@/utils/getRecomendeds'
import { type Product } from '@/utils/types'
import { cartActions } from '@/store/slices/cart-slice'
export default function Recomendeds() {
    const { isCartVisible, setCartVisibility } = useContext(context)
    const dispatch = useAppDispatch()
    const [recomendeds, setRecomendeds] = useState<Product[] | null>([])
    const cart = useSelector((state: RootState) => state.cart.cartItems)
    useEffect(() => {
        const goals = cart.map((product) => product.goal);
        (async () => {
            const recomendeds = await getRecomendedProducts(goals, cart)
            setRecomendeds(recomendeds)
        })()
    }, [cart])
    useEffect(() => {
        if (recomendeds !== null && recomendeds.length === 0) {
            setRecomendeds(null)
        }
    }, [recomendeds])
    return <AnimatePresence>
        {isCartVisible && cart.length !== 0 && recomendeds !== null && <motion.div
            key='recomendeds'
            className='recomended-products'
            initial={{ x: 1150 }}
            animate={{ x: 0, transition: { delay: .2, type: 'keyframes' } }}
            exit={{ x: 1150, transition: { type: 'keyframes' } }}
            transition={{ type: 'keyframes' }}
        >
            <h3>YOU MAY ALSO LIKE</h3>
            {
                recomendeds.map(recomended => <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} layout className='recomended' key={recomended.id}>
                    <Image src={recomended.images[0]} alt='product-img' width={100} height={120} />
                    {recomended.onSale && <span className='sale'>SAVE UP TO 30%</span>}
                    <span className='name'>{recomended.name}</span>
                    <span className='rating'><Image src={star} width={25} height={25} alt='star' /> {recomended.rating}</span>
                    <span className='price'>${recomended.price}</span>
                    <Link onClick={() => setCartVisibility(false)} href={'/products/' + recomended.id}>View</Link>
                    <button onClick={() => dispatch(cartActions.add({ product: recomended, qty: 1 }))}>+ Add to cart</button>
                </motion.div>)
            }

        </motion.div>
        }
    </AnimatePresence>
}