'use client'
import Image from "next/image";
import logo from '../../public/images/logo.png'
import { useRouter } from "next/navigation";
export default function Logo() {
    const router = useRouter()
    const navigate = () => {
        router.push('/')
    }
    return <Image onClick={navigate} src={logo} width={130} height={80} alt="m-m-logo" className='logo' />
}