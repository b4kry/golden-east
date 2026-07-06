import { cn } from "@/lib/utils"

type HeadingLevel = "1" | "2" | "3" | "4"

function Display({ className, ...props }: React.ComponentProps<"h1">) {
  return (
    <h1
      className={cn(
        "text-display font-bold leading-display tracking-display",
        className,
      )}
      {...props}
    />
  )
}

function H1({ className, ...props }: React.ComponentProps<"h1">) {
  return (
    <h1
      className={cn(
        "text-h1 font-bold leading-h1 tracking-h1",
        className,
      )}
      {...props}
    />
  )
}

function H2({ className, ...props }: React.ComponentProps<"h2">) {
  return (
    <h2
      className={cn(
        "text-h2 font-bold leading-h2 tracking-h2",
        className,
      )}
      {...props}
    />
  )
}

function H3({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      className={cn(
        "text-h3 font-semibold leading-h3 tracking-h3",
        className,
      )}
      {...props}
    />
  )
}

function H4({ className, ...props }: React.ComponentProps<"h4">) {
  return (
    <h4
      className={cn(
        "text-h4 font-semibold leading-h4",
        className,
      )}
      {...props}
    />
  )
}

function BodyLg({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "text-body-lg leading-body-lg",
        className,
      )}
      {...props}
    />
  )
}

function Body({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "text-body leading-body",
        className,
      )}
      {...props}
    />
  )
}

function Small({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "text-small leading-small",
        className,
      )}
      {...props}
    />
  )
}

function Caption({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "text-caption font-medium leading-caption tracking-wide uppercase",
        className,
      )}
      {...props}
    />
  )
}

function Overline({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "text-caption font-semibold leading-caption tracking-wider uppercase",
        className,
      )}
      {...props}
    />
  )
}

export {
  Display,
  H1,
  H2,
  H3,
  H4,
  BodyLg,
  Body,
  Small,
  Caption,
  Overline,
}
export type { HeadingLevel }
