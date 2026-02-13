import { useState } from 'react'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Info, Globe, Printer, Funnel, CaretDown, CaretUp } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'

interface VaccineEntry {
  name: string
  timing: string
  doses: number
}

interface CountrySchedule {
  code: string
  country: string
  totalDoses: number
  approach: 'comprehensive' | 'balanced' | 'selective'
  vaccines: VaccineEntry[]
  philosophy: string
  source: string
  lastUpdated: string
}

const scheduleData: CountrySchedule[] = [
  {
    code: 'US',
    country: 'United States',
    totalDoses: 29,
    approach: 'comprehensive',
    vaccines: [
      { name: 'Hepatitis B', timing: 'Birth, 1-2m, 6-18m', doses: 3 },
      { name: 'Rotavirus', timing: '2m, 4m, 6m', doses: 3 },
      { name: 'DTaP', timing: '2m, 4m, 6m, 15-18m, 4-6y', doses: 5 },
      { name: 'Hib', timing: '2m, 4m, 6m, 12-15m', doses: 4 },
      { name: 'Pneumococcal (PCV)', timing: '2m, 4m, 6m, 12-15m', doses: 4 },
      { name: 'Polio (IPV)', timing: '2m, 4m, 6-18m, 4-6y', doses: 4 },
      { name: 'Influenza', timing: 'Annually from 6m', doses: 2 },
      { name: 'MMR', timing: '12-15m, 4-6y', doses: 2 },
      { name: 'Varicella', timing: '12-15m, 4-6y', doses: 2 },
    ],
    philosophy: 'Comprehensive early protection; maximizes herd immunity; multiple doses ensure robust immunity when infants are most vulnerable',
    source: 'CDC/ACIP',
    lastUpdated: '2024'
  },
  {
    code: 'CA',
    country: 'Canada',
    totalDoses: 26,
    approach: 'comprehensive',
    vaccines: [
      { name: 'DTaP-IPV-Hib', timing: '2m, 4m, 6m, 18m', doses: 4 },
      { name: 'Pneumococcal (PCV)', timing: '2m, 4m, 12m', doses: 3 },
      { name: 'Rotavirus', timing: '2m, 4m, 6m', doses: 3 },
      { name: 'MMR', timing: '12m, 18m', doses: 2 },
      { name: 'Varicella', timing: '12m, 18m', doses: 2 },
      { name: 'Men C', timing: '12m', doses: 1 },
      { name: 'Hepatitis B', timing: 'Grade 6 (age 11-12)', doses: 3 },
      { name: 'Influenza', timing: 'Annually from 6m', doses: 2 },
      { name: 'DTaP-IPV booster', timing: '4-6y', doses: 1 },
    ],
    philosophy: 'Universal healthcare enables comprehensive schedule with guaranteed follow-up; provincial variations exist',
    source: 'NACI/PHAC',
    lastUpdated: '2024'
  },
  {
    code: 'UK',
    country: 'United Kingdom',
    totalDoses: 23,
    approach: 'balanced',
    vaccines: [
      { name: '6-in-1 (DTaP-IPV-Hib-HepB)', timing: '8w, 12w, 16w', doses: 3 },
      { name: 'Rotavirus', timing: '8w, 12w', doses: 2 },
      { name: 'Men B', timing: '8w, 16w, 12m', doses: 3 },
      { name: 'Pneumococcal (PCV)', timing: '12w, 12m', doses: 2 },
      { name: 'Hib/Men C booster', timing: '12m', doses: 1 },
      { name: 'MMR', timing: '12m, 3y4m', doses: 2 },
      { name: 'Preschool booster (4-in-1)', timing: '3y4m', doses: 1 },
      { name: 'Flu (nasal)', timing: 'Annually 2-3y+', doses: 2 },
    ],
    philosophy: 'Focuses on diseases with significant UK burden; combination vaccines reduce injection count; cost-effectiveness emphasis',
    source: 'NHS/JCVI',
    lastUpdated: '2024'
  },
  {
    code: 'AU',
    country: 'Australia',
    totalDoses: 24,
    approach: 'comprehensive',
    vaccines: [
      { name: 'Hepatitis B', timing: 'Birth, 2m, 6m', doses: 3 },
      { name: '6-in-1 (DTaP-IPV-Hib-HepB)', timing: '2m, 4m, 6m', doses: 3 },
      { name: 'Pneumococcal (PCV)', timing: '2m, 4m, 12m', doses: 3 },
      { name: 'Rotavirus', timing: '2m, 4m, 6m', doses: 3 },
      { name: 'Men B', timing: '2m, 4m, 12m', doses: 3 },
      { name: 'MMR', timing: '12m, 18m', doses: 2 },
      { name: 'Men ACWY', timing: '12m', doses: 1 },
      { name: 'DTaP-IPV booster', timing: '4y', doses: 1 },
    ],
    philosophy: 'National Immunisation Program provides free vaccines; high uptake rates due to "No Jab No Play" policies',
    source: 'ATAGI',
    lastUpdated: '2024'
  },
  {
    code: 'DE',
    country: 'Germany',
    totalDoses: 24,
    approach: 'balanced',
    vaccines: [
      { name: '6-in-1 (DTaP-IPV-Hib-HepB)', timing: '2m, 3m, 4m, 11-14m', doses: 4 },
      { name: 'Pneumococcal (PCV)', timing: '2m, 4m, 11-14m', doses: 3 },
      { name: 'Rotavirus', timing: '2m, 3m, 4m', doses: 3 },
      { name: 'Men C', timing: '12m', doses: 1 },
      { name: 'MMR', timing: '11-14m, 15-23m', doses: 2 },
      { name: 'Varicella', timing: '11-14m, 15-23m', doses: 2 },
      { name: 'DTaP-IPV booster', timing: '5-6y', doses: 1 },
    ],
    philosophy: 'STIKO recommendations balance comprehensive protection with individual benefit-risk assessment',
    source: 'STIKO/RKI',
    lastUpdated: '2024'
  },
  {
    code: 'FR',
    country: 'France',
    totalDoses: 23,
    approach: 'balanced',
    vaccines: [
      { name: '6-in-1 (DTaP-IPV-Hib-HepB)', timing: '2m, 4m, 11m', doses: 3 },
      { name: 'Pneumococcal (PCV)', timing: '2m, 4m, 11m', doses: 3 },
      { name: 'Men C', timing: '5m, 12m', doses: 2 },
      { name: 'MMR', timing: '12m, 16-18m', doses: 2 },
      { name: 'DTaP-IPV booster', timing: '6y', doses: 1 },
    ],
    philosophy: 'Mandatory vaccination program since 2018; reduced-dose schedule with high efficacy',
    source: 'HAS',
    lastUpdated: '2024'
  },
  {
    code: 'NL',
    country: 'Netherlands',
    totalDoses: 20,
    approach: 'balanced',
    vaccines: [
      { name: 'DTaP-IPV-Hib-HepB', timing: '2m, 3m, 4m, 11m', doses: 4 },
      { name: 'Pneumococcal (PCV)', timing: '2m, 4m, 11m', doses: 3 },
      { name: 'Men C', timing: '14m', doses: 1 },
      { name: 'MMR', timing: '14m, 9y', doses: 2 },
      { name: 'DTaP-IPV booster', timing: '4y', doses: 1 },
    ],
    philosophy: 'High trust in government health advice; voluntary but >95% uptake; selective approach',
    source: 'RIVM',
    lastUpdated: '2024'
  },
  {
    code: 'SE',
    country: 'Sweden',
    totalDoses: 16,
    approach: 'selective',
    vaccines: [
      { name: 'DTaP-IPV-Hib', timing: '3m, 5m, 12m', doses: 3 },
      { name: 'Pneumococcal (PCV)', timing: '3m, 5m, 12m', doses: 3 },
      { name: 'MMR', timing: '18m, 6-8y', doses: 2 },
      { name: 'Rotavirus', timing: '6w, 12w (optional)', doses: 2 },
      { name: 'HPV', timing: '11-12y', doses: 2 },
    ],
    philosophy: 'Minimal intervention; only vaccines for diseases with severe outcomes; no routine Hep B; later MMR timing',
    source: 'Folkhälsomyndigheten',
    lastUpdated: '2024'
  },
  {
    code: 'DK',
    country: 'Denmark',
    totalDoses: 18,
    approach: 'selective',
    vaccines: [
      { name: 'DTaP-IPV-Hib-HepB', timing: '3m, 5m, 12m', doses: 3 },
      { name: 'Pneumococcal (PCV)', timing: '3m, 5m, 12m', doses: 3 },
      { name: 'MMR', timing: '15m, 4y', doses: 2 },
      { name: 'DTaP-IPV booster', timing: '5y', doses: 1 },
    ],
    philosophy: 'Conservative Nordic approach; emphasis on essential vaccines; high public trust enables voluntary system',
    source: 'SSI',
    lastUpdated: '2024'
  },
  {
    code: 'NO',
    country: 'Norway',
    totalDoses: 17,
    approach: 'selective',
    vaccines: [
      { name: 'DTaP-IPV-Hib-HepB', timing: '3m, 5m, 12m', doses: 3 },
      { name: 'Pneumococcal (PCV)', timing: '3m, 5m, 12m', doses: 3 },
      { name: 'MMR', timing: '15m, 12y', doses: 2 },
      { name: 'Rotavirus', timing: '6w, 12w, 16w', doses: 3 },
      { name: 'DTaP-IPV booster', timing: '6y', doses: 1 },
    ],
    philosophy: 'Emphasis on severe disease prevention; rotavirus added 2014; high compliance through education',
    source: 'FHI',
    lastUpdated: '2024'
  },
  {
    code: 'IS',
    country: 'Iceland',
    totalDoses: 15,
    approach: 'selective',
    vaccines: [
      { name: 'DTaP-IPV-Hib', timing: '3m, 5m, 12m', doses: 3 },
      { name: 'Pneumococcal (PCV)', timing: '3m, 5m, 12m', doses: 3 },
      { name: 'MMR', timing: '18m, 12y', doses: 2 },
    ],
    philosophy: 'Most selective developed-nation schedule; small population with excellent health outcomes; later vaccine timing',
    source: 'Embætti landlæknis',
    lastUpdated: '2024'
  },
  {
    code: 'JP',
    country: 'Japan',
    totalDoses: 22,
    approach: 'balanced',
    vaccines: [
      { name: 'Hepatitis B', timing: 'Birth, 1m, 6m', doses: 3 },
      { name: 'Hib', timing: '2m, 3m, 4m, 12m', doses: 4 },
      { name: 'Pneumococcal (PCV)', timing: '2m, 4m, 6m, 12m', doses: 4 },
      { name: 'DTaP', timing: '3m, 4m, 5m, 18m', doses: 4 },
      { name: 'Polio (IPV)', timing: '3m, 4m, 5m, 18m', doses: 4 },
      { name: 'BCG (TB)', timing: '5-8m', doses: 1 },
      { name: 'MR (Measles-Rubella)', timing: '12m, 5-6y', doses: 2 },
    ],
    philosophy: 'BCG for TB prevention; individual-dose schedule; strong emphasis on preventing contagious disease',
    source: 'MHLW',
    lastUpdated: '2024'
  }
]

type SortBy = 'country' | 'doses-asc' | 'doses-desc' | 'approach'
type FilterBy = 'all' | 'comprehensive' | 'balanced' | 'selective'

export function ComprehensiveVaccineSchedule() {
  const [sortBy, setSortBy] = useState<SortBy>('doses-desc')
  const [filterBy, setFilterBy] = useState<FilterBy>('all')
  const [expandedCountries, setExpandedCountries] = useState<Set<string>>(new Set())

  const toggleCountry = (code: string) => {
    setExpandedCountries(prev => {
      const next = new Set(prev)
      if (next.has(code)) {
        next.delete(code)
      } else {
        next.add(code)
      }
      return next
    })
  }

  const filteredData = filterBy === 'all' 
    ? scheduleData 
    : scheduleData.filter(s => s.approach === filterBy)

  const sortedData = [...filteredData].sort((a, b) => {
    switch (sortBy) {
      case 'country':
        return a.country.localeCompare(b.country)
      case 'doses-asc':
        return a.totalDoses - b.totalDoses
      case 'doses-desc':
        return b.totalDoses - a.totalDoses
      case 'approach':
        return a.approach.localeCompare(b.approach)
      default:
        return 0
    }
  })

  const handlePrint = () => {
    window.print()
  }

  const expandAll = () => {
    setExpandedCountries(new Set(sortedData.map(s => s.code)))
  }

  const collapseAll = () => {
    setExpandedCountries(new Set())
  }

  const approachColors = {
    comprehensive: 'bg-primary/10 text-primary border-primary/20',
    balanced: 'bg-secondary/10 text-secondary-foreground border-secondary/20',
    selective: 'bg-accent/10 text-accent-foreground border-accent/20'
  }

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Globe size={32} weight="duotone" className="text-primary" />
          <h1 className="text-3xl font-semibold">Global Vaccine Schedule Database</h1>
        </div>
        <p className="text-muted-foreground">
          Compare vaccination schedules from 12 countries to understand different evidence-based approaches to childhood immunization
        </p>
      </div>

      <Alert>
        <Info size={20} weight="fill" className="text-primary" />
        <AlertDescription className="ml-2">
          <strong>Important Context:</strong> All schedules shown are evidence-based and developed by respected medical authorities. Differences reflect local disease prevalence, healthcare infrastructure, cultural values, and public health priorities - not superior or inferior safety. Both comprehensive and selective approaches save lives.
        </AlertDescription>
      </Alert>

      <Card className="print:hidden">
        <CardHeader>
          <CardTitle>Why Do Countries Have Different Vaccine Schedules?</CardTitle>
          <CardDescription>
            Multiple factors influence national vaccination recommendations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Badge variant="outline" className="mb-1">Disease Prevalence</Badge>
              <p className="text-sm text-muted-foreground">
                Countries prioritize based on local disease burden. The US includes Hepatitis B at birth due to higher prevalence, while Sweden omits it due to very low rates.
              </p>
            </div>

            <div className="space-y-2">
              <Badge variant="outline" className="mb-1">Healthcare System</Badge>
              <p className="text-sm text-muted-foreground">
                Universal healthcare with guaranteed follow-up enables later schedules. Variable access may require front-loading protection.
              </p>
            </div>

            <div className="space-y-2">
              <Badge variant="outline" className="mb-1">Risk Philosophy</Badge>
              <p className="text-sm text-muted-foreground">
                US maximizes herd immunity and early protection. Nordic countries emphasize individual necessity and minimal intervention.
              </p>
            </div>

            <div className="space-y-2">
              <Badge variant="outline" className="mb-1">Economic Factors</Badge>
              <p className="text-sm text-muted-foreground">
                Cost-effectiveness calculations vary. Countries weigh vaccine costs against disease treatment costs and productivity losses differently.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-wrap gap-3 items-center print:hidden">
        <div className="flex items-center gap-2">
          <Globe size={20} className="text-muted-foreground" />
          <Select value={sortBy} onValueChange={(v) => setSortBy(v as SortBy)}>
            <SelectTrigger className="w-[200px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="doses-desc">Most doses first</SelectItem>
              <SelectItem value="doses-asc">Fewest doses first</SelectItem>
              <SelectItem value="country">By country</SelectItem>
              <SelectItem value="approach">By approach</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2">
          <Funnel size={20} className="text-muted-foreground" />
          <Select value={filterBy} onValueChange={(v) => setFilterBy(v as FilterBy)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All approaches</SelectItem>
              <SelectItem value="comprehensive">Comprehensive</SelectItem>
              <SelectItem value="balanced">Balanced</SelectItem>
              <SelectItem value="selective">Selective</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="ml-auto flex gap-2">
          <Button variant="outline" size="sm" onClick={expandAll}>
            Expand All
          </Button>
          <Button variant="outline" size="sm" onClick={collapseAll}>
            Collapse All
          </Button>
          <Button variant="outline" size="sm" onClick={handlePrint}>
            <Printer size={18} className="mr-2" />
            Print
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {sortedData.map((schedule) => {
          const isExpanded = expandedCountries.has(schedule.code)
          
          return (
            <Card key={schedule.code} className="overflow-hidden print:break-inside-avoid">
              <CardHeader 
                className="cursor-pointer hover:bg-accent/5 transition-colors print:cursor-default"
                onClick={() => toggleCountry(schedule.code)}
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2">
                      <CardTitle>{schedule.country}</CardTitle>
                      <Badge variant="secondary" className={cn('border', approachColors[schedule.approach])}>
                        {schedule.totalDoses} doses
                      </Badge>
                      <Badge 
                        variant="outline" 
                        className={cn('capitalize', approachColors[schedule.approach])}
                      >
                        {schedule.approach}
                      </Badge>
                    </div>
                    <CardDescription className="max-w-3xl">
                      {schedule.philosophy}
                    </CardDescription>
                    <div className="flex gap-4 text-xs text-muted-foreground">
                      <span>Source: {schedule.source}</span>
                      <span>Updated: {schedule.lastUpdated}</span>
                    </div>
                  </div>
                  <div className="print:hidden">
                    {isExpanded ? <CaretUp size={24} /> : <CaretDown size={24} />}
                  </div>
                </div>
              </CardHeader>

              {(isExpanded || window.matchMedia('print').matches) && (
                <CardContent className="pt-0">
                  <Separator className="mb-4" />
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                      Vaccine Schedule
                    </h4>
                    <div className="grid gap-2">
                      {schedule.vaccines.map((vaccine, idx) => (
                        <div
                          key={idx}
                          className="flex items-start justify-between p-3 rounded-lg border bg-card"
                        >
                          <div className="space-y-1 flex-1">
                            <div className="font-medium">{vaccine.name}</div>
                            <div className="text-sm text-muted-foreground">{vaccine.timing}</div>
                          </div>
                          <Badge variant="outline">
                            {vaccine.doses} {vaccine.doses === 1 ? 'dose' : 'doses'}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          )
        })}
      </div>

      <Card className="border-amber-200 bg-amber-50/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info size={24} weight="duotone" className="text-amber-600" />
            What This Means for Parents
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p>
            <strong>No schedule is "wrong."</strong> Each represents different evidence-based approaches and reflects excellent pediatric care in its context.
          </p>
          <p>
            <strong>Infant mortality differences have nothing to do with vaccines.</strong> Higher US infant mortality is attributed to prematurity rates, socioeconomic inequalities, healthcare access, and birth registration practices - not vaccination.
          </p>
          <p>
            <strong>The CDC schedule is not "for profit."</strong> It's developed by independent scientific committees (ACIP). The Vaccines for Children program provides vaccines at or below cost through government negotiation.
          </p>
          <p>
            <strong>Disease prevalence matters.</strong> The US has different disease patterns than Nordic countries. Cherry-picking another country's schedule may leave your child vulnerable to locally prevalent diseases.
          </p>
          <p>
            <strong>International differences validate informed decision-making.</strong> This makes thoughtful, voluntary decision-making with your healthcare provider even more important.
          </p>
          <p>
            <strong>More vaccines don't correlate with worse outcomes.</strong> Countries with higher vaccination rates generally have better child health outcomes overall.
          </p>
        </CardContent>
      </Card>

      <Alert className="print:hidden">
        <AlertDescription className="text-xs text-muted-foreground">
          Schedules are subject to change. Always consult current official sources and your healthcare provider for the most up-to-date recommendations for your country and child's specific circumstances.
        </AlertDescription>
      </Alert>
    </div>
  )
}
