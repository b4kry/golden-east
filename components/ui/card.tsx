import { cn } from "@/lib/utils"

type CardProps = React.ComponentProps<"div"> & {
  hover?: boolean
}

function Card({ className, children, hover = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border/50 bg-card shadow-card",
        hover &&
          "transition-all duration-200 ease-out hover:border-border/80 hover:shadow-card-hover",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

function CardHeader({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-1.5 p-6 sm:p-8", className)} {...props}>
      {children}
    </div>
  )
}

function CardContent({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("p-6 pt-0 sm:p-8 sm:pt-0", className)} {...props}>
      {children}
    </div>
  )
}

function CardFooter({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 p-6 pt-0 sm:p-8 sm:pt-0",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export { Card, CardHeader, CardContent, CardFooter }
export type { CardProps }
