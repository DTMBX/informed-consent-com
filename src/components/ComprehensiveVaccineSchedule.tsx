import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, S
import { CaretDown, CaretUp, Printer } from '@p
interface VaccineEntry {
  timing: string
}

  country: string
  approach: 'c
  philosophy: st
  lastUpdated: 


    country: 'United States
    approach: 
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
    country: 'Canada',
    approach: 'comprehensive',
      { name: 'Hepatitis B', timing: 'Birth, 2m, 6m', doses: 3
      { name: 'Pneumococcal (PCV)', timing: '2m, 4m, 12m', doses: 3 },
      { name: 'Meningococcal C', timing: '12m', doses: 1 },
      { name: 'Rotavirus', timing: '2m, 4m, 6m', doses: 3 },
    philosophy: 'Evidence-based schedule balancing early
    lastUpdated: '2024'
  {
    ],
    approach: 'balanced',
      { name: 'DTaP-IPV
      { name: 'Rotaviru
    
   
    source: 'NH
  },
    code: 'NL',
    totalDoses: 20,
    vaccines: [
      { name: 'Pneumococcal (PCV)', timing: '2m, 4m, 11m', doses:
    ],
    source: 'RIVM',
    country: 'Sweden',
      { name: 'Meningococcal C', timing: '12m', doses: 1 },
      { name: 'MMR', timing: '12m, 4-6y', doses: 2 },
      { name: 'Varicella', timing: '12m, 4-6y', doses: 2 },
    ],
    ],
    source: 'Public Health Agency of Canada',
    lastUpdated: '2024'
  },
   
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
    ap
    philosophy: 'Focused schedule using combination vaccines to maximize protection with fewer visits',
    source: 'NHS/UKHSA',
    lastUpdated: '2024'
    
  {
  },
    country: 'Netherlands',
    country: 'Icela
    approach: 'balanced',
    vaccines: [
      { name: 'DTaP-IPV-Hib-HepB', timing: '6w, 3m, 5m, 11m', doses: 4 },
      { name: 'Pneumococcal (PCV)', timing: '2m, 4m, 11m', doses: 3 },
      { name: 'MMR', timing: '14m, 9y', doses: 2 },
    ],
    philosophy: 'Evidence-based selective schedule focusing on diseases with significant local burden',
    code: 'JP',
    lastUpdated: '2024'
    
  {
      { name: '
    country: 'Sweden',
      { name: 'MR (
    approach: 'selective',
    vaccines: [
      { name: 'DTaP-IPV-Hib', timing: '3m, 5m, 12m', doses: 3 },
      { name: 'Pneumococcal (PCV)', timing: '3m, 5m, 12m', doses: 3 },
      { name: 'MMR', timing: '18m, 6-8y', doses: 2 },
    ],
    philosophy: 'Selective approach focusing on diseases with highest burden in Swedish context',
    source: 'Folkhälsomyndigheten',
    totalDoses: 24,
    
  {
      { name: '
    country: 'Denmark',
    totalDoses: 16,
    approach: 'selective',
  {
      { name: 'DTaP-IPV-Hib', timing: '3m, 5m, 12m', doses: 3 },
      { name: 'Pneumococcal (PCV)', timing: '3m, 5m, 12m', doses: 3 },
      { name: 'MMR', timing: '15m, 4y', doses: 2 },
      
    philosophy: 'Selective evidence-based approach optimized for Danish population health',
      { name: 'MMR', timing: '11
    lastUpdated: '2024'
    
  {
  },
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
type

    code: 'IS',
    country: 'Iceland',
    totalDoses: 16,
    approach: 'selective',
        next.de
      { name: 'DTaP-IPV-Hib', timing: '3m, 5m, 12m', doses: 3 },
      { name: 'Pneumococcal (PCV)', timing: '3m, 5m, 12m', doses: 3 },
      { name: 'MMR', timing: '18m, 12y', doses: 2 },
    ],
    philosophy: 'Evidence-based selective approach for small population with excellent healthcare infrastructure',
    source: 'Embætti landlæknis',
  const expandAll = () 
  },

    code: 'JP',
  }
    totalDoses: 19,
    approach: 'balanced',
  }
      { name: 'Hib', timing: '2m, 3m, 4m, 12-18m', doses: 4 },
      { name: 'Pneumococcal (PCV)', timing: '2m, 4m, 6m, 12-15m', doses: 4 },
      { name: 'DTaP', timing: '3m, 4m, 5m', doses: 3 },
      { name: 'Polio (IPV)', timing: '3m, 4m, 5m', doses: 3 },
      { name: 'MR (Measles-Rubella)', timing: '12m, 5-6y', doses: 2 },
    switch (sortBy) {
      
    philosophy: 'Balanced schedule reflecting Japanese disease patterns and healthcare infrastructure',
    source: 'MHLW',
        return a.approa
    
  {
    code: 'AU',
    country: 'Australia',
    totalDoses: 24,
    approach: 'comprehensive',

      { name: 'Hepatitis B', timing: 'Birth', doses: 1 },
      { name: 'DTaP-IPV-Hib-HepB', timing: '2m, 4m, 6m', doses: 3 },
      { name: 'Pneumococcal (PCV)', timing: '2m, 4m, 6m, 12m', doses: 4 },
      { name: 'Rotavirus', timing: '2m, 4m', doses: 2 },
      { name: 'Meningococcal B', timing: '2m, 4m, 12m', doses: 3 },
      { name: 'MMR', timing: '12m, 18m', doses: 2 },
      
    philosophy: 'Comprehensive approach tailored to Australian disease patterns and geographic challenges',
    source: 'ATAGI',
    lastUpdated: '2024'
    
  {
    code: 'DE',
    country: 'Germany',
    totalDoses: 22,
    approach: 'balanced',
          </div
      { name: 'DTaP-IPV-Hib-HepB', timing: '2m, 3m, 4m, 11-14m', doses: 4 },
      { name: 'Pneumococcal (PCV)', timing: '2m, 4m, 11-14m', doses: 3 },
      { name: 'Rotavirus', timing: '2m, 3m, 4m', doses: 3 },
      { name: 'MMR', timing: '11-14m, 15-23m', doses: 2 },
      { name: 'Varicella', timing: '11-14m, 15-23m', doses: 2 },
      
    philosophy: 'Balanced evidence-based approach with comprehensive coverage of common diseases',
    source: 'STIKO',
    lastUpdated: '2024'
    
   
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

      }
      return next
    })




















      case 'country':



      case 'doses-desc':



      default:

    }



















      </Alert>





















            </div>









































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



          <p>

          </p>
          <p>

          </p>
          <p>

          </p>








      </Alert>

  )

