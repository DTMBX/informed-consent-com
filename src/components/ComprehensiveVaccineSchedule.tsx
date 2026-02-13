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
  totalDoses: num
  vaccines: VaccineE
  source: string
}
const scheduleData: 
    code: 'US',
    totalDoses: 27,
 

      { name: 'Pneumococcal (PCV)', timin
   
      { name: '
    philosophy: 'Comprehensiv
    lastUpdated: '2
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
    code: 'NL',
    totalDoses: 20,
    vaccines: [
      { name: 'Pneumococc
    ],
    source: 'RIVM',
  },
    code: 'SE',
    totalDoses: 18,
    vaccines: [
      { name: 'Pneumococcal (PCV)', timing: '3m, 5m,
    ],
    source: 'Folkhälsomyndigheten',
  },
    code: 'DK',
    
  {
    code: 'NL',
    ],
    totalDoses: 20,
  },
    code: 'NO',
    totalDoses: 17,
    vaccines: [
      { name: 'Pneumococcal (PCV)', timing: '3m, 5m
    ],
    source: 'Folkehelseinstituttet',
    source: 'RIVM',
    code: 'IS',
  },
   
    code: 'SE',
    ],
    totalDoses: 18,
  },
    code: 'JP',
    totalDoses: 19,
    vaccines: [
      { name: 'Pneumococcal (PCV)', timing: '2m, 4m, 
      
    ],
    source: 'MHLW',
    lastUpdated: '2024'
  },
   
    code: 'DK',
      { name: 'DTaP-IPV
      { name: 'Rota
      { name: 'MMR', timin
    vaccines: [
    lastUpdated: '2024'
  {
    country: 'Germany',
    ],
      { name: 'DTaP-IPV-Hib-HepB', timing: '2m, 3m, 4m, 11-14m', doses: 4 },
    source: 'Sundhedsstyrelsen',
      { name: 'Varicell
    
  {
    code: 'NO',
    country: 'France',
    approach: 'bala
      { name: 'DTaP-IPV-Hi
      { name: '
    ],
    source: 'Ministère de la Santé',
  }

type SortBy = 'country' | 'doses-desc' | 'doses-asc' | 'approach'
export function ComprehensiveVaccine
  const [filterBy, setF
  },
  {
      if (next.
      } else {
      }
    })
    vaccines: [
    setExpandedCountries(new Set(scheduleData.map(s => s.code)))

    setExpandedCountries(new Set())

    if (filterBy === 'all') return true
  })
    lastUpdated: '2024'
    
  {
      case 'dos
    country: 'Japan',
      default:
    }
    vaccines: [
    window.print()

    <div className="max-w-6xl mx-auto p-4 md:p-8 space-
        <h1 className="text-3xl font-semibold text-foreground"
        </h1>
    ],

        <AlertDescr
    lastUpdated: '2024'
  },
   
      <div clas
          <Button
            size="s
          >
    vaccines: [
          <Button
            size="sm"
          >
            Collapse All
          <Button
            size="sm"
    ],
            Print
        </div>
        <div className=
  },
   
              <
              <SelectIt
            </Selec

    vaccines: [
            </SelectTrigger>
              <SelectItem value="country">Country (A-Z)</SelectItem>
              <SelectItem value="doses-asc">Doses (Low-High)
            </SelectContent>
        </div>
    ],
        {sortedData.map((schedule) => {
          
            <Card key={
  },
  {
               
                      
                   
                        v
               
                            ? 'secondary'
                        }
                        {schedule.approach.charAt(0).toUpperCas
                    </div>
      
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>•</span>
                      <
  }
]

                      <CaretDown className="w-5 h-5 text-muted-for
                  </div>

              {isExpanded && (
                  <div className="space-y-3 mt-4">
                      Vaccine Schedule
                    {schedule.vaccines.map((vaccine, idx)

                      >
                          <div class
                          </div>
                           
                        <
              
        next.add(code)
       
                 
      
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

        return a.country.localeCompare(b.country)

        return b.totalDoses - a.totalDoses
      case 'doses-asc':
        return a.totalDoses - b.totalDoses
      case 'approach':
        return a.approach.localeCompare(b.approach)

        return 0

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

                    {schedule.vaccines.map((vaccine, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-4 p-3 rounded-lg bg-muted/30"
                      >
                        <div className="flex-1">
                          <div className="font-medium text-foreground">
                            {vaccine.name}

                          <div className="text-sm text-muted-foreground mt-1">
                            {vaccine.timing}
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

          )

      </div>

      <Alert>
        <AlertDescription className="space-y-2">

            <strong>Approach Definitions:</strong>


            • <strong>Comprehensive:</strong> Extensive protection against many diseases with higher total dose counts


            • <strong>Balanced:</strong> Moderate approach balancing coverage with practical implementation

          <p>
            • <strong>Selective:</strong> Focused on diseases with highest local burden and proven benefit
          </p>
        </AlertDescription>

    </div>

}
