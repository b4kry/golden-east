import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { type Product } from "@/data/products"

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border/50 bg-card transition-colors hover:border-border">
      <div className="relative aspect-[3/2] overflow-hidden bg-muted">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
        <span className="self-start rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          {product.category}
        </span>
        <h3 className="text-base font-semibold">{product.name}</h3>
        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>
        <Button variant="outline" size="sm" className="mt-auto w-fit" asChild>
          <Link href={`/products/${product.id}`}>Learn More</Link>
        </Button>
      </div>
    </article>
  )
}

export { ProductCard }
