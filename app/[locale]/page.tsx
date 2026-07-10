import type { Metadata } from "next"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { Cta } from "@/components/sections/cta"
import { locales, isLocale, SITE_URL } from "@/lib/i18n"
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
  const description = isArabic ? company.descriptionAr : company.descriptionEn
  const tagline = isArabic ? company.taglineAr : company.taglineEn
  const title = `${name} | ${tagline}`

  return {
    title,
    description,
    keywords: [
      "Golden East",
      "Agricultural Development",
      "Plant Nutrition",
      "Egypt Fertilizers",
      "Crop Nutrition Solutions",
      isArabic ? "جولدن إيست" : "",
      isArabic ? "تنمية زراعية" : "",
      isArabic ? "تغذية نبات" : "",
      isArabic ? "أسمدة" : "",
    ].filter(Boolean),
    robots: {
      index: true,
      follow: true,
    },
    authors: [{ name: company.nameEn }],
    creator: company.nameEn,
    publisher: company.nameEn,
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: {
        en: `${SITE_URL}/en`,
        ar: `${SITE_URL}/ar`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${locale}`,
      siteName: isArabic ? company.nameAr : company.nameEn,
      locale: locale === "ar" ? "ar_EG" : "en_US",
      alternateLocale: locale === "ar" ? ["en_US"] : ["ar_EG"],
      type: "website",
      images: [
        {
          url: `${SITE_URL}/opengraph-image.png`,
          width: 1200,
          height: 640,
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

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  return (
    <>
      <Hero locale={locale} />
      <About locale={locale} compact />
      <WhyChooseUs locale={locale} />
      <Cta locale={locale} />
    </>
  )
}
