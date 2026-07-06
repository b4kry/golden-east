import { Cairo, Manrope } from "next/font/google"
import type { Metadata } from "next"
import "@/app/globals.css"
import { locales, isLocale, getDictionary } from "@/lib/i18n"
import { company, about } from "@/data/company"
import { LocaleProvider } from "@/contexts/locale-context"
import { QuoteProvider } from "@/contexts/quote-context"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/shared/whatsapp-button"

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700", "800"],
})

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

const siteUrl = "https://goldeneast-agri.com"

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
    title: {
      default: title,
      template: `%s | ${isArabic ? company.nameAr : company.nameEn}`,
    },
    description,
    keywords: [
      "Golden East",
      "Plant Nutrition",
      "Agricultural Fertilizers",
      "Specialty Fertilizers",
      "Crop Nutrition",
      "Egypt Agriculture",
      "Calcium Fertilizer",
      "Agricultural Development",
      isArabic ? "جولدن إيست" : "",
      isArabic ? "تغذية النبات" : "",
      isArabic ? "أسمدة زراعية" : "",
    ].filter(Boolean),
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: {
        en: `${siteUrl}/en`,
        ar: `${siteUrl}/ar`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}`,
      siteName: company.nameEn,
      locale: locale === "ar" ? "ar_EG" : "en_US",
      alternateLocale: locale === "ar" ? ["en_US"] : ["ar_EG"],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: [
        { url: "/brand/icon.svg", type: "image/svg+xml" },
      ],
      apple: [
        { url: "/brand/icon.svg" },
      ],
    },
    other: {
      "application-name": company.nameEn,
    },
  }
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!isLocale(locale)) {
    throw new Error(`Unsupported locale: ${locale}`)
  }

  const dir = locale === "ar" ? "rtl" : "ltr"
  const isArabic = locale === "ar"
  const dict = await getDictionary(locale)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.nameEn,
    alternateName: company.nameAr,
    url: siteUrl,
    logo: `${siteUrl}/brand/logo.svg`,
    description: company.descriptionEn,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.location.address,
      addressLocality: company.location.city,
      addressCountry: company.location.country,
    },
    knowsLanguage: ["en", "ar"],
    foundingDate: "2016",
    mission: about.missionEn,
    keywords: "agricultural fertilizers, plant nutrition, Egypt agriculture",
  }

  const fontVariable = isArabic ? cairo.variable : manrope.variable

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${fontVariable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-tooltip focus:rounded-lg focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-foreground focus:shadow-dropdown focus:outline-none focus:ring-2 focus:ring-ring"
        >
          {dict.nav.skipToContent}
        </a>
        <LocaleProvider locale={locale}>
          <QuoteProvider>
            <Navbar dict={dict} />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer dict={dict} locale={locale} />
            <WhatsAppButton />
          </QuoteProvider>
        </LocaleProvider>
      </body>
    </html>
  )
}
