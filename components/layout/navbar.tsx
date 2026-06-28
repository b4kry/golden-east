"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { MenuIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { navigation } from "@/data/navigation"
import { company } from "@/data/company"

function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight"
          >
            {company.shortName}
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <Button asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Toggle menu">
                <MenuIcon className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-sm">
              <nav className="mt-8 flex flex-col gap-2">
                {navigation.map((item) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href)
                  return (
                    <SheetClose key={item.href} asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "rounded-lg px-3 py-2.5 text-base font-medium transition-colors",
                          isActive
                            ? "bg-accent text-accent-foreground"
                            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                        )}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  )
                })}
                <SheetClose asChild>
                  <Button className="mt-4" asChild>
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  )
}

export { Navbar }
