import {
  Sprout,
  FlaskConical,
  BadgeCheck,
  Globe,
  type LucideIcon,
} from "lucide-react"

import { Section, SectionHeader } from "@/components/layout/section"
import { Grid } from "@/components/layout/grid"
import { whyChooseUs } from "@/data/company"
import { getDictionary, isLocale, defaultLocale } from "@/lib/i18n"

const iconMap: Record<string, LucideIcon> = {
  Sprout,
  FlaskConical,
  BadgeCheck,
  Globe,
}

async function WhyChooseUs({ locale }: { locale?: string }) {
  const resolvedLocale =
    locale && isLocale(locale) ? locale : defaultLocale
  const dict = await getDictionary(resolvedLocale)
  const isArabic = resolvedLocale === "ar"

  if (whyChooseUs.length === 0) return null

  return (
    <Section>
      <SectionHeader
        label={dict.whyChooseUs.title}
        title={dict.whyChooseUs.subtitle}
        description={dict.whyChooseUs.description}
      />
      <Grid cols={2} gap={6} className="mt-16">
        {whyChooseUs.map((item) => {
          const Icon = iconMap[item.icon]
          if (!Icon) return null
          return (
            <div
              key={item.titleEn}
              className="group rounded-2xl border border-border/50 bg-card p-6 shadow-card transition-all duration-200 hover:border-border/80 hover:shadow-card-hover sm:p-8"
            >
              <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary-light/20 text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {isArabic && item.titleAr ? item.titleAr : item.titleEn}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                {isArabic && item.descriptionAr ? item.descriptionAr : item.descriptionEn}
              </p>
            </div>
          )
        })}
      </Grid>
    </Section>
  )
}

export { WhyChooseUs }
