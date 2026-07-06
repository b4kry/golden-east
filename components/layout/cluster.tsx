import { cn } from "@/lib/utils"
import { type ReactNode } from "react"

type ClusterProps = {
  children: ReactNode
  className?: string
  gap?: 1 | 2 | 3 | 4 | 5 | 6
}

const gapClasses = {
  1: "gap-1",
  2: "gap-2",
  3: "gap-3",
  4: "gap-4",
  5: "gap-5",
  6: "gap-6",
} as const

function Cluster({ children, className, gap = 2 }: ClusterProps) {
  return (
    <div
      className={cn("flex flex-wrap items-center", gapClasses[gap], className)}
    >
      {children}
    </div>
  )
}

export { Cluster }
export type { ClusterProps }
