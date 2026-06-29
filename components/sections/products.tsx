import { Section, SectionHeader } from "@/components/sections/section"
import { ProductCard } from "@/components/shared/product-card"
import { products } from "@/data/products"

const featured = products.filter((p) => p.featured && p.status === "active")

function Products() {
  if (featured.length === 0) return null

  return (
    <Section>
      <SectionHeader
        label="Products"
        title="Featured Products"
        description="Explore our selection of premium agricultural inputs, formulated for maximum crop performance."
      />
      <div
        className={`mt-16 grid gap-6 ${
          featured.length === 1
            ? "sm:grid-cols-1 lg:grid-cols-1 max-w-md mx-auto"
            : "sm:grid-cols-2 lg:grid-cols-4"
        }`}
      >
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Section>
  )
}

export { Products }
