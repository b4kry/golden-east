import type { Metadata } from "next"
import { MapPin } from "lucide-react"
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"
import { company } from "@/data/company"
import { locales, isLocale, getDictionary, SITE_URL } from "@/lib/i18n"
import { Container } from "@/components/layout/container"

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
  const title = `${isArabic ? "تواصل معنا" : "Contact Us"} | ${name}`
  const description = isArabic
    ? "تواصل مع فريق جولدن إيست للتنمية الزراعية للاستفسارات وطلبات الأسعار والدعم الفني."
    : "Get in touch with Golden East Agricultural Development for inquiries and quote requests."

  return {
    title,
    description,
    keywords: [
      "Contact Golden East",
      "Agricultural Inquiries",
      "Fertilizer Quotes Egypt",
      isArabic ? "اتصل بنا" : "",
      isArabic ? "جولدن إيست" : "",
      isArabic ? "تواصل" : "",
      isArabic ? "استفسارات زراعية" : "",
    ].filter(Boolean),
    robots: {
      index: true,
      follow: true,
    },
    authors: [{ name: company.nameEn }],
    creator: company.nameEn,
    publisher: company.nameEn,
    alternates: {
      canonical: `${SITE_URL}/${locale}/contact`,
      languages: {
        en: `${SITE_URL}/en/contact`,
        ar: `${SITE_URL}/ar/contact`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${locale}/contact`,
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

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) throw new Error(`Unsupported locale: ${locale}`)

  const dict = await getDictionary(locale)
  const isArabic = locale === "ar"
  const socialLinks = company.social as Record<string, string>

  const addressDisplay = isArabic
    ? [company.location.address, company.location.city, company.location.country]
    : [company.location.addressEn, company.location.cityEn, company.location.countryEn]

  const contactCards = [
    {
      label: dict.contact.form.address || (isArabic ? "العنوان" : "Address"),
      value: addressDisplay.join(", "),
      lines: addressDisplay,
      icon: MapPin,
    },
  ]

  const whatsappLink = socialLinks.whatsapp ? { label: dict.social.whatsapp, href: socialLinks.whatsapp } : null

  const secondarySocial: Array<{
    label: string
    href: string
    icon: "facebook" | "instagram"
  }> = [
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

  const introText = isArabic
    ? "نرحب بتواصلك معنا! اختر القناة المناسبة لك وسيقوم فريقنا بالرد في أقرب وقت."
    : "We'd love to hear from you. Choose your preferred channel and our team will respond promptly."

  const whatsappDescription = isArabic
    ? "للحصول على رد سريع، يمكنك التواصل معنا مباشرة عبر واتساب. فريقنا جاهز للرد على استفساراتك."
    : "For a quick response, reach out to us directly on WhatsApp. Our team is ready to help."

  const contactPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: isArabic ? "تواصل معنا" : "Contact Us",
    description: isArabic
      ? "تواصل مع جولدن إيست للتنمية الزراعية للاستفسارات وطلبات الأسعار."
      : "Contact Golden East Agricultural Development for inquiries and quote requests.",
    url: `${SITE_URL}/${locale}/contact`,
    mainEntity: {
      "@type": "Organization",
      name: isArabic ? company.nameAr : company.nameEn,
      address: {
        "@type": "PostalAddress",
        streetAddress: isArabic ? company.location.address : company.location.addressEn,
        addressLocality: isArabic ? company.location.city : company.location.cityEn,
        addressCountry: isArabic ? company.location.country : company.location.countryEn,
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          availableLanguage: ["English", "Arabic"],
        },
      ],
    },
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: isArabic ? "الرئيسية" : "Home", item: `${SITE_URL}/${locale}` },
      { "@type": "ListItem", position: 2, name: isArabic ? "تواصل معنا" : "Contact Us", item: `${SITE_URL}/${locale}/contact` },
    ],
  }

  return (
    <Container className="py-16 sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold leading-tight tracking-[-0.02em] sm:text-[2.625rem]">
          {dict.contact.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {dict.contact.description}
        </p>
      </div>

      <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-muted-foreground">
        {introText}
      </p>

      <div className="mx-auto mt-12 grid max-w-5xl gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          {whatsappLink && (
            <a
              href={whatsappLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 rounded-2xl border border-primary/20 bg-primary/5 p-6 shadow-card transition-all duration-200 hover:border-primary/40 hover:shadow-card-hover"
            >
              <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <FaWhatsapp className="size-6" />
              </div>
              <div>
                <h2 className="text-base font-semibold text-foreground">
                  {whatsappLink.label}
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {whatsappDescription}
                </p>
              </div>
            </a>
          )}

          {contactCards.map((card) => (
            <div key={card.label} className="rounded-2xl border border-border/50 bg-card p-6 shadow-card">
              <div className="flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary-light/20 text-primary">
                  <card.icon className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-foreground">{card.label}</h2>
                  <div className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {"lines" in card && card.lines ? (
                      (card as typeof card & { lines: string[] }).lines.map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < (card as typeof card & { lines: string[] }).lines.length - 1 && <br />}
                        </span>
                      ))
                    ) : (
                      <p>{card.value}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {secondarySocial.length > 0 && (
            <div>
              <p className="mb-4 text-sm font-medium text-muted-foreground">
                {isArabic ? "أو تابعنا على" : "Or follow us on"}
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {secondarySocial.map((card) => {
                  const Icon = socialIconMap[card.icon]
                  return (
                    <a
                      key={card.label}
                      href={card.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-2xl border border-border/50 bg-card p-5 shadow-card transition-all duration-200 hover:border-primary/20 hover:shadow-card-hover"
                    >
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-light/20 text-primary">
                        <Icon className="size-4" aria-hidden={true} />
                      </div>
                      <span className="text-sm font-medium text-foreground">{card.label}</span>
                    </a>
                  )
                })}
              </div>
            </div>
          )}
        </div>

        <form
          className="rounded-2xl border border-border/50 bg-card p-8 shadow-card"
          action="/api/contact"
          method="POST"
        >
          <div className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground">
                {dict.contact.form.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1.5 block w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground">
                {dict.contact.form.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1.5 block w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground">
                {dict.contact.form.phone}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="mt-1.5 block w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-foreground">
                {dict.contact.form.company}
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="mt-1.5 block w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground">
                {dict.contact.form.message}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1.5 block w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
              />
            </div>

            <button
              type="submit"
              className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-primary px-6 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-200 hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-ring/20"
            >
              {dict.contact.form.submit}
            </button>
          </div>
        </form>
      </div>
    </Container>
  )
}
