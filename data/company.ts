export const company = {
  name: "Golden East Agricultural Development",
  shortName: "Golden East",
  tagline: "Cultivating the Future of Agriculture",
  description:
    "Golden East Agricultural Development is a premier agricultural enterprise dedicated to sustainable farming, innovative crop production, and delivering high-quality agricultural products to markets across the Middle East and beyond.",
  foundingYear: 2010,
  location: {
    address: "42 Nile Corniche",
    city: "Cairo",
    governorate: "Cairo Governorate",
    country: "Egypt",
  },
  contact: {
    phone: "+20 2 2460 1234",
    email: "info@goldeneast-agri.com",
  },
  social: {
    linkedin: "https://linkedin.com/company/goldeneast",
    facebook: "https://facebook.com/goldeneastagri",
  },
} as const

export const about = {
  mission:
    "To advance sustainable agriculture through innovation, responsible stewardship of land and water resources, and a commitment to delivering nutrition to communities across the region.",
  vision:
    "To be the most trusted agricultural enterprise in the Middle East, setting the benchmark for quality, sustainability, and positive community impact.",
  story:
    "Founded in 2010, Golden East began as a family-run farming operation on the fertile banks of the Nile. Over the past decade and a half, we have grown into a comprehensive agricultural development company spanning crop production, processing, and export. Our journey has been guided by a deep respect for the land and a relentless pursuit of agricultural excellence.",
  stats: [
    { value: "2,000+", label: "Hectares Under Cultivation" },
    { value: "15+", label: "Years of Experience" },
    { value: "500+", label: "Partner Farms" },
    { value: "10+", label: "Export Markets" },
  ] as const,
} as const

export const whyChooseUs = [
  {
    title: "Sustainable Farming Practices",
    description:
      "We employ regenerative agriculture techniques that preserve soil health, conserve water, and reduce environmental impact while maximizing long-term crop yields.",
    icon: "Sprout",
  },
  {
    title: "Innovation & Technology",
    description:
      "From precision irrigation systems to advanced crop monitoring, we integrate cutting-edge agricultural technology to optimise every stage of production.",
    icon: "FlaskConical",
  },
  {
    title: "Quality Assurance",
    description:
      "Every product undergoes rigorous quality control at multiple checkpoints, ensuring compliance with international standards and exceeding customer expectations.",
    icon: "BadgeCheck",
  },
  {
    title: "Market Expertise",
    description:
      "With deep knowledge of both local and international markets, we connect premium Egyptian produce to buyers across the Middle East, Europe, and beyond.",
    icon: "Globe",
  },
] as const
