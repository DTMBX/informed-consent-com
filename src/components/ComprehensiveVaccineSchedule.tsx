import { useState } from 'react'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/se
import { cn } from '@/lib/utils'
interface VaccineEntry {
  timing: string
}
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

      case 'country':
      case 'doses-a
      case 'doses-desc':

      default:
    }

    window.print()

    setExpandedCountries(new Set())

    setExpandedCountries(new Set(sortedDat

    comprehensive: 'bg-primary/10 text-primary bord
    selective:

    c
    

    <div className="max-w-7xl
        <div class
   

            <p className="
            </p>
        </div>

   

          superior or infe
      </Alert>
      <Card className="pr
          <CardTitle class
   

          
                Countries prioritize based on local disease 
            </div>
              <Badge variant="outline" className
                Universal healthcare with guaranteed follow-up enables later schedules. Variable a
            </d
              <Badge variant="outline" className="mb-1">Risk Philosophy</Badge
                US maximizes herd immunity and early protection. 
            </div
              <Badge variant="outline" className="mb-1">Economic Factors</B
                Cost-effectiveness calculations vary. Countries weigh vaccine costs against disease tr
            </di
        </CardCo

        <div

              <SelectValue />
            <SelectContent>
              <SelectItem value="doses-asc">Fewest 
              <SelectItem value="approach">By approach</SelectItem>
          </Select>

          <Funnel size={20}
            <S

              <SelectItem value="all"
              <Selec
            </SelectContent>
        </div>
        <div classNam
            Expand Al
          <Button variant="outline" size="sm" onClick={collapseAll}>
          </Button>

          <Printer size={18} className="mr-2" />
        </Button>

        {sortedDat
          
            <Card key={schedule.code} className="overflow-hidden print:break-insid
                onClick={() => toggleCountry(schedu
              >
                  
                  
                        <Badge variant="s
                        </Badge>
                          variant="outline" 
                        >
                  
                  
                      </CardDescription>
                        <span>Source: {schedule.source}</span>
                        <span>Updated: {schedule.la
                    </div>
                  
                  
                
                  </di
             

                  <Separator className="mb-4" />
                    <h4 className="text-sm font-s
                    </h4>
                      {schedule.vaccines.map((vaccine, idx) => (
                          key={idx}
                        >
                            
                           
                          </div>
                            {vaccine.doses} {vaccine.doses === 1 ? 'dose' :
                        </div>
                    </div>
                </CardConten
            </Card>
        })}

        <CardHeader>
            <Info size={24} weight="duotone" className="text-amb
          </CardTitle>
        <CardContent className="space-y-3 text-sm
            <strong>No schedu
            reflects excelle
          <p>
            attributed to prematurity rates, socioeconomic inequa
          </p>
            <strong>The CDC schedule is not "for profit."</stron
            program provides vaccines at or below cost through gov
          <p>
            prevale
          </p>

            This makes thoughtful, voluntary decision-making with your healt
          <p>
            correlate with
          </p>
      </Card

        <AlertDescription classNa
          Schedules are subject to chan
      </Alert>
  )





























































































































