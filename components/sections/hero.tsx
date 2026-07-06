import Image from "next/image"

import { Container } from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import { company } from "@/data/company"
import { getDictionary, isLocale, defaultLocale } from "@/lib/i18n"

async function Hero({ locale }: { locale?: string }) {
  const resolvedLocale =
    locale && isLocale(locale) ? locale : defaultLocale
  const dict = await getDictionary(resolvedLocale)
  const isArabic = resolvedLocale === "ar"

  const name = isArabic ? company.nameAr : company.nameEn
  const tagline = isArabic ? company.taglineAr : company.taglineEn
  const description = isArabic ? company.descriptionAr : company.descriptionEn

  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src="/images/hero/hero.webp"
        alt=""
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
      <Container className="relative py-32 sm:py-40 lg:py-56">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-medium tracking-wider text-white/60 uppercase">
            {name}
          </p>
          <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl lg:text-[4rem] xl:text-[4.5rem]">
            {tagline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[1.125rem] leading-relaxed text-white/70 sm:text-[1.375rem]">
            {description}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="min-w-[180px] bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary-hover" asChild>
              <a href={`/${resolvedLocale}/products`}>
                {dict.home.exploreProducts}
              </a>
            </Button>
            <Button variant="outline" size="lg" className="min-w-[180px] border-white/30 bg-white/10 text-white shadow-lg shadow-black/10 backdrop-blur-sm hover:bg-white/20" asChild>
              <a href={`/${resolvedLocale}/about`}>
                {dict.home.learnMore}
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export { Hero }
