'use client'
import Image from "next/image";
import hero from '../../public/images/hero.jpg'
import BannerAdvert from "./Advert";
import './hero.scss'
import { motion } from 'framer-motion'
export default function Hero() {
    return <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="main-banner">
        <Image src={hero} width={1000} height={800} alt="banner-img" priority={true} />
        <BannerAdvert />
    </motion.div>
}