import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { H2, BodyLg } from "@/components/ui/typography"

function Features({ locale }: { locale?: string }) {
  const isArabic = locale === "ar"

  return (
    <Section>
      <Container className="text-center">
        <H2>{isArabic ? "لماذا منتجاتنا" : "Why Choose Our Products"}</H2>
        <BodyLg className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          {isArabic
            ? "حلولنا الزراعية مصممة بالجودة والأداء في الاعتبار."
            : "Our agricultural solutions are designed with quality and performance in mind."}
        </BodyLg>
      </Container>
    </Section>
  )
}

export { Features }
