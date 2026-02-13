import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
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
    ],
    philosophy: 'Comprehensive schedule with early protection against multiple diseases',
    source: 'CDC',
    lastUpdated: '2024'
  },
  {
    code: 'CA',
    country: 'Canada',
    totalDoses: 25,
    approach: 'comprehensive',
    vaccines: [
      { name: 'Hepatitis B', timing: 'Birth, 2m, 6m', doses: 3 },
      { name: 'DTaP-IPV-Hib', timing: '2m, 4m, 6m, 18m', doses: 4 },
      { name: 'Pneumococcal (PCV)', timing: '2m, 4m, 12m', doses: 3 },
      { name: 'Meningococcal C', timing: '12m', doses: 1 },
      { name: 'Rotavirus', timing: '2m, 4m, 6m', doses: 3 },
      { name: 'MMR', timing: '12m, 4-6y', doses: 2 },
      { name: 'Varicella', timing: '12m, 4-6y', doses: 2 },
    ],
    philosophy: 'Evidence-based schedule balancing early protection with healthcare system capacity',
    source: 'Public Health Agency of Canada',
    lastUpdated: '2024'
  },
  {
    code: 'UK',
    country: 'United Kingdom',
    totalDoses: 23,
    approach: 'balanced',
    vaccines: [
      { name: 'DTaP-IPV-Hib-HepB', timing: '8w, 12w, 16w', doses: 3 },
      { name: 'Pneumococcal (PCV)', timing: '12w, 1y', doses: 2 },
      { name: 'Rotavirus', timing: '8w, 12w', doses: 2 },
      { name: 'Men B', timing: '8w, 16w, 1y', doses: 3 },
      { name: 'Hib/Men C', timing: '1y', doses: 1 },
      { name: 'MMR', timing: '1y, 3y4m', doses: 2 },
    ],
    philosophy: 'Focused schedule using combination vaccines to maximize protection with fewer visits',
    source: 'NHS/UKHSA',
    lastUpdated: '2024'
  },
  {
    code: 'NL',
    country: 'Netherlands',
    totalDoses: 20,
    approach: 'balanced',
    vaccines: [
      { name: 'DTaP-IPV-Hib-HepB', timing: '6w, 3m, 5m, 11m', doses: 4 },
      { name: 'Pneumococcal (PCV)', timing: '2m, 4m, 11m', doses: 3 },
      { name: 'MMR', timing: '14m, 9y', doses: 2 },
    ],
    philosophy: 'Evidence-based selective schedule focusing on diseases with significant local burden',
    source: 'RIVM',
    lastUpdated: '2024'
  },
  {
    code: 'SE',
    country: 'Sweden',
    totalDoses: 18,
    approach: 'selective',
    vaccines: [
      { name: 'DTaP-IPV-Hib', timing: '3m, 5m, 12m', doses: 3 },
      { name: 'Pneumococcal (PCV)', timing: '3m, 5m, 12m', doses: 3 },
      { name: 'MMR', timing: '18m, 6-8y', doses: 2 },
    ],
    philosophy: 'Selective approach focusing on diseases with highest burden in Swedish context',
    source: 'Folkhälsomyndigheten',
    lastUpdated: '2024'
  },
  {
    code: 'DK',
    country: 'Denmark',
    totalDoses: 16,
    approach: 'selective',
    vaccines: [
      { name: 'DTaP-IPV-Hib', timing: '3m, 5m, 12m', doses: 3 },
      { name: 'Pneumococcal (PCV)', timing: '3m, 5m, 12m', doses: 3 },
      { name: 'MMR', timing: '15m, 4y', doses: 2 },
    ],
    philosophy: 'Selective evidence-based approach optimized for Danish population health',
    source: 'Sundhedsstyrelsen',
    lastUpdated: '2024'
  },
  {
    code: 'NO',
    country: 'Norway',
    totalDoses: 17,
    approach: 'selective',
    vaccines: [
      { name: 'DTaP-IPV-Hib', timing: '3m, 5m, 12m', doses: 3 },
      { name: 'Pneumococcal (PCV)', timing: '3m, 5m, 12m', doses: 3 },
      { name: 'MMR', timing: '15m, 12y', doses: 2 },
    ],
    philosophy: 'Selective approach tailored to Norwegian disease patterns and healthcare system',
    source: 'Folkehelseinstituttet',
    lastUpdated: '2024'
  },
  {
    code: 'IS',
    country: 'Iceland',
    totalDoses: 16,
    approach: 'selective',
    vaccines: [
      { name: 'DTaP-IPV-Hib', timing: '3m, 5m, 12m', doses: 3 },
      { name: 'Pneumococcal (PCV)', timing: '3m, 5m, 12m', doses: 3 },
      { name: 'MMR', timing: '18m, 12y', doses: 2 },
    ],
    philosophy: 'Evidence-based selective approach for small population with excellent healthcare infrastructure',
    source: 'Embætti landlæknis',
    lastUpdated: '2024'
  },
  {
    code: 'JP',
    country: 'Japan',
    totalDoses: 19,
    approach: 'balanced',
    vaccines: [
      { name: 'Hib', timing: '2m, 3m, 4m, 12-18m', doses: 4 },
      { name: 'Pneumococcal (PCV)', timing: '2m, 4m, 6m, 12-15m', doses: 4 },
      { name: 'DTaP', timing: '3m, 4m, 5m', doses: 3 },
      { name: 'Polio (IPV)', timing: '3m, 4m, 5m', doses: 3 },
      { name: 'MR (Measles-Rubella)', timing: '12m, 5-6y', doses: 2 },
    ],
    philosophy: 'Balanced schedule reflecting Japanese disease patterns and healthcare infrastructure',
    source: 'MHLW',
    lastUpdated: '2024'
  },
  {
    code: 'AU',
    country: 'Australia',
    totalDoses: 24,
    approach: 'comprehensive',
    vaccines: [
      { name: 'Hepatitis B', timing: 'Birth', doses: 1 },
      { name: 'DTaP-IPV-Hib-HepB', timing: '2m, 4m, 6m', doses: 3 },
      { name: 'Pneumococcal (PCV)', timing: '2m, 4m, 6m, 12m', doses: 4 },
      { name: 'Rotavirus', timing: '2m, 4m', doses: 2 },
      { name: 'Meningococcal B', timing: '2m, 4m, 12m', doses: 3 },
      { name: 'MMR', timing: '12m, 18m', doses: 2 },
    ],
    philosophy: 'Comprehensive approach tailored to Australian disease patterns and geographic challenges',
    source: 'ATAGI',
    lastUpdated: '2024'
  },
  {
    code: 'DE',
    country: 'Germany',
    totalDoses: 22,
    approach: 'balanced',
    vaccines: [
      { name: 'DTaP-IPV-Hib-HepB', timing: '2m, 3m, 4m, 11-14m', doses: 4 },
      { name: 'Pneumococcal (PCV)', timing: '2m, 4m, 11-14m', doses: 3 },
      { name: 'Rotavirus', timing: '2m, 3m, 4m', doses: 3 },
      { name: 'MMR', timing: '11-14m, 15-23m', doses: 2 },
      { name: 'Varicella', timing: '11-14m, 15-23m', doses: 2 },
    ],
    philosophy: 'Balanced evidence-based approach with comprehensive coverage of common diseases',
    source: 'STIKO',
    lastUpdated: '2024'
  },
  {
    code: 'FR',
    country: 'France',
    totalDoses: 23,
    approach: 'balanced',
    vaccines: [
      { name: 'DTaP-IPV-Hib-HepB', timing: '2m, 4m, 11m', doses: 3 },
      { name: 'Pneumococcal (PCV)', timing: '2m, 4m, 11m', doses: 3 },
      { name: 'Meningococcal C', timing: '5m, 12m', doses: 2 },
      { name: 'MMR', timing: '12m, 16-18m', doses: 2 },
    ],
    philosophy: 'Balanced approach emphasizing combination vaccines and efficient scheduling',
    source: 'Ministère de la Santé',
    lastUpdated: '2024'
  }
]

type FilterBy = 'all' | 'comprehensive' | 'balanced' | 'selective'
type SortBy = 'country' | 'doses-desc' | 'doses-asc' | 'approach'

export function ComprehensiveVaccineSchedule() {
  const [expandedCountries, setExpandedCountries] = useState<Set<string>>(new Set())
  const [filterBy, setFilterBy] = useState<FilterBy>('all')
  const [sortBy, setSortBy] = useState<SortBy>('country')

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

  const filteredData = scheduleData.filter(schedule => {
    if (filterBy === 'all') return true
    return schedule.approach === filterBy
  })

  const sortedData = [...filteredData].sort((a, b) => {
    switch (sortBy) {
      case 'country':
        return a.country.localeCompare(b.country)
      case 'doses-desc':
        return b.totalDoses - a.totalDoses
      case 'doses-asc':
        return a.totalDoses - b.totalDoses
      case 'approach':
        return a.approach.localeCompare(b.approach)
      default:
        return 0
    }
  })

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold text-foreground">
          International Vaccine Schedule Comparison
        </h1>
        <p className="text-muted-foreground">
          Compare recommended childhood vaccination schedules across different countries
        </p>
      </div>

      <Alert>
        <AlertDescription>
          <strong>Educational Resource:</strong> This comparison shows the diversity in international vaccination approaches.
          All schedules are developed by qualified health authorities. Differences reflect local disease patterns,
          healthcare infrastructure, and population health priorities. Always consult your healthcare provider
          for personalized guidance.
        </AlertDescription>
      </Alert>

      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={expandAll}
          >
            <CaretDown className="mr-2" />
            Expand All
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={collapseAll}
          >
            <CaretUp className="mr-2" />
            Collapse All
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handlePrint}
          >
            <Printer className="mr-2" />
            Print
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
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="country">Country (A-Z)</SelectItem>
              <SelectItem value="doses-desc">Doses (High-Low)</SelectItem>
              <SelectItem value="doses-asc">Doses (Low-High)</SelectItem>
              <SelectItem value="approach">Approach</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-4">
        {sortedData.map((schedule) => {
          const isExpanded = expandedCountries.has(schedule.code)
          
          return (
            <Card key={schedule.code} className="overflow-hidden">
              <button
                onClick={() => toggleCountry(schedule.code)}
                className="w-full text-left p-6 hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-semibold text-foreground">
                        {schedule.country}
                      </h3>
                      <Badge
                        variant={
                          schedule.approach === 'comprehensive'
                            ? 'default'
                            : schedule.approach === 'balanced'
                            ? 'secondary'
                            : 'outline'
                        }
                      >
                        {schedule.approach.charAt(0).toUpperCase() + schedule.approach.slice(1)}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {schedule.philosophy}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{schedule.totalDoses} total doses</span>
                      <span>•</span>
                      <span>Source: {schedule.source}</span>
                      <span>•</span>
                      <span>Updated: {schedule.lastUpdated}</span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    {isExpanded ? (
                      <CaretUp className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <CaretDown className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                </div>
              </button>

              {isExpanded && (
                <CardContent className="pt-0 pb-6 px-6 border-t">
                  <div className="space-y-3 mt-4">
                    <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                      Vaccine Schedule
                    </h4>
                    {schedule.vaccines.map((vaccine, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-4 p-3 rounded-lg bg-muted/30"
                      >
                        <div className="flex-1">
                          <div className="font-medium text-foreground">
                            {vaccine.name}
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
                  </div>
                </CardContent>
              )}
            </Card>
          )
        })}
      </div>

      <Alert>
        <AlertDescription className="space-y-2">
          <p>
            <strong>Approach Definitions:</strong>
          </p>
          <p>
            • <strong>Comprehensive:</strong> Extensive protection against many diseases with higher total dose counts
          </p>
          <p>
            • <strong>Balanced:</strong> Moderate approach balancing coverage with practical implementation
          </p>
          <p>
            • <strong>Selective:</strong> Focused on diseases with highest local burden and proven benefit
          </p>
        </AlertDescription>
      </Alert>
    </div>
  )
}
