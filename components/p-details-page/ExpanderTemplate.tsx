'use client'
import type { Dispatch, PropsWithChildren, SetStateAction } from "react";
import type { Detail } from "./OtherDetails";
import './expandTempl.scss'
import expand from '../../public/icons/down-arrow.png'
import Image from "next/image";
import { motion } from 'framer-motion'
export default function ExpanderTemplate(props: PropsWithChildren<{ id: Detail | null, title: string, expander: Dispatch<SetStateAction<Detail | null>> }>) {
    return <motion.section layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="expander-container">
        <motion.div onClick={() => props.expander((prev) => { if (prev === props.id) { return null } return props.id })} layout className="template-header">
            <span>{props.title}</span>
            <Image src={expand} alt="arrow-down" width={30} height={30} />
        </motion.div>
        {props.children}
    </motion.section>
}