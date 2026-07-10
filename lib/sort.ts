import type { Product } from "@/data/products"

export function sortProducts(products: Product[]): Product[] {
  return [...products].sort((a, b) => {
    if (a.registered !== b.registered) {
      return a.registered ? -1 : 1
    }
    return a.sortOrder - b.sortOrder
  })
}
