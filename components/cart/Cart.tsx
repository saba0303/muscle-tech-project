'use client'
import './cart.scss'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import CartHeader from "./CartHeader"
import CartList from './CartList'
import { useContext } from 'react'
import { context } from '@/context/app'
import { useSelector } from 'react-redux'
import type { RootState } from '@/store/app-store'
export default function Cart() {
    const state = useSelector((state: RootState) => state.cart)
    const cart = state.cartItems
    const { isCartVisible, setCartVisibility } = useContext(context)

    return <AnimatePresence>
        {isCartVisible && <motion.div

            key='cart'
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            exit={{ x: 500, transition: { delay: .2, type: 'keyframes' } }}
            transition={{ type: 'keyframes' }}
            className='cart'>
            <CartHeader closer={setCartVisibility} />
            {cart.length !== 0 && <CartList />}
            {cart.length === 0 && <div className='empty-cart'>
                <span>Your cart is empty</span>
                <Link onClick={() => setCartVisibility(false)} href='/collections/products'>START SHOPPING</Link>
            </div>}
            {
                cart.length !== 0 && <Link onClick={() => setCartVisibility(false)} href='/checkout' className='checkout'>CHECKOUT ${state.totalPrice} USD</Link>
            }
        </motion.div>
        }
    </AnimatePresence >
}

