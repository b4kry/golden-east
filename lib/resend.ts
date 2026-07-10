import { Resend } from "resend"

const isDev = process.env.NODE_ENV !== "production"

function createClient(): Resend {
  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    console.error("✗ RESEND_API_KEY missing")
    throw new Error("RESEND_API_KEY environment variable is not set")
  }

  if (isDev) {
    console.log("✓ RESEND_API_KEY loaded")
  }

  return new Resend(apiKey)
}

let client: Resend | null = null

export function getResend(): Resend {
  if (!client) {
    client = createClient()
  }
  return client
}

export function requireEnv(key: string): string {
  const value = process.env[key]
  if (!value) {
    const msg = `${key} environment variable is not set`
    if (isDev) {
      console.error(`✗ ${msg}`)
    }
    throw new Error(msg)
  }
  return value
}

export function logEmailAttempt(payload: {
  from: string
  to: string[]
  replyTo?: string
  subject: string
}): void {
  if (!isDev) return
  console.log({
    event: "email.send",
    apiKeyExists: !!process.env.RESEND_API_KEY,
    from: payload.from,
    to: payload.to,
    replyTo: payload.replyTo ?? null,
    subject: payload.subject,
    environment: process.env.NODE_ENV || "development",
  })
}

export { isDev }
