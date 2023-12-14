'use client'
import Image from "next/image"
import { RootState } from "@/store/app-store"
import { useSelector } from "react-redux"
import { useAppDispatch } from "@/store/app-store"
import { motion } from 'framer-motion'
import { cartActions } from "@/store/slices/cart-slice"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
export default function CheckoutBody() {
    const cart = useSelector((state: RootState) => state.cart)
    const dispatch = useAppDispatch()
    const router = useRouter()
    useEffect(() => {
        if (cart.cartItems.length === 0) {
            router.push('/collections/products')
        }
    }, [cart])
    return <section className="checkout-body">
        <div className="purchased-list">
            {cart.cartItems.map(product => <motion.div layout initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} className="purchased-item" key={product.id}>
                <article>
                    <Image src={product.images[0]} alt={product.name} width={120} height={110} />
                    <div className="item-data">
                        <span id="item-name">{product.name}</span>
                        <span id="item-price">${product.price}</span>

                    </div>
                </article>
                <div className="item-acts">

                    <span onClick={() => dispatch(cartActions.decreseQty({ id: product.id }))}>-</span>
                    <span>{product.qty}</span>
                    <span onClick={() => dispatch(cartActions.increaseQty({ id: product.id }))}>+</span>

                </div>
                <span id="item-total-price">${product.price * product.qty}</span>
            </motion.div>)}
        </div>
        <div className="summerize">
            <div>
                <h3>TOTAL</h3>
                <span>${cart.totalPrice}</span>
            </div>
            <span>Shipping & taxes calculated at checkout</span>
            <button>CHECKOUT</button>
        </div>
    </section>
}