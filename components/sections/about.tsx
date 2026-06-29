import { Section, SectionHeader } from "@/components/sections/section"
import { company } from "@/data/company"
import { cn } from "@/lib/utils"

const contactItems = [
  { label: "Address", value: `${company.location.address}, ${company.location.city}, ${company.location.country}` },
  { label: "Phone", value: company.phones[0] },
  { label: "Email", value: company.email || "TODO" },
] as const

function About() {
  return (
    <Section>
      <SectionHeader
        label="About"
        title={company.nameEn}
        description={company.taglineEn}
      />
      <p className="mx-auto mt-12 max-w-3xl text-center text-base leading-8 text-muted-foreground sm:text-lg sm:leading-8">
        {company.descriptionEn}
      </p>
      <div className="mt-16 grid gap-4 sm:grid-cols-3">
        {contactItems.map((item) => (
          <div
            key={item.label}
            className={cn(
              "rounded-xl border border-border/50 bg-card p-5 text-center sm:p-6",
              !item.value || item.value === "TODO" ? "opacity-40" : "",
            )}
          >
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              {item.label}
            </p>
            <p className="mt-2 text-sm font-medium leading-relaxed">
              {item.value || "—"}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export { About }
