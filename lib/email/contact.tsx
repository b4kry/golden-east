import { render } from "@react-email/components"
import { getResend, requireEnv, logEmailAttempt, isDev } from "@/lib/resend"
import { ContactEmail } from "@/emails/contact"
import type { ContactInput } from "@/lib/validation"

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

export async function sendContactEmail(input: ContactInput): Promise<void> {
  const resend = getResend()
  const from = requireEnv("MAIL_FROM")
  const to = requireEnv("CONTACT_EMAIL")

  const safe: ContactInput = {
    name: escapeHtml(input.name),
    email: escapeHtml(input.email),
    phone: input.phone ? escapeHtml(input.phone) : "",
    company: input.company ? escapeHtml(input.company) : "",
    message: escapeHtml(input.message),
    locale: input.locale,
  }

  const html = await render(
    <ContactEmail
      name={safe.name}
      email={safe.email}
      phone={safe.phone}
      company={safe.company}
      message={safe.message}
    />,
  )

  const subject = `New Contact Form Submission from ${safe.name}`

  logEmailAttempt({ from, to: [to], replyTo: safe.email, subject })

  try {
    const result = await resend.emails.send({
      from,
      to: [to],
      replyTo: safe.email,
      subject,
      html,
    })

    const { error } = result

    if (error) {
      if (isDev) {
        console.error("Resend API error:", JSON.stringify(error, null, 2))
      }
      throw new Error(error.message)
    }
  } catch (err) {
    if (isDev) {
      console.error("Resend send exception:", err)
    }
    const message = err instanceof Error ? err.message : "Unknown email error"
    throw new Error(`Failed to send contact email: ${message}`)
  }
}
