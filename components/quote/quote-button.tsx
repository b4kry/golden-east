"use client"

import type { Product } from "@/data/products"
import { useQuote } from "@/contexts/quote-context"
import { useLocale } from "@/contexts/locale-context"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/toast"

export function QuoteButton({
  product,
  label,
  toastMessage,
}: {
  product: Product
  label: string
  toastMessage?: string
}) {
  const { addItem } = useQuote()
  const { showToast } = useToast()
  const locale = useLocale()
  const isArabic = locale === "ar"

  return (
    <Button
      onClick={() => {
        addItem(product)
        if (toastMessage) showToast(toastMessage)
      }}
      aria-label={`${label}: ${isArabic ? product.nameAr : product.nameEn}`}
    >
      {label}
    </Button>
  )
}
