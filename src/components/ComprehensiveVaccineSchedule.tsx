import { useState } from 'react'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { CaretDown, CaretUp, Printer } from '@phosphor-icons/react'

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
    totalDoses: 27,
    approach: 'comprehensive',
    vaccines: [
      { name: 'Hepatitis B', timing: 'Birth, 1-2m, 6-18m', doses: 3 },
      { name: 'DTaP', timing: '2m, 4m, 6m, 15-18m', doses: 4 },
      { name: 'Hib', timing: '2m, 4m, 6m, 12-15m', doses: 4 },
      { name: 'Pneumococcal (PCV)', timing: '2m, 4m, 6m, 12-15m', doses: 4 },
      { name: 'Polio (IPV)', timing: '2m, 4m, 6-18m', doses: 3 },
      { name: 'Rotavirus', timing: '2m, 4m, 6m', doses: 3 },
      { name: 'MMR', timing: '12-15m, 4-6y', doses: 2 },
      { name: 'Varicella', timing: '12-15m, 4-6y', doses: 2 },
      { name: 'Hepatitis A', timing: '12-23m (2 doses)', doses: 2 },
    ],
    philosophy: 'Comprehensive approach prioritizing early protection; combination vaccines available to reduce injection burden',
    source: 'CDC/ACIP',
    lastUpdated: '2024'
  },
  {
    code: 'CA',
    country: 'Canada',
    totalDoses: 26,
    approach: 'comprehensive',
    vaccines: [
      { name: 'Hepatitis B', timing: 'Birth, 2m, 6m', doses: 3 },
      { name: 'DTaP-IPV-Hib', timing: '2m, 4m, 6m, 18m', doses: 4 },
      { name: 'Pneumococcal (PCV)', timing: '2m, 4m, 12m', doses: 3 },
      { name: 'Meningococcal C', timing: '12m', doses: 1 },
      { name: 'MMR', timing: '12m, 18m', doses: 2 },
      { name: 'Varicella', timing: '12m, 18m', doses: 2 },
      { name: 'Rotavirus', timing: '2m, 4m, 6m', doses: 3 },
    ],
    philosophy: 'Similar to US approach with provincial variations; combination vaccines reduce injection burden',
    source: 'NACI',
    lastUpdated: '2024'
  },
  {
    code: 'GB',
    country: 'United Kingdom',
    totalDoses: 23,
    approach: 'balanced',
    vaccines: [
      { name: 'DTaP-IPV-Hib-HepB', timing: '8w, 12w, 16w', doses: 3 },
      { name: 'Pneumococcal (PCV)', timing: '12w, 12m', doses: 2 },
      { name: 'Rotavirus', timing: '8w, 12w', doses: 2 },
      { name: 'Men B', timing: '8w, 16w, 12m', doses: 3 },
      { name: 'Hib/Men C', timing: '12m', doses: 1 },
      { name: 'MMR', timing: '12m, 3y4m', doses: 2 },
      { name: 'Flu (nasal)', timing: 'Annually 2-8y', doses: 1 },
    ],
    philosophy: 'Focuses on diseases with significant UK burden; combination vaccines reduce clinic visits',
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
      { name: 'DTaP-IPV-Hib-HepB', timing: '2m, 4m, 6m', doses: 3 },
      { name: 'Pneumococcal (PCV)', timing: '2m, 4m, 12m', doses: 3 },
      { name: 'Rotavirus', timing: '2m, 4m, 6m', doses: 3 },
      { name: 'MMR', timing: '12m, 18m', doses: 2 },
      { name: 'Meningococcal B', timing: '2m, 4m, 12m', doses: 3 },
    ],
    philosophy: 'Comprehensive approach tailored to Australian disease patterns and geographic challenges',
    source: 'ATAGI',
    lastUpdated: '2024'
  },
  {
    code: 'DE',
    country: 'Germany',
    totalDoses: 23,
    approach: 'balanced',
    vaccines: [
      { name: 'DTaP-IPV-Hib-HepB', timing: '2m, 3m, 4m, 11-14m', doses: 4 },
      { name: 'Pneumococcal (PCV)', timing: '2m, 4m, 11-14m', doses: 3 },
      { name: 'Rotavirus', timing: '2m, 3m, 4m', doses: 3 },
      { name: 'MMR', timing: '11-14m, 15-23m', doses: 2 },
      { name: 'Varicella', timing: '11-14m, 15-23m', doses: 2 },
    ],
    philosophy: 'Evidence-based schedule balancing early protection with combination vaccines',
    source: 'STIKO',
    lastUpdated: '2024'
  },
  {
    code: 'FR',
    country: 'France',
    totalDoses: 21,
    approach: 'balanced',
    vaccines: [
      { name: 'DTaP-IPV-Hib-HepB', timing: '2m, 4m, 11m', doses: 3 },
      { name: 'Pneumococcal (PCV)', timing: '2m, 4m, 11m', doses: 3 },
      { name: 'Men C', timing: '5m, 12m', doses: 2 },
      { name: 'MMR', timing: '12m, 16-18m', doses: 2 },
    ],
    philosophy: 'Mandatory vaccination laws ensure high coverage; combination vaccines preferred',
    source: 'Ministère de la Santé',
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
    ],
    philosophy: 'High voluntary compliance; selective schedule based on Dutch disease patterns',
    source: 'RIVM',
    lastUpdated: '2024'
  },
  {
    code: 'SE',
    country: 'Sweden',
    totalDoses: 15,
    approach: 'selective',
    vaccines: [
      { name: 'DTaP-IPV-Hib', timing: '3m, 5m, 12m', doses: 3 },
      { name: 'Pneumococcal (PCV)', timing: '3m, 5m, 12m', doses: 3 },
      { name: 'MMR', timing: '18m, 6-8y', doses: 2 },
    ],
    philosophy: 'Conservative schedule focusing on diseases with significant Swedish prevalence; no Hepatitis B due to low risk; high healthcare access enables later start',
    source: 'Folkhälsomyndigheten',
    lastUpdated: '2024'
  },
  {
    code: 'DK',
    country: 'Denmark',
    totalDoses: 15,
    approach: 'selective',
    vaccines: [
      { name: 'DTaP-IPV-Hib', timing: '3m, 5m, 12m', doses: 3 },
      { name: 'Pneumococcal (PCV)', timing: '3m, 5m, 12m', doses: 3 },
      { name: 'MMR', timing: '15m, 4y', doses: 2 },
    ],
    philosophy: 'Conservative approach; targets only diseases with significant Danish burden; universal healthcare enables later schedule',
    source: 'Sundhedsstyrelsen',
    lastUpdated: '2024'
  },
  {
    code: 'NO',
    country: 'Norway',
    totalDoses: 14,
    approach: 'selective',
    vaccines: [
      { name: 'DTaP-IPV-Hib-HepB', timing: '3m, 5m, 12m', doses: 3 },
      { name: 'Pneumococcal (PCV)', timing: '3m, 5m, 12m', doses: 3 },
      { name: 'MMR', timing: '15m, 12y', doses: 2 },
    ],
    philosophy: 'Emphasis on severe disease prevention; rotavirus excluded due to low severe disease burden',
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
    philosophy: 'Small population with excellent healthcare infrastructure; selective approach based on local disease patterns',
    source: 'Landlæknir',
    lastUpdated: '2024'
  },
  {
    code: 'JP',
    country: 'Japan',
    totalDoses: 22,
    approach: 'comprehensive',
    vaccines: [
      { name: 'Hib', timing: '2m, 3m, 4m, 12m', doses: 4 },
      { name: 'Pneumococcal (PCV)', timing: '2m, 4m, 6m, 12m', doses: 4 },
      { name: 'DTaP', timing: '3m, 4m, 5m, 18m', doses: 4 },
      { name: 'Polio (IPV)', timing: '3m, 4m, 5m, 18m', doses: 4 },
      { name: 'BCG', timing: '5-8m', doses: 1 },
      { name: 'MR (Measles-Rubella)', timing: '12m, 5-6y', doses: 2 },
    ],
    philosophy: 'BCG for TB prevention; individual-dose schedule rather than combination vaccines; high voluntary compliance',
    source: 'MHLW',
    lastUpdated: '2024'
  }
]

type SortBy = 'country' | 'doses-asc' | 'doses-desc' | 'approach'
type FilterBy = 'all' | 'comprehensive' | 'balanced' | 'selective'

export function ComprehensiveVaccineSchedule() {
  const [expandedCountries, setExpandedCountries] = useState<Set<string>>(new Set(['US']))
  const [sortBy, setSortBy] = useState<SortBy>('doses-desc')
  const [filterBy, setFilterBy] = useState<FilterBy>('all')

  const toggleCountry = (code: string) => {
    setExpandedCountries((prev) => {
      const next = new Set(prev)
      if (next.has(code)) {
        next.delete(code)
      } else {
        next.add(code)
      }
      return next
    })
  }

  const expandAll = () => {
    setExpandedCountries(new Set(scheduleData.map(s => s.code)))
  }

  const collapseAll = () => {
    setExpandedCountries(new Set())
  }

  const handlePrint = () => {
    window.print()
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

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold text-foreground">Vaccine Schedules by Country</h1>
        <p className="text-muted-foreground">
          Compare recommended vaccine schedules across different countries to understand the range of evidence-based approaches.
        </p>
      </div>

      <Alert>
        <AlertDescription className="space-y-2">
          <p className="font-medium">Why do vaccine schedules differ by country?</p>
          <p>
            Each country's vaccine schedule reflects its unique disease patterns, healthcare infrastructure, 
            and public health priorities. All are evidence-based but optimized for local contexts.
          </p>
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle>Filter and Sort</CardTitle>
          <CardDescription>Customize your view of international vaccine schedules</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Filter by approach</label>
              <Select value={filterBy} onValueChange={(v) => setFilterBy(v as FilterBy)}>
                <SelectTrigger>
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

            <div className="space-y-2">
              <label className="text-sm font-medium">Sort by</label>
              <Select value={sortBy} onValueChange={(v) => setSortBy(v as SortBy)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="country">By country</SelectItem>
                  <SelectItem value="doses-desc">Most doses first</SelectItem>
                  <SelectItem value="doses-asc">Fewest doses first</SelectItem>
                  <SelectItem value="approach">By approach</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" onClick={expandAll}>
              Expand all
            </Button>
            <Button variant="outline" size="sm" onClick={collapseAll}>
              Collapse all
            </Button>
            <Button variant="outline" size="sm" onClick={handlePrint}>
              <Printer className="mr-2" />
              Print
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {sortedData.map((schedule) => {
          const isExpanded = expandedCountries.has(schedule.code)
          
          return (
            <Card key={schedule.code}>
              <CardHeader 
                className="cursor-pointer hover:bg-muted/50 transition-colors"
                onClick={() => toggleCountry(schedule.code)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle>{schedule.country}</CardTitle>
                      <Badge variant={
                        schedule.approach === 'comprehensive' ? 'default' :
                        schedule.approach === 'balanced' ? 'secondary' :
                        'outline'
                      }>
                        {schedule.approach}
                      </Badge>
                      <Badge variant="outline">{schedule.totalDoses} doses</Badge>
                    </div>
                    <CardDescription>{schedule.philosophy}</CardDescription>
                  </div>
                  <div className="ml-4 text-muted-foreground">
                    {isExpanded ? <CaretUp size={20} /> : <CaretDown size={20} />}
                  </div>
                </div>
              </CardHeader>

              {isExpanded && (
                <CardContent className="space-y-4 pt-0">
                  <div className="space-y-3">
                    <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
                      Vaccine Schedule
                    </h4>
                    <div className="space-y-2">
                      {schedule.vaccines.map((vaccine, idx) => (
                        <div 
                          key={idx}
                          className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex-1">
                            <div className="font-medium">{vaccine.name}</div>
                            <div className="text-sm text-muted-foreground">{vaccine.timing}</div>
                          </div>
                          <Badge variant="secondary">{vaccine.doses} {vaccine.doses === 1 ? 'dose' : 'doses'}</Badge>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t text-xs text-muted-foreground">
                    <div>Source: {schedule.source}</div>
                    <div>Last updated: {schedule.lastUpdated}</div>
                  </div>
                </CardContent>
              )}
            </Card>
          )
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>What This Comparison Shows</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p>
            <strong>Comprehensive approach</strong> (20-27 doses): More vaccines given earlier, often including diseases with lower prevalence. Common in countries with diverse populations or higher disease burden.
          </p>
          <p>
            <strong>Balanced approach</strong> (18-23 doses): Middle ground focusing on diseases with moderate to high burden while using combination vaccines to reduce visits.
          </p>
          <p>
            <strong>Selective approach</strong> (14-17 doses): Focuses on diseases with significant local burden. Often used in countries with excellent healthcare infrastructure, lower disease prevalence, or high population health.
          </p>
        </CardContent>
      </Card>

      <Alert>
        <AlertDescription>
          All listed schedules are from official national health authorities and reflect evidence-based public health decisions. 
          Differences reflect local disease patterns, healthcare infrastructure, and population health metrics rather than disagreement about vaccine safety or efficacy.
        </AlertDescription>
      </Alert>
    </div>
  )
}
