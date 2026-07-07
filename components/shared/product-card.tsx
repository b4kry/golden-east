"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { FlaskConical } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { QuoteButton } from "@/components/quote/quote-button"
import { type Product } from "@/data/products"
import { useLocale } from "@/contexts/locale-context"
import type { Dictionary } from "@/lib/i18n"

const barColors = [
  "bg-primary",
  "bg-secondary",
  "bg-accent",
  "bg-primary/60",
  "bg-secondary/60",
]

function parsePercent(value: string): number {
  const num = parseFloat(value)
  return isNaN(num) ? 0 : num
}

function CompositionVisual({ product, isArabic }: { product: Product; isArabic: boolean }) {
  const maxVal = Math.max(
    ...product.composition.map((c) => parsePercent(c.value)),
    1,
  )

  return (
    <div className="flex h-full flex-col justify-end gap-2 p-5">
      <FlaskConical className="mb-1 size-5 text-white/60" aria-hidden="true" />
      <div className="space-y-1.5" role="img" aria-label={`${isArabic ? "التركيبة" : "Composition"}: ${product.composition.map(c => `${isArabic && c.nameAr ? c.nameAr : c.name} ${c.value}`).join(", ")}`}>
        {product.composition.map((item, i) => {
          const pct = parsePercent(item.value)
          const width = Math.max((pct / maxVal) * 100, 8)
          const compName = isArabic && item.nameAr ? item.nameAr : item.name
          return (
            <div key={item.name} className="flex items-center gap-2">
              <span className="w-16 shrink-0 text-end text-xs font-medium text-white/80">
                {compName}
              </span>
              <div className="flex-1 overflow-hidden rounded-full bg-white/10">
                <div
                  className={`h-2 rounded-full transition-all duration-700 ${barColors[i % barColors.length]}`}
                  style={{ width: `${width}%` }}
                />
              </div>
              <span className="w-10 shrink-0 text-end text-xs font-semibold text-white/90">
                {item.value}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function CardVisual({ product, isArabic }: { product: Product; isArabic: boolean }) {
  const [imgError, setImgError] = useState(false)
  const locale = useLocale()

  if (!imgError) {
    return (
      <Link href={`/${locale}/products/${product.slug}`} className="relative block aspect-[3/2] overflow-hidden bg-gradient-to-br from-primary to-primary/80">
        <Image
          src={product.images.cover}
          alt={isArabic ? product.nameAr : product.nameEn}
          fill
          className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          onError={() => setImgError(true)}
        />
      </Link>
    )
  }

  return (
    <div className="relative aspect-[3/2] overflow-hidden bg-gradient-to-br from-primary to-primary/80">
      <CompositionVisual product={product} isArabic={isArabic} />
    </div>
  )
}

function ProductCard({ product, dict }: { product: Product; dict: Dictionary }) {
  const locale = useLocale()
  const isArabic = locale === "ar"
  const category = isArabic && product.categoryAr ? product.categoryAr : product.category

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-card shadow-card transition-all duration-200 ease-out hover:border-border/80 hover:shadow-card-hover">
      <CardVisual product={product} isArabic={isArabic} />
      <div className="flex flex-1 flex-col gap-4 p-6">
        <Badge variant="default" className="self-start">{category}</Badge>
        <h3 className="text-lg font-semibold leading-snug text-foreground">
          <Link href={`/${locale}/products/${product.slug}`} className="hover:text-primary transition-colors duration-200">
            {isArabic ? product.nameAr : product.nameEn}
          </Link>
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
          {isArabic ? product.shortDescriptionAr : product.shortDescriptionEn}
        </p>

        {product.composition.length > 0 && (
          <div>
            <p className="text-[11px] font-medium tracking-wider text-muted-foreground uppercase">
              {dict.products.composition}
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5" aria-label={`${dict.products.composition}: ${product.composition.map(c => `${isArabic && c.nameAr ? c.nameAr : c.name} ${c.value}`).join(", ")}`}>
              {product.composition.map((item) => (
                <span
                  key={item.name}
                  className="rounded-md border border-border/60 bg-surface-alt px-2 py-0.5 text-xs font-medium text-muted-foreground"
                >
                  {isArabic && item.nameAr ? item.nameAr : item.name} {item.value}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
          <Button variant="outline" size="sm" asChild>
            <Link
              href={`/${locale}/products/${product.slug}`}
              aria-label={`${dict.products.learnMore} ${isArabic ? product.nameAr : product.nameEn}`}
            >
              {dict.products.learnMore}
            </Link>
          </Button>
          <QuoteButton product={product} label={dict.products.addToQuote} toastMessage={dict.quote.added} />
        </div>
      </div>
    </article>
  )
}

export { ProductCard }
