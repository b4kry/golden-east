export const company = {
  nameAr: "جولدن إيست للتنمية الزراعية",
  nameEn: "Golden East Agricultural Development",

  taglineAr: "حلول متخصصة في تغذية النبات",
  taglineEn: "Plant Nutrition Solutions",

  descriptionAr:
    "شركة متخصصة في إنتاج وتطوير الأسمدة والمغذيات الزراعية.",

  descriptionEn:
    "Specialized in agricultural fertilizers and plant nutrition products.",

  location: {
    address: "المنطقة الصناعية - قطعة 89",
    city: "بني سويف",
    country: "Egypt",
  },

  phones: [
    "01121800882",
    "01281580517",
    "01140270215",
  ],

  email: "",

  website: "",

  social: {},
} as const

export const about: {
  mission: string
  vision: string
  story: string
  stats: Array<{ label: string; value: string }>
} = {
  mission: "",
  vision: "",
  story: "",
  stats: [],
}

export const whyChooseUs: Array<{
  title: string
  description: string
  icon: string
}> = []
