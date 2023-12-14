'use client'
import React from 'react'
import './advert.scss'
import Image from 'next/image'
import { motion } from 'framer-motion'
import ad1 from '@/public/images/muscle_nigga.jpg'
import ad2 from '@/public/images/sale2.png'
import ad3 from '@/public/images/hero.jpg'
export const AdvertBanners = () => {
    return <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className='adverts'>
        <Image src={ad1} width={430} height={550} alt='ad1' />
        <Image src={ad2} width={430} height={550} alt='ad2' />
        <Image src={ad3} width={430} height={550} alt='ad3' />
    </motion.div>
}
