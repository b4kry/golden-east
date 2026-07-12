"use client"

import { useSyncExternalStore } from "react"
import { sendGAEvent } from "@next/third-parties/google"
import { getConsent } from "@/lib/consent"

function subscribe() {
  return () => {}
}

function getClientConsent() {
  if (typeof document === "undefined") return null
  return getConsent()
}

export function ConsentSyncer() {
  const consent = useSyncExternalStore(subscribe, getClientConsent, () => null)

  if (consent === "accepted") {
    sendGAEvent("consent", "update", {
      analytics_storage: "granted",
      ad_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
    })
  }

  return null
}
