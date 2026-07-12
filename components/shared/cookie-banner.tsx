"use client"

import { useState, useSyncExternalStore } from "react"
import Link from "next/link"
import { X } from "lucide-react"
import { sendGAEvent } from "@next/third-parties/google"
import { getConsent, setConsent } from "@/lib/consent"
import { useLocale } from "@/contexts/locale-context"

const CONSENT_UPDATE = {
  analytics_storage: "granted" as const,
  ad_storage: "granted" as const,
  ad_user_data: "granted" as const,
  ad_personalization: "granted" as const,
}

const CONSENT_DENY = {
  analytics_storage: "denied" as const,
  ad_storage: "denied" as const,
  ad_user_data: "denied" as const,
  ad_personalization: "denied" as const,
}

function subscribe() {
  return () => {}
}

function getClientConsent() {
  if (typeof document === "undefined") return null
  return getConsent()
}

export function CookieBanner() {
  const consent = useSyncExternalStore(subscribe, getClientConsent, () => null)
  const [dismissed, setDismissed] = useState(false)
  const locale = useLocale()
  const isArabic = locale === "ar"

  const handleAccept = () => {
    setConsent("accepted")
    setDismissed(true)
    sendGAEvent("consent", "update", CONSENT_UPDATE)
  }

  const handleReject = () => {
    setConsent("rejected")
    setDismissed(true)
    sendGAEvent("consent", "update", CONSENT_DENY)
  }

  const visible = consent === null && !dismissed

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label={isArabic ? "إعدادات ملفات تعريف الارتباط" : "Cookie settings"}
      aria-describedby="cookie-banner-description"
      aria-modal="true"
      className={`fixed z-[100] p-4 sm:p-0 ${isArabic ? "left-0 sm:left-6" : "right-0 sm:right-6"} bottom-0 sm:bottom-6`}
    >
      <div className="max-w-sm rounded-2xl border border-border/50 bg-card p-6 shadow-dropdown">
        <div className="flex items-start justify-between gap-4">
          <p id="cookie-banner-description" className="text-sm leading-relaxed text-muted-foreground">
            {isArabic
              ? "نستخدم ملفات تعريف الارتباط لتحسين تجربتك. يمكنك اختيار قبول أو رفض ملفات تعريف الارتباط غير الأساسية."
              : "We use cookies to enhance your experience. You can choose to accept or reject non-essential cookies."}
          </p>
          <button
            type="button"
            onClick={handleReject}
            className="shrink-0 rounded-lg p-1 text-muted-foreground transition-colors hover:bg-surface-alt hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring/20"
            aria-label={isArabic ? "إغلاق" : "Close"}
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={handleAccept}
            className="inline-flex h-9 items-center justify-center rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-200 hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-ring/20"
          >
            {isArabic ? "قبول" : "Accept"}
          </button>
          <button
            type="button"
            onClick={handleReject}
            className="inline-flex h-9 items-center justify-center rounded-xl border border-border/60 bg-background px-5 text-sm font-medium text-foreground transition-all duration-200 hover:bg-surface-alt focus:outline-none focus:ring-2 focus:ring-ring/20"
          >
            {isArabic ? "رفض" : "Reject"}
          </button>
          <Link
            href={`/${locale}/privacy`}
            className="text-xs text-muted-foreground underline underline-offset-2 transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 rounded-sm"
          >
            {isArabic ? "معرفة المزيد" : "Learn More"}
          </Link>
        </div>
      </div>
    </div>
  )
}
