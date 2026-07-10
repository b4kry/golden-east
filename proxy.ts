import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

import { locales, defaultLocale, isLocale } from "@/lib/i18n"

const COOKIE_OPTIONS = {
  path: "/",
  maxAge: 31536000,
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
}

function getLocale(request: NextRequest): string {
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value
  if (cookieLocale && isLocale(cookieLocale)) {
    return cookieLocale
  }
  return defaultLocale
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  const pathnameHasLocale = locales.some(
    (locale) =>
      pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  )

  if (pathnameHasLocale) {
    return NextResponse.rewrite(request.nextUrl)
  }

  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  const response = NextResponse.redirect(request.nextUrl)
  response.cookies.set("NEXT_LOCALE", locale, COOKIE_OPTIONS)
  return response
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
}
