"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ProductCard } from "@/components/shared/product-card"
import { type Product } from "@/data/products"
import type { Dictionary } from "@/lib/i18n"
import { cn } from "@/lib/utils"

const PER_SLIDE = 4

function chunkProducts(products: Product[]) {
  const slides: Product[][] = []
  for (let i = 0; i < products.length; i += PER_SLIDE) {
    slides.push(products.slice(i, i + PER_SLIDE))
  }
  return slides
}

export function ProductsCarousel({ products, dict, locale }: { products: Product[]; dict: Dictionary; locale: string }) {
  const slides = chunkProducts(products)
  const [slide, setSlide] = useState(0)
  const isArabic = locale === "ar"

  const prev = () => setSlide((s) => Math.max(0, s - 1))
  const next = () => setSlide((s) => Math.min(slides.length - 1, s + 1))

  if (slides.length === 0) return null

  return (
    <div className="relative">
      {slides.length > 1 && (
        <>
          <button
            onClick={prev}
            disabled={slide === 0}
            className={cn(
              "absolute -start-4 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-border/60 bg-card shadow-dropdown transition-all duration-200 hover:border-primary/30 hover:text-primary",
              slide === 0 && "pointer-events-none opacity-0",
            )}
            aria-label={isArabic ? "السابق" : "Previous"}
          >
            <ChevronLeft className="size-5 rtl-flip" />
          </button>
          <button
            onClick={next}
            disabled={slide === slides.length - 1}
            className={cn(
              "absolute -end-4 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-border/60 bg-card shadow-dropdown transition-all duration-200 hover:border-primary/30 hover:text-primary",
              slide === slides.length - 1 && "pointer-events-none opacity-0",
            )}
            aria-label={isArabic ? "التالي" : "Next"}
          >
            <ChevronRight className="size-5 rtl-flip" />
          </button>
        </>
      )}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(${isArabic ? '' : '-'}${slide * 100}%)` }}
        >
          {slides.map((slideProducts, slideIdx) => (
            <div
              key={slideIdx}
              className="grid min-w-0 shrink-0 basis-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
              {slideProducts.map((product) => (
                <ProductCard key={product.id} product={product} dict={dict} />
              ))}
            </div>
          ))}
        </div>
      </div>
      {slides.length > 1 && (
        <div className="mt-8 flex justify-center gap-2" role="tablist" aria-label={isArabic ? "اختيار الشريحة" : "Slide selector"}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className={cn(
                "size-2 rounded-full transition-all duration-300",
                i === slide ? "w-6 bg-primary" : "bg-border hover:bg-muted-foreground/40",
              )}
              role="tab"
              aria-selected={i === slide}
              aria-label={isArabic ? `الشريحة ${i + 1}` : `Slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
