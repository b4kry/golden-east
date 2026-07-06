import { Section, SectionHeader } from "@/components/layout/section"
import { Card } from "@/components/ui/card"
import { Grid } from "@/components/layout/grid"
import { company, about } from "@/data/company"
import { getDictionary, isLocale, defaultLocale } from "@/lib/i18n"

async function About({ locale }: { locale?: string }) {
  const resolvedLocale =
    locale && isLocale(locale) ? locale : defaultLocale
  const dict = await getDictionary(resolvedLocale)
  const isArabic = resolvedLocale === "ar"
  const name = isArabic ? company.nameAr : company.nameEn
  const tagline = isArabic ? company.taglineAr : company.taglineEn
  const description = isArabic ? company.descriptionAr : company.descriptionEn

  return (
    <Section>
      <SectionHeader
        label={dict.about.title}
        title={name}
        description={tagline}
      />
      <p className="mx-auto mt-12 max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">
        {description}
      </p>

      {about.missionEn && (
        <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-border/50 bg-card p-8 shadow-card">
          <p className="text-sm font-semibold text-primary">
            {dict.about.mission}
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
            {isArabic && about.missionAr ? about.missionAr : about.missionEn}
          </p>
        </div>
      )}

      {about.visionEn && (
        <div className="mx-auto mt-6 max-w-3xl rounded-2xl border border-border/50 bg-card p-8 shadow-card">
          <p className="text-sm font-semibold text-primary">
            {dict.about.vision}
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
            {isArabic && about.visionAr ? about.visionAr : about.visionEn}
          </p>
        </div>
      )}

      {about.stats.length > 0 && (
        <Grid cols={3} gap={6} className="mt-16">
          {about.stats.map((stat) => (
            <Card key={stat.labelEn} className="p-6 text-center shadow-card transition-shadow duration-200 hover:shadow-card-hover sm:p-8">
              <p className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                {isArabic && stat.valueAr ? stat.valueAr : stat.valueEn}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {isArabic && stat.labelAr ? stat.labelAr : stat.labelEn}
              </p>
            </Card>
          ))}
        </Grid>
      )}
    </Section>
  )
}

export { About }
