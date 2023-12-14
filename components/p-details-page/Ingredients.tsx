import { type Ingredient } from "@/utils/types"
interface Props {
    ingredients: Ingredient[]
}
import './ingredients.scss'
export default function Ingredients({ ingredients }: Props) {
    return <div className="ingr-section">
        <h2>KEY INGREDIENTS</h2>
        <div className="ingrs">
            {ingredients.map((ingredient) => <div key={ingredient.name}>
                <h3>{ingredient.mass}</h3>
                <h4>{ingredient.name}</h4>
                <p>{ingredient.description}</p>
            </div>)}
        </div>
    </div>
}