import { createSlice } from '@reduxjs/toolkit'
import type { Product } from '@/utils/types'
import type { PayloadAction } from '@reduxjs/toolkit'
type CartItems = (Product & { qty: number })[]
interface CartState {
    cartItems: CartItems,
    totalPrice: number
}
const initialState: CartState = {
    cartItems: [],
    totalPrice: 0
}
function calculateTotal(state: CartState) {
    return state.cartItems
        .map(product => product.price * product.qty)
        .reduce((prev, curr) => prev + curr, 0)
}
const cart = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add(state: CartState, { payload }: PayloadAction<{ product: Product, qty: number }>) {
            const existedProduct = state.cartItems.find(item => item.id === payload.product.id)
            if (existedProduct) {
                const updated = state.cartItems.map(item => {
                    if (item.id === existedProduct.id) return { ...item, qty: item.qty + payload.qty }
                    return item
                })
                state.cartItems = updated
            } else {
                let product = payload.product
                state.cartItems.unshift({ ...product, qty: payload.qty })
            }
            state.totalPrice = calculateTotal(state)
        },
        remove(state: CartState, action: PayloadAction<{ id: string }>) {
            state.cartItems = state.cartItems.filter(product => product.id !== action.payload.id)
            state.totalPrice = calculateTotal(state)
        },
        increaseQty(state: CartState, action: PayloadAction<{ id: string }>) {
            state.cartItems = state.cartItems.map(item => {
                if (item.id === action.payload.id) return { ...item, qty: item.qty + 1 }
                return item
            })
            state.totalPrice = calculateTotal(state)
        },
        decreseQty(state: CartState, action: PayloadAction<{ id: string }>) {
            const item = state.cartItems.find(el => el.id === action.payload.id)
            const isOne = item?.qty === 1
            if (isOne) {
                state.cartItems = state.cartItems.filter(el => el.id !== item.id)
            } else {
                state.cartItems = state.cartItems.map(item => {
                    if (item.id === action.payload.id) return { ...item, qty: item.qty - 1 }
                    return item
                })
            }
            state.totalPrice = calculateTotal(state)
        }
    }
})
export const cartActions = cart.actions
export default cart



