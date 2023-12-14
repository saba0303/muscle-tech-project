'use client'
import './filter-types.scss'
import { useParams } from 'next/navigation'
import Link from 'next/link'

const ByCategory = () => {
    const { category } = useParams()

    return <>
        <div className='filter-box-container'>
            <input type='radio' id='protein' value='protein' name='category' checked={category === 'protein'} />
            <Link href='/collections/protein' scroll={false}>Protein</Link>
        </div>
        <div className='filter-box-container'>
            <input type='radio' id='creatine' value='creatine' name='category' checked={category === 'creatine'} />
            <Link href='/collections/creatine' scroll={false}>Creatine</Link>
        </div>
        <div className='filter-box-container'>
            <input type='radio' id='pre-workout' value='pre-workout' name='category' checked={category === 'pre-workout'} />
            <Link href='/collections/pre-workout' scroll={false}>Pre-workout </Link>
        </div>
        <div className='filter-box-container'>
            <input type='radio' id='vitamin' value='vitamin' name='category' checked={category === 'vitamins'} />
            <Link href='/collections/vitamins' scroll={false}>Vitamin</Link>
        </div>
    </>
}

export default ByCategory