const CONSENT_COOKIE = "cookie_consent"
const CONSENT_MAX_AGE = 365 * 24 * 60 * 60

export type ConsentValue = "accepted" | "rejected"

export function getConsent(): ConsentValue | null {
  if (typeof document === "undefined") return null
  try {
    const match = document.cookie.match(
      new RegExp(`(?:^|;\\s*)${CONSENT_COOKIE}=([^;]*)`),
    )
    if (!match) return null
    const value = match[1] as ConsentValue
    if (value !== "accepted" && value !== "rejected") return null
    return value
  } catch {
    return null
  }
}

export function setConsent(value: ConsentValue): void {
  const secure = process.env.NODE_ENV === "production" ? "; Secure" : ""
  document.cookie = `${CONSENT_COOKIE}=${value}; path=/; max-age=${CONSENT_MAX_AGE}; sameSite=lax${secure}`
}
