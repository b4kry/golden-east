import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { items, customer } = body

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: "Quote must contain at least one item" },
        { status: 400 },
      )
    }

    if (!customer?.name || !customer?.email || !customer?.phone) {
      return NextResponse.json(
        { error: "Customer name, email, and phone are required" },
        { status: 400 },
      )
    }

    if (process.env.NODE_ENV === "development") {
      console.log("Quote request received:", JSON.stringify({ items, customer }, null, 2))
    }

    return NextResponse.json({
      success: true,
      message: "Quote request submitted successfully",
    })
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 },
    )
  }
}
