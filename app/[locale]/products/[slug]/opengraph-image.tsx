import { ImageResponse } from "next/og"
import { products } from "@/data/products"

export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export function generateStaticParams() {
  const params: Array<{ locale: string; slug: string }> = []
  for (const locale of ["en", "ar"] as const) {
    for (const product of products) {
      if (product.status === "active") {
        params.push({ locale, slug: product.slug })
      }
    }
  }
  return params
}

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)

  const name = product ? product.nameEn : "Product"
  const category = product?.category ?? ""

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #052e16 0%, #166534 50%, #14532d 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle at 30% 40%, rgba(34,197,94,0.2) 0%, transparent 60%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle at 70% 60%, rgba(245,158,11,0.1) 0%, transparent 50%)",
          }}
        />
        {category && (
          <span style={{ color: "#fbbf24", fontSize: 18, fontWeight: 600, letterSpacing: "0.1em", marginBottom: 12 }}>
            {category.toUpperCase()}
          </span>
        )}
        <span style={{ color: "#ffffff", fontSize: 56, fontWeight: 700, letterSpacing: "-0.02em", textAlign: "center", maxWidth: "80%", lineHeight: 1.2 }}>
          {name}
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 24 }}>
          <svg width="24" height="24" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="48" stroke="#22c55e" strokeWidth="4" fill="#052e16" />
            <path d="M50 20 Q55 35 60 30 Q65 25 58 18 Z" fill="#22c55e" />
            <path d="M50 20 Q45 35 40 30 Q35 25 42 18 Z" fill="#22c55e" />
            <path d="M50 80 Q55 65 60 70 Q65 75 58 82 Z" fill="#22c55e" />
            <path d="M50 80 Q45 65 40 70 Q35 75 42 82 Z" fill="#22c55e" />
          </svg>
          <span style={{ color: "#86efac", fontSize: 20, fontWeight: 500 }}>
            Golden East Agricultural Development
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  )
}
