"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import { Container } from "@/components/layout/container"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  const params = useParams()
  const locale = typeof params?.locale === "string" ? params.locale : "en"
  const isArabic = locale === "ar"

  return (
    <Container className="flex flex-1 items-center justify-center py-24">
      <div className="mx-auto max-w-md text-center">
        <p className="text-7xl font-bold text-primary/20">404</p>
        <h1 className="mt-4 text-2xl font-bold text-foreground">
          {isArabic ? "عذراً، الصفحة غير موجودة" : "Page Not Found"}
        </h1>
        <p className="mt-3 text-muted-foreground">
          {isArabic
            ? "لم نتمكن من العثور على الصفحة التي تبحث عنها. قد تكون قد أزيلت أو تغير رابطها."
            : "The page you are looking for does not exist."}
        </p>
        <Button className="mt-8" asChild>
          <Link href={`/${locale}`}>
            {isArabic ? "العودة إلى الرئيسية" : "Go Home"}
          </Link>
        </Button>
      </div>
    </Container>
  )
}
