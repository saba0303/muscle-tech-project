'use client'
import Image from "next/image"
import cart from '../../public/icons/shopping-cart.png'
import close from '../../public/icons/close.png'
import { Dispatch, SetStateAction, } from 'react'
import { useSelector } from "react-redux"
import type { RootState } from "@/store/app-store"
interface Props {
    closer: Dispatch<SetStateAction<boolean>>
}
export default function CartHeader(props: Props) {
    const items = useSelector((state: RootState) => state.cart.cartItems).length
    function closeHandler() {
        props.closer(false)
    }
    return <header className="cart-header">
        <div>
            <Image src={cart} alt='cart_icon' width={20} height={20} />
            {items !== 0 && <span>{items} ITEMS</span>}
        </div>
        <Image onClick={closeHandler} id="exit" src={close} alt="close" width={20} height={20} />
    </header>
}