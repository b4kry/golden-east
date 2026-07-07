import Link from "next/link"
import Image from "next/image"
import { MapPin } from "lucide-react"

import { Container } from "@/components/layout/container"
import { FaFacebook, FaInstagram } from "react-icons/fa"
import { Small } from "@/components/ui/typography"
import { company } from "@/data/company"
import { navigation } from "@/data/navigation"
import type { Dictionary } from "@/lib/i18n"

function Footer({ dict, locale }: { dict: Dictionary; locale: string }) {
  const currentYear = new Date().getFullYear()
  const isArabic = locale === "ar"

  const navItems = navigation.map((item) => ({
    ...item,
    label: dict.nav[item.id as keyof typeof dict.nav] || item.label,
  }))

  return (
    <footer className="border-t border-border/10 bg-[#1A2E1A] text-white/80" role="contentinfo" aria-label={dict.footer.navigation}>
      <Container className="py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-5">
            <Link href={`/${locale}`} className="inline-block">
              <Image
                src="/brand/icon-white.svg"
                alt={isArabic ? company.nameAr : company.nameEn}
                width={50}
                height={40}
                unoptimized
              />
            </Link>
            <Small className="leading-relaxed text-white/60">
              {isArabic ? company.descriptionAr : company.descriptionEn}
            </Small>
          </div>

          <div className="space-y-5">
            <h3 className="text-sm font-semibold text-white/90">{dict.footer.navigation}</h3>
            <nav className="flex flex-col gap-3" aria-label={dict.footer.navigation}>
              {navItems.map((item) => {
                const href =
                  item.href === "/"
                    ? `/${locale}`
                    : `/${locale}${item.href}`
                return (
                  <Link
                    key={item.href}
                    href={href}
                    className="text-sm text-white/60 transition-colors duration-200 hover:text-white/90"
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>
          </div>

          <div className="space-y-5">
            <h3 className="text-sm font-semibold text-white/90">{dict.footer.address}</h3>
            <address className="space-y-3 text-sm not-italic text-white/60">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-white/40" aria-hidden="true" />
                <span>
                  {isArabic ? company.location.address : company.location.addressEn}
                  <br />
                  {isArabic ? company.location.city : company.location.cityEn}
                  <br />
                  {isArabic ? company.location.country : company.location.countryEn}
                </span>
              </div>
            </address>
          </div>

          <div className="space-y-5">
            <h3 className="text-sm font-semibold text-white/90">{dict.footer.followUs}</h3>
            <div className="flex flex-row flex-wrap items-center justify-center gap-x-4 gap-y-2 md:flex-col md:items-start md:justify-start md:gap-3">
              {[["facebook", FaFacebook, dict.social.facebook] as const, ["instagram", FaInstagram, dict.social.instagram] as const]
                .filter(([key]) => company.social[key as keyof typeof company.social])
                .map(([key, Icon, label]) => (
                  <a
                    key={key}
                    href={company.social[key as keyof typeof company.social] as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-white/60 transition-colors duration-200 hover:text-white/90"
                  >
                    <Icon className="size-4" aria-hidden={true} />
                    {label}
                  </a>
                ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <Small className="block text-center text-white/40">
            &copy; {currentYear} {isArabic ? company.nameAr : company.nameEn}. {dict.footer.copyright}
          </Small>
          <nav className="mt-3 flex items-center justify-center gap-4 text-sm text-white/40" aria-label={isArabic ? "روابط قانونية" : "Legal links"}>
            <Link href={`/${locale}/privacy`} className="transition-colors hover:text-white/70">{dict.legal.privacy}</Link>
            <span aria-hidden="true">·</span>
            <Link href={`/${locale}/terms`} className="transition-colors hover:text-white/70">{dict.legal.terms}</Link>
          </nav>
        </div>
      </Container>
    </footer>
  )
}

export { Footer }
