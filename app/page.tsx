import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Products } from "@/components/sections/products"
import { WhyChooseUs } from "@/components/sections/why-choose-us"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <WhyChooseUs />
    </>
  )
}
