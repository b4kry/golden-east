"use client"

import { Container } from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import { useParams } from "next/navigation"

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const params = useParams()
  const locale = typeof params?.locale === "string" ? params.locale : "en"
  const isArabic = locale === "ar"

  return (
    <Container className="flex flex-1 items-center justify-center py-24">
      <div className="mx-auto max-w-md text-center">
        <h1 className="text-4xl font-bold">
          {isArabic ? "حدث خطأ" : "Something went wrong"}
        </h1>
        <p className="mt-4 text-muted-foreground">
          {isArabic
            ? "حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى."
            : "An unexpected error occurred. Please try again."}
        </p>
        <Button className="mt-8" onClick={reset}>
          {isArabic ? "حاول مرة أخرى" : "Try Again"}
        </Button>
      </div>
    </Container>
  )
}
