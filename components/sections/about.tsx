import Link from "next/link"
import { Section, SectionHeader } from "@/components/layout/section"
import { Button } from "@/components/ui/button"
import { company, about } from "@/data/company"
import { getDictionary, isLocale, defaultLocale } from "@/lib/i18n"

async function About({ locale, compact }: { locale?: string; compact?: boolean }) {
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

      {compact ? (
        <div className="mt-10 flex justify-center">
          <Button asChild>
            <Link href={`/${resolvedLocale}/about`}>
              {dict.home.learnMore}
            </Link>
          </Button>
        </div>
      ) : (
        <>
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
        </>
      )}
    </Section>
  )
}

export { About }
