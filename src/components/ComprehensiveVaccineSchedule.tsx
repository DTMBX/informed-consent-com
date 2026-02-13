import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectVa

interface VaccineEntry {
  timing: string
}
interface VaccineEntry {
  name: string
  name: string
  doses: number

interface CountrySchedule {

  country: string
  code: string
  totalDoses: number
  philosophy: string
  vaccines: VaccineEntry[]
  source: string
  lastUpdated: string
}

const scheduleData: CountrySchedule[] = [
  {
    code: 'US',
    country: 'United States',
    approach: 'comprehensive',
    totalDoses: 26,
    philosophy: 'Maximum protection through comprehensive vaccination coverage',
    vaccines: [
      { name: 'Hepatitis B', timing: 'Birth, 1-2m, 6-18m', doses: 3 },
      { name: 'DTaP', timing: '2m, 4m, 6m, 15-18m, 4-6y', doses: 5 },
      { name: 'Hib', timing: '2m, 4m, 6m, 12-15m', doses: 4 },
      { name: 'Polio (IPV)', timing: '2m, 4m, 6-18m, 4-6y', doses: 4 },
      { name: 'Pneumococcal (PCV)', timing: '2m, 4m, 6m, 12-15m', doses: 4 },
      { name: 'Rotavirus', timing: '2m, 4m, 6m', doses: 3 },
      { name: 'MMR', timing: '12-15m, 4-6y', doses: 2 },
      { name: 'Varicella', timing: '12-15m, 4-6y', doses: 2 },
    ],
    source: 'CDC',
    lastUpdated: '2024'
  },
  {
    code: 'UK',
    country: 'United Kingdom',
    approach: 'balanced',
    totalDoses: 19,
    philosophy: 'Evidence-based schedule prioritizing most significant disease threats',
    vaccines: [
      { name: '6-in-1 (DTaP-IPV-Hib-HepB)', timing: '8w, 12w, 16w', doses: 3 },
      { name: 'Pneumococcal (PCV)', timing: '12w, 1y', doses: 2 },
      { name: 'Rotavirus', timing: '8w, 12w', doses: 2 },
      { name: 'MenB', timing: '8w, 16w, 1y', doses: 3 },
      { name: 'Hib/MenC', timing: '1y', doses: 1 },
      { name: 'MMR', timing: '1y, 3y4m', doses: 2 },
    ],
    source: 'NHS',
    lastUpdated: '2024'
  },
  {
    code: 'CA',
    country: 'Canada',
    approach: 'comprehensive',
    totalDoses: 24,
    philosophy: 'Evidence-based schedule balancing early protection with healthcare system capacity',
    vaccines: [
      { name: 'Hepatitis B', timing: 'Birth, 2m, 6m', doses: 3 },
      { name: 'DTaP-IPV-Hib', timing: '2m, 4m, 6m, 18m', doses: 4 },
      { name: 'Pneumococcal (PCV)', timing: '2m, 4m, 12m', doses: 3 },
      { name: 'Meningococcal C', timing: '12m', doses: 1 },
      { name: 'Rotavirus', timing: '2m, 4m, 6m', doses: 3 },
      { name: 'MMR', timing: '12m, 4-6y', doses: 2 },
      { name: 'Varicella', timing: '12m, 4-6y', doses: 2 },
    ],
    source: 'Public Health Agency of Canada',
    lastUpdated: '2024'
  },
  {
    code: 'NL',
    country: 'Netherlands',
    approach: 'selective',
    totalDoses: 20,
    philosophy: 'Structured schedule focusing on diseases with highest local burden',
    vaccines: [
      { name: 'DTaP-IPV-Hib-HepB', timing: '6w, 3m, 5m, 11m', doses: 4 },
      { name: 'Pneumococcal (PCV)', timing: '2m, 4m, 11m', doses: 3 },
      { name: 'MMR', timing: '14m, 9y', doses: 2 },
      { name: 'MenC', timing: '14m', doses: 1 },
    ],
    source: 'RIVM',
    lastUpdated: '2024'
  },
  {
    code: 'SE',
    country: 'Sweden',
    approach: 'selective',
    totalDoses: 18,
    philosophy: 'Conservative approach prioritizing essential vaccines with proven long-term benefit',
    vaccines: [
      { name: 'DTaP-IPV-Hib-HepB', timing: '3m, 5m, 12m', doses: 3 },
      { name: 'Pneumococcal (PCV)', timing: '3m, 5m, 12m', doses: 3 },
      { name: 'MMR', timing: '18m, 6-8y', doses: 2 },
    ],
    source: 'Folkhälsomyndigheten',
    lastUpdated: '2024'
  },
  {
    code: 'NO',
    country: 'Norway',
    approach: 'selective',
    totalDoses: 17,
    philosophy: 'Focused approach on diseases with highest risk-benefit ratio',
    vaccines: [
      { name: 'DTaP-IPV-Hib-HepB', timing: '3m, 5m, 12m', doses: 3 },
      { name: 'Pneumococcal (PCV)', timing: '3m, 5m, 12m', doses: 3 },
      { name: 'MMR', timing: '15m, 11-12y', doses: 2 },
      { name: 'Rotavirus', timing: '6w, 3m, 5m', doses: 3 },
    ],
    source: 'Folkehelseinstituttet',
    lastUpdated: '2024'
  },
  {
    code: 'JP',
    country: 'Japan',
    approach: 'balanced',
    totalDoses: 19,
    philosophy: 'Systematic approach emphasizing disease prevention with cultural acceptance',
    vaccines: [
      { name: 'Hib', timing: '2m, 3m, 4m, 12m', doses: 4 },
      { name: 'Pneumococcal (PCV)', timing: '2m, 4m, 6m, 12-15m', doses: 4 },
      { name: 'DPT', timing: '3m, 4m, 5m, 12-18m', doses: 4 },
      { name: 'Polio (IPV)', timing: '3m, 4m, 5m, 4-6y', doses: 4 },
      { name: 'MR', timing: '12m, 5-7y', doses: 2 },
    ],
    source: 'MHLW',
    lastUpdated: '2024'
  },
  {
    code: 'DK',
    country: 'Denmark',
    approach: 'selective',
    totalDoses: 19,
    philosophy: 'Evidence-based minimal schedule with focus on local epidemiology',
    vaccines: [
      { name: 'DTaP-IPV-Hib-HepB', timing: '3m, 5m, 12m', doses: 3 },
      { name: 'Pneumococcal (PCV)', timing: '3m, 5m, 12m', doses: 3 },
      { name: 'MMR', timing: '15m, 4y', doses: 2 },
    ],
    source: 'Statens Serum Institut',
    lastUpdated: '2024'
  },
]

type FilterBy = 'all' | 'comprehensive' | 'balanced' | 'selective'
type SortBy = 'country' | 'doses-desc' | 'doses-asc' | 'approach'

export function ComprehensiveVaccineSchedule() {
  const [sortBy, setSortBy] = useState<SortBy>('country')
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
