import { Cairo, Manrope } from "next/font/google"
import type { Metadata } from "next"
import "@/app/globals.css"
import { locales, isLocale, getDictionary, SITE_URL } from "@/lib/i18n"
import { company, about } from "@/data/company"
import { LocaleProvider } from "@/contexts/locale-context"
import { QuoteProvider } from "@/contexts/quote-context"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/shared/whatsapp-button"
import { ToastProvider } from "@/components/ui/toast"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { GoogleAnalytics } from "@next/third-parties/google"
import { CookieBanner } from "@/components/shared/cookie-banner"
import { PageViewTracker } from "@/components/shared/page-view-tracker"

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ""

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
    metadataBase: new URL(SITE_URL),
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
      isArabic ? "أسمدة متخصصة" : "",
      isArabic ? "تنمية زراعية" : "",
    ].filter(Boolean),
    authors: [{ name: company.nameEn }],
    creator: company.nameEn,
    publisher: company.nameEn,
    robots: {
      index: true,
      follow: true,
    },
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

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.nameEn,
    alternateName: company.nameAr,
    url: SITE_URL,
    logo: `${SITE_URL}/brand/logo.svg`,
    description: company.descriptionEn,
    foundingDate: "2016",
    mission: about.missionEn,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.location.address,
      addressLocality: company.location.city,
      addressCountry: company.location.country,
    },
    contactPoint: [
      { "@type": "ContactPoint", contactType: "customer support", telephone: "", email: "support@golden-east.com", availableLanguage: ["English", "Arabic"] },
      { "@type": "ContactPoint", contactType: "sales", email: "sales@golden-east.com", availableLanguage: ["English", "Arabic"] },
      { "@type": "ContactPoint", contactType: "general contact", email: "info@golden-east.com", availableLanguage: ["English", "Arabic"] },
    ],
    knowsLanguage: ["en", "ar"],
    keywords: "agricultural fertilizers, plant nutrition, Egypt agriculture",
  }

  const consentDefaults = {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    wait_for_update: 500,
  }

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: isArabic ? company.nameAr : company.nameEn,
    url: `${SITE_URL}/${locale}`,
    description: isArabic ? company.descriptionAr : company.descriptionEn,
    inLanguage: isArabic ? "ar" : "en",
    publisher: {
      "@type": "Organization",
      name: company.nameEn,
      logo: `${SITE_URL}/brand/logo.svg`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/${locale}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }

  const fontVariable = isArabic ? cairo.variable : manrope.variable

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${fontVariable} h-full antialiased`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          id="google-consent-defaults"
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', ${JSON.stringify(consentDefaults)});
`,
          }}
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
            <ToastProvider rtl={isArabic}>
              <Navbar dict={dict} />
              <main id="main-content" className="flex-1">
                {children}
              </main>
              <Footer dict={dict} locale={locale} />
              <WhatsAppButton />
              <Analytics />
              <SpeedInsights />
              {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
              <PageViewTracker />
              <CookieBanner />
            </ToastProvider>
          </QuoteProvider>
        </LocaleProvider>
      </body>
    </html>
  )
}
