import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { getDictionary, isLocale, SITE_URL } from "@/lib/i18n"
import { products } from "@/data/products"
import { company } from "@/data/company"
import { Container } from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import { QuoteButton } from "@/components/quote/quote-button"

export async function generateStaticParams() {
  const params: Array<{ locale: string; slug: string }> = []
  for (const locale of ["en", "ar"] as const) {
    for (const product of products) {
      if (product.status === "active") {
        params.push({ locale, slug: product.slug })
      }
    }
  }
  return params
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  if (!isLocale(locale)) return {}

  const product = products.find((p) => p.slug === slug)
  if (!product) return {}

  const isArabic = locale === "ar"
  const name = isArabic ? product.nameAr : product.nameEn
  const description = isArabic
    ? product.shortDescriptionAr
    : product.shortDescriptionEn
  const seoTitle = product.seo?.[isArabic ? "titleAr" : "titleEn"]
  const seoDesc = product.seo?.[isArabic ? "descriptionAr" : "descriptionEn"]
  const metaTitle = `${seoTitle || name} | ${isArabic ? company.nameAr : company.nameEn}`
  const metaDesc = seoDesc || description
  const keywords = (isArabic && product.tagsAr ? product.tagsAr : product.tags)?.join(", ") || product.category

  return {
    title: metaTitle,
    description: metaDesc,
    keywords,
    robots: {
      index: true,
      follow: true,
    },
    authors: [{ name: company.nameEn }],
    creator: company.nameEn,
    publisher: company.nameEn,
    alternates: {
      canonical: `${SITE_URL}/${locale}/products/${product.slug}`,
      languages: {
        en: `${SITE_URL}/en/products/${product.slug}`,
        ar: `${SITE_URL}/ar/products/${product.slug}`,
      },
    },
    openGraph: {
      title: metaTitle,
      description: metaDesc,
      url: `${SITE_URL}/${locale}/products/${product.slug}`,
      siteName: isArabic ? company.nameAr : company.nameEn,
      locale: locale === "ar" ? "ar_EG" : "en_US",
      alternateLocale: locale === "ar" ? ["en_US"] : ["ar_EG"],
      type: "website",
      images: [
        {
          url: `${SITE_URL}${product.images.cover}`,
          width: 1200,
          height: 800,
          alt: name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDesc,
      images: [`${SITE_URL}${product.images.cover}`],
    },
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params

  if (!isLocale(locale)) {
    throw new Error(`Unsupported locale: ${locale}`)
  }

  const dict = await getDictionary(locale)
  const product = products.find((p) => p.slug === slug)

  if (!product) notFound()

  const isArabic = locale === "ar"
  const name = isArabic ? product.nameAr : product.nameEn
  const description = isArabic
    ? product.shortDescriptionAr
    : product.shortDescriptionEn
  const crops = isArabic ? product.suitableCrops : (product.suitableCropsEn ?? product.suitableCrops)
  const benefits = isArabic ? product.benefits : (product.benefitsEn ?? product.benefits)
  const applicationRate = isArabic ? product.applicationRate : (product.applicationRateEn ?? product.applicationRate)
  const packaging = isArabic ? product.packaging : (product.packagingEn ?? product.packaging)
  const category = isArabic && product.categoryAr ? product.categoryAr : product.category

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    category: product.category,
    image: `${SITE_URL}${product.images.cover}`,
    brand: {
      "@type": "Organization",
      name: company.nameEn,
    },
    manufacturer: {
      "@type": "Organization",
      name: company.nameEn,
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      price: "0",
      priceCurrency: "EGP",
      url: `${SITE_URL}/${locale}/products/${product.slug}`,
    },
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: isArabic ? "الرئيسية" : "Home", item: `${SITE_URL}/${locale}` },
      { "@type": "ListItem", position: 2, name: isArabic ? "منتجاتنا" : "Products", item: `${SITE_URL}/${locale}/products` },
      { "@type": "ListItem", position: 3, name, item: `${SITE_URL}/${locale}/products/${product.slug}` },
    ],
  }

  return (
    <Container className="py-16 sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Link
        href={`/${locale}/products`}
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4 rtl-flip" aria-hidden="true" />
        {dict.productDetail.backToProducts}
      </Link>

      <div className="grid gap-12 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary/80 shadow-card">
          <Image
            src={product.images.cover}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="flex flex-col gap-6">
          <span className="self-start rounded-full bg-primary-light/20 px-3 py-1 text-xs font-medium text-primary">
            {category}
          </span>

          <h1 className="text-[1.75rem] font-bold leading-[1.15] tracking-[-0.02em] sm:text-[2.625rem]">
            {name}
          </h1>

          <p className="text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>

          {product.composition.length > 0 && (
            <div>
              <h2 className="mb-3 text-sm font-semibold text-foreground">
                {dict.products.composition}
              </h2>
              <div className="flex flex-wrap gap-2" role="list" aria-label={dict.products.composition}>
                {product.composition.map((item) => (
                  <span
                    key={item.name}
                    className="rounded-xl border border-border/60 bg-surface-alt px-3 py-1 text-sm font-medium text-muted-foreground"
                    role="listitem"
                  >
                    {isArabic && item.nameAr ? item.nameAr : item.name} {item.value}
                  </span>
                ))}
              </div>
            </div>
          )}

          {benefits.length > 0 && (
            <div>
              <h2 className="mb-3 text-sm font-semibold text-foreground">
                {dict.products.keyBenefits}
              </h2>
              <ul className="space-y-2">
                {benefits.map((benefit, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {crops.length > 0 && (
            <div>
              <h2 className="mb-3 text-sm font-semibold text-foreground">
                {dict.products.suitableCrops}
              </h2>
              <div className="flex flex-wrap gap-2">
                {crops.map((crop) => (
                  <span
                    key={crop}
                    className="rounded-xl bg-primary-light/20 px-3 py-1 text-sm font-medium text-primary"
                  >
                    {crop}
                  </span>
                ))}
              </div>
            </div>
          )}

          {applicationRate && (
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">
                {dict.products.application}:
              </span>{" "}
              {applicationRate}
            </p>
          )}

          {packaging && (
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">
                {dict.productDetail.packaging}:
              </span>{" "}
              {packaging}
            </p>
          )}

          <div className="mt-4 flex flex-wrap gap-4">
            <QuoteButton product={product} label={dict.products.addToQuote} toastMessage={dict.quote.added} />
            {product.images.brochure && (
              <Button variant="outline" asChild>
                <a
                  href={product.images.brochure}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {dict.productDetail.brochure}
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </Container>
  )
}
