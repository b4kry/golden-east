export interface CompositionItem {
  name: string
  value: string
  nameAr?: string
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
  categoryAr?: string

  shortDescriptionAr: string
  shortDescriptionEn: string

  composition: CompositionItem[]

  benefits: string[]
  benefitsEn?: string[]

  applicationRate: string
  applicationRateEn?: string

  suitableCrops: string[]
  suitableCropsEn?: string[]

  images: ProductImages

  featured: boolean

  heroProduct: boolean

  registered: boolean

  sortOrder: number

  status: "active" | "coming-soon"

  tags?: string[]
  tagsAr?: string[]

  seo?: ProductSeo

  longDescriptionAr?: string
  longDescriptionEn?: string

  unit?: string

  packaging?: string
  packagingEn?: string

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
    categoryAr: "سماد كالسيوم",

    shortDescriptionAr:
      "سماد كالسيوم سائل مدعم بالبورون لتحسين العقد وجودة الثمار.",

    shortDescriptionEn:
      "Liquid calcium fertilizer enriched with boron for improving fruit set and quality.",

    composition: [
      { name: "Calcium", value: "18%", nameAr: "كالسيوم" },
      { name: "Nitrate", value: "10%", nameAr: "نترات" },
      { name: "Boron", value: "1%", nameAr: "بورون" },
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
    registered: true,
    sortOrder: 1,

    status: "active",

    tags: ["calcium", "nitrate", "boron", "liquid-fertilizer", "foliar"],
    tagsAr: ["كالسيوم", "نترات", "بورون", "سماد سائل", "رش ورقي"],

    benefitsEn: [
      "Increases plant tissue firmness",
      "Enhances plant tolerance to high temperatures",
      "Supports successful fertilization",
      "Reduces flower drop after fruit set",
      "Reduces fruit drop",
      "Promotes root growth",
      "Protects roots from rot and decay",
      "Increases resistance to bacterial and fungal diseases",
      "Improves storage capacity of fruits, tubers, and bulbs",
      "Reduces harmful effects of excess sodium and magnesium",
    ],
    applicationRateEn: "1 liter / feddan (foliar spray)",
    suitableCropsEn: [
      "Citrus",
      "Banana",
      "Pomegranate",
      "Grapes",
      "Peaches",
      "Plums",
      "Tomato",
      "Potato",
      "Pepper",
      "Eggplant",
      "Cucumber",
      "Onion",
      "Garlic",
      "Corn",
      "Wheat",
      "Cotton",
      "Rice",
      "Sugar Beet",
      "Peanut",
      "Medicinal and Aromatic Plants",
    ],
    packaging: "عبوات 1 لتر / نصف لتر",
    packagingEn: "1L / 0.5L bottles",
  },
  {
    id: "el-nesr",
    slug: "el-nesr",

    nameAr: "النسر",
    nameEn: "El Nesr",

    category: "Liquid Fertilizer",
    categoryAr: "سماد سائل",

    shortDescriptionAr:
      "سماد ورقي سائل متعدد العناصر مدعم بالأحماض الأمينية لتحسين النمو والإنتاج وجودة المحصول.",

    shortDescriptionEn:
      "Multi-nutrient liquid foliar fertilizer enriched with amino acids for improved growth, yield, and crop quality.",

    composition: [
      { name: "Nitrogen (N)", value: "10%", nameAr: "نيتروجين" },
      { name: "Potassium (K)", value: "10%", nameAr: "بوتاسيوم" },
      { name: "Magnesium (Mg)", value: "3%", nameAr: "ماغنسيوم" },
      { name: "Amino Acids", value: "23%", nameAr: "أحماض أمينية" },
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
    registered: true,
    sortOrder: 2,

    status: "active",
    tags: ["npk", "amino-acids", "liquid-fertilizer", "foliar"],
    tagsAr: ["إن بي كي", "أحماض أمينية", "سماد سائل", "رش ورقي"],

    benefitsEn:
      [
      "Stimulates balanced vegetative growth",
      "Improves formation of vegetative mass",
      "Increases absorption speed and nutrient utilization",
      "Reduces nutrient loss",
      "Improves flowering and fruit set",
      "Increases fruit formation rate",
      "Improves crop quality",
      "Enhances plant resistance to heat, cold, and salinity stress",
      "Boosts root activity and physiological functions",
      "Increases chlorophyll formation and improves photosynthesis",
    ],
    applicationRateEn: "20 liters / feddan",
    suitableCropsEn: [
      "Field Crops",
      "Vegetables",
      "Fruit Crops",
      "Forage Crops",
      "Sugar Crops",
      "Oil Crops",
      "Medicinal and Aromatic Plants",
      "Ornamental Plants",
    ],
    packaging: "عبوات 20/10/5 لتر",
    packagingEn: "20L / 10L / 5L containers",
  },
  {
    id: "first-one",
    slug: "first-one",

    nameAr: "فرست ون",
    nameEn: "First One",

    category: "Water Soluble Fertilizer",
    categoryAr: "سماد سريع الذوبان",

    shortDescriptionAr:
      "سماد سريع الذوبان في الماء يحتوي على العناصر الكبرى والكالسيوم ومدعم بالأحماض الأمينية.",

    shortDescriptionEn:
      "Fast-dissolving water soluble fertilizer with macronutrients, calcium, and amino acids for vigorous growth.",

    composition: [
      { name: "Nitrogen (N)", value: "24%", nameAr: "نيتروجين" },
      { name: "Potassium (K₂O)", value: "18%", nameAr: "بوتاسيوم" },
      { name: "Calcium (Ca)", value: "5%", nameAr: "كالسيوم" },
      { name: "Amino Acids", value: "Contains", nameAr: "أحماض أمينية" },
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

    benefitsEn: [
      "Stimulates vegetative growth",
      "Improves pollination and fruit set",
      "Promotes root formation",
      "Increases plant growth rate",
      "Accelerates cell division",
      "Increases crop yield",
      "Improves nutrient absorption",
      "Enhances plant resistance to heat and salt stress",
      "Increases disease resistance",
      "Improves embryo formation within seeds",
    ],
    applicationRateEn: "Applied according to fertilization program",
    suitableCropsEn: [
      "Field Crops",
      "Vegetables",
      "Fruit Crops",
      "Sugar Crops",
    ],

    images: {
      cover: "/products/covers/firstone.png",
      gallery: [],
    },

    featured: true,
    heroProduct: false,
    registered: false,
    sortOrder: 3,

    status: "active",

    tags: ["nitrogen", "potassium", "calcium", "amino-acids", "water-soluble"],
    tagsAr: ["نيتروجين", "بوتاسيوم", "كالسيوم", "أحماض أمينية", "سريع الذوبان"],

  },
  {
    id: "golden-east-grow",
    slug: "golden-east-grow",

    nameAr: "جولدن إيست جرو",
    nameEn: "Golden East Grow",

    category: "Compound Fertilizer",
    categoryAr: "سماد مركب",

    shortDescriptionAr:
      "سماد مركب عالي الذوبان في الماء يحتوي على النيتروجين والكالسيوم والبوتاسيوم مدعماً بالأحماض الأمينية والعناصر الصغرى.",

    shortDescriptionEn:
      "Highly water-soluble compound fertilizer with nitrogen, calcium, potassium, amino acids, and micronutrients.",

    composition: [
      { name: "Nitrogen (N)", value: "8%", nameAr: "نيتروجين" },
      { name: "Calcium (Ca)", value: "5%", nameAr: "كالسيوم" },
      { name: "Potassium (K)", value: "12%", nameAr: "بوتاسيوم" },
      { name: "Amino Acids", value: "Contains", nameAr: "أحماض أمينية" },
      { name: "Micronutrients", value: "Contains", nameAr: "عناصر صغرى" },
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
    registered: true,
    sortOrder: 4,

    status: "active",

    tags: ["npk", "calcium", "potassium", "amino-acids", "micronutrients", "water-soluble"],
    tagsAr: ["إن بي كي", "كالسيوم", "بوتاسيوم", "أحماض أمينية", "عناصر صغرى", "سريع الذوبان"],

    benefitsEn: [
      "Promotes balanced vegetative growth",
      "Increases chlorophyll formation and improves green color",
      "Improves flowering and fruit set",
      "Reduces fruit cracking and internal cavities",
      "Increases plant firmness and strengthens cell walls",
      "Improves heat and salinity tolerance",
      "Increases disease and stress resistance",
      "Increases dry matter content and fruit quality",
      "Improves seed, tuber, and bulb quality",
      "Increases crop storage capacity",
    ],
    applicationRateEn: "1.5 – 2 kg / 200 L water (foliar) | 3 – 5 kg / feddan (soil)",
    suitableCropsEn: [
      "Vegetables",
      "Fruit Crops",
      "Field Crops",
      "Medicinal and Aromatic Plants",
    ],
    packaging: "عبوات 1 كجم / 5 كجم",
    packagingEn: "1 kg / 5 kg packages",
  },
  {
    id: "golden-cal",
    slug: "golden-cal",

    nameAr: "جولدن كال",
    nameEn: "Golden Cal",

    category: "Calcium Nitrate Fertilizer",
    categoryAr: "سماد نترات الكالسيوم",

    shortDescriptionAr:
      "سماد يعتمد على نترات الكالسيوم بتركيز 23% لعلاج نقص الكالسيوم وتحسين العقد وجودة الثمار.",

    shortDescriptionEn:
      "Calcium nitrate based fertilizer at 23% concentration for calcium deficiency treatment and improved fruit set and quality.",

    composition: [
      { name: "Calcium Nitrate", value: "23%", nameAr: "نترات الكالسيوم" },
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
    registered: true,
    sortOrder: 5,

    status: "active",

    tags: ["calcium", "calcium-nitrate", "nitrate", "liquid-fertilizer"],
    tagsAr: ["كالسيوم", "نترات كالسيوم", "نترات", "سماد سائل"],

    benefitsEn: [
      "Increases flowering and improves fruit set percentage",
      "Improves fruit quality and increases yield",
      "Makes fruits firmer",
      "Increases fruit tolerance to transport and storage",
      "Treats calcium deficiency symptoms such as blossom end rot",
      "Improves pollen grain growth and successful pollination",
      "Improves fruit size uniformity and consistency",
      "Strengthens cell walls and improves cell elongation",
      "Increases resistance to fungal diseases",
      "Helps lower soil pH around the root zone",
    ],
    applicationRateEn: "5 liters / feddan every 10 days",
    suitableCropsEn: [
      "Vegetables",
      "Fruit Trees",
      "Field Crops",
    ],
    packaging: "عبوات 5 لتر / 10 لتر / 20 لتر",
    packagingEn: "5L / 10L / 20L containers",
  },
  {
    id: "gold-fit",
    slug: "gold-fit",

    nameAr: "جولد فيت",
    nameEn: "Gold Fit",

    category: "NPK + Calcium + Sulfur Fertilizer",
    categoryAr: "سماد NPK مع الكالسيوم والكبريت",

    shortDescriptionAr:
      "سماد سائل يحتوي على النيتروجين والبوتاسيوم والكالسيوم والكبريت لدعم النمو الخضري وتحسين العقد وجودة الثمار.",

    shortDescriptionEn:
      "Liquid NPK fertilizer with calcium and sulfur for vegetative growth support, improved fruit set, and fruit quality.",

    composition: [
      { name: "Nitrogen (N)", value: "5%", nameAr: "نيتروجين" },
      { name: "Potassium (K₂O)", value: "17%", nameAr: "بوتاسيوم" },
      { name: "Calcium (Ca)", value: "2.5%", nameAr: "كالسيوم" },
      { name: "Sulfur (S)", value: "3%", nameAr: "كبريت" },
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
    registered: true,
    sortOrder: 6,

    status: "active",

    benefitsEn: [
      "Supports vegetative growth",
      "Regulates water movement within the plant",
      "Reduces stress from water deficiency",
      "Enhances photosynthesis efficiency",
      "Increases fruit cell wall firmness",
      "Reduces susceptibility to fungal and bacterial diseases",
      "Prevents calcium deficiency symptoms",
      "Helps plants resist heat stress",
      "Improves fruit set and sizing",
      "Increases fruit size and quality",
    ],
    applicationRateEn: "3 liters / 600 L water (foliar spray)",
    suitableCropsEn: [
      "Vegetables",
      "Fruit Trees",
      "Field Crops",
    ],

    tags: ["npk", "calcium", "sulfur", "liquid-fertilizer"],
    tagsAr: ["إن بي كي", "كالسيوم", "كبريت", "سماد سائل"],

  },
  {
    id: "g-salt",
    slug: "g-salt",

    nameAr: "جي سولت",
    nameEn: "G-Salt",

    category: "Soil Salinity Treatment",
    categoryAr: "معالج ملوحة التربة",

    shortDescriptionAr:
      "سماد متخصص لمعالجة ملوحة التربة يحتوي على الكالسيوم والنيتروجين والماغنسيوم ومواد عضوية.",

    shortDescriptionEn:
      "Specialized soil salinity treatment fertilizer with calcium, nitrogen, magnesium, and organic matter.",

    composition: [
      { name: "Calcium (Ca)", value: "15%", nameAr: "كالسيوم" },
      { name: "Nitrogen (N)", value: "10%", nameAr: "نيتروجين" },
      { name: "Magnesium (Mg)", value: "5%", nameAr: "ماغنسيوم" },
      { name: "Potassium (K)", value: "8%", nameAr: "بوتاسيوم" },
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
    registered: true,
    sortOrder: 7,

    status: "active",

    benefitsEn: [
      "Mitigates negative effects of soil and irrigation water salinity",
      "Increases soil cation exchange capacity",
      "Helps displace sodium from the exchange complex",
      "Prevents formation of non-absorbable compounds",
      "Maintains a healthy root zone for growth",
      "Improves plant biological activity and stimulates root zone",
      "Provides easily absorbable calcium, organic carbon, and nitrogen",
      "Allows normal plant growth even under saline conditions",
      "Reduces salinity stress symptoms",
      "Suitable for all crop types and irrigation systems",
    ],
    applicationRateEn: "2.5 liters / feddan (drip irrigation) | 5 liters / feddan (flood irrigation)",
    suitableCropsEn: [
      "Vegetables",
      "Fruit Crops",
      "Field Crops",
      "Medicinal and Aromatic Plants",
      "Trees",
    ],

    tags: ["salinity", "calcium", "soil-conditioner", "fertigation"],
    tagsAr: ["ملوحة", "كالسيوم", "محسن تربة", "تسميد"],

  },
  {
    id: "mix-gold-pure",
    slug: "mix-gold-pure",

    nameAr: "ميكس جولد بيور",
    nameEn: "Mix Gold Pure",

    category: "Micronutrient Fertilizer",
    categoryAr: "سماد العناصر الصغرى",

    shortDescriptionAr:
      "سماد سريع الذوبان يحتوي على خليط متوازن من العناصر الصغرى الأساسية المخلبية.",

    shortDescriptionEn:
      "Fast-dissolving fertilizer with a balanced blend of essential chelated micronutrients for all growth stages.",

    composition: [
      { name: "Magnesium (Mg)", value: "0.5%", nameAr: "ماغنسيوم" },
      { name: "Iron (Fe)", value: "2%", nameAr: "حديد" },
      { name: "Manganese (Mn)", value: "1%", nameAr: "منجنيز" },
      { name: "Zinc (Zn)", value: "1%", nameAr: "زنك" },
      { name: "Copper (Cu)", value: "0.2%", nameAr: "نحاس" },
      { name: "Boron (B)", value: "0.25%", nameAr: "بورون" },
      { name: "Molybdenum (Mo)", value: "0.06%", nameAr: "مولبيدنيوم" },
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
    registered: true,
    sortOrder: 8,

    status: "active",

    tags: ["micronutrients", "chelated", "foliar", "fertigation"],
    tagsAr: ["عناصر صغرى", "مخلبي", "رش ورقي", "تسميد"],

    benefitsEn: [
      "Activates the plant enzyme system",
      "Contributes to chlorophyll formation",
      "Participates in synthesizing respiration enzymes",
      "Stimulates photosynthesis",
      "Promotes cell division",
      "Prevents micronutrient deficiency symptoms",
      "Increases nutrient absorption efficiency",
      "Improves vegetative growth",
      "Helps improve crop quality",
      "Contributes to resistance against fungal diseases caused by zinc deficiency",
    ],
    applicationRateEn: "2 liters / feddan (foliar spray or fertigation)",
    suitableCropsEn: [
      "Vegetables",
      "Field Crops",
      "Fruit Trees",
    ],
    packaging: "عبوة 0.5 لتر",
    packagingEn: "0.5L container",
  },
  {
    id: "new-future-green",
    slug: "new-future-green",

    nameAr: "نيو فيوتشر جرين",
    nameEn: "New Future Green",

    category: "Water Soluble Potassium Fertilizer",
    categoryAr: "سماد بوتاسيوم سريع الذوبان",

    shortDescriptionAr:
      "سماد عالي الذوبان في الماء غني بالبوتاسيوم ومدعم بالنترات لتحسين الإزهار والعقد وجودة الثمار.",

    shortDescriptionEn:
      "Highly water-soluble potassium-rich fertilizer with nitrate for improved flowering, fruit set, and fruit quality.",

    composition: [
      { name: "Potassium (K₂O)", value: "45%", nameAr: "بوتاسيوم" },
      { name: "Nitrate Nitrogen (NO₃-N)", value: "10%", nameAr: "نيتروجين نتراتي" },
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
    registered: true,
    sortOrder: 9,

    status: "active",

    tags: ["potassium", "nitrate", "water-soluble", "flowering"],
    tagsAr: ["بوتاسيوم", "نترات", "سريع الذوبان", "تزهير"],

    benefitsEn: [
      "Rich in potassium needed for all growth stages",
      "Especially important during flowering and fruiting stages",
      "Helps increase flowering and improves fruit set percentage",
      "Improves fruit sizing and increases fruit weight and volume",
      "Helps prevent nutrient deficiency symptoms",
      "Improves plant growth and increases branching and elongation",
      "Enhances crop quality",
    ],
    applicationRateEn: "40 kg / feddan (fruit trees) | 20 kg / feddan (vegetables)",
    suitableCropsEn: [
      "All Fruit Trees",
      "All Vegetables",
      "Field Crops",
      "Medicinal and Aromatic Plants",
    ],
    packaging: "عبوات 5 كجم / 10 كجم / 20 كجم",
    packagingEn: "5 kg / 10 kg / 20 kg packages",
  },
  {
    id: "super-future-npk",
    slug: "super-future-npk",

    nameAr: "سوبر فيوتشر إن بي كي",
    nameEn: "Super Future NPK",

    category: "Water Soluble NPK Fertilizer",
    categoryAr: "سماد NPK سريع الذوبان",

    shortDescriptionAr:
      "سماد متوازن سريع الذوبان NPK (20-20-20) لتغذية النبات خلال جميع مراحل النمو.",

    shortDescriptionEn:
      "Balanced water soluble NPK fertilizer (20-20-20) for complete plant nutrition throughout all growth stages.",

    composition: [
      { name: "Nitrogen (N)", value: "20%", nameAr: "نيتروجين" },
      { name: "Phosphorus (P₂O₅)", value: "20%", nameAr: "فوسفور" },
      { name: "Potassium (K₂O)", value: "20%", nameAr: "بوتاسيوم" },
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
    registered: true,
    sortOrder: 10,

    status: "active",

    tags: ["npk", "balanced-fertilizer", "water-soluble", "foliar", "fertigation"],
    tagsAr: ["إن بي كي", "سماد متوازن", "سريع الذوبان", "رش ورقي", "تسميد"],

    benefitsEn: [
      "Helps increase fruit size and improve color",
      "Increases crop quality and productivity",
      "Promotes root spread and growth",
      "Improves fruit set and flowering",
      "Helps increase branching",
      "Accelerates crop maturity",
      "Increases storage efficiency of vegetables and fruits",
      "Improves fruit filling and raises sugar content",
      "Stimulates vital processes and protein formation",
      "Improves chlorophyll formation and activates plant enzymes",
    ],
    applicationRateEn: "2 kg / feddan (foliar spray or fertigation)",
    suitableCropsEn: [
      "Vegetables",
      "Field Crops",
      "Fruit Trees",
      "Medicinal and Aromatic Plants",
    ],
    packaging: "عبوات 5 كجم / 10 كجم / 20 كجم",
    packagingEn: "5 kg / 10 kg / 20 kg packages",
  },
]
