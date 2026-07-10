import Link from "next/link"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import { getDictionary, isLocale, defaultLocale } from "@/lib/i18n"

async function Cta({ locale }: { locale?: string }) {
  const resolvedLocale =
    locale && isLocale(locale) ? locale : defaultLocale
  const dict = await getDictionary(resolvedLocale)
  const isArabic = resolvedLocale === "ar"

  return (
    <Section className="bg-surface-alt">
      <Container className="text-center">
        <h2 className="text-[1.75rem] font-bold leading-[1.15] tracking-[-0.02em] text-foreground sm:text-[2.625rem]">
          {dict.cta.title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {dict.cta.description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="min-w-[180px]" asChild>
            <Link href={`/${resolvedLocale}/products`}>
              {isArabic ? "تصفح المنتجات" : dict.home.exploreProducts}
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="min-w-[180px]" asChild>
            <Link href={`/${resolvedLocale}/quote`}>
              {dict.quote.title}
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  )
}

export { Cta }
