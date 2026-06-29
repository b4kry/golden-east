"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { FlaskConical } from "lucide-react"

import { Button } from "@/components/ui/button"
import { type Product } from "@/data/products"

const barColors = [
  "bg-blue-500",
  "bg-emerald-500",
  "bg-amber-500",
  "bg-violet-500",
  "bg-rose-500",
]

function parsePercent(value: string): number {
  const num = parseFloat(value)
  return isNaN(num) ? 0 : num
}

function CompositionVisual({ product }: { product: Product }) {
  const maxVal = Math.max(
    ...product.composition.map((c) => parsePercent(c.value)),
    1,
  )

  return (
    <div className="flex h-full flex-col justify-end gap-2 p-5">
      <FlaskConical className="mb-1 size-5 text-white/60" />
      <div className="space-y-1.5">
        {product.composition.map((item, i) => {
          const pct = parsePercent(item.value)
          const width = Math.max((pct / maxVal) * 100, 8)
          return (
            <div key={item.name} className="flex items-center gap-2">
              <span className="w-16 shrink-0 text-right text-xs font-medium text-white/80">
                {item.name}
              </span>
              <div className="flex-1 overflow-hidden rounded-full bg-white/10">
                <div
                  className={`h-2 rounded-full transition-all duration-700 ${barColors[i % barColors.length]}`}
                  style={{ width: `${width}%` }}
                />
              </div>
              <span className="w-10 shrink-0 text-right text-xs font-semibold text-white/90">
                {item.value}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function CardVisual({ product }: { product: Product }) {
  const [imgError, setImgError] = useState(false)

  if (!imgError) {
    return (
      <div className="relative aspect-[3/2] overflow-hidden bg-gradient-to-br from-emerald-800 to-emerald-950">
        <Image
          src={product.image}
          alt={product.nameEn}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          onError={() => setImgError(true)}
        />
      </div>
    )
  }

  return (
    <div className="relative aspect-[3/2] overflow-hidden bg-gradient-to-br from-emerald-800 to-emerald-950">
      <CompositionVisual product={product} />
    </div>
  )
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border/50 bg-card transition-colors hover:border-border">
      <CardVisual product={product} />
      <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
        <span className="self-start rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          {product.category}
        </span>
        <h3 className="text-base font-semibold">{product.nameEn}</h3>
        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
          {product.shortDescriptionEn}
        </p>

        {product.composition.length > 0 && (
          <div>
            <p className="mb-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Composition
            </p>
            <div className="flex flex-wrap gap-1.5">
              {product.composition.map((item) => (
                <span
                  key={item.name}
                  className="rounded-md border border-border/60 bg-muted/50 px-2 py-0.5 text-xs font-medium text-foreground"
                >
                  {item.name} {item.value}
                </span>
              ))}
            </div>
          </div>
        )}

        {product.benefits.length > 0 && (
          <div>
            <p className="mb-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Key Benefits
            </p>
            <ul className="space-y-1">
              {product.benefits.slice(0, 3).map((benefit, i) => (
                <li
                  key={i}
                  className="text-xs leading-relaxed text-muted-foreground"
                >
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        )}

        {product.applicationRate && (
          <p className="text-xs text-muted-foreground">
            <span className="font-medium text-foreground">Application:</span>{" "}
            {product.applicationRate}
          </p>
        )}

        <Button variant="outline" size="sm" className="mt-auto w-fit" asChild>
          <Link href={`/products/${product.id}`}>Learn More</Link>
        </Button>
      </div>
    </article>
  )
}

export { ProductCard }
