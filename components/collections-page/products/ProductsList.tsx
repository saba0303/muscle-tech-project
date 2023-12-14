'use client'
import type { Product as ProductType } from '@/utils/types'
import { useRouter } from 'next/navigation'
import Product from './Product'
import './product.scss'
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import { useWindowSize } from '@uidotdev/usehooks'
interface Props {
    products: ProductType[]
}
const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
            type: 'keyframes'
        }
    }
}

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
}
export default function ProductsList({ products }: Props) {
    const { width } = useWindowSize()
    const router = useRouter()
    function goToDetailsHandler(id: string) {
        router.push('/products/' + id)
    }
    return <AnimatePresence>
        <motion.div variants={container} initial='hidden' animate={'visible'} className='products-list'>
            {products.map((product) => <motion.div
                onClick={goToDetailsHandler.bind(null, product.id)}
                key={product.name}
                variants={item}
                exit='hidden'
                animate='visible'
                initial='hidden'
                className='product-self'>
                <Product key={product.name} product={product} />
            </motion.div>)}
        </motion.div>
    </AnimatePresence>
}