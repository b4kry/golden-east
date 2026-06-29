import Link from "next/link"

import { Container } from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import { company } from "@/data/company"

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.7_0.1_150/0.15),transparent_70%)]"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,oklch(0.6_0.08_80/0.08),transparent_60%)]"
      />
      <div
        className="absolute inset-0 bg-[length:48px_48px] opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, oklch(0 0 0 / 0.5) 1px, transparent 0)",
        }}
      />
      <Container className="relative py-28 sm:py-36 lg:py-48">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-block text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {company.nameEn}
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-7xl">
            {company.taglineEn}
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-muted-foreground sm:text-xl/8">
            {company.descriptionEn}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/products">Explore Our Products</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export { Hero }
