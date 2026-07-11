export interface SocialLinks {
  whatsapp?: string
  linkedin?: string
  facebook?: string
  twitter?: string
  youtube?: string
  instagram?: string
}

export interface CompanyInfo {
  nameAr: string
  nameEn: string
  taglineAr: string
  taglineEn: string
  descriptionAr: string
  descriptionEn: string
  location: {
    address: string
    addressEn: string
    city: string
    cityEn: string
    country: string
    countryEn: string
  }
  phones: readonly string[]
  email: string
  website: string
  social: SocialLinks
  seo?: {
    ogImage?: string
  }
}

export const company = {
  nameAr: "جولدن إيست للتنمية الزراعية",
  nameEn: "Golden East Agricultural Development",

  taglineAr: "حلول علمية لنمو أفضل",
  taglineEn: "Where Science Meets Growth",

  descriptionAr:
    "جولدن إيست للتنمية الزراعية شركة مصرية رائدة في مجال حلول تغذية النبات والأسمدة الزراعية المتخصصة. تجمع خبراتنا بين التطبيق العملي والبحث العلمي لتقديم منتجات وبرامج تغذية متكاملة، تساعد المزارعين على رفع الإنتاجية وتحسين جودة المحاصيل وتعظيم العائد الاقتصادي، مع الالتزام بأعلى المعايير وبناء شراكات مستدامة تدعم نمو القطاع الزراعي في مصر.",

  descriptionEn:
    "Golden East Agricultural Development is an Egyptian company specialized in plant nutrition solutions and agricultural fertilizers. Through high-quality products and science-driven crop nutrition programs, the company helps growers improve productivity, crop quality, and profitability while building long-term partnerships across the agricultural sector.",

  location: {
    address: "المنطقة الصناعية للصناعات الخفيفة",
    addressEn: "Light Industries Industrial Zone",
    city: "بني سويف",
    cityEn: "Beni Suef",
    country: "جمهورية مصر العربية",
    countryEn: "Egypt",
  },

  phones: [] as readonly string[],

  email: "",

  website: "",

  social: {
    whatsapp: "https://wa.me/message/NXXQIURNDMO6P1",
    facebook: "https://facebook.com/goldeneastagri",
    instagram: "https://www.instagram.com/golden_east.agri",
  },
} as const satisfies CompanyInfo

export interface AboutInfo {
  missionEn: string
  missionAr?: string
  visionEn: string
  visionAr?: string
  storyEn: string
  storyAr?: string
}

export const about: AboutInfo = {
  missionEn:
    "To deliver advanced plant nutrition solutions built on quality, scientific knowledge, and practical expertise, empowering growers to achieve higher productivity and better crop performance through reliable products and long-term partnerships.",

  missionAr:
    "تقديم حلول تغذية نبات متطورة تجمع بين الجودة والمعرفة العلمية والخبرة الحقلية الواسعة، لتمكين المزارعين من تحقيق أعلى إنتاجية وأفضل جودة للمحاصيل من خلال منتجات موثوقة وبرامج تغذية متكاملة وشراكات زراعية مستدامة.",

  visionEn:
    "To become a leading plant nutrition and agricultural fertilizer company in Egypt and the Middle East, recognized as the trusted partner for growers seeking quality, innovation, and sustainable agricultural success.",

  visionAr:
    "أن نكون الشركة الرائدة في مجال تغذية النبات والأسمدة الزراعية المتخصصة في مصر والشرق الأوسط، وأن نبقى الشريك الأول الذي يثق به المزارعون بحثاً عن الجودة والابتكار والتميز الزراعي المستدام.",

  storyEn: "",
  storyAr: "",
}

export interface WhyChooseUsItem {
  titleEn: string
  titleAr?: string
  descriptionEn: string
  descriptionAr?: string
  icon: string
}

export const whyChooseUs: WhyChooseUsItem[] = [
  {
    titleEn: "Science-Driven",
    titleAr: "حلول مبنية على أسس علمية",
    descriptionEn: "Modern plant nutrition solutions developed according to scientific principles.",
    descriptionAr: "نعتمد على البحث العلمي والتجارب الحقلية في تطوير حلول تغذية النبات، لضمان أعلى كفاءة وأفضل نتائج على أرض الواقع.",
    icon: "FlaskConical",
  },
  {
    titleEn: "Premium Quality",
    titleAr: "جودة يمكنك الاعتماد عليها",
    descriptionEn: "Reliable formulations designed for consistent field performance.",
    descriptionAr: "تركيبات عالية الجودة تخضع لأعلى معايير التصنيع لضمان أداء ميداني ثابت وموثوق في كل موسم.",
    icon: "BadgeCheck",
  },
  {
    titleEn: "Trusted Partnerships",
    titleAr: "شراكات زراعية راسخة",
    descriptionEn: "Long-term cooperation with agricultural organizations and distribution partners.",
    descriptionAr: "نبني علاقات تعاون طويلة الأمد مع الجمعيات الزراعية وشركاء التوزيع المعتمدين لضمان وصول منتجاتنا إلى كل مزارع.",
    icon: "Sprout",
  },
  {
    titleEn: "Wide Distribution Network",
    titleAr: "انتشار واسع يغطي عدة محافظات",
    descriptionEn: "Serving growers across multiple Egyptian governorates through authorized distributors and agricultural partners.",
    descriptionAr: "نخدم المزارعين في مختلف المحافظات المصرية من خلال شبكة من الموزعين المعتمدين والشركاء الزراعيين الموثوقين.",
    icon: "Globe",
  },
  {
    titleEn: "Customer-Centered Support",
    titleAr: "دعم فني متخصص",
    descriptionEn: "Helping growers achieve better productivity through practical agricultural solutions.",
    descriptionAr: "فريق من الخبراء الزراعيين يقدم الدعم الفني والإرشادات العملية لمساعدة المزارعين على تحقيق أقصى استفادة من منتجاتنا.",
    icon: "Sprout",
  },
]
