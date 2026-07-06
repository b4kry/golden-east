const zIndex = {
  base: 0,
  content: 10,
  sticky: 100,
  dropdown: 200,
  overlay: 300,
  modal: 400,
  toast: 500,
  tooltip: 600,
} as const

type ZIndexTokens = typeof zIndex
type ZIndexKey = keyof ZIndexTokens

export type { ZIndexTokens, ZIndexKey }
export { zIndex }
