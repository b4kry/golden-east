"use client"

import { createContext, useContext } from "react"
import type { Locale } from "@/lib/i18n"

const LocaleContext = createContext<Locale | null>(null)

export function LocaleProvider({
  children,
  locale,
}: {
  children: React.ReactNode
  locale: Locale
}) {
  return <LocaleContext value={locale}>{children}</LocaleContext>
}

export function useLocale(): Locale {
  const locale = useContext(LocaleContext)
  if (!locale) {
    throw new Error("useLocale must be used within a LocaleProvider")
  }
  return locale
}
