import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import cart from './slices/cart-slice'
const store = configureStore({
    reducer: {
        cart: cart.reducer
    }
})
export default store
export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch