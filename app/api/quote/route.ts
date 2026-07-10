import { NextResponse } from "next/server"
import { quoteSchema } from "@/lib/validation"
import { sendQuoteEmail } from "@/lib/email/quote"
import { sendAutoReply } from "@/lib/email/autoreply"
import { isAllowedOrigin } from "@/lib/security/origin"

export async function POST(request: Request) {
  try {
    if (!isAllowedOrigin(request)) {
      return NextResponse.json({ success: false, error: "Invalid request origin" }, { status: 403 })
    }

    const contentType = request.headers.get("content-type") || ""
    if (!contentType.includes("application/json")) {
      return NextResponse.json({ error: "JSON content type required" }, { status: 415 })
    }

    const raw = await request.json()

    const result = quoteSchema.safeParse(raw)

    if (!result.success) {
      const firstError = result.error.issues[0]?.message || "Validation failed"
      return NextResponse.json({ error: firstError }, { status: 422 })
    }

    const input = result.data

    await sendQuoteEmail(input)

    await sendAutoReply({
      name: input.customer.name,
      email: input.customer.email,
      locale: input.locale,
      type: "quote",
    })

    return NextResponse.json({
      success: true,
      message: "Quote request submitted successfully",
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : "An unexpected error occurred"
    console.error("Quote API error:", message)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
