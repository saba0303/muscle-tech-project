'use client'
import { useWindowSize } from "@uidotdev/usehooks";
import { Product } from "@/utils/types"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import './slider.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Bestseller from "./Bestseller";

export default function BestsellersSlider({ bestsellers }: { bestsellers: Product[] }) {
    const { width } = useWindowSize()
    return <Swiper
        className="slider-container"
        spaceBetween={20}
        slidesPerView={width! < 1016 ? 1 : 4}
        modules={[Navigation, Pagination]}
        direction={width! < 1016 ? 'vertical' : 'horizontal'}
        navigation={true}
        pagination={{ clickable: true }}
    >

        {bestsellers.map(bestseller => <SwiperSlide className="slide" key={bestseller.name}>
            <Bestseller product={bestseller} />
        </SwiperSlide>)}
    </Swiper>

}