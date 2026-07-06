const radius = {
  none: "0px",
  sm: "4px",
  md: "8px",
  lg: "12px",
  xl: "16px",
  "2xl": "20px",
  "3xl": "24px",
  full: "9999px",
} as const

type RadiusTokens = typeof radius
type RadiusKey = keyof RadiusTokens

export type { RadiusTokens, RadiusKey }
export { radius }
