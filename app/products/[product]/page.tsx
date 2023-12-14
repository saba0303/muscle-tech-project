interface Props {
    params: {
        product: string
    }
}
import { getProductById } from "@/utils/fetchers"
import type { Product } from "@/utils/types"
export const revalidate = 3600
import ProductDetails from "@/components/p-details-page/ProductDetails"
import Services from "@/components/p-details-page/Services"
import Ingredients from "@/components/p-details-page/Ingredients"
import { Metadata } from "next"
export const metadata: Metadata = {
    title: 'Muscle-Tech Products'
}
export default async function ProductDetailPage({ params }: Props) {
    const productId = params.product
    const product: Product = await getProductById(productId)
    return <>
        <ProductDetails product={product} />
        <Services />
        <Ingredients ingredients={product.ingredients} />
    </>
}