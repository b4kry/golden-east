"use client"

import { useState, useCallback } from "react"
import Link from "next/link"
import { Trash2, Plus, Minus, ShoppingCart } from "lucide-react"
import { useQuote } from "@/contexts/quote-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Body } from "@/components/ui/typography"
import { cn } from "@/lib/utils"
import type { Dictionary } from "@/lib/i18n"

function QuantityInput({
  value,
  onChange,
  dict,
}: {
  value: number
  onChange: (value: number) => void
  dict: Dictionary
}) {
  const [draft, setDraft] = useState(String(value))

  const sync = useCallback(
    (raw: string) => {
      const cleaned = raw.replace(/[^0-9]/g, "")
      setDraft(cleaned || "1")
      const num = parseInt(cleaned, 10)
      if (!isNaN(num) && num >= 1) {
        onChange(num)
      }
    },
    [onChange],
  )

  const increment = useCallback(() => {
    const next = value + 1
    setDraft(String(next))
    onChange(next)
  }, [value, onChange])

  const decrement = useCallback(() => {
    const next = Math.max(1, value - 1)
    setDraft(String(next))
    onChange(next)
  }, [value, onChange])

  const handleBlur = useCallback(() => {
    const num = parseInt(draft, 10)
    if (isNaN(num) || num < 1) {
      setDraft("1")
      onChange(1)
    }
  }, [draft, onChange])

  return (
    <div className="flex items-center rounded-xl border border-input bg-background shadow-sm">
      <button
        type="button"
        onClick={decrement}
        className={cn(
          "flex size-9 items-center justify-center text-muted-foreground transition-colors hover:bg-primary/5 hover:text-primary",
          value <= 1 && "cursor-not-allowed opacity-40",
        )}
        disabled={value <= 1}
        aria-label={dict.quote.decreaseQuantity}
      >
        <Minus className="size-3.5" />
      </button>
      <input
        type="text"
        inputMode="numeric"
        value={draft}
        onChange={(e) => sync(e.target.value)}
        onBlur={handleBlur}
        className="h-9 w-14 border-x border-input bg-background text-center text-sm font-medium text-foreground outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        aria-label={dict.quote.quantity}
      />
      <button
        type="button"
        onClick={increment}
        className="flex size-9 items-center justify-center text-muted-foreground transition-colors hover:bg-primary/5 hover:text-primary"
        aria-label={dict.quote.increaseQuantity}
      >
        <Plus className="size-3.5" />
      </button>
    </div>
  )
}

export function QuoteCart({
  locale,
  dict,
}: {
  locale: string
  dict: Dictionary
}) {
  const { items, removeItem, updateQuantity, clearQuote, totalItems } = useQuote()
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    notes: "",
  })

  const isArabic = locale === "ar"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError("")

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items, customer }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit")
      }

      setSubmitted(true)
      clearQuote()
    } catch {
      setError(dict.quote.error)
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border/50 bg-card p-12 text-center shadow-card">
        <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-primary-light/20 text-primary">
          <ShoppingCart className="size-6" />
        </div>
        <Body className="font-medium text-foreground">
          {dict.quote.success}
        </Body>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-border/50 bg-card p-12 text-center shadow-card">
        <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-surface-alt text-muted-foreground">
          <ShoppingCart className="size-6" />
        </div>
        <Body className="text-muted-foreground">{dict.quote.empty}</Body>
        <Button className="mt-6" asChild>
          <Link href={`/${locale}/products`}>
            {dict.quote.browseProducts}
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.product.id} className="flex flex-col gap-4 rounded-2xl border border-border/50 bg-card p-5 shadow-card transition-shadow duration-200 hover:shadow-card-hover sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-foreground">
                {isArabic ? item.product.nameAr : item.product.nameEn}
              </h3>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {item.product.category}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <QuantityInput
                value={item.quantity}
                onChange={(v) => updateQuantity(item.product.id, v)}
                dict={dict}
              />

              <button
                type="button"
                className="flex size-9 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-error/10 hover:text-error"
                onClick={() => removeItem(item.product.id)}
                aria-label={dict.quote.remove}
              >
                <Trash2 className="size-4" />
              </button>
            </div>
          </div>
        ))}

        <div className="flex items-center justify-between rounded-xl bg-surface-alt px-5 py-3">
          <span className="text-sm text-muted-foreground">{dict.quote.totalItems}</span>
          <span className="text-sm font-semibold text-foreground">{totalItems}</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-border/50 bg-card p-8 shadow-card">
        <h2 className="text-lg font-semibold text-foreground">{dict.quote.customerInfo}</h2>

        {error && (
          <div className="rounded-xl bg-error/10 p-4 text-sm text-error" role="alert">
            {error}
          </div>
        )}

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="quote-name" className="block text-sm font-medium text-foreground">
              {dict.quote.name}
            </label>
            <Input
              type="text"
              id="quote-name"
              required
              className="mt-1.5"
              value={customer.name}
              onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="quote-email" className="block text-sm font-medium text-foreground">
              {dict.quote.email}
            </label>
            <Input
              type="email"
              id="quote-email"
              required
              className="mt-1.5"
              value={customer.email}
              onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="quote-phone" className="block text-sm font-medium text-foreground">
              {dict.quote.phone}
            </label>
            <Input
              type="tel"
              id="quote-phone"
              required
              className="mt-1.5"
              value={customer.phone}
              onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="quote-company" className="block text-sm font-medium text-foreground">
              {dict.quote.company}
            </label>
            <Input
              type="text"
              id="quote-company"
              className="mt-1.5"
              value={customer.company}
              onChange={(e) => setCustomer({ ...customer, company: e.target.value })}
            />
          </div>
        </div>

        <div>
          <label htmlFor="quote-notes" className="block text-sm font-medium text-foreground">
            {dict.quote.notes}
          </label>
          <Textarea
            id="quote-notes"
            rows={3}
            className="mt-1.5"
            value={customer.notes}
            onChange={(e) => setCustomer({ ...customer, notes: e.target.value })}
          />
        </div>

        <Button type="submit" disabled={submitting} className="w-full sm:w-auto">
          {submitting ? dict.quote.submitting : dict.quote.submit}
        </Button>
      </form>
    </div>
  )
}
