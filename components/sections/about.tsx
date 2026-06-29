import { Section, SectionHeader } from "@/components/sections/section"
import { about } from "@/data/company"

function About() {
  return (
    <Section>
      <SectionHeader
        label="About"
        title="About Golden East Agricultural Development"
        description={about.mission}
      />
      <p className="mx-auto mt-12 max-w-3xl text-center text-base leading-8 text-muted-foreground sm:text-lg sm:leading-8">
        {about.story}
      </p>
      <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
        {about.stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-3xl font-bold tracking-tight sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export { About }
