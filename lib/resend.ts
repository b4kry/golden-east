import { Resend } from "resend"

let client: Resend | null = null

export function getResend(): Resend {
  if (!client) {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) throw new Error("RESEND_API_KEY is not set")
    client = new Resend(apiKey)
  }
  return client
}

export function getMailFrom(): string {
  const raw = process.env.MAIL_FROM
  if (!raw) throw new Error("MAIL_FROM is not set")
  let value = raw.trim()
  if ((value.startsWith('"') || value.startsWith("'")) && (value.endsWith('"') || value.endsWith("'"))) {
    value = value.slice(1, -1).trim()
  }
  return value
}
