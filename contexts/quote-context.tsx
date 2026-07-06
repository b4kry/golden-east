"use client"

import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useCallback,
  useRef,
  useState,
  type ReactNode,
} from "react"
import type { Product } from "@/data/products"
import { products } from "@/data/products"

export interface QuoteItem {
  product: Product
  quantity: number
}

interface QuoteState {
  items: QuoteItem[]
}

type QuoteAction =
  | { type: "ADD_ITEM"; product: Product; quantity?: number }
  | { type: "REMOVE_ITEM"; productId: string }
  | { type: "UPDATE_QUANTITY"; productId: string; quantity: number }
  | { type: "CLEAR" }
  | { type: "LOAD"; items: QuoteItem[] }

const STORAGE_KEY = "golden-east-quote"

function quoteReducer(state: QuoteState, action: QuoteAction): QuoteState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.items.find(
        (item) => item.product.id === action.product.id,
      )
      if (existing) {
        return {
          items: state.items.map((item) =>
            item.product.id === action.product.id
              ? { ...item, quantity: item.quantity + (action.quantity ?? 1) }
              : item,
          ),
        }
      }
      return {
        items: [...state.items, { product: action.product, quantity: action.quantity ?? 1 }],
      }
    }
    case "REMOVE_ITEM":
      return {
        items: state.items.filter((item) => item.product.id !== action.productId),
      }
    case "UPDATE_QUANTITY":
      return {
        items: state.items.map((item) =>
          item.product.id === action.productId
            ? { ...item, quantity: action.quantity }
            : item,
        ),
      }
    case "CLEAR":
      return { items: [] }
    case "LOAD":
      return { items: action.items }
    default:
      return state
  }
}

interface QuoteContextValue {
  items: QuoteItem[]
  addItem: (product: Product, quantity?: number) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearQuote: () => void
  totalItems: number
}

const QuoteContext = createContext<QuoteContextValue | null>(null)

function loadItems(): QuoteItem[] {
  if (typeof window === "undefined") return []
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return []
    const parsed: Array<{ productId: string; quantity: number }> = JSON.parse(stored)
    if (!Array.isArray(parsed)) return []
    const resolved: QuoteItem[] = []
    for (const entry of parsed) {
      const product = products.find((p) => p.id === entry.productId)
      if (product) {
        resolved.push({ product, quantity: entry.quantity })
      }
    }
    return resolved
  } catch {
    return []
  }
}

function saveItems(items: QuoteItem[]) {
  if (typeof window === "undefined") return
  try {
    const toStore = items.map((item) => ({
      productId: item.product.id,
      quantity: item.quantity,
    }))
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toStore))
  } catch {
    /* localStorage not available */
  }
}

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(quoteReducer, { items: [] })
  const [hydrated, setHydrated] = useState(false)
  const hydratedRef = useRef(false)
  const initRef = useRef(false)

  useEffect(() => {
    if (initRef.current) return
    initRef.current = true

    const items = loadItems()
    if (items.length > 0) {
      dispatch({ type: "LOAD", items })
    }
    setHydrated(true)
    hydratedRef.current = true
  }, [])

  useEffect(() => {
    if (!hydratedRef.current) return
    saveItems(state.items)
  }, [state.items])

  const addItem = useCallback((product: Product, quantity?: number) => {
    dispatch({ type: "ADD_ITEM", product, quantity })
  }, [])

  const removeItem = useCallback((productId: string) => {
    dispatch({ type: "REMOVE_ITEM", productId })
  }, [])

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", productId, quantity })
  }, [])

  const clearQuote = useCallback(() => {
    dispatch({ type: "CLEAR" })
  }, [])

  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <QuoteContext
      value={{
        items: hydrated ? state.items : [],
        addItem,
        removeItem,
        updateQuantity,
        clearQuote,
        totalItems: hydrated ? totalItems : 0,
      }}
    >
      {children}
    </QuoteContext>
  )
}

export function useQuote(): QuoteContextValue {
  const context = useContext(QuoteContext)
  if (!context) {
    throw new Error("useQuote must be used within a QuoteProvider")
  }
  return context
}
