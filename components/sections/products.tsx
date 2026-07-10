import { Section, SectionHeader } from "@/components/layout/section"
import { ProductsCarousel } from "./products-carousel"
import { products } from "@/data/products"
import { sortProducts } from "@/lib/sort"
import { getDictionary, isLocale, defaultLocale } from "@/lib/i18n"

const featured = sortProducts(products).filter((p) => p.featured && p.status === "active")

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
      <div className="mt-16">
        <ProductsCarousel products={featured} dict={dict} locale={resolvedLocale} />
      </div>
    </Section>
  )
}

export { Products }
