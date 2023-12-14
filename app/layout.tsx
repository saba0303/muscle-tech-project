import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ContextProvider from '@/components/wrapper/Wrapper'
import Cart from "@/components/cart/Cart"
import Footer from '@/components/footer/Footer'
import RecomendedProducts from "@/components/cart/RecomendedProducts"
import Nav from '@/components/navigation/Nav'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Muscle-Tech',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider >
          <div id='cart-container'></div>
          <Nav />
          <Cart />
          <RecomendedProducts />
          {children}
          <Footer />
        </ContextProvider>
      </body>
    </html>
  )
}