const colors = {
  brand: {
    green: {
      50: "#f0fdf4",
      100: "#dcfce7",
      200: "#bbf7d0",
      300: "#86efac",
      400: "#4ade80",
      500: "#22c55e",
      600: "#16a34a",
      700: "#15803d",
      800: "#166534",
      900: "#14532d",
      950: "#052e16",
    },
    gold: {
      50: "#fffbeb",
      100: "#fef3c7",
      200: "#fde68a",
      300: "#fcd34d",
      400: "#fbbf24",
      500: "#f59e0b",
      600: "#d97706",
      700: "#b45309",
      800: "#92400e",
      900: "#78350f",
      950: "#451a03",
    },
    earth: {
      50: "#fdf8f0",
      100: "#f9edd9",
      200: "#f2d9b0",
      300: "#e9c285",
      400: "#e0a85e",
      500: "#d4903f",
      600: "#b87534",
      700: "#995a2e",
      800: "#7d492b",
      900: "#683d28",
      950: "#3a1f14",
    },
  },
  semantic: {
    primary: {
      DEFAULT: "#15803d",
      hover: "#166534",
      light: "#dcfce7",
      foreground: "#ffffff",
    },
    secondary: {
      DEFAULT: "#f59e0b",
      hover: "#d97706",
      light: "#fef3c7",
      foreground: "#ffffff",
    },
    accent: {
      DEFAULT: "#d4903f",
      hover: "#b87534",
      light: "#f9edd9",
      foreground: "#ffffff",
    },
    background: {
      DEFAULT: "#ffffff",
      alt: "#f9fafb",
    },
    surface: {
      DEFAULT: "#ffffff",
      alt: "#f3f4f6",
    },
    border: {
      DEFAULT: "#e5e7eb",
      muted: "#f3f4f6",
    },
    text: {
      primary: "#111827",
      secondary: "#6b7280",
      muted: "#9ca3af",
      inverse: "#ffffff",
    },
    state: {
      success: "#16a34a",
      warning: "#d97706",
      error: "#dc2626",
      info: "#2563eb",
    },
    chart: {
      1: "#15803d",
      2: "#22c55e",
      3: "#f59e0b",
      4: "#d4903f",
      5: "#6b7280",
    },
  },
} as const

type BrandColorTokens = typeof colors

export type { BrandColorTokens }
export { colors }
