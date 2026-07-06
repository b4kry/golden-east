import type { Metadata } from "next"
import { Products } from "@/components/sections/products"
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
    title: isArabic ? "المنتجات" : "Products",
    description: isArabic
      ? "تصفح منتجات جولدن إيست للتنمية الزراعية من الأسمدة والمغذيات الزراعية المتخصصة."
      : "Browse Golden East Agricultural Development's catalog of specialty fertilizers and plant nutrition products.",
    alternates: {
      canonical: `https://goldeneast-agri.com/${locale}/products`,
    },
    openGraph: {
      title: `${isArabic ? "المنتجات" : "Products"} | ${isArabic ? company.nameAr : company.nameEn}`,
      description: isArabic
        ? "تصفح منتجاتنا من الأسمدة والمغذيات الزراعية."
        : "Browse our catalog of agricultural fertilizers and plant nutrition solutions.",
    },
  }
}

export default async function ProductsPage() {
  return (
    <div className="pt-8">
      <Products />
    </div>
  )
}
