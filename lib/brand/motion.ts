const motion = {
  duration: {
    instant: "50ms",
    fast: "150ms",
    normal: "200ms",
    slow: "300ms",
    slower: "400ms",
    slowest: "500ms",
  },
  easing: {
    default: "cubic-bezier(0.4, 0, 0.2, 1)",
    in: "cubic-bezier(0.4, 0, 1, 1)",
    out: "cubic-bezier(0, 0, 0.2, 1)",
    inOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    bounce: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
  },
  animation: {
    fadeIn: "fade-in 0.3s ease-out",
    fadeOut: "fade-out 0.2s ease-in",
    slideUp: "slide-up 0.3s ease-out",
    slideDown: "slide-down 0.3s ease-out",
    scaleIn: "scale-in 0.2s ease-out",
    spin: "spin 1s linear infinite",
    ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
    pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    bounce: "bounce 1s infinite",
  },
  hover: {
    lift: {
      transform: "translateY(-2px)",
      shadow: "0 4px 6px -1px rgb(0 0 0 / 0.08)",
    },
    scale: {
      transform: "scale(1.02)",
    },
    glow: {
      boxShadow: "0 0 16px rgb(34 197 94 / 0.25)",
    },
  },
  sectionReveal: {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" },
  },
  button: {
    tap: { scale: 0.97 },
    hover: { y: -1 },
    transition: { type: "spring", stiffness: 400, damping: 17 },
  },
} as const

type MotionTokens = typeof motion

export type { MotionTokens }
export { motion }
