export interface CompositionItem {
  name: string
  value: string
}

export interface ProductSeo {
  titleAr?: string
  titleEn?: string
  descriptionAr?: string
  descriptionEn?: string
}

export interface ProductImages {
  cover: string
  gallery: string[]
  brochure?: string
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

  images: ProductImages

  featured: boolean

  heroProduct: boolean

  sortOrder: number

  status: "active" | "coming-soon"

  tags?: string[]

  seo?: ProductSeo

  longDescriptionAr?: string
  longDescriptionEn?: string

  unit?: string

  packaging?: string

  relatedProductIds?: string[]

  highlight?: boolean
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
      { name: "Calcium", value: "18%" },
      { name: "Nitrate", value: "10%" },
      { name: "Boron", value: "1%" },
    ],

    benefits: [
      "يزيد صلابة الأنسجة النباتية",
      "يقوي تحمل النبات لدرجات الحرارة المرتفعة",
      "يساهم في نجاح عملية الإخصاب",
      "يقلل انفصال الأزهار بعد العقد",
      "يقلل تساقط الثمار",
      "يشجع نمو الجذور",
      "يحمي الجذور من العفن والتحلل",
      "يرفع مقاومة الأمراض البكتيرية والفطرية",
      "يزيد القدرة التخزينية للثمار والدرنات والأبصال",
      "يقلل التأثير الضار للصوديوم والماغنسيوم الزائد",
    ],

    applicationRate: "1 لتر / فدان (رش ورقي)",

    suitableCrops: [
      "الموالح",
      "الموز",
      "الرمان",
      "العنب",
      "الخوخ",
      "البرقوق",
      "الطماطم",
      "البطاطس",
      "الفلفل",
      "الباذنجان",
      "الخيار",
      "البصل",
      "الثوم",
      "الذرة",
      "القمح",
      "القطن",
      "الأرز",
      "بنجر السكر",
      "الفول السوداني",
      "النباتات الطبية والعطرية",
    ],

    images: {
      cover: "/products/covers/bestcal.png",
      gallery: [],
    },

    featured: true,
    heroProduct: true,
    sortOrder: 1,

    status: "active",

    tags: ["calcium", "nitrate", "boron", "liquid-fertilizer", "foliar"],


    packaging: "عبوات 1 لتر / نصف لتر",
  },
  {
    id: "el-nesr",
    slug: "el-nesr",

    nameAr: "النسر",
    nameEn: "El Nesr",

    category: "Liquid Fertilizer",

    shortDescriptionAr:
      "سماد ورقي سائل متعدد العناصر مدعم بالأحماض الأمينية لتحسين النمو والإنتاج وجودة المحصول.",

    shortDescriptionEn:
      "Multi-nutrient liquid foliar fertilizer enriched with amino acids for improved growth, yield, and crop quality.",

    composition: [
      { name: "Nitrogen (N)", value: "10%" },
      { name: "Potassium (K)", value: "10%" },
      { name: "Magnesium (Mg)", value: "3%" },
      { name: "Amino Acids", value: "23%" },
    ],

    benefits: [
      "تنشيط النمو الخضري بصورة متوازنة",
      "تحسين تكوين المجموع الخضري",
      "زيادة سرعة الامتصاص والاستفادة من العناصر",
      "تقليل الفاقد من العناصر الغذائية",
      "تحسين التزهير والعقد",
      "زيادة نسبة تكوين الثمار",
      "تحسين جودة المحصول",
      "زيادة مقاومة النبات للإجهاد الحراري والبرودة والملوحة",
      "زيادة نشاط الجذور وتحسين النشاط الفسيولوجي",
      "زيادة تكوين الكلوروفيل وتحسين البناء الضوئي",
    ],

    applicationRate: "20 لتر / فدان",

    suitableCrops: [
      "المحاصيل الحقلية",
      "محاصيل الخضر",
      "محاصيل الفاكهة",
      "محاصيل العلف",
      "محاصيل السكر",
      "المحاصيل الزيتية",
      "النباتات الطبية والعطرية",
      "نباتات الزينة",
    ],

    images: {
      cover: "/products/covers/elnesr.png",
      gallery: [],
    },

    featured: true,
    heroProduct: false,
    sortOrder: 2,

    status: "active",

    tags: ["npk", "amino-acids", "liquid-fertilizer", "foliar"],


    packaging: "عبوات 20/10/5 لتر",
  },
  {
    id: "first-one",
    slug: "first-one",

    nameAr: "فرست ون",
    nameEn: "First One",

    category: "Water Soluble Fertilizer",

    shortDescriptionAr:
      "سماد سريع الذوبان في الماء يحتوي على العناصر الكبرى والكالسيوم ومدعم بالأحماض الأمينية.",

    shortDescriptionEn:
      "Fast-dissolving water soluble fertilizer with macronutrients, calcium, and amino acids for vigorous growth.",

    composition: [
      { name: "Nitrogen (N)", value: "24%" },
      { name: "Potassium (K₂O)", value: "18%" },
      { name: "Calcium (Ca)", value: "5%" },
      { name: "Amino Acids", value: "Contains" },
    ],

    benefits: [
      "تنشيط النمو الخضري",
      "تحسين عملية التلقيح والعقد",
      "تحفيز تكوين الجذور",
      "زيادة سرعة نمو النبات",
      "زيادة انقسام الخلايا",
      "زيادة حجم المحصول",
      "تحسين امتصاص العناصر الغذائية",
      "رفع مقاومة النبات للإجهاد الحراري والملحي",
      "زيادة مقاومة الأمراض",
      "تحسين تكوين الجنين داخل البذور",
    ],

    applicationRate: "يضاف حسب برنامج التسميد",

    suitableCrops: [
      "المحاصيل الحقلية",
      "محاصيل الخضر",
      "محاصيل الفاكهة",
      "المحاصيل السكرية",
    ],

    images: {
      cover: "/products/covers/firstone.png",
      gallery: [],
    },

    featured: true,
    heroProduct: false,
    sortOrder: 3,

    status: "active",

    tags: ["nitrogen", "potassium", "calcium", "amino-acids", "water-soluble"],

  },
  {
    id: "golden-east-grow",
    slug: "golden-east-grow",

    nameAr: "جولدن إيست جرو",
    nameEn: "Golden East Grow",

    category: "Compound Fertilizer",

    shortDescriptionAr:
      "سماد مركب عالي الذوبان في الماء يحتوي على النيتروجين والكالسيوم والبوتاسيوم مدعماً بالأحماض الأمينية والعناصر الصغرى.",

    shortDescriptionEn:
      "Highly water-soluble compound fertilizer with nitrogen, calcium, potassium, amino acids, and micronutrients.",

    composition: [
      { name: "Nitrogen (N)", value: "8%" },
      { name: "Calcium (Ca)", value: "5%" },
      { name: "Potassium (K)", value: "12%" },
      { name: "Amino Acids", value: "Contains" },
      { name: "Micronutrients", value: "Contains" },
    ],

    benefits: [
      "تنشيط النمو الخضري بصورة متوازنة",
      "زيادة تكوين الكلوروفيل وتحسين اللون الأخضر",
      "تحسين التزهير والعقد",
      "تقليل تشقق الثمار والأجواف الداخلية",
      "زيادة صلابة النبات وتقوية جدر الخلايا",
      "تحسين تحمل الحرارة والملوحة",
      "زيادة مقاومة الأمراض والإجهاد",
      "زيادة نسبة المادة الجافة وجودة الثمار",
      "تحسين جودة البذور والدرنات والأبصال",
      "زيادة القدرة التخزينية للمحصول",
    ],

    applicationRate: "1.5 – 2 كجم / 200 لتر ماء (رش ورقي) | 3 – 5 كجم / فدان (تسميد)",

    suitableCrops: [
      "محاصيل الخضر",
      "محاصيل الفاكهة",
      "المحاصيل الحقلية",
      "النباتات الطبية والعطرية",
    ],

    images: {
      cover: "/products/covers/goldeneastgrow(thewizard).png",
      gallery: [],
    },

    featured: true,
    heroProduct: false,
    sortOrder: 4,

    status: "active",

    tags: ["npk", "calcium", "potassium", "amino-acids", "micronutrients", "water-soluble"],


    packaging: "عبوات 1 كجم / 5 كجم",
  },
  {
    id: "golden-cal",
    slug: "golden-cal",

    nameAr: "جولدن كال",
    nameEn: "Golden Cal",

    category: "Calcium Nitrate Fertilizer",

    shortDescriptionAr:
      "سماد يعتمد على نترات الكالسيوم بتركيز 23% لعلاج نقص الكالسيوم وتحسين العقد وجودة الثمار.",

    shortDescriptionEn:
      "Calcium nitrate based fertilizer at 23% concentration for calcium deficiency treatment and improved fruit set and quality.",

    composition: [
      { name: "Calcium Nitrate", value: "23%" },
    ],

    benefits: [
      "يزيد من الإزهار ويحسن نسبة العقد",
      "يحسن جودة الثمار ويزيد الإنتاج",
      "يجعل الثمار أكثر صلابة",
      "يزيد قدرة الثمار على تحمل النقل والتخزين",
      "يعالج أعراض نقص الكالسيوم مثل عفن الطرف الزهري",
      "يحسن نمو حبوب اللقاح ونجاح التلقيح",
      "يحسن انتظام وتجانس حجم الثمار",
      "يقوي جدر الخلايا ويحسن استطالة الخلايا",
      "يزيد مقاومة الأمراض الفطرية",
      "يساعد على خفض pH التربة حول الجذور",
    ],

    applicationRate: "5 لتر / فدان كل 10 أيام",

    suitableCrops: [
      "محاصيل الخضر",
      "أشجار الفاكهة",
      "المحاصيل الحقلية",
    ],

    images: {
      cover: "/products/covers/goldencal.png",
      gallery: [],
    },

    featured: true,
    heroProduct: false,
    sortOrder: 5,

    status: "active",

    tags: ["calcium", "calcium-nitrate", "nitrate", "liquid-fertilizer"],


    packaging: "عبوات 5 لتر / 10 لتر / 20 لتر",
  },
  {
    id: "gold-fit",
    slug: "gold-fit",

    nameAr: "جولد فيت",
    nameEn: "Gold Fit",

    category: "NPK + Calcium + Sulfur Fertilizer",

    shortDescriptionAr:
      "سماد سائل يحتوي على النيتروجين والبوتاسيوم والكالسيوم والكبريت لدعم النمو الخضري وتحسين العقد وجودة الثمار.",

    shortDescriptionEn:
      "Liquid NPK fertilizer with calcium and sulfur for vegetative growth support, improved fruit set, and fruit quality.",

    composition: [
      { name: "Nitrogen (N)", value: "5%" },
      { name: "Potassium (K₂O)", value: "17%" },
      { name: "Calcium (Ca)", value: "2.5%" },
      { name: "Sulfur (S)", value: "3%" },
    ],

    benefits: [
      "يدعم النمو الخضري",
      "ينظم حركة الماء داخل النبات",
      "يقلل تأثير الإجهاد الناتج عن نقص المياه",
      "يعزز كفاءة عملية البناء الضوئي",
      "يزيد صلابة الجدر الخلوية للثمار",
      "يقلل الإصابة بالأمراض الفطرية والبكتيرية",
      "يمنع ظهور أعراض نقص الكالسيوم",
      "يساعد النبات على مقاومة الإجهاد الحراري",
      "يحسن العقد والتحجيم",
      "يزيد حجم الثمار وجودتها",
    ],

    applicationRate: "3 لتر / 600 لتر ماء (رش ورقي)",

    suitableCrops: [
      "محاصيل الخضر",
      "أشجار الفاكهة",
      "المحاصيل الحقلية",
    ],

    images: {
      cover: "/products/covers/goldfit.png",
      gallery: [],
    },

    featured: true,
    heroProduct: false,
    sortOrder: 6,

    status: "active",

    tags: ["npk", "calcium", "sulfur", "liquid-fertilizer"],

  },
  {
    id: "g-salt",
    slug: "g-salt",

    nameAr: "جي سولت",
    nameEn: "G-Salt",

    category: "Soil Salinity Treatment",

    shortDescriptionAr:
      "سماد متخصص لمعالجة ملوحة التربة يحتوي على الكالسيوم والنيتروجين والماغنسيوم ومواد عضوية.",

    shortDescriptionEn:
      "Specialized soil salinity treatment fertilizer with calcium, nitrogen, magnesium, and organic matter.",

    composition: [
      { name: "Calcium (Ca)", value: "15%" },
      { name: "Nitrogen (N)", value: "10%" },
      { name: "Magnesium (Mg)", value: "5%" },
      { name: "Potassium (K)", value: "8%" },
    ],

    benefits: [
      "يخفف من التأثيرات السلبية لملوحة التربة ومياه الري",
      "يزيد من قدرة التربة على تبادل الأيونات",
      "يساعد على طرد الصوديوم من معقد التبادل",
      "يمنع تكوين المركبات غير القابلة للامتصاص",
      "يحافظ على منطقة الجذور صالحة للنمو",
      "يحسن النشاط الحيوي للنبات وينشط منطقة الجذور",
      "يوفر الكالسيوم والكربون العضوي والنيتروجين سهل الامتصاص",
      "يسمح للنبات بالنمو بصورة طبيعية حتى في ظروف الملوحة",
      "يقلل أعراض إجهاد الملوحة",
      "مناسب لجميع أنواع المحاصيل وأنظمة الري",
    ],

    applicationRate: "2.5 لتر / فدان (ري بالتنقيط) | 5 لتر / فدان (ري بالغمر)",

    suitableCrops: [
      "محاصيل الخضر",
      "محاصيل الفاكهة",
      "المحاصيل الحقلية",
      "النباتات الطبية والعطرية",
      "الأشجار",
    ],

    images: {
      cover: "/products/covers/Gsalt.png",
      gallery: [],
    },

    featured: true,
    heroProduct: false,
    sortOrder: 7,

    status: "active",

    tags: ["salinity", "calcium", "soil-conditioner", "fertigation"],

  },
  {
    id: "mix-gold-pure",
    slug: "mix-gold-pure",

    nameAr: "ميكس جولد بيور",
    nameEn: "Mix Gold Pure",

    category: "Micronutrient Fertilizer",

    shortDescriptionAr:
      "سماد سريع الذوبان يحتوي على خليط متوازن من العناصر الصغرى الأساسية المخلبية.",

    shortDescriptionEn:
      "Fast-dissolving fertilizer with a balanced blend of essential chelated micronutrients for all growth stages.",

    composition: [
      { name: "Magnesium (Mg)", value: "0.5%" },
      { name: "Iron (Fe)", value: "2%" },
      { name: "Manganese (Mn)", value: "1%" },
      { name: "Zinc (Zn)", value: "1%" },
      { name: "Copper (Cu)", value: "0.2%" },
      { name: "Boron (B)", value: "0.25%" },
      { name: "Molybdenum (Mo)", value: "0.06%" },
    ],

    benefits: [
      "ينشط الجهاز الإنزيمي للنبات",
      "يدخل في تكوين الكلوروفيل",
      "يشارك في تركيب الإنزيمات اللازمة للتنفس",
      "ينشط عملية التمثيل الضوئي",
      "يحفز انقسام الخلايا",
      "يمنع ظهور أعراض نقص العناصر الصغرى",
      "يزيد من كفاءة امتصاص العناصر الغذائية",
      "يحسن النمو الخضري",
      "يساعد على رفع جودة الإنتاج",
      "يساهم في مقاومة الأمراض الفطرية الناتجة عن نقص الزنك",
    ],

    applicationRate: "2 لتر / فدان (رش ورقي أو تسميد)",

    suitableCrops: [
      "محاصيل الخضر",
      "المحاصيل الحقلية",
      "أشجار الفاكهة",
    ],

    images: {
      cover: "/products/covers/mixgoldpure.png",
      gallery: [],
    },

    featured: true,
    heroProduct: false,
    sortOrder: 8,

    status: "active",

    tags: ["micronutrients", "chelated", "foliar", "fertigation"],


    packaging: "عبوة 0.5 لتر",
  },
  {
    id: "new-future-green",
    slug: "new-future-green",

    nameAr: "نيو فيوتشر جرين",
    nameEn: "New Future Green",

    category: "Water Soluble Potassium Fertilizer",

    shortDescriptionAr:
      "سماد عالي الذوبان في الماء غني بالبوتاسيوم ومدعم بالنترات لتحسين الإزهار والعقد وجودة الثمار.",

    shortDescriptionEn:
      "Highly water-soluble potassium-rich fertilizer with nitrate for improved flowering, fruit set, and fruit quality.",

    composition: [
      { name: "Potassium (K₂O)", value: "45%" },
      { name: "Nitrate Nitrogen (NO₃-N)", value: "10%" },
    ],

    benefits: [
      "غني بالبوتاسيوم اللازم لجميع مراحل النمو",
      "مهم بشكل خاص خلال مرحلتي التزهير والإثمار",
      "يساعد على زيادة الإزهار ويزيد نسبة العقد",
      "يحسن عملية التحجيم ويزيد حجم ووزن الثمار",
      "يساعد في الوقاية من أعراض نقص العناصر",
      "يحسن نمو النبات ويزيد التفريع والاستطالة",
      "يرفع جودة المحصول",
    ],

    applicationRate: "40 كجم / فدان (أشجار فاكهة) | 20 كجم / فدان (خضر)",

    suitableCrops: [
      "جميع أشجار الفاكهة",
      "جميع محاصيل الخضر",
      "المحاصيل الحقلية",
      "النباتات الطبية والعطرية",
    ],

    images: {
      cover: "/products/covers/newfuturegreen.png",
      gallery: [],
    },

    featured: true,
    heroProduct: false,
    sortOrder: 9,

    status: "active",

    tags: ["potassium", "nitrate", "water-soluble", "flowering"],


    packaging: "عبوات 5 كجم / 10 كجم / 20 كجم",
  },
  {
    id: "super-future-npk",
    slug: "super-future-npk",

    nameAr: "سوبر فيوتشر إن بي كي",
    nameEn: "Super Future NPK",

    category: "Water Soluble NPK Fertilizer",

    shortDescriptionAr:
      "سماد متوازن سريع الذوبان NPK (20-20-20) لتغذية النبات خلال جميع مراحل النمو.",

    shortDescriptionEn:
      "Balanced water soluble NPK fertilizer (20-20-20) for complete plant nutrition throughout all growth stages.",

    composition: [
      { name: "Nitrogen (N)", value: "20%" },
      { name: "Phosphorus (P₂O₅)", value: "20%" },
      { name: "Potassium (K₂O)", value: "20%" },
    ],

    benefits: [
      "يساعد على زيادة حجم الثمار وتحسين لونها",
      "يزيد جودة المحصول والإنتاجية",
      "يساعد على انتشار ونمو الجذور",
      "يحسن العقد والتزهير",
      "يساعد على زيادة التفريع",
      "يسرع نضج المحاصيل",
      "يزيد الكفاءة التخزينية لمحاصيل الخضر والفاكهة",
      "يحسن امتلاء الثمار ويرفع نسبة السكريات",
      "ينشط العمليات الحيوية وتكوين البروتينات",
      "يحسن تكوين الكلوروفيل وينشط الإنزيمات النباتية",
    ],

    applicationRate: "2 كجم / فدان (رش ورقي أو تسميد)",

    suitableCrops: [
      "محاصيل الخضر",
      "المحاصيل الحقلية",
      "أشجار الفاكهة",
      "النباتات الطبية والعطرية",
    ],

    images: {
      cover: "/products/covers/superfuturenpk.png",
      gallery: [],
    },

    featured: true,
    heroProduct: false,
    sortOrder: 10,

    status: "active",

    tags: ["npk", "balanced-fertilizer", "water-soluble", "foliar", "fertigation"],


    packaging: "عبوات 5 كجم / 10 كجم / 20 كجم",
  },
]
