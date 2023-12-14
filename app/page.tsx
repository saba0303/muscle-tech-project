import Hero from "@/components/banner/Hero"
import NitroTechBanner from "@/components/banner/NitroTechBanner"
import Bestsellers from "@/components/products/Bestsellers"
import HeroSlider from "@/components/slider/HeroSlider"
import Providers from "@/components/wrapper/Wrapper"
import ExploreSlider from "@/components/slider/ExploreSlider"
import HomeServices from "@/components/services/HomeServices"

const Home = () => {
  return <Providers>
    <Hero />
    <NitroTechBanner />
    <Bestsellers />
    <HeroSlider />
    <ExploreSlider />
    <HomeServices />
  </Providers >
}
export default Home