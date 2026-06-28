import Link from "next/link"

import { Container } from "@/components/layout/container"
import { Separator } from "@/components/ui/separator"
import { company } from "@/data/company"
import { navigation } from "@/data/navigation"

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/40">
      <Container className="py-12 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">{company.name}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {company.description}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Navigation</h3>
            <nav className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Contact</h3>
            <address className="space-y-2 text-sm not-italic text-muted-foreground">
              <p>
                {company.location.address}
                <br />
                {company.location.city},{company.location.country}
              </p>
              <p>
                <a
                  href={`tel:${company.contact.phone}`}
                  className="transition-colors hover:text-foreground"
                >
                  {company.contact.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${company.contact.email}`}
                  className="transition-colors hover:text-foreground"
                >
                  {company.contact.email}
                </a>
              </p>
            </address>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Follow Us</h3>
            <div className="flex flex-col gap-2">
              <a
                href={company.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                LinkedIn
              </a>
              <a
                href={company.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <p className="text-center text-sm text-muted-foreground">
          &copy; {currentYear} {company.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}

export { Footer }
