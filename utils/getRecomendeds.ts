'use server'
import { Goals, Product } from "./types"
import { getAllProducts } from "./fetchers"
export async function getRecomendedProducts(goals: Goals[], cartItems: (Product & { qty: number })[]) {
    const products = await getAllProducts()
    const validGoals: Goals[] = []
    for (let i = 0; i < goals.length; i++) {
        if (!validGoals.includes(goals[i])) {
            validGoals.push(goals[i])
        }
    }
    const allWithSameGoals: Product[] = products.filter((product) => validGoals.includes(product.goal))
    const recomendedProducts: Product[] = []
    for (let j = 0; j < allWithSameGoals.length; j++) {
        if (cartItems.every((item) => item.id !== allWithSameGoals[j].id)) {
            recomendedProducts.push(allWithSameGoals[j])
        }
    }
    return recomendedProducts
}