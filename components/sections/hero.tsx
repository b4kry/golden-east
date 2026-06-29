import Link from "next/link"

import { Container } from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import { company } from "@/data/company"

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] to-background" />
      <Container className="relative py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {company.taglineEn}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl/8">
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
