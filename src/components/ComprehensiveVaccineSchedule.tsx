import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTi
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

  name: string
  doses: number


interface VaccineEntry {
  name: string
  timing: string
  doses: number
}

interface CountrySchedule {
  code: string
  country: string
  {
    country: 'United States',
    approach: 'comprehensi
      { name: 'Hepat
  source: string
      { name: 'Polio 
}

    philosophy: 'Comprehensive approach p
  {
    code: 'US',
    country: 'United States',
    totalDoses: 27,
    approach: 'comprehensive',
      { name: '
      { name: 'Hepatitis B', timing: 'Birth, 1-2m, 6-18m', doses: 3 },
      { name: 'DTaP', timing: '2m, 4m, 6m, 15-18m', doses: 4 },
      { name: 'Hib', timing: '2m, 4m, 6m, 12-15m', doses: 4 },
      { name: 'Pneumococcal (PCV)', timing: '2m, 4m, 6m, 12-15m', doses: 4 },
      { name: 'Polio (IPV)', timing: '2m, 4m, 6-18m', doses: 3 },
    lastUpdated: '2024'
      { name: 'MMR', timing: '12-15m, 4-6y', doses: 2 },
      { name: 'Varicella', timing: '12-15m, 4-6y', doses: 2 },
      { name: 'Hepatitis A', timing: '12-23m (2 doses)', doses: 2 },
      
    philosophy: 'Comprehensive approach prioritizing early protection; combination vaccines available to reduce injection burden',
    source: 'CDC/ACIP',
    lastUpdated: '2024'
  },
  {
    code: 'CA',
    country: 'Canada',
    totalDoses: 26,
    approach: 'comprehensive',
      { name: '
      { name: 'Hepatitis B', timing: 'Birth, 2m, 6m', doses: 3 },
      { name: 'DTaP-IPV-Hib', timing: '2m, 4m, 6m, 18m', doses: 4 },
      { name: 'Pneumococcal (PCV)', timing: '2m, 4m, 12m', doses: 3 },
    totalDoses: 23,
    vaccines: [
      { name: 'Pneumococcal (PCV)', timing: '2m, 4m, 11-14
      { name: 'Rotavirus', timing: '2m, 4m, 6m', doses: 3 },
      
    philosophy: 'Evidence-based schedule balancing early protection with combination vaccines',
    lastUpdated: '2
  {
    
   
      { name: '
      { name: 'Men C', timing:
    ],
    source: 'Ministère de
  },
    code: 'NL',
    totalDoses: 20,
    vaccines: [
      { name: 'Pneumococcal (PCV)', timing: '2m, 4m, 11m',
      { name: 'Hib/Men C', timing: '12m', doses: 1 },
      { name: 'MMR', timing: '12m, 3y4m', doses: 2 },
    source: 'RIVM',
  },
    code: 'SE',
    totalDoses: 15,
    lastUpdated: '2024'
    
  {
    source: 'Fo
  },
    code: 'DK',
    approach: 'comprehensive',
    vaccines: [
      { name: 'Pneumococcal (PCV)', timing: '3m, 5m, 12m', doses:
    ],
    source: 'Sundhedsstyrelsen',
  },
    code: 'NO',
      { name: 'Meningococcal B', timing: '2m, 4m, 12m', doses: 3 },
      
    philosophy: 'Comprehensive approach tailored to Australian disease patterns and geographic challenges',
    source: 'ATAGI',
    philosophy: 'Emphas
  },
  {
    code: 'DE',
    approach: 'selectiv
      { name: 'DTaP
      { name: 'MMR', timi
    vaccines: [
    lastUpdated: '2024'
  {
    country: 'Japan',
    vaccines: [
      { name: 'Varicella', timing: '11-14m, 15-23m', doses: 2 },
    ],
      { name: 'MR (Measles-Rubella)', timing: '12m, 5-6y', doses: 2 },
    source: 'STIKO',
    lastUpdated: '2024'
  },
typ
    code: 'FR',
  const [expandedCount
  const [filterBy, 
  const toggleCountry = (
    vaccines: [
        next.delete(code)
        next.add(code)
      return next
  }
  cons
  }
  const collapseAll = () => {
  }
  },
  }
    code: 'NL',
    : scheduleData.filter(s
    totalDoses: 20,
      case 'country':
    vaccines: [
      case 'doses-desc':
      case 'approach':
      default:
      { name: 'MMR', timing: '14m, 9y', doses: 2 },
    ],
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
    source: 'RIVM',
          Compare recom
  },
   
    code: 'SE',
            Each count
    totalDoses: 15,
      </Alert>
    vaccines: [
          <CardTitle>Filter and Sort</CardTitle>
        </CardHeader>
          <div className="grid grid-cols-1 md:grid-co
    ],
                <SelectTrigger>
                </SelectTrigger>
                  <Sele
  },
   
            </d
            <div classN
              <Sele
                  <SelectV
    vaccines: [
                  <SelectItem value="doses-desc">Most doses firs
                  <SelectItem value="approach">By approach</SelectItem
              </Select>
      
          <div className="flex flex-wrap gap-2">
              Expand all
            <Button var
    
  {
            </B
    country: 'Norway',

    approach: 'selective',
          
            <Card key={schedule.code}>
                className="cursor-pointer hover:bg-muted/50 transition
      { name: 'MMR', timing: '15m, 12y', doses: 2 },
      
                      <Badge variant={
                  
                      }
    
  {
               
    country: 'Iceland',
                </d

               
                    <h4 className="font-medium text-sm text-mute
                    </h4>
                      {schedule.vaccines.map((vaccin
      
                        >
                         
                       
    
  {

    country: 'Japan',
                  <
              )}
          )

        <CardHeader>
        </CardHeader>
          <p>
          </p>
            <strong>Balanced approach</strong> (18-23 doses): Middle g
      
          </p>
      </Card>
      <Alert>
  }
]

}













        next.add(code)



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

        return a.country.localeCompare(b.country)
      case 'doses-asc':
        return a.totalDoses - b.totalDoses

        return b.totalDoses - a.totalDoses
      case 'approach':
        return a.approach.localeCompare(b.approach)

        return 0

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

                    <CardDescription>{schedule.philosophy}</CardDescription>
                  </div>
                  <div className="ml-4 text-muted-foreground">
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </div>
              </CardHeader>

              {isExpanded && (
                <CardContent className="space-y-4 pt-0">
                  <div className="space-y-3">
                    <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
                      Vaccine Schedule

                    <div className="space-y-2">

                        <div 

                          className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"

                          <div className="flex-1">
                            <div className="font-medium">{vaccine.name}</div>
                            <div className="text-sm text-muted-foreground">{vaccine.timing}</div>

                          <Badge variant="secondary">{vaccine.doses} {vaccine.doses === 1 ? 'dose' : 'doses'}</Badge>

                      ))}

                  </div>

                  <div className="pt-4 border-t text-xs text-muted-foreground">
                    <div>Source: {schedule.source}</div>
                    <div>Last updated: {schedule.lastUpdated}</div>
                  </div>
                </CardContent>
              )}

          )

      </div>

      <Card>

          <CardTitle>What This Comparison Shows</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">

            <strong>Comprehensive approach</strong> (20-27 doses): More vaccines given earlier, often including diseases with lower prevalence. Common in countries with diverse populations or higher disease burden.


            <strong>Balanced approach</strong> (18-23 doses): Middle ground focusing on diseases with moderate to high burden while using combination vaccines to reduce visits.


            <strong>Selective approach</strong> (14-17 doses): Focuses on diseases with significant local burden. Often used in countries with excellent healthcare infrastructure, lower disease prevalence, or high population health.

        </CardContent>
      </Card>

      <Alert>
        <AlertDescription>
          All listed schedules are from official national health authorities and reflect evidence-based public health decisions. 
          Differences reflect local disease patterns, healthcare infrastructure, and population health metrics rather than disagreement about vaccine safety or efficacy.
        </AlertDescription>

    </div>

}
