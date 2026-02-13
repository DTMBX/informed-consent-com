import { useState } from 'react'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
interface VaccineEntry {
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
  {
  lastUpdated: string
 

const scheduleData: CountrySchedule[] = [
   
  },
    code: 'CA',
    totalDoses: 26,
    vaccines: [
      { name: '
      { name: 'Meningococcal C', timing: '12m', doses: 1 },
      { name: 'Rotavirus', timing: '2m, 4m, 6m', doses: 3 },
    philosophy: 'Similar to US approach with provincial variations; c
    lastUpdated: '2024'
  {
    country: 'United Kingdom',
    approach: 'balanced',
      { name: 'DTaP-IPV-Hib-HepB', timing: '8w, 12w, 16w
      { name: 'Rotavirus', timing: '8w, 12w', doses: 2 },
      
    ],
    source: 'NHS/JCVI',
  },
    
   
    vaccines: [
      { name: 'DTaP-IP
      { name: 'Rota
    ],
    source: 'AT
  },
    code: 'DE',
    totalDoses: 23,
      { name: 'Meningococcal C', timing: '12m', doses: 1 },
      { name: 'MMR', timing: '12m, 18m', doses: 2 },
      { name: 'Varicella', timing: '12m, 18m', doses: 2 },
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
      { name: 'Pneumococcal (PCV)', timing: '2m, 4m, 
      { name: 'Flu (nasal)', timing: 'Annually 2-8y', doses: 1 },
    ],
    philosophy: 'Focuses on diseases with significant UK burden; combination vaccines reduce clinic visits',
    source: 'NHS/JCVI',
  {
  },
   
    code: 'AU',
    country: 'Australia',
    totalDoses: 24,
      { name: 'MMR', timing: '
    vaccines: [
      { name: 'Hepatitis B', timing: 'Birth, 2m, 6m', doses: 3 },
      { name: 'DTaP-IPV-Hib-HepB', timing: '2m, 4m, 6m', doses: 3 },
      { name: 'Pneumococcal (PCV)', timing: '2m, 4m, 12m', doses: 3 },
      { name: 'Rotavirus', timing: '2m, 4m, 6m', doses: 3 },
      { name: 'MMR', timing: '12m, 18m', doses: 2 },
      
    philosophy: 'Comprehensive approach tailored to Australian disease patterns and geographic challenges',
    ],
    lastUpdated: '2024'
    
  {
    code: 'DK',
    country: 'Germany',
    totalDoses: 23,
    approach: 'balanced',
      { name: '
      { name: 'DTaP-IPV-Hib-HepB', timing: '2m, 3m, 4m, 11-14m', doses: 4 },
      { name: 'Pneumococcal (PCV)', timing: '2m, 4m, 11-14m', doses: 3 },
      { name: 'Rotavirus', timing: '2m, 3m, 4m', doses: 3 },
  },
      { name: 'MMR', timing: '11-14m, 15-23m', doses: 2 },
    country: 'Norway',
    ap
    philosophy: 'Evidence-based schedule balancing early protection with combination vaccines',
      { name: 'Pneumococ
    lastUpdated: '2024'
    
  {
    lastUpdated
    country: 'France',
    totalDoses: 21,
    approach: 'balanced',
    approach: '
      { name: 'DTaP-IPV-Hib-HepB', timing: '2m, 4m, 11m', doses: 3 },
      { name: 'Pneumococcal (PCV)', timing: '2m, 4m, 11m', doses: 3 },
      { name: 'Men C', timing: '5m, 12m', doses: 2 },
      { name: 'MMR', timing: '12m, 16-18m', doses: 2 },
    ],
    philosophy: 'Mandatory vaccination laws ensure high coverage; combination vaccines preferred',
    source: 'Ministère de la Santé',
    lastUpdated: '2024'
    
  {
      { name: '
    country: 'Netherlands',
      { name: 'Poli
    approach: 'balanced',
    ],
      { name: 'DTaP-IPV-Hib-HepB', timing: '2m, 3m, 4m, 11m', doses: 4 },
      { name: 'Pneumococcal (PCV)', timing: '2m, 4m, 11m', doses: 3 },
      { name: 'Men C', timing: '14m', doses: 1 },

type F
    philosophy: 'High voluntary compliance; selective schedule based on Dutch disease patterns',
  const [expandedCo
    lastUpdated: '2024'

  {
      const nex
    country: 'Sweden',
      } else {
    approach: 'selective',
      return ne
      { name: 'DTaP-IPV-Hib', timing: '3m, 5m, 12m', doses: 3 },
      { name: 'Pneumococcal (PCV)', timing: '3m, 5m, 12m', doses: 3 },
      { name: 'MMR', timing: '18m, 6-8y', doses: 2 },

    philosophy: 'Conservative schedule focusing on diseases with significant Swedish prevalence; no Hepatitis B due to low risk; high healthcare access enables later start',
    source: 'Folkhälsomyndigheten',
    lastUpdated: '2024'
    
  {
    code: 'DK',
    country: 'Denmark',
    totalDoses: 15,
    approach: 'selective',

      { name: 'DTaP-IPV-Hib', timing: '3m, 5m, 12m', doses: 3 },
      { name: 'Pneumococcal (PCV)', timing: '3m, 5m, 12m', doses: 3 },
      { name: 'MMR', timing: '15m, 4y', doses: 2 },
    ],
    philosophy: 'Conservative approach; targets only diseases with significant Danish burden; universal healthcare enables later schedule',
    source: 'Sundhedsstyrelsen',
    lastUpdated: '2024'
  },
   
    code: 'NO',
  }
    totalDoses: 14,
    <div className="max-w-
    vaccines: [
      { name: 'DTaP-IPV-Hib-HepB', timing: '3m, 5m, 12m', doses: 3 },
      { name: 'Pneumococcal (PCV)', timing: '3m, 5m, 12m', doses: 3 },
        <p className="text-muted-foreground">
        </p>
    ],
    philosophy: 'Emphasis on severe disease prevention; rotavirus excluded due to low severe disease burden',
    source: 'FHI',
    lastUpdated: '2024'
  },

    code: 'IS',
          <CardTitle>Wh
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
   
    code: 'JP',
            <div clas
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
  },
 

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
        <div className
      }
      return next
    })
   

            Print





      case 'country':



      case 'doses-desc':



      default:

    }



    window.print()







    setExpandedCountries(new Set())














        </div>










      </Alert>















            </div>






























              <SelectValue />

            <SelectContent>
              <SelectItem value="country">By country</SelectItem>


              <SelectItem value="approach">By approach</SelectItem>

          </Select>













            </SelectContent>

        </div>





          <Button variant="outline" size="sm" onClick={collapseAll}>

          </Button>
















              >













                    </div>



















                    </h4>

                      {schedule.vaccines.map((vaccine, idx) => (

                          key={idx}

                        >



                          </div>



                        </div>

                    </div>



            </Card>

        })}



        <CardHeader>



          </CardTitle>


          <p>

          </p>
          <p>

          </p>
          <p>

          </p>
















      </Alert>

  )

