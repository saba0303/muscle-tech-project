'use client'
import './image-slider.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image'
import { Navigation } from 'swiper/modules'
import { randomUUID } from 'crypto';

interface Props {
    images: string[]
}
export default function ImagesSlider({ images }: Props) {
    return <section
        className='images-slider-container'>
        <Swiper
            className='images-slider'
            slidesPerView={1}
            modules={[Navigation]}
            navigation={true}
            direction='vertical'
            draggable={false}
            scrollbar={true}
            loop={true}

        >
            {images.map(image => <SwiperSlide className='image-slide' key={image + Math.random()}>
                <Image src={image} alt='product-image' width={760} height={700} />
            </SwiperSlide>)}
        </Swiper>
    </section>
}