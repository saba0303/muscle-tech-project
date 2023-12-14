import BestsellersSlider from "./BestsellersSlider"
import BestsellersHeader from "./BestsellersHeader"
import { getBestsellers } from "@/utils/fetchers"
import { Product } from "@/utils/types"
import './slider.scss'
export default async function Bestsellers() {
    const bestsellers = await getBestsellers() as Product[]
    return <div className="bestsellers-container">
        <BestsellersHeader />
        <BestsellersSlider bestsellers={bestsellers} />
    </div>
}


