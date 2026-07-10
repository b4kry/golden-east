"use client"

import { useLocale } from "@/contexts/locale-context"
import { usePathname } from "next/navigation"
import { locales } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const LOCALE_COOKIE = "NEXT_LOCALE"
const COOKIE_MAX_AGE = 31536000

function setLocaleCookie(locale: string): void {
  const secure = process.env.NODE_ENV === "production" ? "; Secure" : ""
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=${COOKIE_MAX_AGE}; sameSite=lax${secure}`
}

export function LocaleSwitcher({ compact }: { compact?: boolean }) {
  const currentLocale = useLocale()
  const pathname = usePathname()

  const otherLocale = locales.find((l) => l !== currentLocale)
  if (!otherLocale) return null

  const switchHref = `/${otherLocale}${pathname.replace(/^\/[a-z]{2}/, "")}`

  const label = currentLocale === "en" ? "العربية" : "English"
  const compactLabel = currentLocale === "en" ? "ع" : "EN"

  if (compact) {
    return (
      <a
        href={switchHref}
        onClick={() => setLocaleCookie(otherLocale)}
        rel="alternate"
        hrefLang={otherLocale}
        aria-label={currentLocale === "en" ? "التبديل إلى العربية" : "Switch to Arabic"}
        className={cn(
          "inline-flex size-8 items-center justify-center rounded-lg border border-border/60 text-xs font-semibold text-foreground transition-colors hover:border-primary/30 hover:text-primary",
        )}
      >
        {compactLabel}
      </a>
    )
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      asChild
      aria-label={currentLocale === "en" ? "التبديل إلى العربية" : "Switch to Arabic"}
    >
      <a href={switchHref} onClick={() => setLocaleCookie(otherLocale)} rel="alternate" hrefLang={otherLocale}>
        {label}
      </a>
    </Button>
  )
}
