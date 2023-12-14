'use client'
import { createContext, type Dispatch, type SetStateAction, useState, type ReactNode } from "react"
interface Context {
    isCartVisible: boolean,
    setCartVisibility: Dispatch<SetStateAction<boolean>>
}
export const context = createContext<Context>({ isCartVisible: false, setCartVisibility: () => { } })

export const ContextProvider: (props: { children: ReactNode }) => ReactNode = ({ children }) => {
    const [isCartVisible, setCartVisibility] = useState<boolean>(false)
    return <context.Provider value={{ isCartVisible, setCartVisibility }}>
        {children}
    </context.Provider>
}