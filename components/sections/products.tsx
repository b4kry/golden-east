import { Section, SectionHeader } from "@/components/layout/section"
import { ProductCard } from "@/components/shared/product-card"
import { products } from "@/data/products"
import { getDictionary, isLocale, defaultLocale } from "@/lib/i18n"

const featured = products.filter((p) => p.featured && p.status === "active")

async function Products({ locale }: { locale?: string }) {
  const resolvedLocale =
    locale && isLocale(locale) ? locale : defaultLocale
  const dict = await getDictionary(resolvedLocale)

  if (featured.length === 0) return null

  return (
    <Section>
      <SectionHeader
        label={dict.products.title}
        title={dict.products.featuredTitle}
        description={dict.products.description}
      />
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} dict={dict} />
        ))}
      </div>
    </Section>
  )
}

export { Products }
