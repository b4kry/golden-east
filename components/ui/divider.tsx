import { cn } from "@/lib/utils"

type DividerProps = React.ComponentProps<"hr"> & {
  orientation?: "horizontal" | "vertical"
  size?: "sm" | "md" | "lg"
}

const sizeClasses = {
  horizontal: {
    sm: "my-4",
    md: "my-8",
    lg: "my-12",
  },
  vertical: {
    sm: "mx-2 h-4",
    md: "mx-4 h-8",
    lg: "mx-6 h-12",
  },
} as const

function Divider({
  className,
  orientation = "horizontal",
  size = "md",
  ...props
}: DividerProps) {
  return (
    <hr
      className={cn(
        "border-border",
        orientation === "horizontal"
          ? "w-full border-t"
          : "inline-block w-px self-stretch border-l",
        sizeClasses[orientation][size],
        className,
      )}
      {...props}
    />
  )
}

export { Divider }
export type { DividerProps }
