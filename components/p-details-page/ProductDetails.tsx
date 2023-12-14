import './details.scss'
import ImagesSlider from "./DetailImageSlider"
import DetailData from "./DetailData"
import type { Product } from '@/utils/types'
interface Props {
    product: Product
}
export default function ProductDetails({ product }: Props) {
    return <section className='product-details-container'>
        <ImagesSlider images={product.images} />
        <DetailData data={product} />
    </section>
}