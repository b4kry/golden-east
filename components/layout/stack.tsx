import { cn } from "@/lib/utils"

type StackProps = React.ComponentProps<"div"> & {
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12
}

const gapClasses = {
  0: "gap-0",
  1: "gap-1",
  2: "gap-2",
  3: "gap-3",
  4: "gap-4",
  5: "gap-5",
  6: "gap-6",
  8: "gap-8",
  10: "gap-10",
  12: "gap-12",
} as const

function Stack({ className, children, gap = 4, ...props }: StackProps) {
  return (
    <div className={cn("flex flex-col", gapClasses[gap], className)} {...props}>
      {children}
    </div>
  )
}

function HStack({ className, children, gap = 4, ...props }: StackProps) {
  return (
    <div
      className={cn("flex flex-row flex-wrap items-center", gapClasses[gap], className)}
      {...props}
    >
      {children}
    </div>
  )
}

export { Stack, HStack }
export type { StackProps }
