'use client'
import { useState } from "react"
import Image from "next/image"
export type Detail = 'faq' | 'fact' | 'description'
import ExpanderTemplate from "./ExpanderTemplate"
import { motion } from 'framer-motion'
import type { FAQ } from "@/utils/types"
interface Props {
    description: string | false,
    faqs: FAQ[],
    fact: string
}
export default function OtherDetails({ description, faqs, fact }: Props) {
    const [detail, setDetail] = useState<Detail | null>(null)
    return <section className="more-details-container">
        {description && <ExpanderTemplate expander={setDetail} title='PRODUCT DESCRIPTION' id="description">
            {detail === 'description' && <motion.div className="more-detail-box">
                <p>{description}</p>
            </motion.div>}
        </ExpanderTemplate>}
        <ExpanderTemplate expander={setDetail} title='SUPPLEMENT FACT' id="fact">
            {detail === 'fact' && <motion.div className="more-detail-box">
                <Image src={fact} alt="fact-img" width={350} height={550} />
            </motion.div>}
        </ExpanderTemplate>
        <ExpanderTemplate expander={setDetail} title='FAQs' id="faq">
            {detail === 'faq' && <motion.div className="more-detail-box">
                {faqs.map(faq => <div key={faq.a.slice(1, 7)} className="faqs">
                    <h4>{faq.q}</h4>
                    <p>{faq.a}</p>
                </div>)}
            </motion.div>}
        </ExpanderTemplate>
    </section>
}