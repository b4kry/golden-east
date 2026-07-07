import type { Metadata } from "next"
import { Section, SectionHeader } from "@/components/layout/section"
import { ProductCard } from "@/components/shared/product-card"
import { products } from "@/data/products"
import { locales, isLocale, getDictionary, SITE_URL } from "@/lib/i18n"
import { company } from "@/data/company"

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}

  const isArabic = locale === "ar"
  const name = isArabic ? company.nameAr : company.nameEn
  const title = `${isArabic ? "منتجاتنا" : "Products"} | ${name}`
  const description = isArabic
    ? "تصفح تشكيلة جولدن إيست للتنمية الزراعية من الأسمدة المتخصصة ومحسنات التربة والحلول الغذائية المتكاملة."
    : "Browse Golden East Agricultural Development's catalog of specialty fertilizers and plant nutrition products."

  return {
    title,
    description,
    keywords: [
      "Agricultural Products",
      "Fertilizers Catalog",
      "Plant Nutrition Products",
      "Egypt Fertilizers",
      "Calcium Fertilizer",
      "NPK Fertilizer",
      isArabic ? "منتجات زراعية" : "",
      isArabic ? "أسمدة" : "",
      isArabic ? "تغذية النبات" : "",
    ].filter(Boolean),
    robots: {
      index: true,
      follow: true,
    },
    authors: [{ name: company.nameEn }],
    creator: company.nameEn,
    publisher: company.nameEn,
    alternates: {
      canonical: `${SITE_URL}/${locale}/products`,
      languages: {
        en: `${SITE_URL}/en/products`,
        ar: `${SITE_URL}/ar/products`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${locale}/products`,
      siteName: isArabic ? company.nameAr : company.nameEn,
      locale: locale === "ar" ? "ar_EG" : "en_US",
      alternateLocale: locale === "ar" ? ["en_US"] : ["ar_EG"],
      type: "website",
      images: [
        {
          url: `${SITE_URL}/opengraph-image.png`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}/opengraph-image.png`],
    },
  }
}

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) return null

  const dict = await getDictionary(locale)
  const activeProducts = products.filter((p) => p.status === "active")
  const isArabic = locale === "ar"

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: isArabic ? "الرئيسية" : "Home", item: `${SITE_URL}/${locale}` },
      { "@type": "ListItem", position: 2, name: isArabic ? "منتجاتنا" : "Products", item: `${SITE_URL}/${locale}/products` },
    ],
  }

  if (activeProducts.length === 0) {
    return (
      <Section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <SectionHeader title={dict.products.noProducts} />
      </Section>
    )
  }

  return (
    <Section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <SectionHeader
        label={dict.products.title}
        title={dict.products.allProducts}
        description={dict.products.description}
      />
      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {activeProducts.map((product) => (
          <ProductCard key={product.id} product={product} dict={dict} />
        ))}
      </div>
    </Section>
  )
}
