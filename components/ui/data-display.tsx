import { type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"
import { H3, H4, Body, Small, Overline } from "@/components/ui/typography"
import { SectionIcon } from "@/components/ui/icon"
import { Stack } from "@/components/layout/stack"

type IconCardProps = {
  icon: LucideIcon
  title: string
  description: string
  className?: string
}

function IconCard({ icon, title, description, className }: IconCardProps) {
  return (
    <Card hover className={cn("p-6 sm:p-8", className)}>
      <Stack gap={4}>
        <SectionIcon icon={icon} />
        <H4>{title}</H4>
        <Body className="text-muted-foreground">{description}</Body>
      </Stack>
    </Card>
  )
}

type StatCardProps = {
  value: string
  label: string
  className?: string
}

function StatCard({ value, label, className }: StatCardProps) {
  return (
    <Card className={cn("p-6 text-center sm:p-8", className)}>
      <p className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
        {value}
      </p>
      <Small className="mt-2 text-muted-foreground">{label}</Small>
    </Card>
  )
}

type FeatureCardProps = {
  icon: LucideIcon
  title: string
  description: string
  className?: string
}

function FeatureCard({ icon: Icon, title, description, className }: FeatureCardProps) {
  return (
    <div className={cn("group rounded-xl border border-border/50 bg-card p-6 transition-all duration-200 hover:border-border hover:shadow-card-hover sm:p-8", className)}>
      <div className="mb-4 flex size-11 items-center justify-center rounded-lg bg-primary-light text-primary">
        <Icon className="size-5" aria-hidden="true" />
      </div>
      <H4>{title}</H4>
      <Body className="mt-2 text-muted-foreground">{description}</Body>
    </div>
  )
}

type SectionHeadingProps = {
  label?: string
  title: string
  description?: string
  className?: string
  align?: "center" | "left"
}

function SectionHeading({
  label,
  title,
  description,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-2xl",
        align === "center" && "text-center",
        className,
      )}
    >
      {label && (
        <Overline className="text-muted-foreground">{label}</Overline>
      )}
      <H3 className={cn("mt-3", label ? "mt-3" : "")}>{title}</H3>
      {description && (
        <Body className="mt-4 text-muted-foreground">{description}</Body>
      )}
    </div>
  )
}

export { IconCard, StatCard, FeatureCard, SectionHeading }
export type { IconCardProps, StatCardProps, FeatureCardProps, SectionHeadingProps }
