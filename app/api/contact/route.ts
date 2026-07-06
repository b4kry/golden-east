import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || ""
    let name: string
    let email: string
    let phone: string
    let company: string
    let message: string

    if (contentType.includes("application/json")) {
      const body = await request.json()
      name = body.name
      email = body.email
      phone = body.phone || ""
      company = body.company || ""
      message = body.message
    } else {
      const formData = await request.formData()
      name = (formData.get("name") as string) || ""
      email = (formData.get("email") as string) || ""
      phone = (formData.get("phone") as string) || ""
      company = (formData.get("company") as string) || ""
      message = (formData.get("message") as string) || ""
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 },
      )
    }

    if (process.env.NODE_ENV === "development") {
      console.log(
        "Contact form submission:",
        JSON.stringify({ name, email, phone, company, message }, null, 2),
      )
    }

    return NextResponse.json({
      success: true,
      message: "Message received successfully",
    })
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 },
    )
  }
}
