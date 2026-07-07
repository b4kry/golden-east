import type { Metadata } from "next"
import { About } from "@/components/sections/about"
import { locales, isLocale, SITE_URL } from "@/lib/i18n"
import { company, about as aboutData } from "@/data/company"

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
  const description = isArabic
    ? "تعرف على جولدن إيست للتنمية الزراعية ورسالتها ورؤيتها في تقديم حلول تغذية النبات المتطورة."
    : "Learn about Golden East Agricultural Development's mission, vision, and commitment to plant nutrition solutions."
  const title = `${isArabic ? "من نحن" : "About Us"} | ${name}`

  return {
    title,
    description,
    keywords: [
      "About Golden East",
      "Company Mission",
      "Agricultural Development Egypt",
      "Plant Nutrition Company",
      isArabic ? "من نحن" : "",
      isArabic ? "جولدن إيست" : "",
      isArabic ? "رسالتنا" : "",
      isArabic ? "رؤيتنا" : "",
    ].filter(Boolean),
    robots: {
      index: true,
      follow: true,
    },
    authors: [{ name: company.nameEn }],
    creator: company.nameEn,
    publisher: company.nameEn,
    alternates: {
      canonical: `${SITE_URL}/${locale}/about`,
      languages: {
        en: `${SITE_URL}/en/about`,
        ar: `${SITE_URL}/ar/about`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${locale}/about`,
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

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const isArabic = locale === "ar"
  const name = isArabic ? company.nameAr : company.nameEn

  const aboutPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: isArabic ? "من نحن" : "About Us",
    description: isArabic
      ? "تعرف على جولدن إيست للتنمية الزراعية - شركة مصرية رائدة في حلول تغذية النبات."
      : "Learn about Golden East Agricultural Development - an Egyptian leader in plant nutrition solutions.",
    url: `${SITE_URL}/${locale}/about`,
    mainEntity: {
      "@type": "Organization",
      name: name,
      description: isArabic ? company.descriptionAr : company.descriptionEn,
      foundingDate: "2016",
      mission: isArabic ? aboutData.missionAr : aboutData.missionEn,
      vision: isArabic ? aboutData.visionAr : aboutData.visionEn,
    },
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: isArabic ? "الرئيسية" : "Home", item: `${SITE_URL}/${locale}` },
      { "@type": "ListItem", position: 2, name: isArabic ? "من نحن" : "About Us", item: `${SITE_URL}/${locale}/about` },
    ],
  }

  return (
    <div className="pt-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <About locale={locale} />
    </div>
  )
}
