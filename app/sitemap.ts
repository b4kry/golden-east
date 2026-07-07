import type { MetadataRoute } from "next"
import { locales, SITE_URL } from "@/lib/i18n"
import { products } from "@/data/products"

const staticRoutes = [
  { path: "", priority: 1.0, changeFreq: "monthly" as const },
  { path: "/about", priority: 0.8, changeFreq: "monthly" as const },
  { path: "/products", priority: 0.9, changeFreq: "weekly" as const },
  { path: "/contact", priority: 0.7, changeFreq: "monthly" as const },
  { path: "/quote", priority: 0.6, changeFreq: "monthly" as const },
  { path: "/privacy", priority: 0.3, changeFreq: "yearly" as const },
  { path: "/terms", priority: 0.3, changeFreq: "yearly" as const },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  for (const locale of locales) {
    for (const route of staticRoutes) {
      entries.push({
        url: `${SITE_URL}/${locale}${route.path}`,
        lastModified: new Date(),
        changeFrequency: route.changeFreq,
        priority: route.priority,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${SITE_URL}/${l}${route.path}`]),
          ),
        },
      })
    }

    for (const product of products) {
      if (product.status !== "active") continue
      entries.push({
        url: `${SITE_URL}/${locale}/products/${product.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.6,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${SITE_URL}/${l}/products/${product.slug}`]),
          ),
        },
      })
    }
  }

  return entries
}
