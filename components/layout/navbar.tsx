"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { MenuIcon, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import { LocaleSwitcher } from "@/components/layout/locale-switcher"
import { cn } from "@/lib/utils"
import { navigation } from "@/data/navigation"
import { company } from "@/data/company"
import { useLocale } from "@/contexts/locale-context"
import { useQuote } from "@/contexts/quote-context"
import type { Dictionary } from "@/lib/i18n"

function Navbar({ dict }: { dict: Dictionary }) {
  const pathname = usePathname()
  const locale = useLocale()
  const { totalItems } = useQuote()

  const isArabic = locale === "ar"
  const socialLinks = company.social as Record<string, string>

  const navItems = navigation.map((item) => ({
    ...item,
    label: dict.nav[item.id as keyof typeof dict.nav] || item.label,
  }))

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href={`/${locale}`}
            className="flex items-center"
            aria-label={isArabic ? company.nameAr : company.nameEn}
          >
            <Image
              src="/brand/navbar.svg"
              alt={isArabic ? company.nameAr : company.nameEn}
              width={160}
              height={32}
              className="hidden h-8 w-auto md:block"
              unoptimized
            />
            <Image
              src="/brand/icon.svg"
              alt={isArabic ? company.nameAr : company.nameEn}
              width={32}
              height={32}
              className="block h-8 w-auto md:hidden"
              unoptimized
            />
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label={dict.nav.mainNavigation}>
            {navItems.map((item) => {
              const href = `/${locale}${item.href === "/" ? "" : item.href}`
              const isActive =
                item.href === "/"
                  ? pathname === `/${locale}` || pathname === "/"
                  : pathname.startsWith(href)

              return (
                <Link
                  key={item.href}
                  href={href}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-primary/5 hover:text-primary",
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <Button variant="ghost" size="icon" asChild className="relative" aria-label={dict.nav.quote}>
              <Link href={`/${locale}/quote`}>
                <ShoppingCart className="size-5" />
                {totalItems > 0 && (
                  <span
                    className={cn(
                      "absolute -right-1.5 -top-1.5 flex items-center justify-center bg-primary font-medium text-primary-foreground",
                      totalItems > 99
                        ? "min-w-[22px] rounded-md px-1 py-0.5 text-[10px] leading-none"
                        : totalItems > 9
                          ? "min-w-[20px] rounded-md px-1 py-0.5 text-[10px] leading-none"
                          : "size-4 rounded-full text-[10px]",
                    )}
                    aria-live="polite"
                    aria-label={`${totalItems} ${dict.nav.items}`}
                  >
                    {totalItems > 99 ? "99+" : totalItems}
                  </span>
                )}
              </Link>
            </Button>

            <LocaleSwitcher />

            <Button asChild>
              <Link href={`/${locale}/contact`}>
                {dict.nav.getInTouch}
              </Link>
            </Button>
          </div>

          <Sheet>
            <SheetTrigger className="md:hidden inline-flex size-8 items-center justify-center rounded-lg border border-transparent text-foreground hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 [&_svg]:pointer-events-none [&_svg]:shrink-0" aria-label={dict.nav.openMenu}>
              <MenuIcon className="size-5" />
            </SheetTrigger>
            <SheetContent side={locale === "ar" ? "left" : "right"} className="w-full sm:max-w-sm">
              <nav className="mt-8 flex flex-col gap-2" aria-label={dict.nav.mobileNav}>
                {navItems.map((item) => {
                  const href = `/${locale}${item.href === "/" ? "" : item.href}`
                  const isActive =
                    item.href === "/"
                      ? pathname === `/${locale}` || pathname === "/"
                      : pathname.startsWith(href)

                  return (
                    <SheetClose key={item.href} asChild>
                      <Link
                        href={href}
                        className={cn(
                          "rounded-lg px-3 py-2.5 text-base font-medium transition-colors duration-200",
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:bg-primary/5 hover:text-primary",
                        )}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  )
                })}

                <SheetClose asChild>
                  <Link
                    href={`/${locale}/quote`}
                    className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-base font-medium text-muted-foreground transition-colors duration-200 hover:bg-primary/5 hover:text-primary"
                  >
                    <ShoppingCart className="size-5" />
                    {dict.nav.quote}{totalItems > 0 && ` (${totalItems})`}
                  </Link>
                </SheetClose>

                <div className="mt-6 border-t border-border/40 pt-6">
                  <p className="mb-3 text-sm font-medium text-muted-foreground">{dict.social.followUs}</p>
                  <div className="flex gap-2">
                    {socialLinks.whatsapp && (
                      <a
                        href={socialLinks.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex size-10 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                        aria-label={dict.social.whatsapp}
                      >
                        <FaWhatsapp className="size-5" />
                      </a>
                    )}
                    {socialLinks.facebook && (
                      <a
                        href={socialLinks.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex size-10 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                        aria-label={dict.social.facebook}
                      >
                        <FaFacebook className="size-5" />
                      </a>
                    )}
                    {socialLinks.instagram && (
                      <a
                        href={socialLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex size-10 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                        aria-label={dict.social.instagram}
                      >
                        <FaInstagram className="size-5" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="mt-4 border-t border-border/40 pt-4">
                  <LocaleSwitcher />
                </div>

                <SheetClose asChild>
                  <Button className="mt-4 w-full" asChild>
                    <Link href={`/${locale}/contact`}>
                      {dict.nav.getInTouch}
                    </Link>
                  </Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  )
}

export { Navbar }
