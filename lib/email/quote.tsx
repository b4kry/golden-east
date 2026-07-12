import { render } from "@react-email/components"
import { getResend, getMailFrom } from "@/lib/resend"
import { QuoteEmail } from "@/emails/quote"
import type { QuoteInput } from "@/lib/validation"

export async function sendQuoteEmail(input: QuoteInput): Promise<void> {
  const resend = getResend()
  const from = getMailFrom()
  const to = process.env.SALES_EMAIL
  if (!to) throw new Error("SALES_EMAIL is not set")

  const now = new Date().toLocaleString(input.locale === "ar" ? "ar-EG" : "en-US", {
    dateStyle: "long",
    timeStyle: "short",
  })

  const html = await render(<QuoteEmail customer={input.customer} items={input.items} locale={input.locale} submittedAt={now} />)

  const result = await resend.emails.send({
    from,
    to: [to],
    replyTo: input.customer.email,
    subject: `New Quote Request from ${input.customer.name}`,
    html,
  })

  const { error } = result

  if (error) {
    console.error("[quote] Resend error:", error.message, JSON.stringify(error))
    throw new Error(error.message)
  }
}
