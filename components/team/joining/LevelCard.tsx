'use client'
import './level-card.scss'
import Image from 'next/image'
import { type ReactNode, useState } from "react"
import { motion } from 'framer-motion'
interface Props {
    image: any
    level: 'AMATEUR' | 'NOVICE' | 'ADVANCED' | 'MASTER' | 'PRO'
    children: ReactNode
}

export default function LevelCard({ image, level, children }: Props) {
    const [isExpanded, setIsExpanded] = useState<boolean>(false)
    function expander() {
        setIsExpanded(expanded => !expanded)
    }
    return <motion.div className='level-card' initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} style={{ backgroundImage: `url(${image})` }}>

        <Image src={image} alt='back-img' width={250} height={500} />
        <div className="card-overlay"></div>
        <motion.h2 layout>{level}</motion.h2>
        <motion.button layout onClick={expander}>{!isExpanded ? 'See more' : 'See less'}</motion.button>

        {isExpanded && children}
    </motion.div>
}