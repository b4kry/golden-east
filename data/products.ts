export interface Product {
  id: string
  name: string
  category: string
  description: string
  image: string
  // TODO: Add product specifications — variety, grade, packaging options
  // TODO: Add certifications — Organic, GlobalGAP, Fair Trade
  // TODO: Add seasonality / harvest calendar
  // TODO: Add export availability per region
}

export const featuredProducts: Product[] = [
  {
    id: "egyptian-wheat",
    name: "Egyptian Premium Wheat",
    category: "Grains",
    description:
      "High-grade wheat cultivated in the fertile Nile Delta. Known for excellent protein content and superior milling characteristics, it is a staple for bakeries and food processors across the region.",
    image: "/products/wheat.svg",
  },
  {
    id: "navel-oranges",
    name: "Navel Oranges",
    category: "Citrus",
    description:
      "Seedless, sweet oranges grown in Egypt's renowned citrus belt. Vibrant in colour, rich in flavour, and carefully sorted for export to premium markets worldwide.",
    image: "/products/oranges.svg",
  },
  {
    id: "egyptian-cotton",
    name: "Extra-Long Staple Cotton",
    category: "Fiber",
    description:
      "World-renowned Egyptian cotton with extra-long fibres. Prized by luxury textile mills for its exceptional softness, strength, and breathability.",
    image: "/products/cotton.svg",
  },
  {
    id: "medjool-dates",
    name: "Medjool Dates",
    category: "Fruits",
    description:
      "Premium large Medjool dates harvested from Egypt's southern oases. Naturally sweet with a rich, caramel-like flavour and a soft, meaty texture.",
    image: "/products/dates.svg",
  },
]
