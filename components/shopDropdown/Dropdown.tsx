'use client'
import Link from "next/link"
import Image from "next/image"
import sale1 from '../../public/images/sale1.png'
import sale2 from '../../public/images/sale2.png'
import { motion, AnimatePresence } from 'framer-motion'
import type { Dispatch, SetStateAction } from "react"
interface Props {
    setVisibility: Dispatch<SetStateAction<boolean>>
    isVisible: boolean
}
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1, transition: {
            staggerChildren: 0.2
        }
    },


}
const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
}
export default function Dropdown(props: Props) {
    return <AnimatePresence>
        {props.isVisible && <motion.div
            key='dropdown'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            transition={{ type: "keyframes" }}
            className="dropdown"
            onMouseEnter={() => props.setVisibility(true)}
            onMouseLeave={() => props.setVisibility(false)}
        >
            <motion.div variants={itemVariants}>
                <Link href='/collections/products'>All Products</Link>
                <Link href='/collections/products'>View All</Link>
                <Link href='/collections/bestsellers'>Bestsellers</Link>
            </motion.div>
            <motion.div variants={itemVariants}>
                <Link href='/collections/products'>By Category</Link>
                <Link href='/collections/protein'>Protein</Link>
                <Link href='/collections/creatine'>Creatine</Link>
                <Link href='/collections/pre-workout'>Pre-workout</Link>
                <Link href='/collections/vitamins'>Vitamins & Supplements</Link>
            </motion.div>
            <motion.div variants={itemVariants}>
                <Link href='/collections/products'>By Goal</Link>
                <Link href='/collections/products/?goal=muscle-build'>Build Muscle</Link>
                <Link href='/collections/products/?goal=lose-weight'>Lose Weight</Link>
                <Link href='/collections/products/?goal=general-wellness'>General Wellness</Link>
            </motion.div>
            <motion.div variants={itemVariants} className="product-sales">
                <Image src={sale1} alt="sale1" width={250} height={350} />
                <Image src={sale2} alt="sale1" width={250} height={350} />
            </motion.div>
        </motion.div>}
    </AnimatePresence>
}