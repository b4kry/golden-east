"use client"

import type { Product } from "@/data/products"
import { useQuote } from "@/contexts/quote-context"
import { Button } from "@/components/ui/button"

export function QuoteButton({
  product,
  label,
}: {
  product: Product
  label: string
}) {
  const { addItem } = useQuote()

  return (
    <Button
      onClick={() => addItem(product)}
      aria-label={`${label}: ${product.nameEn}`}
    >
      {label}
    </Button>
  )
}
