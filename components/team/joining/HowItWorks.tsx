'use client'
import Image from 'next/image'
import watch from '@/public/images/watch_750x750.png'
import { motion } from 'framer-motion'
export default function HowItWorks() {
    return <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} className='how-it-works'>
        <div>
            <h1>HOW IT WORKS</h1>
            <p>Earn competitive commissions, supplements, and swag by promoting the MuscleTech brand using your social influence, connections, clients, and friends, with your unique discount code.  Level-up your earnings and build your brand via motivational content and sales referrals. You’ll also get personal support from our team to help reach new levels.</p>
        </div>
        <Image src={watch} width={400} height={550} alt='watch' />
    </motion.div>
}