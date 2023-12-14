'use client'
import Image from "next/image"
import cart from '../../public/icons/shopping-cart.png'
import { usePathname } from "next/navigation"
import { createPortal } from "react-dom"
import Overlay from "../overlay/Overlay"
import { useContext, useEffect } from "react"
import { useSelector } from "react-redux"
import type { RootState } from "@/store/app-store"
import { context } from "@/context/app"
import { motion, useAnimate } from 'framer-motion'
export default function NavActions() {
    const path = usePathname()
    const items = useSelector((state: RootState) => state.cart.cartItems)
        .map(items => items.qty)
        .reduce((p, c) => p + c, 0)
    const [scope, animate] = useAnimate()
    useEffect(() => {
        if (items !== 0 && path !== '/checkout') {
            animate('.qty', { scale: [.8, 1, 1.1, 1] })
        }
    }, [items])
    const { setCartVisibility, isCartVisible } = useContext(context)
    if (path === '/checkout') return null
    return <div ref={scope} className="nav-actions" >
        <motion.div onClick={() => setCartVisibility(true)}>
            <Image src={cart} alt='cart_icon' width={20} height={20} />
            <span className="qty">{items}</span>
        </motion.div>
        {isCartVisible && createPortal(<Overlay closer={setCartVisibility} />, document.getElementById('cart-container')!)}
    </div >

}