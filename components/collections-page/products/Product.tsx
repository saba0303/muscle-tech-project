import './product.scss'
import { Product } from '@/utils/types'
import Image from 'next/image'

export default function Product({ product }: { product: Product }) {
    return <>
        <Image src={product.images[0]} alt='product' width={300} height={250} />
        <span id='product-sale'>BUY 2 GET 1 FREE</span>
        <h3 id='product-name'>{product.name}</h3>
        <span id='product-price'>From ${product.price}</span>
    </>
}