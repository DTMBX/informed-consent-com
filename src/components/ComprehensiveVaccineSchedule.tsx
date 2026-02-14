import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Globe, Syringe, ShieldCheck } from '@phosphor-icons/react'

interface VaccineEntry {
  name: string
  timing: string
  doses: number
}

interface CountrySchedule {
  country: string
  code: string
  approach: 'comprehensive' | 'balanced' | 'selective'
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
    totalDoses: 50,
    philosophy: 'Front-loaded schedule providing maximum early protection',
    vaccines: [
      { name: 'Hepatitis B', timing: 'Birth, 1-2m, 6-18m', doses: 3 },
      { name: 'DTaP', timing: '2m, 4m, 6m, 15-18m, 4-6y', doses: 5 },
      { name: 'Hib', timing: '2m, 4m, 6m, 12-15m', doses: 4 },
      { name: 'Polio (IPV)', timing: '2m, 4m, 6-18m, 4-6y', doses: 4 },
      { name: 'Pneumococcal (PCV)', timing: '2m, 4m, 6m, 12-15m', doses: 4 },
      { name: 'Rotavirus', timing: '2m, 4m, 6m', doses: 3 },
      { name: 'MMR', timing: '12-15m, 4-6y', doses: 2 },
      { name: 'Varicella', timing: '12-15m, 4-6y', doses: 2 }
    ],
    source: 'CDC',
    lastUpdated: '2024'
  },
  {
    code: 'UK',
    country: 'United Kingdom',
    approach: 'balanced',
    totalDoses: 23,
    philosophy: 'Selective schedule balancing protection with fewer interventions',
    vaccines: [
      { name: 'DTaP-IPV-Hib-HepB', timing: '8w, 12w, 16w', doses: 3 },
      { name: 'Pneumococcal', timing: '12w, 1y', doses: 2 },
      { name: 'Rotavirus', timing: '8w, 12w', doses: 2 },
      { name: 'MMR', timing: '1y, 3y4m', doses: 2 }
    ],
    source: 'NHS',
    lastUpdated: '2024'
  },
  {
    code: 'SE',
    country: 'Sweden',
    approach: 'selective',
    totalDoses: 13,
    philosophy: 'Minimal schedule focused on serious diseases only',
    vaccines: [
      { name: 'DTaP-IPV-Hib-HepB', timing: '3m, 5m, 12m', doses: 3 },
      { name: 'Pneumococcal', timing: '3m, 5m, 12m', doses: 3 },
      { name: 'MMR', timing: '18m, 6-8y', doses: 2 }
    ],
    source: 'Folkhälsomyndigheten',
    lastUpdated: '2024'
  }
]

export function ComprehensiveVaccineSchedule() {
  const [selectedApproach, setSelectedApproach] = useState<string>('all')

  const filteredSchedules = selectedApproach === 'all' 
    ? scheduleData 
    : scheduleData.filter(s => s.approach === selectedApproach)

  return (
    <div className="min-h-screen bg-background">
      <div className="content-max-width px-4 sm:px-6 lg:px-8 section-spacing-mobile md:section-spacing-y">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 glass-subtle rounded-full">
            <Globe className="text-primary" weight="fill" size={18} />
            <span className="text-sm font-medium text-primary ui-text">International Comparison</span>
          </div>
          
          <h1 className="text-foreground mb-6">
            Childhood Vaccine Schedules
          </h1>
          
          <p className="text-lg text-muted-foreground content-narrow leading-relaxed">
            Compare vaccine schedules from different countries. Each approach is evidence-based within its context—differences reflect local priorities, disease prevalence, and public health philosophy.
          </p>
        </div>

        <div className="mb-8">
          <Card className="glass-panel card-padding">
            <div className="flex items-start gap-4">
              <ShieldCheck className="text-evidence shrink-0 mt-1" size={24} weight="fill" />
              <div>
                <h3 className="ui-text mb-2">Important Context</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  All listed schedules are recommended by their respective health authorities based on local epidemiology, healthcare systems, and risk-benefit assessments. No schedule is universally "better"—they represent different valid approaches to public health.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {filteredSchedules.map((schedule) => (
            <Card key={schedule.code} className="card-padding">
              <div className="mb-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="ui-text mb-1">{schedule.country}</h3>
                    <Badge 
                      variant={schedule.approach === 'comprehensive' ? 'default' : 'secondary'}
                      className="text-xs ui-text"
                    >
                      {schedule.totalDoses} total doses
                    </Badge>
                  </div>
                  <Syringe className="text-primary shrink-0" size={24} weight="duotone" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {schedule.philosophy}
                </p>
              </div>

              <Separator className="my-4" />

              <div className="space-y-3">
                {schedule.vaccines.map((vaccine, idx) => (
                  <div key={idx} className="text-sm">
                    <div className="font-medium ui-text mb-1">{vaccine.name}</div>
                    <div className="text-muted-foreground text-xs">{vaccine.timing}</div>
                  </div>
                ))}
              </div>

              <Separator className="my-4" />

              <div className="text-xs text-muted-foreground">
                <div>Source: {schedule.source}</div>
                <div>Updated: {schedule.lastUpdated}</div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <Card className="card-padding">
            <h3 className="ui-text mb-4">Understanding the Differences</h3>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Comprehensive schedules</strong> (like the US) prioritize maximum early protection with more vaccines at younger ages. This reflects higher disease prevalence and healthcare access patterns.
              </p>
              <p>
                <strong className="text-foreground">Balanced schedules</strong> (like the UK) combine multiple vaccines and space them based on optimal immune response timing.
              </p>
              <p>
                <strong className="text-foreground">Selective schedules</strong> (like Sweden) focus on the most serious diseases and rely on herd immunity from higher vaccination rates.
              </p>
              <p className="text-xs">
                This is educational information only. Discuss your child's vaccination schedule with your healthcare provider.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
