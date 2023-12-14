'use client'
import { useWindowSize } from "@uidotdev/usehooks";
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from 'swiper/modules';
import Card1 from "./Card1"
import Card2 from "./Card2"
import './slider.scss'
export default function HeroSlider() {
    const { width } = useWindowSize()
    return <section className="hero-slider-box">
        <Swiper
            className="hero-slider"
            slidesPerView={1}
            modules={[Navigation, Pagination]}
            navigation={true}
            direction={width! < 1016 ? 'vertical' : 'horizontal'}
            pagination={{ clickable: true }}

        >
            <SwiperSlide className="slide-self">
                <Card1 />
            </SwiperSlide>
            <SwiperSlide className="slide-self">
                <Card2 />
            </SwiperSlide>
        </Swiper>
    </section >
}