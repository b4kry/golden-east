import { render } from "@react-email/components"
import { getResend, getMailFrom } from "@/lib/resend"
import { AutoReplyEn } from "@/emails/autoreply-en"
import { AutoReplyAr } from "@/emails/autoreply-ar"

export async function sendAutoReply(input: {
  name: string
  email: string
  locale: "en" | "ar"
  type: "contact" | "quote"
}): Promise<void> {
  const resend = getResend()
  const from = getMailFrom()

  const subject =
    input.locale === "ar"
      ? "شكراً لتواصلك مع جولدن إيست للتنمية الزراعية"
      : "Thank you for contacting Golden East Agricultural Development"

  const html = await render(
    input.locale === "ar" ? <AutoReplyAr name={input.name} type={input.type} /> : <AutoReplyEn name={input.name} type={input.type} />,
  )

  try {
    const result = await resend.emails.send({ from, to: [input.email], subject, html })
    if (result.error) {
      console.error("[autoreply] Resend error:", result.error.message, JSON.stringify(result.error))
    }
  } catch (err) {
    console.error("[autoreply] send failed:", err instanceof Error ? err.message : String(err))
  }
}
