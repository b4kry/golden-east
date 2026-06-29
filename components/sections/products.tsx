import { Section, SectionHeader } from "@/components/sections/section"
import { ProductCard } from "@/components/shared/product-card"
import { featuredProducts } from "@/data/products"

function Products() {
  return (
    <Section>
      <SectionHeader
        label="Products"
        title="Featured Products"
        description="Explore our selection of premium agricultural products, cultivated with care and delivered to markets around the world."
      />
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Section>
  )
}

export { Products }
