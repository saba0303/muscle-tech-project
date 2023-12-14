'use client'
import { useState } from "react"
import { cartActions } from "@/store/slices/cart-slice"
import { useAppDispatch } from "@/store/app-store"
import { motion } from 'framer-motion'
import type { Product } from "@/utils/types"
interface Props {
    product: Product
}
export default function CartActions({ product }: Props) {
    const [qty, setQty] = useState<number>(1)
    const dispatch = useAppDispatch()
    function add() {
        dispatch(cartActions.add({ product: product, qty }))
    }
    function increase() {
        setQty(qty => qty + 1)
    }
    function decrease() {
        setQty(qty => {
            if (qty > 1) return qty - 1
            return qty
        })
    }

    return <div className='cart-actions'>
        <div>
            <motion.span whileTap={{ scale: [1, 1.1, 1] }} className="actionl" onClick={decrease}>-</motion.span>
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="value">{qty}</motion.span>
            <motion.span whileTap={{ scale: [1, 1.1, 1] }} className="actionr" onClick={increase}>+</motion.span>
        </div>
        <motion.button onClick={add} whileHover={{ y: -3 }} whileTap={{ y: [0, 3, -3, 0] }} className="cart-adder">ADD TO CART</motion.button>
    </div>
}