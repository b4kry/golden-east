import Link from "next/link"
import { Container } from "@/components/layout/container"
import { Button } from "@/components/ui/button"

export default async function NotFound() {
  return (
    <Container className="flex flex-1 items-center justify-center py-24">
      <div className="mx-auto max-w-md text-center">
        <p className="text-7xl font-bold text-primary/20">404</p>
        <h1 className="mt-4 text-2xl font-bold text-foreground">
          Page Not Found
        </h1>
        <p className="mt-3 text-muted-foreground">
          The page you are looking for does not exist.
        </p>
        <Button className="mt-8" asChild>
          <Link href="/en">
            Go Home
          </Link>
        </Button>
      </div>
    </Container>
  )
}
