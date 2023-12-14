import Image from "next/image";
import service1 from '../../public/images/service1.jpg'
import service2 from '../../public/images/service2.jpg'
import service3 from '../../public/images/service3.jpg'
import './services.scss'
export default function Services() {
    return <div className="service-banner">
        <section id="services">
            <div className="service">
                <Image src={service1} alt="service-ico" width={50} height={50} />
                <div>
                    <h4>FAST SHIPPING</h4>
                    <span>2-3 DAYS</span>
                </div>
            </div>
            <div className="service">
                <Image src={service2} alt="service-ico" width={50} height={50} />
                <div>
                    <h4>RETURN POLICY</h4>
                    <span>30-DAY</span>
                </div>
            </div>
            <div className="service">
                <Image src={service3} alt="service-ico" width={50} height={50} />
                <div>
                    <h4>FREE SHIPPING</h4>
                    <span>ON $25+ ORDERS</span>
                </div>
            </div>
        </section>
    </div>
}