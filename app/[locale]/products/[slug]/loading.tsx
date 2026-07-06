import { Container } from "@/components/layout/container"

export default function ProductLoading() {
  return (
    <Container className="py-16 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="aspect-[4/3] animate-pulse rounded-xl bg-muted" />
        <div className="flex flex-col gap-6">
          <div className="h-5 w-24 animate-pulse rounded-full bg-muted" />
          <div className="h-10 w-3/4 animate-pulse rounded-lg bg-muted" />
          <div className="h-6 w-full animate-pulse rounded-lg bg-muted" />
          <div className="h-6 w-5/6 animate-pulse rounded-lg bg-muted" />
          <div className="mt-4 flex gap-2">
            <div className="h-8 w-20 animate-pulse rounded-lg bg-muted" />
            <div className="h-8 w-20 animate-pulse rounded-lg bg-muted" />
            <div className="h-8 w-20 animate-pulse rounded-lg bg-muted" />
          </div>
          <div className="mt-4 space-y-2">
            <div className="h-4 w-1/4 animate-pulse rounded bg-muted" />
            <div className="h-4 w-full animate-pulse rounded bg-muted" />
            <div className="h-4 w-full animate-pulse rounded bg-muted" />
            <div className="h-4 w-3/4 animate-pulse rounded bg-muted" />
          </div>
          <div className="mt-4 flex gap-4">
            <div className="h-10 w-36 animate-pulse rounded-lg bg-muted" />
            <div className="h-10 w-36 animate-pulse rounded-lg bg-muted" />
          </div>
        </div>
      </div>
    </Container>
  )
}
