import { render } from "@react-email/components"
import { getResend, requireEnv, logEmailAttempt, isDev } from "@/lib/resend"
import { QuoteEmail } from "@/emails/quote"
import type { QuoteInput } from "@/lib/validation"

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

export async function sendQuoteEmail(input: QuoteInput): Promise<void> {
  const resend = getResend()
  const from = requireEnv("MAIL_FROM")
  const to = requireEnv("SALES_EMAIL")

  const safe: QuoteInput = {
    items: input.items.map((item) => ({
      productId: escapeHtml(item.productId),
      name: escapeHtml(item.name),
      quantity: item.quantity,
      notes: item.notes ? escapeHtml(item.notes) : "",
    })),
    customer: {
      name: escapeHtml(input.customer.name),
      email: escapeHtml(input.customer.email),
      phone: escapeHtml(input.customer.phone),
      company: input.customer.company ? escapeHtml(input.customer.company) : "",
      notes: input.customer.notes ? escapeHtml(input.customer.notes) : "",
    },
    locale: input.locale,
  }

  const now = new Date().toLocaleString(input.locale === "ar" ? "ar-EG" : "en-US", {
    dateStyle: "long",
    timeStyle: "short",
  })

  const html = await render(
    <QuoteEmail
      customer={safe.customer}
      items={safe.items}
      locale={input.locale}
      submittedAt={now}
    />,
  )

  const subject = `New Quote Request from ${safe.customer.name}`

  logEmailAttempt({ from, to: [to], replyTo: safe.customer.email, subject })

  try {
    const result = await resend.emails.send({
      from,
      to: [to],
      replyTo: safe.customer.email,
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
    throw new Error(`Failed to send quote email: ${message}`)
  }
}
