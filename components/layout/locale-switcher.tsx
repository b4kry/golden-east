"use client"

import { useLocale } from "@/contexts/locale-context"
import { usePathname } from "next/navigation"
import { locales } from "@/lib/i18n"
import { Button } from "@/components/ui/button"

export function LocaleSwitcher() {
  const currentLocale = useLocale()
  const pathname = usePathname()

  const otherLocale = locales.find((l) => l !== currentLocale)
  if (!otherLocale) return null

  const switchHref = `/${otherLocale}${pathname.replace(/^\/[a-z]{2}/, "")}`
  const label = currentLocale === "en" ? "العربية" : "English"

  return (
    <Button
      variant="ghost"
      size="sm"
      asChild
      aria-label={currentLocale === "en" ? "التبديل إلى العربية" : "Switch to Arabic"}
    >
      <a href={switchHref} rel="alternate" hrefLang={otherLocale}>
        {label}
      </a>
    </Button>
  )
}
