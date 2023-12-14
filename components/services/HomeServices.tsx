'use client'
import './home-services.scss'
import Image from 'next/image'
import Link from 'next/link'
import item from '../../public/images/pre.png'
import { useRouter } from 'next/navigation'
import title from '../../public/images/title-unleash_600x600.png'
import Services from '../p-details-page/Services'
const HomeServices = () => {
    const router = useRouter()
    return <section className='serv-bann'>
        <div className='b1'>
            <div className='img-logos'>
                <Image onClickCapture={() => router.push('/products/euphor36')} src={item} width={270} height={270} alt='pre-workout' id='pre-work' />
                <Image src={title} alt='title' width={500} height={200} id='title' />
            </div>
            <Link href='/collections/products'>SHOP NOW</Link>
        </div>
        <Services />
    </section>
}
export default HomeServices