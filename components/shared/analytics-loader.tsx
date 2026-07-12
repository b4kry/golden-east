"use client"

import { useSyncExternalStore } from "react"
import { GoogleAnalytics } from "@next/third-parties/google"
import { getConsent } from "@/lib/consent"

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ""

function subscribe() {
  return () => {}
}

function getClientConsent() {
  if (typeof document === "undefined") return null
  return getConsent()
}

export function AnalyticsLoader() {
  const consent = useSyncExternalStore(subscribe, getClientConsent, () => null)

  return <>{consent === "accepted" && GA_ID && <GoogleAnalytics gaId={GA_ID} />}</>
}
