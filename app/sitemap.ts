import type { MetadataRoute } from "next"
import { locales } from "@/lib/i18n"
import { products } from "@/data/products"

const baseUrl = "https://goldeneast-agri.com"

const staticRoutes = ["", "/about", "/products", "/contact", "/quote"] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  for (const locale of locales) {
    for (const route of staticRoutes) {
      entries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: route === "" ? 1.0 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${baseUrl}/${l}${route}`]),
          ),
        },
      })
    }

    for (const product of products) {
      if (product.status !== "active") continue
      entries.push({
        url: `${baseUrl}/${locale}/products/${product.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.6,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${baseUrl}/${l}/products/${product.slug}`]),
          ),
        },
      })
    }
  }

  return entries
}
