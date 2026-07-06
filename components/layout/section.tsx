import { cn } from "@/lib/utils"
import { Container } from "@/components/layout/container"

type SectionProps = React.ComponentProps<"section"> & {
  contained?: boolean
  containerSize?: "sm" | "md" | "lg" | "xl" | "full"
}

function Section({
  className,
  children,
  contained = true,
  containerSize,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("py-16 sm:py-20 lg:py-24", className)}
      {...props}
    >
      {contained ? (
        <Container size={containerSize}>{children}</Container>
      ) : (
        children
      )}
    </section>
  )
}

type SectionHeaderProps = {
  label?: string
  title: string
  description?: string
  className?: string
  align?: "center" | "left"
}

function SectionHeader({
  label,
  title,
  description,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-3xl",
        align === "center" && "text-center",
        className,
      )}
    >
      {label && (
        <p className="text-sm font-medium tracking-wider text-muted-foreground uppercase">
          {label}
        </p>
      )}
      <h2 className={cn(
        "mt-4 text-[1.75rem] font-bold leading-[1.15] tracking-[-0.02em] text-foreground sm:text-[2.625rem]",
        label ? "" : "",
      )}>
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  )
}

export { Section, SectionHeader }
export type { SectionProps, SectionHeaderProps }
