export interface CompositionItem {
  name: string
  value: string
}

export interface Product {
  id: string
  slug: string

  nameAr: string
  nameEn: string

  category: string

  shortDescriptionAr: string
  shortDescriptionEn: string

  composition: CompositionItem[]

  benefits: string[]

  applicationRate: string

  suitableCrops: string[]

  image: string

  brochure?: string

  featured: boolean

  heroProduct: boolean

  sortOrder: number

  status: "active" | "coming-soon"
}

export const products: Product[] = [
  {
    id: "best-cal",
    slug: "best-cal",

    nameAr: "بست كال",
    nameEn: "Best Cal",

    category: "Calcium Fertilizer",

    shortDescriptionAr:
      "سماد كالسيوم سائل مدعم بالبورون لتحسين العقد وجودة الثمار.",

    shortDescriptionEn:
      "Liquid calcium fertilizer enriched with boron for improving fruit set and quality.",

    composition: [
      {
        name: "Calcium",
        value: "18%",
      },
      {
        name: "Nitrate",
        value: "10%",
      },
      {
        name: "Boron",
        value: "1%",
      },
    ],

    benefits: [
      "زيادة صلابة الأنسجة النباتية",
      "تحسين العقد",
      "تقليل تساقط الأزهار والثمار",
      "تحسين نمو الجذور",
      "رفع مقاومة النبات للإجهاد",
    ],

    applicationRate: "1 لتر / فدان",

    suitableCrops: [
      "جميع المحاصيل الزراعية",
    ],

    image: "/products/best-cal.png",

    brochure: "/docs/best-cal.pdf",

    featured: true,

    heroProduct: true,

    sortOrder: 1,

    status: "active",
  },
]
