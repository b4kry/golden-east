import { Card } from "@/components/ui/card"
import { Grid } from "@/components/layout/grid"
import { about } from "@/data/company"

function CompanyStats({ isArabic }: { isArabic: boolean }) {
  if (about.stats.length === 0) return null

  return (
    <Grid cols={3} gap={6} className="mt-16">
      {about.stats.map((stat) => (
        <Card key={stat.labelEn} className="p-6 text-center shadow-card transition-shadow duration-200 hover:shadow-card-hover sm:p-8">
          <p className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {isArabic && stat.valueAr ? stat.valueAr : stat.valueEn}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            {isArabic && stat.labelAr ? stat.labelAr : stat.labelEn}
          </p>
        </Card>
      ))}
    </Grid>
  )
}

export { CompanyStats }
