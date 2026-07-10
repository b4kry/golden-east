import { NextResponse } from "next/server"
import { contactSchema } from "@/lib/validation"
import { sendContactEmail } from "@/lib/email/contact"
import { sendAutoReply } from "@/lib/email/autoreply"
import { isAllowedOrigin } from "@/lib/security/origin"

export async function POST(request: Request) {
  try {
    if (!isAllowedOrigin(request)) {
      return NextResponse.json({ success: false, error: "Invalid request origin" }, { status: 403 })
    }

    const contentType = request.headers.get("content-type") || ""

    let raw: Record<string, unknown>

    if (contentType.includes("application/json")) {
      raw = await request.json()
    } else if (contentType.includes("application/x-www-form-urlencoded") || contentType.includes("multipart/form-data")) {
      const formData = await request.formData()
      raw = Object.fromEntries(formData.entries())
    } else {
      return NextResponse.json({ error: "Unsupported content type" }, { status: 415 })
    }

    const result = contactSchema.safeParse(raw)

    if (!result.success) {
      const firstError = result.error.issues[0]?.message || "Validation failed"
      return NextResponse.json({ error: firstError }, { status: 422 })
    }

    const input = result.data

    await sendContactEmail(input)

    await sendAutoReply({
      name: input.name,
      email: input.email,
      locale: input.locale,
      type: "contact",
    })

    return NextResponse.json({
      success: true,
      message: "Message received successfully",
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : "An unexpected error occurred"
    console.error("Contact API error:", message)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
