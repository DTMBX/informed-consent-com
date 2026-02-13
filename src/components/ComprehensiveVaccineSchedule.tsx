import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Info, Globe, ArrowsDownUp, Funnel, Printer, CaretDown, CaretUp } from '@phosphor-icons/react'
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
    totalDoses: 31,
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
      { name: 'Hepatitis A', timing: '12-23m (2 doses)', doses: 2 },
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
  const [expandedCountries, setExpandedCountries] = useState<Set<string>>(
    new Set(scheduleData.map(s => s.code))
  )

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

  const collapseAll = () => {
    setExpandedCountries(new Set())
  }

  const expandAll = () => {
    setExpandedCountries(new Set(sortedData.map(s => s.code)))
  }

  const approachColors = {
    comprehensive: 'bg-primary/10 text-primary border-primary/20',
    balanced: 'bg-secondary/10 text-secondary-foreground border-secondary/20',
    selective: 'bg-accent/10 text-accent-foreground border-accent/20'
  }

  const approachLabels = {
    comprehensive: 'Comprehensive',
    balanced: 'Balanced',
    selective: 'Selective'
  }

  return (
    <div className="max-w-7xl mx-auto space-y-6 p-4 sm:p-6">
      <div className="space-y-3 print:space-y-2">
        <div className="flex items-start gap-3">
          <Globe size={40} weight="duotone" className="text-primary flex-shrink-0 print:hidden" />
          <div>
            <h1 className="text-3xl sm:text-4xl font-semibold print:text-2xl">
              International Childhood Vaccine Schedule Comparison
            </h1>
            <p className="text-muted-foreground mt-1 text-sm sm:text-base">
              Side-by-side comparison of 12 evidence-based national vaccine schedules (ages 0-6 years)
            </p>
          </div>
        </div>
      </div>

      <Alert className="print:hidden">
        <Info size={20} weight="fill" className="text-primary" />
        <AlertDescription className="ml-2 text-sm">
          <strong>Important Context:</strong> All schedules shown are evidence-based and recommended by respected medical authorities. 
          Differences reflect local disease prevalence, healthcare infrastructure, cultural values, and public health philosophy—not 
          superior or inferior safety. Both comprehensive and selective approaches save lives and prevent disease in their respective contexts.
        </AlertDescription>
      </Alert>

      <Card className="print:hidden">
        <CardHeader>
          <CardTitle className="text-lg">Understanding International Differences</CardTitle>
          <CardDescription>Why developed nations have varying vaccine schedules</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="space-y-1.5">
              <Badge variant="outline" className="mb-1">Disease Burden</Badge>
              <p className="text-muted-foreground">
                Countries prioritize based on local disease rates. US includes birth Hep B due to higher prevalence; Sweden omits it due to near-zero rates.
              </p>
            </div>
            <div className="space-y-1.5">
              <Badge variant="outline" className="mb-1">Healthcare Systems</Badge>
              <p className="text-muted-foreground">
                Universal healthcare with guaranteed follow-up enables later schedules. Variable access may favor early protection.
              </p>
            </div>
            <div className="space-y-1.5">
              <Badge variant="outline" className="mb-1">Risk Philosophy</Badge>
              <p className="text-muted-foreground">
                US maximizes herd immunity and early protection. Nordic countries emphasize minimal intervention and individual necessity.
              </p>
            </div>
            <div className="space-y-1.5">
              <Badge variant="outline" className="mb-1">Economic Factors</Badge>
              <p className="text-muted-foreground">
                Cost-effectiveness calculations vary. Countries weigh vaccine costs against disease treatment differently.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-wrap gap-3 items-center print:hidden">
        <div className="flex items-center gap-2">
          <ArrowsDownUp size={20} className="text-muted-foreground" />
          <Select value={sortBy} onValueChange={(v) => setSortBy(v as SortBy)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="doses-desc">Most doses first</SelectItem>
              <SelectItem value="doses-asc">Fewest doses first</SelectItem>
              <SelectItem value="country">Alphabetical</SelectItem>
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

        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={expandAll}>
            Expand All
          </Button>
          <Button variant="outline" size="sm" onClick={collapseAll}>
            Collapse All
          </Button>
        </div>

        <Button variant="outline" onClick={handlePrint} className="ml-auto">
          <Printer size={18} className="mr-2" />
          Print Comparison
        </Button>
      </div>

      <div className="space-y-3">
        {sortedData.map((schedule) => {
          const isExpanded = expandedCountries.has(schedule.code)
          
          return (
            <Card key={schedule.code} className="overflow-hidden print:break-inside-avoid">
              <button
                onClick={() => toggleCountry(schedule.code)}
                className="w-full text-left hover:bg-accent/5 transition-colors print:hover:bg-transparent"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 flex-wrap">
                        <CardTitle className="text-xl">{schedule.country}</CardTitle>
                        <Badge variant="secondary" className="text-base font-semibold shrink-0">
                          {schedule.totalDoses} doses
                        </Badge>
                        <Badge 
                          variant="outline" 
                          className={cn("shrink-0", approachColors[schedule.approach])}
                        >
                          {approachLabels[schedule.approach]}
                        </Badge>
                      </div>
                      <CardDescription className="mt-2 text-sm">
                        {schedule.philosophy}
                      </CardDescription>
                      <div className="flex gap-3 mt-2 text-xs text-muted-foreground">
                        <span>Source: {schedule.source}</span>
                        <span>•</span>
                        <span>Updated: {schedule.lastUpdated}</span>
                      </div>
                    </div>
                    <div className="flex-shrink-0 print:hidden">
                      {isExpanded ? (
                        <CaretUp size={24} className="text-muted-foreground" />
                      ) : (
                        <CaretDown size={24} className="text-muted-foreground" />
                      )}
                    </div>
                  </div>
                </CardHeader>
              </button>

              {(isExpanded) && (
                <CardContent className="pt-0">
                  <Separator className="mb-4" />
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                      Complete Schedule (Ages 0-6)
                    </h4>
                    <div className="grid gap-2">
                      {schedule.vaccines.map((vaccine, idx) => (
                        <div
                          key={idx}
                          className="flex items-start justify-between gap-4 p-3 rounded-lg border bg-card hover:bg-accent/5 transition-colors print:hover:bg-transparent"
                        >
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-sm sm:text-base">{vaccine.name}</div>
                            <div className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                              {vaccine.timing}
                            </div>
                          </div>
                          <Badge variant="outline" className="shrink-0 text-xs sm:text-sm">
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

      <Card className="border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/20 print:break-inside-avoid">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Info size={24} weight="duotone" className="text-amber-600 dark:text-amber-400" />
            What This Means for Parents
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm leading-relaxed">
          <p>
            <strong>No schedule is "wrong."</strong> Each represents evidence-based medicine applied to different contexts. 
            The US schedule (29 doses) prioritizes maximum protection during high-risk infancy. Iceland's schedule (15 doses) 
            reflects excellent health infrastructure, low disease burden, and different values around medical intervention.
          </p>
          <p>
            <strong>US infant mortality is not caused by vaccines.</strong> Higher US infant mortality compared to Europe is 
            attributed to prematurity rates, socioeconomic inequality, healthcare access disparities, and birth registration 
            practices—not vaccination. Countries with higher vaccination rates often have lower infant mortality.
          </p>
          <p>
            <strong>The CDC schedule is not "for profit."</strong> ACIP (Advisory Committee on Immunization Practices) 
            recommendations are based on disease surveillance data, not pharmaceutical influence. The Vaccines for Children 
            program provides vaccines at or below cost through government bulk purchasing.
          </p>
          <p>
            <strong>Context matters for your child.</strong> If you live in the US, the CDC schedule addresses US disease 
            prevalence, population immunity, and healthcare access patterns. Selectively following another country's schedule 
            may expose your child to diseases that are more common in your area.
          </p>
          <p>
            <strong>International variation validates informed consent.</strong> The existence of multiple evidence-based 
            approaches shows that vaccine decisions involve values, risk tolerance, and context—not just "science says." 
            This makes thoughtful, voluntary decision-making with your healthcare provider even more important.
          </p>
          <p>
            <strong>All these countries have excellent child health outcomes.</strong> High vaccination rates (whether 15 or 29 doses) 
            correlate with better population health. The question isn't "more vs. fewer" but rather "which vaccines address the 
            specific risks and values relevant to my family's situation."
          </p>
        </CardContent>
      </Card>

      <Alert className="print:hidden">
        <Info size={18} />
        <AlertDescription className="text-xs text-muted-foreground ml-2">
          All data sourced from official government health agencies (CDC, NHS, STIKO, etc.) as of 2024. 
          Schedules are subject to change. Consult your healthcare provider about the most current recommendations for your location.
        </AlertDescription>
      </Alert>
    </div>
  )
}
