'use client'
import Image from "next/image"
import sale from '../../public/icons/sale.png'
import type { Product } from "@/utils/types"
import { useAppDispatch } from "@/store/app-store"
import { cartActions } from "@/store/slices/cart-slice"
import { motion } from 'framer-motion'
import Link from "next/link"
interface Props {
    item: Product & { qty: number }
}
export default function CartItem({ item }: Props) {
    const dispatch = useAppDispatch()
    function increase() {
        dispatch(cartActions.increaseQty({ id: item.id }))
    }
    function decrease() {
        dispatch(cartActions.decreseQty({ id: item.id }))
    }
    function remove() {
        dispatch(cartActions.remove({ id: item.id }))
    }
    return <motion.div layout className="cart-item">
        <Image src={item.images[0]} alt="item-img" width={100} height={120} />
        <div className="item-details">
            <header>
                <h2>{item.name}</h2>
                <span>${item.price}</span>
            </header>
            <div className="ingrs">
                <Link href={'/collections/' + item.category}>@{item.category}</Link>
                <Link href={'/collections/products?goal=' + item.goal}>@{item.goal}</Link>
            </div>
            <div className="on-sale">
                <Image src={sale} width={20} height={20} alt="sale-icon" />
                <span>FESTIVE GAINS - BUY 2 GET 1 FREE (-$0.00)</span>
            </div>
            <div className="item-actions">
                <div className="qty-actions">
                    <span onClick={decrease} id="i">-</span>
                    <span id="qty">{item.qty}</span>
                    <span onClick={increase} id="d">+</span>
                </div>
                <button onClick={remove}>Remove</button>
            </div>
        </div>
    </motion.div>
}