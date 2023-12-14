export interface FAQ {
    q: string
    a: string
}
export interface Ingredient {
    mass: string
    name: string
    description: string
}
export type Goals = 'muscle-build' | 'lose-weight' | 'general-wellness'
export type Categories = 'protein' | 'creatine' | 'vitamin' | 'pre-workout'
export interface Product {
    id: string
    category: Categories
    description: string | false
    factImage: string
    faqs: FAQ[]
    goal: Goals
    images: string[]
    ingredients: Ingredient[]
    name: string
    price: number
    review: string | false
    rating: number
    onSale: boolean
    bestseller: boolean
}