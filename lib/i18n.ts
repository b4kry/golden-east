export const SITE_URL = "https://golden-east.com"

export const locales = ["en", "ar"] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "ar"

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale)
}

const dictionaries = {
  en: () => import("@/messages/en.json").then((m) => m.default),
  ar: () => import("@/messages/ar.json").then((m) => m.default),
} as const

export type Dictionary = Awaited<ReturnType<(typeof dictionaries)[typeof defaultLocale]>>

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]()
}
