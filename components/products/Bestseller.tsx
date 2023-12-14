'use client'
import { Product } from "@/utils/types";
import Image from "next/image";
import './bestseller.scss'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from 'framer-motion'
interface Props {
    product: Product
}
export default function Bestseller({ product }: Props) {
    const [hovered, setHovered] = useState<boolean>(false)
    const router = useRouter()
    function mouseonEffect() {
        setHovered(true)
    }
    function mouseoffEffect() {
        setHovered(false)
    }
    function goToDetailHandler() {
        router.push('/products/' + product.id)
    }
    return <motion.div initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0, transition: { type: "spring" } }} onClick={goToDetailHandler} className="bestseller-item" onMouseEnter={mouseonEffect} onMouseLeave={mouseoffEffect}>
        {!hovered && <Image src={product.images[0]} alt={`${product.name}`} width={300} height={330} />}
        {hovered && product.images.length === 1 && <Image src={product.images[0]} alt={`${product.name}`} width={300} height={330} />}
        {hovered && product.images.length > 1 && <Image src={product.images[1]} alt={`${product.name}`} width={300} height={330} />}
        <div>
            <span id="sticker">Bestseller</span>
            <h2>{product.name}</h2>
            <span id='it-price'>${product.price}</span>
        </div>
    </motion.div>

}
