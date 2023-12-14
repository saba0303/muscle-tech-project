'use client'
import './footer.scss'
import { motion } from 'framer-motion'
import Link from "next/link"
import Image from 'next/image'
import ig from '@/public/icons/ig.png'
import fb from '@/public/icons/fb.png'
import yt from '@/public/icons/yt.png'
export default function Footer() {
    return <motion.footer className='footer' initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }}>
        <section>
            <div className="list">
                <ul className="products">
                    <h3>Products</h3>
                    <li><Link href='/collections/protein'>Protein</Link></li>
                    <li><Link href='/collections/creatine'>Creatine</Link></li>
                    <li><Link href='/collections/pre-workout'>Pre-workouts</Link></li>
                    <li><Link href='/collections/vitamins'>Vitamins & Supplements</Link></li>
                    <li><Link href='/collections/products?goal=muscle-build'>Muscle-Build</Link></li>
                    <li><Link href='/collections/products?goal=weight-loss'>Weight Loss</Link></li>
                    <li><Link href='/collections/products?goal=general-wellness'>General Wellness</Link></li>
                </ul>
            </div>
            <div className="list">

                <ul className="content">
                    <h3>Contents</h3>
                    <li>Products</li>
                    <li>Team</li>
                </ul>
            </div>
            <div className="list">

                <ul className="countries">
                    <h3>Countries</h3>
                    <li>USA</li>
                    <li>CANADA</li>
                    <li>GERMANY</li>
                    <li>GEORGIA</li>
                    <li>UK</li>
                    <li>SWEDEN</li>
                    <li>NORWAY</li>
                </ul>
            </div>
            <div className="list">

                <ul className="contact">
                    <h3>Contacts</h3>
                    <li><Image src={ig} width={30} height={30} alt='cont-icon' /></li>
                    <li><Image src={fb} width={30} height={30} alt='cont-icon' /></li>
                    <li><Image src={yt} width={30} height={30} alt='cont-icon' /></li>
                </ul>
            </div>
        </section>
        <div className='promotions'>
            <p>
                <b>*Promotion details:</b>
                Buy two products, and get the third product of equal or lesser value free. Select product only. Limited time only. Valid until December 31, 2023. Discount applied at checkout. Excludes bundles and subscription discounts. Cannot be combined with other offers. Limited time only.
            </p>
            <span>Copyright © 2023 If_Neccessary</span>


        </div>
    </motion.footer>
}