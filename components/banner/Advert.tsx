'use client'
import Image from "next/image"
import hero2 from '../../public/images/ban.png'
import { useRouter } from "next/navigation"
export default function BannerAdvert() {
    const router = useRouter()
    function navigate() {
        router.push('/collections/products')
    }
    return <div className="banner-ad">
        <Image src={hero2} alt="hr-2" width={500} height={500} />
        <span className="select-prod">SELECT PRODUCTS</span>
        <button onClick={navigate}>SHOP NOW</button>
    </div>
}