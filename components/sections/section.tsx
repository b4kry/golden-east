import { cn } from "@/lib/utils"
import { Container } from "@/components/layout/container"

function Section({
  className,
  children,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section className={cn("py-16 sm:py-24", className)} {...props}>
      <Container>{children}</Container>
    </section>
  )
}

function SectionHeader({
  label,
  title,
  description,
  className,
}: {
  label?: string
  title: string
  description: string
  className?: string
}) {
  return (
    <div className={cn("mx-auto max-w-2xl text-center", className)}>
      {label && (
        <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          {label}
        </span>
      )}
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-lg leading-8 text-muted-foreground">
        {description}
      </p>
    </div>
  )
}

export { Section, SectionHeader }
