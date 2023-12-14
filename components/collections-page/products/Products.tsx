import type { Product, Goals, Categories } from '@/utils/types'
import './products.scss'
export interface FiltersType {
    goal: Goals[] | Goals,
    price: number | string
}
export interface Props {
    category: string
    filteres: FiltersType
}
import ProductsList from './ProductsList'
import { getFilteredProducts, type Category } from '@/utils/fetchers'
import { revalidatePath } from 'next/cache'



export default async function Products({ category, filteres }: Props) {
    const products = await getFilteredProducts(category as Category, filteres) as Product[]

    return <>
        <ProductsList products={products} />
    </>
}