import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Info, Globe } from '@phosphor-icons/react'

interface VaccineScheduleData {
  country: string
  totalDoses: string
  approach: string
  vaccines: {
    name: string
    timing: string
    doses: number
  }[]
  philosophy: string
}

const scheduleData: VaccineScheduleData[] = [
  {
    country: 'United States (CDC)',
    totalDoses: '26-29 doses by age 6',
    approach: 'Comprehensive protection against all vaccine-preventable diseases',
    vaccines: [
      { name: 'Hepatitis B', timing: 'Birth, 1-2m, 6-18m', doses: 3 },
      { name: 'Rotavirus', timing: '2m, 4m, 6m (if needed)', doses: 3 },
      { name: 'DTaP', timing: '2m, 4m, 6m, 15-18m, 4-6y', doses: 5 },
      { name: 'Hib', timing: '2m, 4m, 6m (if needed), 12-15m', doses: 4 },
      { name: 'Pneumococcal (PCV)', timing: '2m, 4m, 6m, 12-15m', doses: 4 },
      { name: 'Polio (IPV)', timing: '2m, 4m, 6-18m, 4-6y', doses: 4 },
      { name: 'Influenza', timing: 'Annually starting 6m', doses: 1 },
      { name: 'MMR', timing: '12-15m, 4-6y', doses: 2 },
      { name: 'Varicella', timing: '12-15m, 4-6y', doses: 2 },
      { name: 'Hepatitis A', timing: '12-23m (2 doses)', doses: 2 },
    ],
    philosophy: 'Maximizes early protection when infants are most vulnerable to severe disease. Emphasis on herd immunity to protect those who cannot be vaccinated. Multi-dose series ensures robust immunity.'
  },
  {
    country: 'United Kingdom (NHS)',
    totalDoses: '~23 doses by age 5',
    approach: 'Targeted protection focusing on diseases with highest local burden',
    vaccines: [
      { name: '6-in-1 (DTaP, IPV, Hib, Hep B)', timing: '8w, 12w, 16w', doses: 3 },
      { name: 'Rotavirus', timing: '8w, 12w', doses: 2 },
      { name: 'Men B', timing: '8w, 16w, 12m', doses: 3 },
      { name: 'Pneumococcal (PCV)', timing: '12w, 12m', doses: 2 },
      { name: 'Hib/Men C booster', timing: '12m', doses: 1 },
      { name: 'MMR', timing: '12m, 3y4m', doses: 2 },
      { name: 'Preschool booster (4-in-1)', timing: '3y4m', doses: 1 },
      { name: 'Flu (nasal)', timing: 'Annually 2-3y+', doses: 1 },
    ],
    philosophy: 'Focuses on diseases with significant UK disease burden. Uses combination vaccines to reduce injection count. Selective approach based on local epidemiology and cost-effectiveness.'
  },
  {
    country: 'Germany',
    totalDoses: '~24 doses by age 6',
    approach: 'Balance between comprehensive coverage and selective recommendations',
    vaccines: [
      { name: '6-in-1 (DTaP, IPV, Hib, Hep B)', timing: '2m, 3m, 4m, 11-14m', doses: 4 },
      { name: 'Pneumococcal (PCV)', timing: '2m, 4m, 11-14m', doses: 3 },
      { name: 'Rotavirus', timing: '2m, 3m (4m if needed)', doses: 3 },
      { name: 'Men C', timing: '12m', doses: 1 },
      { name: 'MMR', timing: '11-14m, 15-23m', doses: 2 },
      { name: 'Varicella', timing: '11-14m, 15-23m', doses: 2 },
    ],
    philosophy: 'Evidence-based recommendations by STIKO (Standing Committee on Vaccination). Combines comprehensive disease prevention with consideration of individual benefit-risk profiles.'
  },
  {
    country: 'Sweden',
    totalDoses: '~13-16 doses by age 6',
    approach: 'Minimal intervention focusing on high-risk diseases',
    vaccines: [
      { name: 'DTaP-IPV-Hib', timing: '3m, 5m, 12m', doses: 3 },
      { name: 'Pneumococcal (PCV)', timing: '3m, 5m, 12m', doses: 3 },
      { name: 'MMR', timing: '18m, 6-8y', doses: 2 },
      { name: 'Rotavirus', timing: '2-3m (optional, parents choose)', doses: 2 },
    ],
    philosophy: 'Conservative approach emphasizing diseases with severe outcomes. No routine Hep B (low prevalence). Later MMR timing. Rotavirus optional. Focus on essential vaccines only.'
  }
]

export function VaccineScheduleComparison() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 p-6">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Globe size={32} weight="duotone" className="text-primary" />
          <h1 className="text-3xl font-semibold">International Vaccine Schedule Comparison</h1>
        </div>
        <p className="text-muted-foreground">
          Understanding how different countries approach childhood vaccination with evidence-based context
        </p>
      </div>

      <Alert>
        <Info size={20} weight="fill" className="text-primary" />
        <AlertDescription className="ml-2">
          <strong>Important Context:</strong> All schedules shown here are evidence-based and recommended by respected medical authorities in their respective countries. Differences reflect local disease prevalence, healthcare system structure, cultural values, and public health philosophy - not superior or inferior safety profiles. Both comprehensive and selective approaches save lives and prevent disease.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle>Why Do Countries Have Different Vaccine Schedules?</CardTitle>
          <CardDescription>
            Multiple factors influence national vaccination recommendations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h3 className="font-semibold flex items-center gap-2">
                <Badge variant="outline">Disease Prevalence</Badge>
              </h3>
              <p className="text-sm text-muted-foreground">
                Countries prioritize vaccines based on local disease burden. The US includes Hepatitis B at birth due to higher prevalence, while Sweden omits it due to very low rates.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold flex items-center gap-2">
                <Badge variant="outline">Healthcare System</Badge>
              </h3>
              <p className="text-sm text-muted-foreground">
                Universal healthcare systems with guaranteed follow-up can use later schedules, while systems with variable access may front-load protection.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold flex items-center gap-2">
                <Badge variant="outline">Risk-Benefit Philosophy</Badge>
              </h3>
              <p className="text-sm text-muted-foreground">
                US approach maximizes herd immunity and early protection. Nordic approach emphasizes individual necessity and minimal intervention.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold flex items-center gap-2">
                <Badge variant="outline">Economic Factors</Badge>
              </h3>
              <p className="text-sm text-muted-foreground">
                Cost-effectiveness calculations vary by healthcare system. Countries weigh vaccine costs against disease treatment costs differently.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="us" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="us">United States</TabsTrigger>
          <TabsTrigger value="uk">United Kingdom</TabsTrigger>
          <TabsTrigger value="de">Germany</TabsTrigger>
          <TabsTrigger value="se">Sweden</TabsTrigger>
        </TabsList>

        {scheduleData.map((schedule, idx) => {
          const value = ['us', 'uk', 'de', 'se'][idx]
          return (
            <TabsContent key={value} value={value} className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>{schedule.country}</CardTitle>
                  <CardDescription>{schedule.approach}</CardDescription>
                  <div className="pt-2">
                    <Badge variant="secondary" className="text-base">
                      {schedule.totalDoses}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                      Vaccine Schedule
                    </h3>
                    <div className="grid gap-2">
                      {schedule.vaccines.map((vaccine) => (
                        <div
                          key={vaccine.name}
                          className="flex items-start justify-between p-3 rounded-lg border bg-card hover:bg-accent/5 transition-colors"
                        >
                          <div className="space-y-1 flex-1">
                            <div className="font-medium">{vaccine.name}</div>
                            <div className="text-sm text-muted-foreground">{vaccine.timing}</div>
                          </div>
                          <Badge variant="outline">{vaccine.doses} {vaccine.doses === 1 ? 'dose' : 'doses'}</Badge>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 pt-4 border-t">
                    <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                      Public Health Philosophy
                    </h3>
                    <p className="text-sm leading-relaxed">{schedule.philosophy}</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          )
        })}
      </Tabs>

      <Card className="border-amber-200 bg-amber-50/50 dark:border-amber-900 dark:bg-amber-950/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info size={24} weight="duotone" className="text-amber-600 dark:text-amber-400" />
            What This Means for Parents
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p>
            <strong>Neither schedule is "wrong."</strong> Each represents a different evidence-based approach to protecting children. US schedules prioritize maximum protection when disease risk is highest (infancy), while some European schedules use a more selective approach based on lower local disease burden and robust public health infrastructure.
          </p>
          <p>
            <strong>US infant mortality is not caused by vaccines.</strong> Higher US infant mortality compared to Europe is attributed to prematurity rates, socioeconomic factors, healthcare access disparities, and differences in birth registration practices - not vaccination rates. Countries with higher vaccination rates often have lower infant mortality.
          </p>
          <p>
            <strong>More vaccines does not mean "for profit."</strong> The CDC vaccine schedule is developed by independent scientific committees (ACIP) based on disease burden data, not pharmaceutical profit. Most childhood vaccines are provided at or below cost through government bulk purchasing programs (Vaccines for Children program).
          </p>
          <p>
            <strong>Consider your context.</strong> If you live in the US, the CDC schedule is designed for US disease prevalence, healthcare access patterns, and population immunity levels. Selectively following another country's schedule may leave your child vulnerable to diseases that are more common in your local area.
          </p>
          <p>
            <strong>International differences validate the importance of shared decision-making.</strong> The fact that evidence-based medicine produces different recommendations in different contexts shows that vaccine decisions involve values, risk tolerance, and contextual factors - not just pure science. This makes informed consent conversations even more important.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
