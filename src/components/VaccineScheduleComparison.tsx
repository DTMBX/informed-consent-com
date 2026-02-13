import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Info, Globe, Baby, Warning, ShieldCheck, Syringe } from '@phosphor-icons/react'

interface VaccineScheduleData {
  country: string
  code: string
  flag: string
  totalDoses: string
  approach: string
  birthDoseCount: number
  birthLabel: string
  firstVaccineAge: string
  infantMortality: string
  vaccines: {
    name: string
    timing: string
    doses: number
    birthDose?: boolean
  }[]
  philosophy: string
}

const scheduleData: VaccineScheduleData[] = [
  {
    country: 'United States (CDC)',
    code: 'us',
    flag: '🇺🇸',
    totalDoses: '~50 doses by age 6',
    approach: 'Front-loaded comprehensive schedule — most aggressive in the developed world',
    birthDoseCount: 1,
    birthLabel: 'Hepatitis B within 24 hours of birth (all newborns)',
    firstVaccineAge: 'Birth (Day 1)',
    infantMortality: '5.4 per 1,000 live births',
    vaccines: [
      { name: 'Hepatitis B', timing: 'Birth (within 24h), 1 month, 6-18 months', doses: 3, birthDose: true },
      { name: 'Rotavirus', timing: '2m, 4m, 6m', doses: 3 },
      { name: 'DTaP', timing: '2m, 4m, 6m, 15-18m, 4-6y', doses: 5 },
      { name: 'Hib', timing: '2m, 4m, 6m, 12-15m', doses: 4 },
      { name: 'Pneumococcal (PCV)', timing: '2m, 4m, 6m, 12-15m', doses: 4 },
      { name: 'Polio (IPV)', timing: '2m, 4m, 6-18m, 4-6y', doses: 4 },
      { name: 'COVID-19', timing: '6 months+', doses: 2 },
      { name: 'Influenza', timing: 'Annually starting 6m', doses: 2 },
      { name: 'MMR', timing: '12-15m, 4-6y', doses: 2 },
      { name: 'Varicella', timing: '12-15m, 4-6y', doses: 2 },
      { name: 'Hepatitis A', timing: '12-23m (2 doses)', doses: 2 },
    ],
    philosophy: 'Maximizes early protection when infants are most vulnerable. The US is the only developed nation that routinely vaccinates all newborns within 24 hours of birth. By 2 months, US infants receive up to 7 vaccine antigens in a single visit. This front-loaded approach is unique among developed nations.'
  },
  {
    country: 'Denmark (SSI)',
    code: 'dk',
    flag: '🇩🇰',
    totalDoses: '~11 doses by age 6',
    approach: 'Selective — zero birth doses, minimal total count',
    birthDoseCount: 0,
    birthLabel: 'No vaccines at birth — first dose at 3 months',
    firstVaccineAge: '3 months',
    infantMortality: '3.1 per 1,000 live births',
    vaccines: [
      { name: 'DTaP-IPV-Hib-HepB (6-in-1)', timing: '3 months, 5 months, 12 months', doses: 3 },
      { name: 'Pneumococcal (PCV13)', timing: '3 months, 5 months, 12 months', doses: 3 },
      { name: 'MMR', timing: '15 months, 4 years', doses: 2 },
    ],
    philosophy: 'Denmark waits until 3 months for the first vaccine. Zero birth doses. With universal healthcare and strong follow-up, Denmark achieves excellent disease outcomes with one of the lowest childhood vaccine counts in the developed world. Infant mortality: 3.1 per 1,000 — far below the US rate of 5.4.'
  },
  {
    country: 'Sweden (Folkhälsomyndigheten)',
    code: 'se',
    flag: '🇸🇪',
    totalDoses: '~11 doses by age 6',
    approach: 'Selective — conservative, minimal-intervention philosophy',
    birthDoseCount: 0,
    birthLabel: 'No vaccines at birth — first dose at 3 months',
    firstVaccineAge: '3 months',
    infantMortality: '2.1 per 1,000 live births',
    vaccines: [
      { name: 'DTaP-IPV-Hib-HepB (6-in-1)', timing: '3 months, 5 months, 12 months', doses: 3 },
      { name: 'Pneumococcal (PCV)', timing: '3 months, 5 months, 12 months', doses: 3 },
      { name: 'MMR', timing: '18 months, 6-8 years', doses: 2 },
      { name: 'Rotavirus (optional)', timing: '6 weeks, 3 months (parental choice)', doses: 2 },
    ],
    philosophy: 'Sweden prioritizes minimal intervention. No birth doses, no mandatory vaccinations. Rotavirus is optional — parents choose. Despite fewer vaccines, Sweden has one of the lowest infant mortality rates in the world (2.1 per 1,000). The Swedish approach proves that fewer, later vaccines are compatible with outstanding child health outcomes.'
  },
  {
    country: 'New Zealand (MOH)',
    code: 'nz',
    flag: '🇳🇿',
    totalDoses: '~15 doses by age 6',
    approach: 'Balanced — no birth doses, starts at 6 weeks',
    birthDoseCount: 0,
    birthLabel: 'No routine vaccines at birth (BCG only for high-risk groups)',
    firstVaccineAge: '6 weeks',
    infantMortality: '3.5 per 1,000 live births',
    vaccines: [
      { name: 'DTaP-IPV-Hib-HepB (Infanrix hexa)', timing: '6 weeks, 3 months, 5 months', doses: 3 },
      { name: 'Pneumococcal (PCV10)', timing: '6 weeks, 3 months, 5 months', doses: 3 },
      { name: 'Rotavirus', timing: '6 weeks, 3 months', doses: 2 },
      { name: 'MMR', timing: '12 months, 15 months', doses: 2 },
      { name: 'Varicella', timing: '15 months', doses: 1 },
      { name: 'Hib booster', timing: '15 months', doses: 1 },
      { name: 'DTaP-IPV booster', timing: '4 years', doses: 1 },
    ],
    philosophy: 'New Zealand starts at 6 weeks — not at birth. Uses combination vaccines to minimize injection count. BCG is only given to high-risk babies. The schedule is significantly lighter than the US while maintaining excellent disease prevention outcomes with lower infant mortality.'
  },
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
          How the US compares to Denmark, Sweden, and New Zealand in newborn and childhood vaccination
        </p>
      </div>

      {/* ============================================================ */}
      {/* NEWBORN SPOTLIGHT                                              */}
      {/* ============================================================ */}
      <Card className="border-2 border-destructive/30 bg-destructive/5">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Baby size={28} weight="fill" className="text-destructive" />
            <div>
              <CardTitle className="text-xl">What Happens to Newborns — First 24 Hours</CardTitle>
              <CardDescription className="text-base mt-1">
                The US is the only country shown here that vaccinates all newborns on Day 1
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {scheduleData.map(s => (
              <div
                key={s.code}
                className={`p-4 rounded-lg border ${
                  s.birthDoseCount > 0
                    ? 'bg-destructive/10 border-destructive/20'
                    : 'bg-evidence/10 border-evidence/20'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">{s.flag}</span>
                  <span className="font-bold">{s.country.split(' (')[0]}</span>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  {s.birthDoseCount > 0 ? (
                    <Syringe size={16} weight="fill" className="text-destructive" />
                  ) : (
                    <ShieldCheck size={16} weight="fill" className="text-evidence" />
                  )}
                  <span className={`text-sm font-semibold ${s.birthDoseCount > 0 ? 'text-destructive' : 'text-evidence'}`}>
                    {s.birthLabel}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  First vaccine: <strong>{s.firstVaccineAge}</strong> · Infant mortality: <strong>{s.infantMortality}</strong>
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Alert>
        <Info size={20} weight="fill" className="text-primary" />
        <AlertDescription className="ml-2">
          <strong>Key fact:</strong> The countries with the fewest and latest vaccines — Denmark, Sweden, Norway, Finland, Iceland, Japan — consistently have the <strong>lowest infant mortality</strong> in the world. The US, which vaccinates more aggressively and earlier than any other developed nation, has the <strong>highest infant mortality</strong> among peer countries.
        </AlertDescription>
      </Alert>

      {/* ============================================================ */}
      {/* WHY DIFFERENT                                                  */}
      {/* ============================================================ */}
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
                Countries prioritize vaccines based on local disease burden. The US includes Hepatitis B at birth due to higher prevalence, while Scandinavian countries include it only in the 3-month combo shot because their HepB rates are very low.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold flex items-center gap-2">
                <Badge variant="outline">Healthcare System</Badge>
              </h3>
              <p className="text-sm text-muted-foreground">
                Countries with universal healthcare and guaranteed follow-up (Denmark, Sweden, NZ) can safely start later because they know every child will return. The US front-loads because of variable access and follow-up rates.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold flex items-center gap-2">
                <Badge variant="outline">Precautionary Principle</Badge>
              </h3>
              <p className="text-sm text-muted-foreground">
                Nordic countries and Japan apply a stronger precautionary principle — fewer interventions on healthy newborns unless clearly justified by local disease data. The US takes a more aggressive approach, vaccinating early "just in case."
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold flex items-center gap-2">
                <Badge variant="outline">Pharmaceutical Influence</Badge>
              </h3>
              <p className="text-sm text-muted-foreground">
                The US is one of only two countries (with New Zealand) that allows direct-to-consumer pharmaceutical advertising. The US vaccine schedule is developed by ACIP committee members, some of whom have declared financial ties to vaccine manufacturers.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ============================================================ */}
      {/* PER-COUNTRY TABS                                               */}
      {/* ============================================================ */}
      <Tabs defaultValue="us" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="us">🇺🇸 US</TabsTrigger>
          <TabsTrigger value="dk">🇩🇰 Denmark</TabsTrigger>
          <TabsTrigger value="se">🇸🇪 Sweden</TabsTrigger>
          <TabsTrigger value="nz">🇳🇿 New Zealand</TabsTrigger>
        </TabsList>

        {scheduleData.map((schedule) => (
          <TabsContent key={schedule.code} value={schedule.code} className="space-y-4">
            <Card className={schedule.birthDoseCount > 0 ? 'border-destructive/30' : ''}>
              <CardHeader>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-2xl">{schedule.flag}</span>
                  <CardTitle>{schedule.country}</CardTitle>
                  {schedule.birthDoseCount > 0 ? (
                    <Badge variant="destructive">
                      <Syringe size={12} weight="fill" className="mr-1" />
                      {schedule.birthDoseCount} birth dose
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="border-evidence text-evidence">
                      <ShieldCheck size={12} weight="fill" className="mr-1" />
                      No birth doses
                    </Badge>
                  )}
                </div>
                <CardDescription>{schedule.approach}</CardDescription>
                <div className="flex flex-wrap gap-2 pt-2">
                  <Badge variant="secondary" className="text-base">{schedule.totalDoses}</Badge>
                  <Badge variant="outline" className="text-xs">
                    First vaccine: {schedule.firstVaccineAge}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Infant mortality: {schedule.infantMortality}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Birth highlight */}
                <div className={`p-4 rounded-lg ${schedule.birthDoseCount > 0 ? 'bg-destructive/10 border border-destructive/20' : 'bg-evidence/10 border border-evidence/20'}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <Baby size={18} weight="fill" className={schedule.birthDoseCount > 0 ? 'text-destructive' : 'text-evidence'} />
                    <span className="font-semibold text-sm">At Birth (Day 1)</span>
                  </div>
                  <p className={`text-sm font-medium ${schedule.birthDoseCount > 0 ? 'text-destructive' : 'text-evidence'}`}>
                    {schedule.birthLabel}
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                    Full Vaccine Schedule
                  </h3>
                  <div className="grid gap-2">
                    {schedule.vaccines.map((vaccine) => (
                      <div
                        key={vaccine.name}
                        className={`flex items-start justify-between p-3 rounded-lg border transition-colors ${
                          vaccine.birthDose
                            ? 'bg-destructive/10 border-destructive/20'
                            : 'bg-card hover:bg-accent/5'
                        }`}
                      >
                        <div className="space-y-1 flex-1">
                          <div className="font-medium flex items-center gap-2">
                            {vaccine.name}
                            {vaccine.birthDose && (
                              <Badge variant="destructive" className="text-xs">Birth dose</Badge>
                            )}
                          </div>
                          <div className="text-sm text-muted-foreground">{vaccine.timing}</div>
                        </div>
                        <Badge variant="outline">{vaccine.doses} {vaccine.doses === 1 ? 'dose' : 'doses'}</Badge>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                <div className="space-y-2 pt-2">
                  <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                    Public Health Philosophy
                  </h3>
                  <p className="text-sm leading-relaxed">{schedule.philosophy}</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      {/* ============================================================ */}
      {/* KEY TAKEAWAYS                                                  */}
      {/* ============================================================ */}
      <Card className="border-caution/30 bg-caution/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Warning size={24} weight="fill" className="text-caution-foreground" />
            What This Means for Parents
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p>
            <strong>The US is an outlier, not the standard.</strong> It is the only developed country profiled here that vaccinates all newborns within 24 hours of birth. Denmark, Sweden, and New Zealand all wait at least 6 weeks — some wait 3 months — without negative health consequences.
          </p>
          <p>
            <strong>Fewer vaccines, better outcomes.</strong> Countries with the fewest infant vaccines (Sweden, Denmark, Japan, Iceland) consistently rank among the top nations for infant survival. The US, with the most aggressive early schedule, ranks last among peer nations in infant mortality.
          </p>
          <p>
            <strong>You have options.</strong> Many US pediatricians will work with families on an alternative or delayed schedule. The Dr. Sears alternative schedule and the "Nordic model" (no vaccines before 3 months, fewer total doses) are used by informed families across the country.
          </p>
          <p>
            <strong>International evidence supports pacing.</strong> The fact that the healthiest children in the world are in countries with fewer, later vaccines validates the informed-consent approach: asking questions, understanding risks, and making deliberate choices about timing and necessity.
          </p>
          <p>
            <strong>This is not anti-vaccine.</strong> Every country shown here vaccinates children. The question is not whether to vaccinate — it is <em>when</em>, <em>how many at once</em>, and <em>whether a healthy newborn needs an injection on their first day of life</em> when the majority of developed nations say no.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
