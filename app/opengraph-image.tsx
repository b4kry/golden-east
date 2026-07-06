import { ImageResponse } from "next/og"

export const alt = "Golden East Agricultural Development"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
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
            background: "radial-gradient(circle at 25% 50%, rgba(34,197,94,0.15) 0%, transparent 60%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle at 75% 50%, rgba(245,158,11,0.1) 0%, transparent 60%)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            marginBottom: 16,
          }}
        >
          <svg width="64" height="64" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="48" stroke="#22c55e" strokeWidth="4" fill="#052e16" />
            <path d="M50 20 Q55 35 60 30 Q65 25 58 18 Z" fill="#22c55e" />
            <path d="M50 20 Q45 35 40 30 Q35 25 42 18 Z" fill="#22c55e" />
            <path d="M50 80 Q55 65 60 70 Q65 75 58 82 Z" fill="#22c55e" />
            <path d="M50 80 Q45 65 40 70 Q35 75 42 82 Z" fill="#22c55e" />
            <path d="M30 40 Q40 42 35 35 Q30 30 25 38 Z" fill="#fbbf24" />
            <path d="M70 40 Q60 42 65 35 Q70 30 75 38 Z" fill="#fbbf24" />
            <path d="M30 60 Q40 58 35 65 Q30 70 25 62 Z" fill="#fbbf24" />
            <path d="M70 60 Q60 58 65 65 Q70 70 75 62 Z" fill="#fbbf24" />
            <circle cx="50" cy="50" r="10" fill="#22c55e" opacity="0.3" />
          </svg>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span style={{ color: "#22c55e", fontSize: 36, fontWeight: 700, letterSpacing: "-0.02em" }}>
              Golden East
            </span>
            <span style={{ color: "#86efac", fontSize: 20, fontWeight: 400, marginTop: 4 }}>
              Agricultural Development
            </span>
          </div>
        </div>
        <span style={{ color: "#f5f5f5", fontSize: 48, fontWeight: 300, letterSpacing: "0.05em" }}>
          Plant Nutrition Solutions
        </span>
        <span style={{ color: "#86efac", fontSize: 18, fontWeight: 400, marginTop: 24 }}>
          Where Science Meets Growth
        </span>
      </div>
    ),
    {
      ...size,
    },
  )
}
