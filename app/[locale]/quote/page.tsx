import type { Metadata } from "next"
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"
import { getDictionary, locales, isLocale, SITE_URL } from "@/lib/i18n"
import { company } from "@/data/company"
import { Container } from "@/components/layout/container"
import { QuoteCart } from "@/components/quote/quote-cart"

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
  const title = `${isArabic ? "اطلب عرض سعر" : "Quote Request"} | ${name}`
  const description = isArabic
    ? "أرسل طلب عرض سعر لمنتجات جولدن إيست للتنمية الزراعية."
    : "Submit a quote request for Golden East Agricultural Development products."

  return {
    title,
    description,
    keywords: [
      "Quote Request",
      "Fertilizer Quote",
      "Agricultural Products Quote",
      isArabic ? "طلب عرض سعر" : "",
      isArabic ? "جولدن إيست" : "",
      isArabic ? "أسعار الأسمدة" : "",
    ].filter(Boolean),
    robots: {
      index: true,
      follow: true,
    },
    authors: [{ name: company.nameEn }],
    creator: company.nameEn,
    publisher: company.nameEn,
    alternates: {
      canonical: `${SITE_URL}/${locale}/quote`,
      languages: {
        en: `${SITE_URL}/en/quote`,
        ar: `${SITE_URL}/ar/quote`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${locale}/quote`,
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

export default async function QuotePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!isLocale(locale)) {
    throw new Error(`Unsupported locale: ${locale}`)
  }

  const dict = await getDictionary(locale)
  const socialLinks = company.social as Record<string, string>
  const isArabic = locale === "ar"

  const socialItems: Array<{
    label: string
    href: string
    icon: "whatsapp" | "facebook" | "instagram"
  }> = [
    ...(socialLinks.whatsapp
      ? [{ label: dict.social.whatsapp, href: socialLinks.whatsapp, icon: "whatsapp" as const }]
      : []),
    ...(socialLinks.facebook
      ? [{ label: dict.social.facebook, href: socialLinks.facebook, icon: "facebook" as const }]
      : []),
    ...(socialLinks.instagram
      ? [{ label: dict.social.instagram, href: socialLinks.instagram, icon: "instagram" as const }]
      : []),
  ]

  const socialIconMap: Record<string, React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>> = {
    whatsapp: FaWhatsapp,
    facebook: FaFacebook,
    instagram: FaInstagram,
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: isArabic ? "الرئيسية" : "Home", item: `${SITE_URL}/${locale}` },
      { "@type": "ListItem", position: 2, name: isArabic ? "اطلب عرض سعر" : "Quote Request", item: `${SITE_URL}/${locale}/quote` },
    ],
  }

  return (
    <Container className="py-16 sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold leading-tight tracking-[-0.02em] sm:text-[2.625rem]">
          {dict.quote.title}
        </h1>
        <div className="mt-12">
          <QuoteCart locale={locale} dict={dict} />
        </div>

        {socialItems.length > 0 && (
          <div className="mt-16 rounded-2xl border border-border/50 bg-card p-8 shadow-card">
            <p className="mb-5 text-center text-sm font-medium text-muted-foreground">
              {dict.social.followUs}
            </p>
            <div className="flex justify-center gap-4">
              {socialItems.map((item) => {
                const Icon = socialIconMap[item.icon]
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-border/60 px-5 py-3 text-sm font-medium text-foreground transition-all duration-200 hover:border-primary/20 hover:bg-primary/5 hover:shadow-card-hover"
                  >
                    <Icon className="size-5" aria-hidden={true} />
                    {item.label}
                  </a>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </Container>
  )
}
