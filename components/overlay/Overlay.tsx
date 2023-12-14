'use client'
import { motion } from 'framer-motion'
import { useLockBodyScroll } from '@uidotdev/usehooks'
import './overlay.scss'
import { Dispatch, SetStateAction, } from 'react'

interface Props {
    closer: Dispatch<SetStateAction<boolean>>
}

export default function Overlay({ closer }: Props) {
    useLockBodyScroll()
    return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} id="overlay" onClick={() => closer(false)}>

    </motion.div>
}