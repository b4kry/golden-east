import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

import { locales, defaultLocale, isLocale } from "@/lib/i18n"

function getLocale(request: NextRequest): string {
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value
  if (cookieLocale && isLocale(cookieLocale)) {
    return cookieLocale
  }

  const acceptLanguage = request.headers.get("accept-language") || ""
  const preferred = acceptLanguage
    .split(",")
    .map((l) => l.split(";")[0].trim().split("-")[0])

  for (const locale of preferred) {
    if (isLocale(locale)) return locale
  }

  return defaultLocale
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  const pathnameHasLocale = locales.some(
    (locale) =>
      pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  )

  if (pathnameHasLocale) return NextResponse.next()

  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: ["/((?!_next|_vercel|.*\\..*).*)"],
}
