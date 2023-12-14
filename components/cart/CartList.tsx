'use client'
import { useSelector } from "react-redux"
import type { RootState } from "@/store/app-store"
import CartItem from "./CartItem"
import { motion } from 'framer-motion'
export default function CartList() {
    const cart = useSelector((state: RootState) => state.cart)
    return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .2 }} className="cart-list">
        {cart.cartItems.map(item => <CartItem item={item} key={item.id} />)}
    </motion.div>
}