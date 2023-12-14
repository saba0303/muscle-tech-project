'use client'
import './nitrotech.scss'
import Image from 'next/image'
import banner from '../../public/images/muscle_nigga.jpg'
import { motion } from 'framer-motion'
export default function NitroTechBanner() {
    return <motion.div initial={{ opacity: 0, x: -200 }} whileInView={{ opacity: 1, x: 0, transition: { type: 'keyframes' } }} className="nitro-tech-banner">
        <div className='message'>
            <span>STACK3D PROTEIN WARS</span>
            <h1>IT'S THE FINAL ROUND!</h1>
            <p>Ahead of us is the biggest challenge yet - and we need your votes to win it all! Please head over to proteinwars.com to cast your vote for Nitro-Tech</p>
            <button>VOTE NITRO-TECH</button>
        </div>
        <Image src={banner} alt='muscle-man' width={450} height={550} />
    </motion.div>
}