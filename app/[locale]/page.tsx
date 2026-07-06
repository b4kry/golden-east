import type { Metadata } from "next"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Products } from "@/components/sections/products"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { locales, isLocale } from "@/lib/i18n"
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

  return {
    title: `${name} | ${tagline}`,
    description,
    alternates: {
      canonical: `https://goldeneast-agri.com/${locale}`,
    },
    openGraph: {
      title: `${name} | ${tagline}`,
      description,
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
      <About locale={locale} />
      <Products locale={locale} />
      <WhyChooseUs locale={locale} />
    </>
  )
}
