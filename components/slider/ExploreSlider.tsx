'use client'
import './explore.scss'
import { Swiper, SwiperSlide } from "swiper/react"
import { useWindowSize } from '@uidotdev/usehooks'
import { Navigation } from "swiper/modules"
import Link from 'next/link'
import Image from "next/image"
import musclebuild from '../../public/images/musclebuild.png'
import loseweight from '../../public/images/loseweight.png'
import gw from '../../public/images/generalwellness.png'
import b1 from '../../public/images/muscletech-how-to-raise-bar-back-on-track.png'
import b2 from '../../public/images/muscletech-how-to-raise-bar-body-recomp.png'
export default function ExploreSlider() {
    const { width } = useWindowSize()
    return <section className='explore-data'>
        <header>
            <h1>HOW DO YOU WANT TO RAISE THE BAR?</h1>
            <span>Explore products by goal</span>
        </header>
        <Swiper
            className="explore-slider"
            modules={[Navigation]}
            navigation={true}
            slidesPerView={width! < 1016 ? 1 : 2.4}
            spaceBetween={20}
            loop={true}
        >
            <SwiperSlide className='explore-slide'>
                <Image src={musclebuild} alt="muscle-build" width={650} height={700} />
                <h2>Build Muscle</h2>
                <Link href='/collections/products/?goal=muscle-build'>SHOP NOW</Link>
            </SwiperSlide>
            <SwiperSlide className='explore-slide'>
                <Image src={loseweight} alt="lose-weight" width={650} height={700} />
                <h2>LOSE WEIGHT</h2>
                <Link href='/collections/products/?goal=lose-weight'>SHOP NOW</Link>
            </SwiperSlide>
            <SwiperSlide className='explore-slide'>
                <Image src={gw} alt="generall-wellness" width={650} height={700} />
                <h2>Generall Wellness</h2>
                <Link href='/collections/products/?goal=general-wellness'>SHOP NOW</Link>
            </SwiperSlide>
            <SwiperSlide className='explore-slide'>
                <Image src={b1} alt="b1" width={650} height={700} />
                <h2>COMPETITION PREP</h2>
                <Link href='/collections/products/?goal=muscle-build'>SHOP NOW</Link>
            </SwiperSlide>
            <SwiperSlide className='explore-slide'>
                <Image src={b2} alt="b2" width={650} height={700} />
                <h2>GET BACK ON TRACK</h2>
                <Link href='/collections/products/?goal=muscle-build'>SHOP NOW</Link>
            </SwiperSlide>
        </Swiper>
    </section>
}