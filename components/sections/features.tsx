import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { H2, BodyLg } from "@/components/ui/typography"

function Features({ locale }: { locale?: string }) {
  const isArabic = locale === "ar"

  return (
    <Section>
      <Container className="text-center">
        <H2>{isArabic ? "لماذا منتجات جولدن إيست" : "Why Choose Our Products"}</H2>
        <BodyLg className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          {isArabic
            ? "منتجاتنا الزراعية تجمع بين أحدث التقنيات العلمية وأعلى معايير الجودة لضمان أفضل أداء لمحاصيلك."
            : "Our agricultural solutions combine cutting-edge science with the highest quality standards for optimal crop performance."}
        </BodyLg>
      </Container>
    </Section>
  )
}

export { Features }
