import './details-box.scss'
import type { Product } from '@/utils/types'
import DetailsHeader from './DetailsHeader'
import CartActions from './CartActions'
import OtherDetails from './OtherDetails'
interface Props {
    data: Product
}

export default function DetailData({ data }: Props) {
    return <>
        <section className='details-data-container'>
            <DetailsHeader data={data} />
            <CartActions product={data} />
            <OtherDetails description={data.description} fact={data.factImage} faqs={data.faqs} />
        </section>

    </>
}