import banner from '@/public/images/hero-slide1.jpg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
export default function Card1() {
    const router = useRouter()
    return <div className='card' >
        <Image src={banner} alt='banner-img' width={1500} height={1000} />
        <div style={{ marginLeft: '40%' }}>
            <span>BUY 2 GET 1 FREE</span>
            <h1>BECAUSE BEING SHREDDED IS NEVER OVERRATED</h1>
            <p>The ultimate protein and weight loss formula to support you in your quest to get and stay lean.</p>
            <div className='card-actions'>
                <button className='bridge' onClick={() => router.push('/products/shatterripped')}>SHOP NITRO-TECH RIPPED</button>
                <button className='shop' onClick={() => router.push('/collections/protein')}>SHOP PROTEIN</button>
            </div>
        </div>
    </div>
}