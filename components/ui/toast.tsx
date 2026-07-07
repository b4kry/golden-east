"use client"

import { useState, useCallback, createContext, useContext, type ReactNode } from "react"
import { ShoppingCart } from "lucide-react"
import { cn } from "@/lib/utils"

interface Toast {
  id: string
  message: string
  visible: boolean
}

interface ToastContextValue {
  showToast: (message: string) => void
}

const ToastContext = createContext<ToastContextValue | null>(null)

export function ToastProvider({ children, rtl }: { children: ReactNode; rtl?: boolean }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const showToast = useCallback((message: string) => {
    const id = Math.random().toString(36).slice(2)
    setToasts((prev) => [...prev, { id, message, visible: true }])
    setTimeout(() => {
      setToasts((prev) => prev.map((t) => (t.id === id ? { ...t, visible: false } : t)))
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id))
      }, 200)
    }, 2500)
  }, [])

  return (
    <ToastContext value={{ showToast }}>
      {children}
      <div
        className={cn(
          "pointer-events-none fixed bottom-6 z-toast flex flex-col gap-2",
          rtl ? "right-6" : "left-6",
        )}
        aria-live="polite"
        aria-label="Notifications"
      >
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={cn(
              "pointer-events-auto flex items-center gap-3 rounded-xl border border-border/50 bg-card px-5 py-3 shadow-dropdown transition-all duration-200",
              toast.visible
                ? "translate-y-0 opacity-100"
                : "translate-y-2 opacity-0",
            )}
            role="status"
          >
            <ShoppingCart className="size-4 shrink-0 text-primary" aria-hidden="true" />
            <span className="text-sm font-medium text-foreground">{toast.message}</span>
          </div>
        ))}
      </div>
    </ToastContext>
  )
}

export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error("useToast must be used within a ToastProvider")
  return ctx
}
