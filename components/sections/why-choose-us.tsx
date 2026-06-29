import {
  Sprout,
  FlaskConical,
  BadgeCheck,
  Globe,
  type LucideIcon,
} from "lucide-react"

import { Section, SectionHeader } from "@/components/sections/section"
import { whyChooseUs } from "@/data/company"

const iconMap: Record<string, LucideIcon> = {
  Sprout,
  FlaskConical,
  BadgeCheck,
  Globe,
}

function WhyChooseUs() {
  return (
    <Section>
      <SectionHeader
        label="Why Choose Us"
        title="Why Choose Golden East"
        description="Discover what sets our agricultural enterprise apart — from field to market."
      />
      {whyChooseUs.length > 0 && (
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {whyChooseUs.map((item) => {
            const Icon = iconMap[item.icon]
            return (
              <div
                key={item.title}
                className="group rounded-xl border border-border/50 bg-card p-6 transition-colors hover:border-border sm:p-8"
              >
                <div className="mb-4 flex size-11 items-center justify-center rounded-lg bg-primary/5 text-primary">
                  {Icon && <Icon className="size-5" />}
                </div>
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      )}
    </Section>
  )
}

export { WhyChooseUs }
