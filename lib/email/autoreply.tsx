import { render } from "@react-email/components"
import { getResend, requireEnv, logEmailAttempt, isDev } from "@/lib/resend"
import { AutoReplyEn } from "@/emails/autoreply-en"
import { AutoReplyAr } from "@/emails/autoreply-ar"

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

export async function sendAutoReply(input: {
  name: string
  email: string
  locale: "en" | "ar"
  type: "contact" | "quote"
}): Promise<void> {
  const resend = getResend()
  const from = requireEnv("MAIL_FROM")

  const safeName = escapeHtml(input.name)

  const subject =
    input.locale === "ar"
      ? "شكراً لتواصلك مع جولدن إيست للتنمية الزراعية"
      : "Thank you for contacting Golden East Agricultural Development"

  const html = await render(
    input.locale === "ar" ? (
      <AutoReplyAr name={safeName} type={input.type} />
    ) : (
      <AutoReplyEn name={safeName} type={input.type} />
    ),
  )

  logEmailAttempt({ from, to: [input.email], subject })

  try {
    const result = await resend.emails.send({
      from,
      to: [input.email],
      subject,
      html,
    })

    const { error } = result

    if (error) {
      if (isDev) {
        console.error("Resend API error (auto-reply):", JSON.stringify(error, null, 2))
      }
      console.error("Failed to send auto-reply:", error.message)
      return
    }
  } catch (err) {
    if (isDev) {
      console.error("Resend send exception (auto-reply):", err)
    }
    console.error("Failed to send auto-reply:", err instanceof Error ? err.message : "Unknown error")
  }
}
