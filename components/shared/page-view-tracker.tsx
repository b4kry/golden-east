"use client"

import { usePathname } from "next/navigation"
import { useEffect, useRef } from "react"

export function PageViewTracker() {
  const pathname = usePathname()
  const initialPath = useRef<string | null>(null)

  useEffect(() => {
    if (!window.gtag) return

    if (initialPath.current === null) {
      initialPath.current = pathname
      return
    }

    if (pathname === initialPath.current) return

    window.gtag("event", "page_view", {
      page_title: document.title,
      page_location: window.location.href,
    })
  }, [pathname])

  return null
}
