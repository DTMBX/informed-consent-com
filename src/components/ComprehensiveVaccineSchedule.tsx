import { useState } from 'react'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Card, CardContent, CardDescription, Ca
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/s
import { Info, Globe, Printer, Funnel, CaretD

  name: string
  doses: number
import { cn } from '@/lib/utils'

interface VaccineEntry {
  name: string
  timing: string
  doses: number
}

  source: string
}
const scheduleDat
    code: 'US',
    totalDoses: 29,
    vaccines: [
      { name: 'Rotav
      { name: 'H
      { name: 'Polio 
 

    source: 'CDC/ACIP',
  {
    code: 'US',
    country: 'United States',
    totalDoses: 29,
    approach: 'comprehensive',
    vaccines: [
      { name: 'Hepatitis B', timing: 'Birth, 1-2m, 6-18m', doses: 3 },
      { name: 'DTaP-IPV-Hib', timing: '2m, 4m, 6m, 18m', dos
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
      { name: 'Pneumococcal (PCV)', timing: '12w, 12
      { name: 'MMR', timing: '12m, 3y4m', doses: 2 },
      { name: 'Flu (nasal)', timing: 'Annually 2-
    philosophy: 'Focuses on diseases with significant UK burden; combin
    lastUpdated: '2024'
  {
    co
    approach: 'comprehensive',
      { name: 'Hepatitis
      { name: 'Pneumoco
    
   
    ],
    source: 'ATAGI',
  },
    code: 'DE',
    totalDoses:
    vaccines: [
      { name: 'Pneumococcal (PCV)', timing: '2m, 4m, 11-1
      { name: 'Men C', timing: '12m', doses: 1 },
      { name: 'Varicella', timing: '11-14m, 15-23m', doses: 2 },
    ],
    source: 'STIKO/RKI',
  },
    code: 'FR',
    to
    vaccines: [
      { name: 'Pneumoco
      { name: 'MMR', ti
    
   
  },
    code: 'NL',
    totalDoses: 20,
    vaccines: [
      { name: '
      { name: 'MMR', timing: '14m, 9y', doses: 2 },
    ],
    source: 'RIVM',
  },
    code: 'SE',
    totalDoses: 16,
    vaccines: [
      { name: 'Pneumococcal (PCV)', timing: '3m, 5m, 12m', 
      
    ],
    source: 'Folkhäl
  },
    
   
    vaccines: [
      { name: 'Pneumoco
      { name: 'DTaP
    philosophy: 'Conserva
    lastUpdated
  {
    country: 'Norway',
    approach: 'selective',
      { name: 'DTaP-IPV-Hib-HepB', timing: '3m, 5
      { name: 'MMR', timing: '15m, 12y', doses: 2 },
      { name: 'DTaP-IPV booster', timing: '6y', doses: 1 },
    philosophy: 'Emphasis on severe disease prevention; rotav
    la
  {
    country: 'Iceland',
    approach: 'selectiv
    
   
    philosophy:
    lastUpdated: '2024
  {
    country: 'Japan',
    approach: '
      { name: 'Hepatitis B', timing: 'Birth, 1m, 6m', doses: 3 },
      { name: 'Pneumococcal (PCV)', timing: '2m, 4m, 6m, 12m', doses: 
      { name: 'Polio (IPV)', timing: '3m, 4m, 5m, 18m
      { name: 'MR (Measles-Rubella)', timing: '12m, 5-6
    philosophy: 'BCG for TB prevention; individual-dose sch
    la
]
type SortBy = 'cou

  co
  c
  const toggleC
      const next = new Set(
        next.delete
        next.add(code)
      return ne
  }
  const filteredData = filterBy === 'all' 
    : scheduleData.filter(s => s.approach === fil
  const sortedData = [...filteredData].sort((a, b) 
      case 'country':
      
      case 'doses-desc':
      case 'approac
      default:
    

    window.prin

    setExpandedCoun

    setExpanded

    comprehensive: 'bg-primary/10 text-primary border-primary/20',
    selective: 'bg-accent/10 text-accent-foreground b

    <div className="max-w-7xl mx-auto p-6 space-y-
      
          <h1 className="text-3xl font-semibold">Global Vaccine Schedule Database</h1>
        <p className="text-muted-fo
        </p>

   
          <stro
      </Alert>
      <Card classNa
          <CardTitle>Why D
            Mul
        </CardHeader>
          <div className="grid md:grid-cols-2 gap-4">
              <Badge variant="outline" className="m
                Countries prioritize based on local disease
      
            <div className="space-y-2">
              <p c
              </p>

   
               
            </div>
            <div cl
              <p className
              <
          </div>
      </Card>
      <div className="flex flex-wrap gap-3 items-cen
          <Globe size={20} className="text-muted-foreground" /
            <SelectTrigger className="w-[200px]">
      
              <SelectItem value="doses-desc">Most doses first</SelectItem>
              <Sel
            </SelectCon
    
   
          <Sele
              <SelectVa
            <Select
              <SelectItem 
              <
          </Select>

          <Button variant="outline" size="sm" onClic
      
            Collapse All
          <Button variant="outlin
            Print
    

        {sorted
          
            <Card k
                className
              >
                  <div className="space-y-2 flex-1">
                      <CardTitle>{schedule.country}</CardTi
                        {schedule.totalDoses} doses
                      <Badge 
                        className={cn('capitalize', approachColors[
                        {schedule.approach}
                    </div>
      
                    <div className="flex gap-4 text-xs text-muted-foreground">
                   
                  </div
   
 

                <CardContent className="pt-0">
                  <div className="space-y-2">

                    <div className="grid gap-2">
                        <div
                          className="flex items-start justi
                          <div className="space-y-1 flex-1">

                          <Badge variant="o
                          </Badge>
                      ))}
                  </div>
              )}
          )
      </div>
      <
          <CardTi
      
   

  const filteredData = filterBy === 'all' 
    ? scheduleData 
    : scheduleData.filter(s => s.approach === filterBy)

  const sortedData = [...filteredData].sort((a, b) => {
    switch (sortBy) {
          </p>
        return a.country.localeCompare(b.country)
      case 'doses-asc':
        return a.totalDoses - b.totalDoses
          </p>
        return b.totalDoses - a.totalDoses
      case 'approach':
        return a.approach.localeCompare(b.approach)

        return 0
     
  })

  const handlePrint = () => {

  }

  const expandAll = () => {
    setExpandedCountries(new Set(sortedData.map(s => s.code)))
  }

  const collapseAll = () => {

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

        <p className="text-muted-foreground">
          Compare vaccination schedules from 12 countries to understand different evidence-based approaches to childhood immunization
        </p>
      </div>

      <Alert>
        <Info size={20} weight="fill" className="text-primary" />
        <AlertDescription className="ml-2">
          <strong>Important Context:</strong> All schedules shown are evidence-based and developed by respected medical authorities. Differences reflect local disease prevalence, healthcare infrastructure, cultural values, and public health priorities - not superior or inferior safety. Both comprehensive and selective approaches save lives.
        </AlertDescription>


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

            </SelectTrigger>

              <SelectItem value="doses-desc">Most doses first</SelectItem>
              <SelectItem value="doses-asc">Fewest doses first</SelectItem>
              <SelectItem value="country">By country</SelectItem>

            </SelectContent>

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

          </Select>


        <div className="ml-auto flex gap-2">
          <Button variant="outline" size="sm" onClick={expandAll}>
            Expand All
          </Button>

            Collapse All

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

                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                      Vaccine Schedule

                    <div className="grid gap-2">

                        <div

                          className="flex items-start justify-between p-3 rounded-lg border bg-card"

                          <div className="space-y-1 flex-1">
                            <div className="font-medium">{vaccine.name}</div>
                            <div className="text-sm text-muted-foreground">{vaccine.timing}</div>

                          <Badge variant="outline">
                            {vaccine.doses} {vaccine.doses === 1 ? 'dose' : 'doses'}
                          </Badge>

                      ))}

                  </div>
                </CardContent>
              )}

          )

      </div>

      <Card className="border-amber-200 bg-amber-50/50">

          <CardTitle className="flex items-center gap-2">
            <Info size={24} weight="duotone" className="text-amber-600" />
            What This Means for Parents

        </CardHeader>
        <CardContent className="space-y-3 text-sm">

            <strong>No schedule is "wrong."</strong> Each represents different evidence-based approaches and reflects excellent pediatric care in its context.


            <strong>Infant mortality differences have nothing to do with vaccines.</strong> Higher US infant mortality is attributed to prematurity rates, socioeconomic inequalities, healthcare access, and birth registration practices - not vaccination.


            <strong>The CDC schedule is not "for profit."</strong> It's developed by independent scientific committees (ACIP). The Vaccines for Children program provides vaccines at or below cost through government negotiation.

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

    </div>

}
