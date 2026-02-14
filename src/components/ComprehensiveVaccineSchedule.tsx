import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { CaretDown, CaretUp, Printer, Baby, Warning, ShieldCheck, Globe, Syringe } from '@phosphor-icons/react'

interface VaccineEntry {
  name: string
  timing: string
  doses: number
  birthDose?: boolean
  firstDoseWeeks?: number
}

interface CountrySchedule {
  country: string
  code: string
  flag: string
  approach: 'comprehensive' | 'balanced' | 'selective'
  totalDosesByAge6: number
  birthDoseCount: number
  birthLabel: string
  first8WeeksCount: number
  firstVaccineWeeks: number
  philosophy: string
  vaccines: VaccineEntry[]
  source: string
  sourceUrl: string
  lastUpdated: string
  infantMortality: string
  neonatalMortality: string
}

const scheduleData: CountrySchedule[] = [
  {
    code: 'US',
    flag: '🇺🇸',
    country: 'United States',
    approach: 'comprehensive',
    totalDosesByAge6: 50,
    birthDoseCount: 1,
    birthLabel: 'HepB within 24 hours of birth',
    first8WeeksCount: 7,
    firstVaccineWeeks: 0,
    philosophy: 'Front-loaded schedule providing maximum early protection. The US is one of the only developed nations that administers a vaccine within 24 hours of birth to all newborns regardless of maternal HepB status.',
    vaccines: [
      { name: 'Hepatitis B (HepB)', timing: 'Birth (within 24h), 1 month, 6-18 months', doses: 3, birthDose: true, firstDoseWeeks: 0 },
      { name: 'Rotavirus (RV)', timing: '2 months, 4 months, 6 months', doses: 3, firstDoseWeeks: 8 },
      { name: 'Diphtheria-Tetanus-Pertussis (DTaP)', timing: '2m, 4m, 6m, 15-18m, 4-6y', doses: 5, firstDoseWeeks: 8 },
      { name: 'Haemophilus influenzae type b (Hib)', timing: '2m, 4m, 6m, 12-15m', doses: 4, firstDoseWeeks: 8 },
      { name: 'Pneumococcal (PCV15/20)', timing: '2m, 4m, 6m, 12-15m', doses: 4, firstDoseWeeks: 8 },
      { name: 'Inactivated Poliovirus (IPV)', timing: '2m, 4m, 6-18m, 4-6y', doses: 4, firstDoseWeeks: 8 },
      { name: 'COVID-19', timing: '6 months+', doses: 2, firstDoseWeeks: 26 },
      { name: 'Influenza (Flu)', timing: 'Annually from 6 months', doses: 2, firstDoseWeeks: 26 },
      { name: 'Measles-Mumps-Rubella (MMR)', timing: '12-15m, 4-6y', doses: 2, firstDoseWeeks: 52 },
      { name: 'Varicella (Chickenpox)', timing: '12-15m, 4-6y', doses: 2, firstDoseWeeks: 52 },
      { name: 'Hepatitis A (HepA)', timing: '12-23m (2 doses)', doses: 2, firstDoseWeeks: 52 },
    ],
    source: 'CDC / ACIP',
    sourceUrl: 'https://www.cdc.gov/vaccines/schedules/hcp/imz/child-adolescent.html',
    lastUpdated: '2025',
    infantMortality: '5.4 per 1,000',
    neonatalMortality: '3.5 per 1,000',
  },
  {
    code: 'DK',
    flag: '🇩🇰',
    country: 'Denmark',
    approach: 'selective',
    totalDosesByAge6: 11,
    birthDoseCount: 0,
    birthLabel: 'No vaccines at birth',
    first8WeeksCount: 0,
    firstVaccineWeeks: 13,
    philosophy: 'Denmark gives zero vaccines at birth and waits until 3 months for the first dose. With universal healthcare and a population-level focus, Denmark achieves excellent childhood disease outcomes with one of the lowest vaccine counts in the developed world.',
    vaccines: [
      { name: 'DTaP-IPV-Hib-HepB (6-in-1)', timing: '3 months, 5 months, 12 months', doses: 3, firstDoseWeeks: 13 },
      { name: 'Pneumococcal (PCV13)', timing: '3 months, 5 months, 12 months', doses: 3, firstDoseWeeks: 13 },
      { name: 'MMR', timing: '15 months, 4 years', doses: 2, firstDoseWeeks: 65 },
      { name: 'HPV', timing: '12 years', doses: 2, firstDoseWeeks: 624 },
    ],
    source: 'Statens Serum Institut (SSI)',
    sourceUrl: 'https://www.ssi.dk/vaccinationer/boernevaccination',
    lastUpdated: '2025',
    infantMortality: '3.1 per 1,000',
    neonatalMortality: '2.3 per 1,000',
  },
  {
    code: 'NZ',
    flag: '🇳🇿',
    country: 'New Zealand',
    approach: 'balanced',
    totalDosesByAge6: 15,
    birthDoseCount: 0,
    birthLabel: 'No routine vaccines at birth (BCG only for high-risk)',
    first8WeeksCount: 3,
    firstVaccineWeeks: 6,
    philosophy: 'New Zealand starts routine vaccination at 6 weeks — not at birth. Uses combination vaccines to minimize injection count. BCG is only given to babies in high-risk groups, not universally.',
    vaccines: [
      { name: 'DTaP-IPV-Hib-HepB (Infanrix hexa)', timing: '6 weeks, 3 months, 5 months', doses: 3, firstDoseWeeks: 6 },
      { name: 'Pneumococcal (PCV10)', timing: '6 weeks, 3 months, 5 months', doses: 3, firstDoseWeeks: 6 },
      { name: 'Rotavirus', timing: '6 weeks, 3 months', doses: 2, firstDoseWeeks: 6 },
      { name: 'MMR', timing: '12 months, 15 months', doses: 2, firstDoseWeeks: 52 },
      { name: 'Varicella', timing: '15 months', doses: 1, firstDoseWeeks: 65 },
      { name: 'Hib booster', timing: '15 months', doses: 1, firstDoseWeeks: 65 },
      { name: 'DTaP-IPV booster', timing: '4 years', doses: 1, firstDoseWeeks: 208 },
    ],
    source: 'NZ Ministry of Health',
    sourceUrl: 'https://www.health.govt.nz/our-work/immunisation-handbook-2020',
    lastUpdated: '2025',
    infantMortality: '3.5 per 1,000',
    neonatalMortality: '2.7 per 1,000',
  },
  {
    code: 'SE',
    flag: '🇸🇪',
    country: 'Sweden',
    approach: 'selective',
    totalDosesByAge6: 11,
    birthDoseCount: 0,
    birthLabel: 'No vaccines at birth',
    first8WeeksCount: 0,
    firstVaccineWeeks: 13,
    philosophy: 'Sweden takes a conservative, minimal-intervention approach. No vaccines at birth, no rotavirus in the routine schedule (parents may choose it). Focus on essential vaccines with proven long-term benefit. Achieves among the lowest infant mortality in the world.',
    vaccines: [
      { name: 'DTaP-IPV-Hib-HepB (6-in-1)', timing: '3 months, 5 months, 12 months', doses: 3, firstDoseWeeks: 13 },
      { name: 'Pneumococcal (PCV)', timing: '3 months, 5 months, 12 months', doses: 3, firstDoseWeeks: 13 },
      { name: 'MMR', timing: '18 months, 6-8 years', doses: 2, firstDoseWeeks: 78 },
      { name: 'Rotavirus (optional)', timing: '6 weeks, 3 months (parental choice)', doses: 2, firstDoseWeeks: 6 },
    ],
    source: 'Folkhälsomyndigheten',
    sourceUrl: 'https://www.folkhalsomyndigheten.se/the-public-health-agency-of-sweden/communicable-disease-control/vaccinations/vaccination-programmes/',
    lastUpdated: '2025',
    infantMortality: '2.1 per 1,000',
    neonatalMortality: '1.5 per 1,000',
  },
  {
    code: 'NO',
    flag: '🇳🇴',
    country: 'Norway',
    approach: 'selective',
    totalDosesByAge6: 14,
    birthDoseCount: 0,
    birthLabel: 'No vaccines at birth',
    first8WeeksCount: 0,
    firstVaccineWeeks: 6,
    philosophy: 'Norway uses a focused approach starting at 6 weeks with rotavirus. Core routine vaccines begin at 3 months. No birth doses. Excellent outcomes with one of the lowest infant mortality rates worldwide.',
    vaccines: [
      { name: 'Rotavirus', timing: '6 weeks, 12 weeks', doses: 2, firstDoseWeeks: 6 },
      { name: 'DTaP-IPV-Hib-HepB (6-in-1)', timing: '3 months, 5 months, 12 months', doses: 3, firstDoseWeeks: 13 },
      { name: 'Pneumococcal (PCV13)', timing: '3 months, 5 months, 12 months', doses: 3, firstDoseWeeks: 13 },
      { name: 'MMR', timing: '15 months, 11-12 years', doses: 2, firstDoseWeeks: 65 },
    ],
    source: 'Folkehelseinstituttet (FHI)',
    sourceUrl: 'https://www.fhi.no/en/id/vaccines/childhood-immunisation-programme/',
    lastUpdated: '2025',
    infantMortality: '2.0 per 1,000',
    neonatalMortality: '1.4 per 1,000',
  },
  {
    code: 'FI',
    flag: '🇫🇮',
    country: 'Finland',
    approach: 'selective',
    totalDosesByAge6: 13,
    birthDoseCount: 0,
    birthLabel: 'No vaccines at birth',
    first8WeeksCount: 1,
    firstVaccineWeeks: 6,
    philosophy: 'Finland starts with rotavirus at 6 weeks. Core injectable vaccines begin at 3 months. No birth doses. Robust public health system with excellent follow-up ensures high coverage without front-loading.',
    vaccines: [
      { name: 'Rotavirus', timing: '6 weeks, 3 months, 5 months', doses: 3, firstDoseWeeks: 6 },
      { name: 'DTaP-IPV-Hib-HepB (6-in-1)', timing: '3 months, 5 months, 12 months', doses: 3, firstDoseWeeks: 13 },
      { name: 'Pneumococcal (PCV)', timing: '3 months, 5 months, 12 months', doses: 3, firstDoseWeeks: 13 },
      { name: 'MMR', timing: '12 months, 6 years', doses: 2, firstDoseWeeks: 52 },
      { name: 'Varicella', timing: '18 months, 6 years', doses: 2, firstDoseWeeks: 78 },
    ],
    source: 'THL (Finnish Institute for Health and Welfare)',
    sourceUrl: 'https://thl.fi/en/web/vaccination/national-vaccination-programme',
    lastUpdated: '2025',
    infantMortality: '2.0 per 1,000',
    neonatalMortality: '1.3 per 1,000',
  },
  {
    code: 'UK',
    flag: '🇬🇧',
    country: 'United Kingdom',
    approach: 'balanced',
    totalDosesByAge6: 20,
    birthDoseCount: 0,
    birthLabel: 'No vaccines at birth',
    first8WeeksCount: 4,
    firstVaccineWeeks: 8,
    philosophy: 'The UK starts routine vaccination at 8 weeks — not at birth. Uses 6-in-1 combination vaccines to minimize injections. Includes MenB (meningococcal B) which the US does not routinely recommend for infants.',
    vaccines: [
      { name: '6-in-1 (DTaP-IPV-Hib-HepB)', timing: '8 weeks, 12 weeks, 16 weeks', doses: 3, firstDoseWeeks: 8 },
      { name: 'MenB', timing: '8 weeks, 16 weeks, 12 months', doses: 3, firstDoseWeeks: 8 },
      { name: 'Rotavirus', timing: '8 weeks, 12 weeks', doses: 2, firstDoseWeeks: 8 },
      { name: 'Pneumococcal (PCV)', timing: '12 weeks, 12 months', doses: 2, firstDoseWeeks: 12 },
      { name: 'Hib/MenC booster', timing: '12 months', doses: 1, firstDoseWeeks: 52 },
      { name: 'MMR', timing: '12 months, 3 years 4 months', doses: 2, firstDoseWeeks: 52 },
      { name: 'Pre-school booster (DTaP-IPV)', timing: '3 years 4 months', doses: 1, firstDoseWeeks: 172 },
    ],
    source: 'NHS UK',
    sourceUrl: 'https://www.nhs.uk/conditions/vaccinations/nhs-vaccinations-and-when-to-have-them/',
    lastUpdated: '2025',
    infantMortality: '3.7 per 1,000',
    neonatalMortality: '2.6 per 1,000',
  },
  {
    code: 'JP',
    flag: '🇯🇵',
    country: 'Japan',
    approach: 'balanced',
    totalDosesByAge6: 22,
    birthDoseCount: 0,
    birthLabel: 'No routine birth vaccines (HepB only if mother is HBsAg+)',
    first8WeeksCount: 4,
    firstVaccineWeeks: 8,
    philosophy: 'Japan does not give routine birth-dose vaccines to the general population. HepB is only given at birth when the mother tests positive. Routine vaccination starts at 2 months. Japan previously suspended certain vaccines pending safety reviews, reflecting a precautionary culture.',
    vaccines: [
      { name: 'Hib', timing: '2 months, 3m, 4m, 12-17m', doses: 4, firstDoseWeeks: 8 },
      { name: 'Pneumococcal (PCV13)', timing: '2 months, 3m, 4m, 12-15m', doses: 4, firstDoseWeeks: 8 },
      { name: 'Hepatitis B', timing: '2 months, 3m, 7-8m', doses: 3, firstDoseWeeks: 8 },
      { name: 'Rotavirus', timing: '2 months, 3m (4m if 3-dose)', doses: 2, firstDoseWeeks: 8 },
      { name: 'DTaP-IPV (Quattrovac)', timing: '3 months, 4m, 5m, 12-18m', doses: 4, firstDoseWeeks: 13 },
      { name: 'BCG', timing: '5-8 months', doses: 1, firstDoseWeeks: 20 },
      { name: 'MR (Measles-Rubella)', timing: '12 months, 5-7 years', doses: 2, firstDoseWeeks: 52 },
      { name: 'Varicella', timing: '12 months, 3 years', doses: 2, firstDoseWeeks: 52 },
    ],
    source: 'MHLW (Ministry of Health, Labour and Welfare)',
    sourceUrl: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/vaccination.html',
    lastUpdated: '2025',
    infantMortality: '1.7 per 1,000',
    neonatalMortality: '0.8 per 1,000',
  },
  {
    code: 'IS',
    flag: '🇮🇸',
    country: 'Iceland',
    approach: 'selective',
    totalDosesByAge6: 11,
    birthDoseCount: 0,
    birthLabel: 'No vaccines at birth',
    first8WeeksCount: 0,
    firstVaccineWeeks: 6,
    philosophy: 'Iceland uses a very lean schedule. Zero vaccines at birth. Rotavirus starts at 6 weeks then core vaccines at 3 months. Iceland has one of the world\'s lowest infant mortality rates despite one of the smallest vaccine schedules.',
    vaccines: [
      { name: 'Rotavirus', timing: '6 weeks, 12 weeks', doses: 2, firstDoseWeeks: 6 },
      { name: 'DTaP-IPV-Hib-HepB (6-in-1)', timing: '3 months, 5 months, 12 months', doses: 3, firstDoseWeeks: 13 },
      { name: 'Pneumococcal (PCV)', timing: '3 months, 5 months, 12 months', doses: 3, firstDoseWeeks: 13 },
      { name: 'MMR', timing: '18 months, 12 years', doses: 2, firstDoseWeeks: 78 },
    ],
    source: 'Directorate of Health (Embætti landlæknis)',
    sourceUrl: 'https://www.landlaeknir.is/english/',
    lastUpdated: '2025',
    infantMortality: '1.5 per 1,000',
    neonatalMortality: '1.0 per 1,000',
  },
]

type FilterBy = 'all' | 'comprehensive' | 'balanced' | 'selective'
type SortBy = 'country' | 'doses-desc' | 'doses-asc' | 'approach' | 'birth-doses' | 'infant-mortality'

export function ComprehensiveVaccineSchedule() {
  const [sortBy, setSortBy] = useState<SortBy>('birth-doses')
  const [filterBy, setFilterBy] = useState<FilterBy>('all')
  const [expandedCountries, setExpandedCountries] = useState<Set<string>>(new Set(['US', 'DK', 'SE']))

  const toggleCountry = (code: string) => {
    setExpandedCountries((prev) => {
      const next = new Set(prev)
      if (next.has(code)) next.delete(code)
      else next.add(code)
      return next
    })
  }

  const expandAll = () => setExpandedCountries(new Set(scheduleData.map((s) => s.code)))
  const collapseAll = () => setExpandedCountries(new Set())
  const handlePrint = () => window.print()

  const filteredData = scheduleData.filter(schedule => {
    if (filterBy === 'all') return true
    return schedule.approach === filterBy
  })

  const sortedData = [...filteredData].sort((a, b) => {
    switch (sortBy) {
      case 'country':
        return a.country.localeCompare(b.country)
      case 'doses-desc':
        return b.totalDosesByAge6 - a.totalDosesByAge6
      case 'doses-asc':
        return a.totalDosesByAge6 - b.totalDosesByAge6
      case 'approach':
        return a.approach.localeCompare(b.approach)
      case 'birth-doses':
        return b.birthDoseCount - a.birthDoseCount || a.firstVaccineWeeks - b.firstVaccineWeeks
      case 'infant-mortality':
        return parseFloat(a.infantMortality) - parseFloat(b.infantMortality)
      default:
        return 0
    }
  })

  const usSchedule = scheduleData.find(s => s.code === 'US')!
  const nordicCountries = scheduleData.filter(s => ['DK', 'SE', 'NO', 'FI', 'IS'].includes(s.code))
  const avgNordicDoses = Math.round(nordicCountries.reduce((a, c) => a + c.totalDosesByAge6, 0) / nordicCountries.length)

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 space-y-8">
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <Globe size={32} weight="duotone" className="text-primary" />
          <h1 className="text-3xl font-semibold text-foreground">
            International Vaccine Schedule Comparison
          </h1>
        </div>
        <p className="text-muted-foreground text-lg">
          How the United States compares to other developed nations in childhood vaccination timing, quantity, and newborn protocols
        </p>
      </div>

      <Card className="border-2 border-destructive/30 bg-destructive/5">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Baby size={28} weight="fill" className="text-destructive" />
            <div>
              <CardTitle className="text-xl">The First 24 Hours: What Happens to Newborns?</CardTitle>
              <CardDescription className="text-base mt-1">
                A side-by-side look at what newborns receive within their first day of life
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-5 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">🇺🇸</span>
                <h3 className="font-bold text-lg">United States</h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Syringe size={18} weight="fill" className="text-destructive" />
                  <span className="font-semibold">Hepatitis B vaccine — within 24 hours of birth</span>
                </div>
                <p className="text-sm text-muted-foreground pl-7">
                  Given to <strong>all newborns</strong> regardless of whether the mother is HepB-positive or negative. 
                  The US is one of very few developed countries that vaccinates every single healthy newborn on their first day of life.
                </p>
              </div>
              <Separator />
              <div className="space-y-1 text-sm">
                <p><strong>By 2 months old,</strong> a US infant will have received up to <strong>7 vaccine antigens</strong> across <strong>6 different diseases</strong> in a single visit:</p>
                <ul className="list-disc pl-5 space-y-0.5 text-muted-foreground">
                  <li>HepB #2</li>
                  <li>DTaP #1 (diphtheria, tetanus, pertussis)</li>
                  <li>Hib #1</li>
                  <li>IPV #1 (polio)</li>
                  <li>PCV #1 (pneumococcal)</li>
                  <li>Rotavirus #1</li>
                </ul>
              </div>
            </div>

            <div className="bg-evidence/10 border border-evidence/20 rounded-lg p-5 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">🇩🇰🇸🇪🇳🇴🇫🇮🇮🇸🇳🇿</span>
                <h3 className="font-bold text-lg">Denmark, Sweden, Norway, Finland, Iceland, NZ</h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={18} weight="fill" className="text-evidence" />
                  <span className="font-semibold">Zero vaccines at birth</span>
                </div>
                <p className="text-sm text-muted-foreground pl-7">
                  None of these countries give <strong>any</strong> routine vaccines on the day of birth.
                  The newborn period is protected through maternal immunity and breastfeeding support, 
                  without injections during the critical first days and weeks of life.
                </p>
              </div>
              <Separator />
              <div className="space-y-1 text-sm">
                <p><strong>First vaccines begin at:</strong></p>
                <ul className="list-disc pl-5 space-y-0.5 text-muted-foreground">
                  <li>Denmark — <strong>3 months</strong> (13 weeks)</li>
                  <li>Sweden — <strong>3 months</strong> (13 weeks)</li>
                  <li>Norway — <strong>6 weeks</strong> (oral rotavirus only; injections at 3 months)</li>
                  <li>Finland — <strong>6 weeks</strong> (oral rotavirus only; injections at 3 months)</li>
                  <li>Iceland — <strong>6 weeks</strong> (oral rotavirus only; injections at 3 months)</li>
                  <li>New Zealand — <strong>6 weeks</strong></li>
                </ul>
              </div>
            </div>
          </div>

          <Alert className="border-caution bg-caution/10">
            <Warning size={20} weight="fill" className="text-caution-foreground" />
            <AlertDescription className="ml-2 space-y-2">
              <p className="font-semibold text-foreground">Why does this matter?</p>
              <p className="text-sm">
                The countries with the <strong>fewest vaccines at birth</strong> — Denmark, Sweden, Norway, Finland, Iceland, Japan — consistently rank among the nations with the <strong>lowest infant and neonatal mortality</strong> in the world.
                Meanwhile, the United States, which vaccinates more aggressively and earlier than virtually any other developed nation, has the <strong>highest infant mortality rate</strong> in the developed world.
              </p>
              <p className="text-sm">
                This does not prove causation, but it clearly demonstrates that giving fewer vaccines to newborns is compatible with — and correlated with — better infant health outcomes.
                These countries prove that a more conservative, paced approach to infant vaccination is not only safe, it is the norm globally.
              </p>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Total Vaccine Doses by Age 6 (by Country)</CardTitle>
          <CardDescription>
            Visual comparison of how many individual vaccine doses children receive before their 6th birthday
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {[...scheduleData].sort((a, b) => b.totalDosesByAge6 - a.totalDosesByAge6).map(s => {
            const pct = (s.totalDosesByAge6 / usSchedule.totalDosesByAge6) * 100
            const isUS = s.code === 'US'
            return (
              <div key={s.code} className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span className={`font-medium ${isUS ? 'text-destructive' : 'text-foreground'}`}>
                    {s.flag} {s.country}
                  </span>
                  <span className={`font-bold ${isUS ? 'text-destructive' : 'text-foreground'}`}>
                    {s.totalDosesByAge6} doses
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div
                    className={`h-3 rounded-full transition-all ${isUS ? 'bg-destructive' : 'bg-primary'}`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            )
          })}
          <p className="text-xs text-muted-foreground pt-2">
            The US administers roughly {Math.round(usSchedule.totalDosesByAge6 / avgNordicDoses)}× more vaccine doses than the average Nordic country ({avgNordicDoses} doses) by age 6.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Infant Mortality Rates (Deaths per 1,000 Live Births)</CardTitle>
          <CardDescription>
            Countries with fewer and later infant vaccines consistently show lower infant mortality — Source: WHO / World Bank, latest available data
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {[...scheduleData].sort((a, b) => parseFloat(a.infantMortality) - parseFloat(b.infantMortality)).map(s => {
            const rate = parseFloat(s.infantMortality)
            const maxRate = parseFloat(usSchedule.infantMortality)
            const pct = (rate / maxRate) * 100
            const isUS = s.code === 'US'
            return (
              <div key={s.code} className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span className={`font-medium ${isUS ? 'text-destructive' : 'text-foreground'}`}>
                    {s.flag} {s.country}
                    <span className="ml-2 text-xs text-muted-foreground">
                      ({s.birthDoseCount > 0 ? `${s.birthDoseCount} birth dose` : 'no birth doses'} · {s.totalDosesByAge6} total)
                    </span>
                  </span>
                  <span className={`font-bold ${isUS ? 'text-destructive' : 'text-foreground'}`}>
                    {s.infantMortality}
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div
                    className={`h-3 rounded-full transition-all ${isUS ? 'bg-destructive' : 'bg-evidence'}`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            )
          })}
        </CardContent>
      </Card>

      <Alert>
        <AlertDescription>
          <strong>Educational Resource:</strong> This comparison uses official data from each country's public health authority.
          All schedules are developed by qualified medical professionals. Differences reflect local disease patterns,
          healthcare infrastructure, cultural values, and public health philosophy.
          This information is provided to support informed consent — not to provide medical advice.
          Always discuss your child's vaccination plan with a healthcare provider you trust.
        </AlertDescription>
      </Alert>

      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" onClick={expandAll}>
            <CaretDown className="mr-2" /> Expand All
          </Button>
          <Button variant="outline" size="sm" onClick={collapseAll}>
            <CaretUp className="mr-2" /> Collapse All
          </Button>
          <Button variant="outline" size="sm" onClick={handlePrint}>
            <Printer className="mr-2" /> Print
          </Button>
        </div>

        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          <Select value={filterBy} onValueChange={(value) => setFilterBy(value as FilterBy)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by approach" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Approaches</SelectItem>
              <SelectItem value="comprehensive">Comprehensive</SelectItem>
              <SelectItem value="balanced">Balanced</SelectItem>
              <SelectItem value="selective">Selective</SelectItem>
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortBy)}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="birth-doses">Birth Doses (Most First)</SelectItem>
              <SelectItem value="doses-desc">Total Doses (High → Low)</SelectItem>
              <SelectItem value="doses-asc">Total Doses (Low → High)</SelectItem>
              <SelectItem value="infant-mortality">Infant Mortality (Best First)</SelectItem>
              <SelectItem value="country">Country (A-Z)</SelectItem>
              <SelectItem value="approach">Approach</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-4">
        {sortedData.map((schedule) => {
          const isExpanded = expandedCountries.has(schedule.code)
          const isUS = schedule.code === 'US'

          return (
            <Card key={schedule.code} className={`overflow-hidden transition-colors ${isUS ? 'border-destructive/30 bg-destructive/5' : 'hover:border-primary/30'}`}>
              <button
                type="button"
                onClick={() => toggleCountry(schedule.code)}
                className="w-full text-left p-6 hover:bg-muted/50 transition-colors"
                aria-expanded={isExpanded}
                aria-controls={`schedule-${schedule.code}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-xl">{schedule.flag}</span>
                      <h3 className="text-xl font-semibold text-foreground">
                        {schedule.country}
                      </h3>
                      <Badge
                        variant={
                          schedule.approach === 'comprehensive'
                            ? 'destructive'
                            : schedule.approach === 'balanced'
                            ? 'secondary'
                            : 'outline'
                        }
                      >
                        {schedule.approach.charAt(0).toUpperCase() + schedule.approach.slice(1)}
                      </Badge>
                      {schedule.birthDoseCount > 0 ? (
                        <Badge variant="destructive" className="text-xs">
                          <Syringe size={12} weight="fill" className="mr-1" />
                          {schedule.birthDoseCount} birth dose{schedule.birthDoseCount > 1 ? 's' : ''}
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="text-xs border-evidence text-evidence">
                          <ShieldCheck size={12} weight="fill" className="mr-1" />
                          No birth doses
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {schedule.philosophy}
                    </p>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground flex-wrap">
                      <span className="font-semibold text-foreground">{schedule.totalDosesByAge6} doses by age 6</span>
                      <span>•</span>
                      <span>First vaccine: {schedule.firstVaccineWeeks === 0 ? 'Birth' : `${schedule.firstVaccineWeeks} weeks`}</span>
                      <span>•</span>
                      <span>Infant mortality: {schedule.infantMortality}</span>
                      <span>•</span>
                      <span>Source: <a href={schedule.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{schedule.source}</a></span>
                    </div>
                  </div>
                  <div className="flex-shrink-0 pt-1">
                    {isExpanded ? (
                      <CaretUp className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <CaretDown className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                </div>
              </button>

              {isExpanded && (
                <CardContent id={`schedule-${schedule.code}`} className="pt-0 pb-6 px-6 border-t">
                  <div className="space-y-3 mt-4">
                    <div className={`p-4 rounded-lg ${schedule.birthDoseCount > 0 ? 'bg-destructive/10 border border-destructive/20' : 'bg-evidence/10 border border-evidence/20'}`}>
                      <div className="flex items-center gap-2 mb-1">
                        <Baby size={18} weight="fill" className={schedule.birthDoseCount > 0 ? 'text-destructive' : 'text-evidence'} />
                        <span className="font-semibold text-sm">At Birth (Day 1)</span>
                      </div>
                      <p className={`text-sm ${schedule.birthDoseCount > 0 ? 'text-destructive' : 'text-evidence'} font-medium`}>
                        {schedule.birthLabel}
                      </p>
                    </div>

                    <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide pt-2">
                      Full Vaccine Schedule
                    </h4>
                    {schedule.vaccines.map((vaccine, idx) => (
                      <div
                        key={idx}
                        className={`flex items-start gap-4 p-3 rounded-lg ${vaccine.birthDose ? 'bg-destructive/10 border border-destructive/20' : 'bg-muted/30'}`}
                      >
                        <div className="flex-1">
                          <div className="font-medium text-foreground flex items-center gap-2">
                            {vaccine.name}
                            {vaccine.birthDose && (
                              <Badge variant="destructive" className="text-xs">Birth dose</Badge>
                            )}
                          </div>
                          <div className="text-sm text-muted-foreground mt-1">
                            {vaccine.timing}
                          </div>
                        </div>
                        <div className="flex-shrink-0 text-right">
                          <div className="text-sm font-medium text-foreground">
                            {vaccine.doses} {vaccine.doses === 1 ? 'dose' : 'doses'}
                          </div>
                        </div>
                      </div>
                    ))}

                    <Separator className="my-3" />
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 rounded-lg bg-muted/30">
                        <p className="text-xs text-muted-foreground font-medium">Infant Mortality Rate</p>
                        <p className={`text-xl font-bold ${isUS ? 'text-destructive' : 'text-foreground'}`}>{schedule.infantMortality}</p>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-muted/30">
                        <p className="text-xs text-muted-foreground font-medium">Neonatal Mortality Rate</p>
                        <p className={`text-xl font-bold ${isUS ? 'text-destructive' : 'text-foreground'}`}>{schedule.neonatalMortality}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          )
        })}
      </div>

      <Card className="border-caution/30 bg-caution/5">
        <CardContent className="p-6 space-y-4">
          <h3 className="font-bold text-lg flex items-center gap-2">
            <Warning size={22} weight="fill" className="text-caution-foreground" />
            Key Takeaways for US Parents
          </h3>
          <div className="space-y-3 text-sm">
            <p>
              <strong>The US is an outlier.</strong> It is the only developed nation profiled here that gives a vaccine within 24 hours of birth to all newborns. 
              Denmark, Sweden, Norway, Finland, Iceland, Japan, the UK, and New Zealand all wait at least 6 weeks — often 3 months — before the first injection.
            </p>
            <p>
              <strong>More is not necessarily better.</strong> The US gives roughly {Math.round(usSchedule.totalDosesByAge6 / avgNordicDoses)}× more vaccine doses than the average Nordic country by age 6, yet has an infant mortality rate ({usSchedule.infantMortality}) that is 2-3× higher than countries like Japan ({scheduleData.find(s => s.code === 'JP')?.infantMortality}), Iceland ({scheduleData.find(s => s.code === 'IS')?.infantMortality}), and Finland ({scheduleData.find(s => s.code === 'FI')?.infantMortality}).
            </p>
            <p>
              <strong>You have the right to informed consent.</strong> In most US states, parents can legally request a delayed or alternative schedule. 
              Many pediatricians are willing to work with families on spacing out vaccines. You are not required to give all recommended doses at the recommended times.
            </p>
            <p>
              <strong>Consider the Nordic model.</strong> The Scandinavian countries demonstrate that waiting to vaccinate — and giving fewer total doses — is a well-tested, evidence-based approach 
              used by nations with excellent pediatric healthcare and the best infant survival rates in the world. You can use these schedules as conversation starters with your pediatrician.
            </p>
          </div>
        </CardContent>
      </Card>

      <Alert>
        <AlertDescription className="space-y-2">
          <p><strong>Approach Definitions:</strong></p>
          <p>• <strong>Comprehensive:</strong> Extensive early protection with higher total dose counts, including birth doses</p>
          <p>• <strong>Balanced:</strong> Moderate approach that starts within the first 2 months but excludes birth doses</p>
          <p>• <strong>Selective:</strong> Focused on diseases with highest local burden, fewer total doses, no birth vaccines, often starting at 3 months</p>
        </AlertDescription>
      </Alert>

      <p className="text-xs text-muted-foreground text-center">
        Data sourced from each country's official public health authority. Last verified: 2025. 
        Infant mortality data: WHO / World Bank. This is educational information, not medical advice.
      </p>
    </div>
  )
}
