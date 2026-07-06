const typography = {
  display: {
    fontSize: "4.5rem",
    lineHeight: "1.1",
    fontWeight: "700",
    letterSpacing: "-0.02em",
  },
  h1: {
    fontSize: "3rem",
    lineHeight: "1.15",
    fontWeight: "700",
    letterSpacing: "-0.02em",
  },
  h2: {
    fontSize: "2.25rem",
    lineHeight: "1.2",
    fontWeight: "700",
    letterSpacing: "-0.01em",
  },
  h3: {
    fontSize: "1.5rem",
    lineHeight: "1.3",
    fontWeight: "600",
    letterSpacing: "-0.01em",
  },
  h4: {
    fontSize: "1.25rem",
    lineHeight: "1.4",
    fontWeight: "600",
    letterSpacing: "0em",
  },
  bodyLg: {
    fontSize: "1.125rem",
    lineHeight: "1.7",
    fontWeight: "400",
    letterSpacing: "0em",
  },
  body: {
    fontSize: "1rem",
    lineHeight: "1.6",
    fontWeight: "400",
    letterSpacing: "0em",
  },
  small: {
    fontSize: "0.875rem",
    lineHeight: "1.5",
    fontWeight: "400",
    letterSpacing: "0em",
  },
  caption: {
    fontSize: "0.75rem",
    lineHeight: "1.4",
    fontWeight: "500",
    letterSpacing: "0.05em",
  },
  overline: {
    fontSize: "0.75rem",
    lineHeight: "1.4",
    fontWeight: "600",
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
  },
} as const

type TypographyTokens = typeof typography
type TypographyKey = keyof TypographyTokens

export type { TypographyTokens, TypographyKey }
export { typography }
