import type { Metadata } from "next"
import { About } from "@/components/sections/about"
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

  return {
    title: isArabic ? "من نحن" : "About",
    description: isArabic
      ? "تعرف على جولدن إيست للتنمية الزراعية ورسالتها ورؤيتها في تقديم حلول تغذية النبات."
      : "Learn about Golden East Agricultural Development's mission, vision, and commitment to plant nutrition solutions.",
    alternates: {
      canonical: `https://goldeneast-agri.com/${locale}/about`,
    },
    openGraph: {
      title: `${isArabic ? "من نحن" : "About"} | ${isArabic ? company.nameAr : company.nameEn}`,
      description: isArabic
        ? "تعرف على جولدن إيست للتنمية الزراعية ورسالتها ورؤيتها."
        : "Learn about Golden East Agricultural Development's mission and vision.",
    },
  }
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  return (
    <div className="pt-8">
      <About locale={locale} />
    </div>
  )
}
