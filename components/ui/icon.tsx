import { type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

type IconProps = {
  icon: LucideIcon
  className?: string
  "aria-hidden"?: boolean
}

function FeatureIcon({ icon: Icon, className, ...props }: IconProps) {
  return (
    <Icon
      className={cn("size-5 text-primary", className)}
      aria-hidden="true"
      {...props}
    />
  )
}

function SectionIcon({ icon: Icon, className, ...props }: IconProps) {
  return (
    <div
      className={cn(
        "flex size-11 items-center justify-center rounded-lg bg-primary-light text-primary",
        className,
      )}
    >
      <Icon className="size-5" aria-hidden="true" {...props} />
    </div>
  )
}

function BadgeIcon({ icon: Icon, className, ...props }: IconProps) {
  return (
    <Icon
      className={cn("size-3.5 text-current", className)}
      aria-hidden="true"
      {...props}
    />
  )
}

function NavIcon({ icon: Icon, className, ...props }: IconProps) {
  return (
    <Icon
      className={cn("size-4 text-muted-foreground", className)}
      aria-hidden="true"
      {...props}
    />
  )
}

export { FeatureIcon, SectionIcon, BadgeIcon, NavIcon }
export type { IconProps }
