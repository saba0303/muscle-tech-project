import { createClient } from "@supabase/supabase-js"
import type { Goals, Product } from "./types"

import { type FiltersType } from "@/components/collections-page/products/Products"
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY
export const client = createClient(supabaseUrl as string, supabaseKey as string,)

// fetchers 

export async function getBestsellers() {
    const { data } = (await client.from('products').select('*'))
    return data!.map(item => item.products).filter(product => product.bestseller)

}
export async function getProductById(id: string) {
    const { data } = (await client.from('products').select('*'))
    const products = data!.map(item => item.products)
    return products.find(product => product.id === id)
}
// fetching helpers
export type Category = 'creatine' | 'protein' | 'pre-workout' | 'vitamins' | 'products'

export async function getAllProducts() {
    'use server'
    const { data } = (await client.from('products').select('*'))
    return data!.map(item => item.products)
}
const filterWithParams = (products: Product[]) => async (filter: FiltersType) => {
    if (filter.price && filter.goal) return products
        .filter(product => filter.goal.includes(product.goal))
        .filter(product => product.price <= +filter.price)
    else if (filter.goal) return products.filter(product => filter.goal.includes(product.goal))
    else if (filter.price) return products.filter(product => product.price <= +filter.price)
    return products
}

export async function getFilteredProducts(category: Category, filters: FiltersType) {
    'use server'
    const { data } = (await client.from('products').select('*'))
    if (category !== 'products') {
        const products = data!.map(item => item.products).filter(product => product.category === category)
        return await filterWithParams(products)(filters)
    } else {
        return await filterWithParams(await getAllProducts())(filters)
    }
}
export async function getByGoal(goal: Goals) {
    'use server'
    const { data } = (await client.from('products').select('*'))
    return data!.map(item => item.products).filter(product => product.goal === goal)
}

