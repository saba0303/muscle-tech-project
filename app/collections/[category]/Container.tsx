import './style.scss'
import Filter from '@/components/collections-page/filter/Filter'
import Products from '@/components/collections-page/products/Products'
import { Props } from '@/components/collections-page/products/Products'
export default function Container({ category, filteres }: Props) {
    return <section className='cont'>
        <Filter />
        <Products category={category} filteres={filteres} />
    </section>
}