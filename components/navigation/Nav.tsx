'use client'
import './nav.scss'
import { useWindowSize } from '@uidotdev/usehooks'
import Dropdown from '../shopDropdown/Dropdown'
import Link from "next/link"
import Logo from './Logo'
import NavActions from './NavActions'
import { useState } from 'react'
import { motion } from 'framer-motion'
export default function Nav() {
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const { width } = useWindowSize()
    return <motion.nav initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "keyframes" }} className='nav' >
        <Logo />
        <ul className='nav-links'>
            <li onMouseLeave={() => setIsVisible(false)} >
                <Link href='/collections/products' id='shop' onMouseEnter={() => setIsVisible(true)}>SHOP</Link>

            </li>
            <li>
                <Link href='/team'>TEAM MUSCLETECH</Link>
            </li>

        </ul>
        <NavActions />
        <Dropdown isVisible={isVisible} setVisibility={setIsVisible} />

    </motion.nav>

}