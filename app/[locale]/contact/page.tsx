import type { Metadata } from "next"
import { Mail, MapPin } from "lucide-react"
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"
import { company } from "@/data/company"
import { locales, isLocale, getDictionary } from "@/lib/i18n"
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

  return {
    title: isArabic ? "اتصل بنا" : "Contact Us",
    description: isArabic
      ? "تواصل مع فريق جولدن إيست للتنمية الزراعية للاستفسارات وطلبات الأسعار."
      : "Get in touch with Golden East Agricultural Development for inquiries and quote requests.",
    alternates: {
      canonical: `https://goldeneast-agri.com/${locale}/contact`,
    },
    openGraph: {
      title: `${isArabic ? "اتصل بنا" : "Contact Us"} | ${isArabic ? company.nameAr : company.nameEn}`,
      description: isArabic
        ? "تواصل مع فريقنا للاستفسارات وطلبات الأسعار."
        : "Contact our team for inquiries and quote requests.",
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

  const contactCards = [
    {
      label: dict.contact.form.address || (isArabic ? "العنوان" : "Address"),
      value: `${company.location.address}, ${company.location.city}, ${company.location.country}`,
      icon: MapPin,
    },
    ...(company.email
      ? [{
          label: dict.contact.form.email || (isArabic ? "البريد الإلكتروني" : "Email"),
          value: company.email,
          icon: Mail,
          href: `mailto:${company.email}`,
        }]
      : []),
  ]

  const socialCards: Array<{
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
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold leading-tight tracking-[-0.02em] sm:text-[2.625rem]">
          {dict.contact.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {dict.contact.description}
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-5xl gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          {contactCards.map((card) => (
            <div key={card.label} className="rounded-2xl border border-border/50 bg-card p-6 shadow-card transition-shadow duration-200 hover:shadow-card-hover">
              <div className="flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary-light/20 text-primary">
                  <card.icon className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-foreground">{card.label}</h2>
                  {"href" in card && card.href ? (
                    <a href={card.href} className="mt-1 block text-sm leading-relaxed text-muted-foreground transition-colors hover:text-primary">
                      {card.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {card.value}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}

          {socialCards.length > 0 && (
            <div>
              <p className="mb-4 text-sm font-medium text-muted-foreground">
                {dict.social.followUs}
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {socialCards.map((card) => {
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
