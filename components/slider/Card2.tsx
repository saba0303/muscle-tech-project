import banner from '@/public/images/hero-slide2.jpg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
export default function Card2() {
    const router = useRouter()
    return <div className='card' style={{ backgroundImage: `url(${banner})` }}>
        <Image src={banner} alt='banner-img' width={1500} height={1000} />
        <div style={{ marginLeft: '5rem' }}>
            <span>BUY 2 GET 1 FREE</span>
            <h1>THE ULTIMATE CREATINE FORMULA</h1>
            <p>Cell-Tech Elite delivers the perfect combination to amplify your muscle growth while boosting strength and speeding up recovery time</p>
            <div className='card-actions'>
                <button className='bridge' onClick={() => router.push('/products/celltech47')}>SHOP CELL-TECH ELITE</button>
                <button className='shop' onClick={() => router.push('/collections/creatine')} >SHOP CREATINE</button>
            </div>
        </div>
    </div>
}
