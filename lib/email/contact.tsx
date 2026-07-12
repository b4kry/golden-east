import { render } from "@react-email/components"
import { getResend, getMailFrom } from "@/lib/resend"
import { ContactEmail } from "@/emails/contact"
import type { ContactInput } from "@/lib/validation"

export async function sendContactEmail(input: ContactInput): Promise<void> {
  const resend = getResend()
  const from = getMailFrom()
  const to = process.env.CONTACT_EMAIL
  if (!to) throw new Error("CONTACT_EMAIL is not set")

  const html = await render(<ContactEmail name={input.name} email={input.email} phone={input.phone ?? ""} company={input.company ?? ""} message={input.message} />)

  const result = await resend.emails.send({
    from,
    to: [to],
    replyTo: input.email,
    subject: `New Contact Form Submission from ${input.name}`,
    html,
  })

  const { error } = result

  if (error) {
    console.error("[contact] Resend error:", error.message, JSON.stringify(error))
    throw new Error(error.message)
  }
}
