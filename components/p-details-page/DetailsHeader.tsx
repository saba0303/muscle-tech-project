import Image from "next/image"
import star from '../../public/icons/star.png'
import type { Product } from "@/utils/types"
interface Props {
    data: Product
}
export default function DetailsHeader({ data }: Props) {
    return <header className="details-header">
        {data.onSale && <span className="sale-state">BUY 2 GET 1 FREE</span>}
        <h1 className="name">{data.name}</h1>
        <div className="rating"><Image src={star} alt='star' width={23} height={23} /><span>{data.rating}</span></div>
        <span className="price">${data.price}</span>
        {data.review && <span className="review">{data.review}</span>}
    </header>
}