'use client'
import type { ReactNode } from "react";
import { ContextProvider } from "@/context/app";
import { Provider } from "react-redux";
import store from "@/store/app-store";
export default function Providers(props: { children: ReactNode }) {
    return <Provider store={store}>
        <ContextProvider>
            {props.children}
        </ContextProvider>
    </Provider>
}