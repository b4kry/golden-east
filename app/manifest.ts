import type { MetadataRoute } from "next"
import { company } from "@/data/company"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: company.nameEn,
    short_name: "Golden East",
    description: company.descriptionEn,
    start_url: "/en",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#15803d",
    icons: [
      { src: "/brand/icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  }
}
