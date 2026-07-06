import type { Metadata } from "next"
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"
import { getDictionary, locales, isLocale } from "@/lib/i18n"
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

  return {
    title: isArabic ? "طلب عرض سعر" : "Quote Request",
    description: isArabic
      ? "أرسل طلب عرض سعر لمنتجات جولدن إيست للتنمية الزراعية."
      : "Submit a quote request for Golden East Agricultural Development products.",
    alternates: {
      canonical: `https://goldeneast-agri.com/${locale}/quote`,
    },
    openGraph: {
      title: `${isArabic ? "طلب عرض سعر" : "Quote Request"} | ${isArabic ? company.nameAr : company.nameEn}`,
      description: isArabic
        ? "أرسل طلب عرض سعر لمنتجاتنا."
        : "Submit a quote request for our products.",
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

  return (
    <Container className="py-16 sm:py-24">
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
