'use client'
import { motion } from 'framer-motion'
interface Props {
    sales: number
    commission: number
    shareCode: number
    personalCode: number
    freeProduct: number
}
export default function Requests({ sales, commission, shareCode, personalCode, freeProduct }: Props) {
    return <motion.ul initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} layout>
        <li>{sales} Sales</li>

        <li>{commission}% Commission* on most Purchases</li>

        <li>{shareCode}% Share Code</li>

        <li>{personalCode}% Personal Code</li>

        <li>{freeProduct} Free Product of choice</li>

    </motion.ul>
}