import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"

import { Container } from "@/components/layout/container"
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"
import { Separator } from "@/components/ui/separator"
import { Small } from "@/components/ui/typography"
import { company } from "@/data/company"
import { navigation } from "@/data/navigation"
import type { Dictionary } from "@/lib/i18n"

function Footer({ dict, locale }: { dict: Dictionary; locale: string }) {
  const currentYear = new Date().getFullYear()
  const socialLinks = company.social as Record<string, string>
  const isArabic = locale === "ar"

  const navItems = navigation.map((item) => ({
    ...item,
    label: dict.nav[item.id as keyof typeof dict.nav] || item.label,
  }))

  return (
    <footer className="border-t border-border/40" role="contentinfo" aria-label={dict.footer.navigation}>
      <Container className="py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href={`/${locale}`} className="inline-block">
              <Image
                src="/brand/logo.svg"
                alt={isArabic ? company.nameAr : company.nameEn}
                width={160}
                height={40}
                className="h-10 w-auto"
                unoptimized
              />
            </Link>
            <Small className="text-muted-foreground leading-relaxed">
              {isArabic ? company.descriptionAr : company.descriptionEn}
            </Small>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">{dict.footer.navigation}</h3>
            <nav className="flex flex-col gap-2.5" aria-label={dict.footer.navigation}>
              {navItems.map((item) => {
                const href =
                  item.href === "/"
                    ? `/${locale}`
                    : `/${locale}${item.href}`
                return (
                  <Link
                    key={item.href}
                    href={href}
                    className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">{dict.footer.contact}</h3>
            <address className="space-y-3 text-sm not-italic text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <span>
                  {company.location.address}
                  <br />
                  {company.location.city}, {company.location.country}
                </span>
              </div>
              {company.phones[0] && (
                <div className="flex items-center gap-2">
                  <Phone className="size-4 shrink-0" aria-hidden="true" />
                  <a
                    href={`tel:${company.phones[0]}`}
                    className="transition-colors duration-200 hover:text-foreground"
                  >
                    {company.phones[0]}
                  </a>
                </div>
              )}
              {company.email && (
                <div className="flex items-center gap-2">
                  <Mail className="size-4 shrink-0" aria-hidden="true" />
                  <a
                    href={`mailto:${company.email}`}
                    className="transition-colors duration-200 hover:text-foreground"
                  >
                    {company.email}
                  </a>
                </div>
              )}
            </address>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">{dict.footer.followUs}</h3>
            <div className="flex flex-col gap-3">
              {socialLinks.whatsapp && (
                <a
                  href={socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-primary"
                >
                  <FaWhatsapp className="size-4" aria-hidden={true} />
                  {dict.social.whatsapp}
                </a>
              )}
              {socialLinks.facebook && (
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-primary"
                >
                  <FaFacebook className="size-4" aria-hidden={true} />
                  {dict.social.facebook}
                </a>
              )}
              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-primary"
                >
                  <FaInstagram className="size-4" aria-hidden={true} />
                  {dict.social.instagram}
                </a>
              )}
            </div>
          </div>
        </div>

        <Separator className="my-10" />

        <Small className="block text-center text-muted-foreground">
          &copy; {currentYear} {isArabic ? company.nameAr : company.nameEn}. {dict.footer.copyright}
        </Small>
      </Container>
    </footer>
  )
}

export { Footer }
