const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const

type BreakpointTokens = typeof breakpoints
type BreakpointKey = keyof BreakpointTokens

export type { BreakpointTokens, BreakpointKey }
export { breakpoints }
