import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Warning, Info, Database, TrendUp } from '@phosphor-icons/react'
import { vaersRealData } from '@/lib/vaersRealData'

export function VAERSExplainer() {
  // Calculate totals from real VAERS data
  const allVaccines = Object.entries(vaersRealData)
  const totalReportsAll = allVaccines.reduce((sum, [, d]) => sum + d.totalReports, 0)
  const totalDeathsAll = allVaccines.reduce((sum, [, d]) => sum + d.deaths, 0)
  const totalHospAll = allVaccines.reduce((sum, [, d]) => sum + d.hospitalizations, 0)
  const totalDisableAll = allVaccines.reduce((sum, [, d]) => sum + d.permanentDisability, 0)
  const totalERAll = allVaccines.reduce((sum, [, d]) => sum + d.emergencyRoomVisits, 0)
  const totalLifeThreatAll = allVaccines.reduce((sum, [, d]) => sum + d.lifeThreatening, 0)

  // Sort vaccines by total reports for the summary table
  const sortedByReports = [...allVaccines].sort((a, b) => b[1].totalReports - a[1].totalReports)

  const vaccineLabels: Record<string, string> = {
    covid19: 'COVID-19',
    flu: 'Influenza',
    varicella: 'Varicella / Zoster',
    dtap: 'DTaP / DTP / Tdap',
    pcv: 'Pneumococcal (PCV)',
    mmr: 'MMR',
    hpv: 'HPV',
    hepb: 'Hepatitis B',
    ipv: 'Polio (IPV/OPV)',
    hib: 'Hib',
    meningococcal: 'Meningococcal',
    hepa: 'Hepatitis A',
    rotavirus: 'Rotavirus',
    rsv: 'RSV',
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6 p-6">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Database size={32} weight="duotone" className="text-destructive" />
          <h1 className="text-3xl font-semibold">VAERS Data — Real Numbers</h1>
        </div>
        <p className="text-muted-foreground">
          Official Vaccine Adverse Event Reporting System data aggregated from {allVaccines.length} vaccine categories (1990–2026)
        </p>
      </div>

      {/* Summary Dashboard */}
      <Card className="border-destructive/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-destructive">
            <TrendUp size={24} weight="bold" />
            Total VAERS Reports Across All Vaccines
          </CardTitle>
          <CardDescription>
            Aggregated from official VAERS data downloads at vaers.hhs.gov (1990–Feb 2026)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="bg-destructive/10 p-4 rounded-md border border-destructive/20 text-center">
              <p className="text-xs text-muted-foreground font-medium mb-1">Total Reports</p>
              <p className="text-2xl sm:text-3xl font-bold text-destructive">{totalReportsAll.toLocaleString()}</p>
            </div>
            <div className="bg-destructive/10 p-4 rounded-md border border-destructive/20 text-center">
              <p className="text-xs text-muted-foreground font-medium mb-1">Deaths Reported</p>
              <p className="text-2xl sm:text-3xl font-bold text-destructive">{totalDeathsAll.toLocaleString()}</p>
            </div>
            <div className="bg-destructive/10 p-4 rounded-md border border-destructive/20 text-center">
              <p className="text-xs text-muted-foreground font-medium mb-1">Hospitalizations</p>
              <p className="text-2xl sm:text-3xl font-bold text-destructive">{totalHospAll.toLocaleString()}</p>
            </div>
            <div className="bg-destructive/10 p-4 rounded-md border border-destructive/20 text-center">
              <p className="text-xs text-muted-foreground font-medium mb-1">Permanent Disability</p>
              <p className="text-2xl sm:text-3xl font-bold text-destructive">{totalDisableAll.toLocaleString()}</p>
            </div>
            <div className="bg-destructive/10 p-4 rounded-md border border-destructive/20 text-center">
              <p className="text-xs text-muted-foreground font-medium mb-1">Life-Threatening</p>
              <p className="text-2xl sm:text-3xl font-bold text-destructive">{totalLifeThreatAll.toLocaleString()}</p>
            </div>
            <div className="bg-destructive/10 p-4 rounded-md border border-destructive/20 text-center">
              <p className="text-xs text-muted-foreground font-medium mb-1">ER Visits</p>
              <p className="text-2xl sm:text-3xl font-bold text-destructive">{totalERAll.toLocaleString()}</p>
            </div>
          </div>

          <Alert variant="destructive">
            <Warning size={18} weight="fill" />
            <AlertDescription className="text-sm">
              <strong>Underreporting:</strong> A 2010 Harvard Pilgrim Health Care study funded by the HHS Agency for
              Healthcare Research and Quality found that "fewer than 1% of vaccine adverse events are reported" to VAERS.
              If this estimate is accurate, the true number of adverse events could be significantly higher than what is
              shown above. Source: <a href="https://digital.ahrq.gov/sites/default/files/docs/publication/r18hs017045-lazarus-final-report-2011.pdf" target="_blank" rel="noopener noreferrer" className="underline font-semibold">AHRQ Grant Final Report (Lazarus et al.)</a>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Per-Vaccine Breakdown Table */}
      <Card>
        <CardHeader>
          <CardTitle>Reports by Vaccine Type</CardTitle>
          <CardDescription>All-time VAERS reports (1990–2026) sorted by total reports</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2">
                  <th className="text-left py-2 px-2 font-semibold">Vaccine</th>
                  <th className="text-right py-2 px-1 font-semibold">Reports</th>
                  <th className="text-right py-2 px-1 font-semibold text-destructive">Deaths</th>
                  <th className="text-right py-2 px-1 font-semibold text-destructive">Disabled</th>
                  <th className="text-right py-2 px-1 font-semibold text-destructive">Hospital</th>
                  <th className="text-right py-2 px-1 font-semibold text-destructive">ER</th>
                </tr>
              </thead>
              <tbody>
                {sortedByReports.map(([key, d]) => (
                  <tr key={key} className="border-b border-border/50 hover:bg-muted/50">
                    <td className="py-1.5 px-2 font-medium">{vaccineLabels[key] || key}</td>
                    <td className="text-right py-1.5 px-1 font-mono text-xs">{d.totalReports.toLocaleString()}</td>
                    <td className="text-right py-1.5 px-1 font-mono text-xs text-destructive">{d.deaths.toLocaleString()}</td>
                    <td className="text-right py-1.5 px-1 font-mono text-xs text-destructive">{d.permanentDisability.toLocaleString()}</td>
                    <td className="text-right py-1.5 px-1 font-mono text-xs text-destructive">{d.hospitalizations.toLocaleString()}</td>
                    <td className="text-right py-1.5 px-1 font-mono text-xs text-destructive">{d.emergencyRoomVisits.toLocaleString()}</td>
                  </tr>
                ))}
                <tr className="border-t-2 font-bold">
                  <td className="py-2 px-2">TOTAL</td>
                  <td className="text-right py-2 px-1 font-mono text-xs">{totalReportsAll.toLocaleString()}</td>
                  <td className="text-right py-2 px-1 font-mono text-xs text-destructive">{totalDeathsAll.toLocaleString()}</td>
                  <td className="text-right py-2 px-1 font-mono text-xs text-destructive">{totalDisableAll.toLocaleString()}</td>
                  <td className="text-right py-2 px-1 font-mono text-xs text-destructive">{totalHospAll.toLocaleString()}</td>
                  <td className="text-right py-2 px-1 font-mono text-xs text-destructive">{totalERAll.toLocaleString()}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>What is VAERS?</CardTitle>
          <CardDescription>
            The national vaccine safety surveillance system — and its critical limitations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The <strong>Vaccine Adverse Event Reporting System (VAERS)</strong> is a national early warning system co-managed by the CDC and FDA. Established in 1990, it collects reports of health problems (adverse events) that occur after vaccination.
          </p>
          
          <div className="space-y-3">
            <h3 className="font-semibold flex items-center gap-2">
              <Info size={20} weight="fill" className="text-primary" />
              Key Facts About VAERS
            </h3>
            <ul className="list-disc list-inside space-y-2 text-sm ml-6">
              <li><strong>Passive (voluntary) reporting system</strong> — relies on people to submit reports</li>
              <li>Healthcare providers are <strong>legally required</strong> to report certain events (42 USC §300aa-25)</li>
              <li>Despite this requirement, the <strong>vast majority of adverse events go unreported</strong></li>
              <li>A 2010 Harvard/AHRQ study estimated <strong>fewer than 1% of adverse events are reported</strong></li>
              <li>Reports are accepted from healthcare providers, patients, parents, and manufacturers</li>
              <li>It has detected real safety signals: RotaShield intussusception, mRNA myocarditis, J&amp;J blood clots</li>
              <li>The database is <strong>publicly accessible</strong> — anyone can download and verify the data</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold flex items-center gap-2">
              <Warning size={20} weight="fill" className="text-caution" />
              Important Context
            </h3>
            <ul className="list-disc list-inside space-y-2 text-sm ml-6">
              <li>VAERS reports <strong>do not prove causation</strong> — they document temporal associations</li>
              <li>However, <strong>dismissing VAERS data entirely is also inappropriate</strong> — it is the primary safety surveillance system</li>
              <li>The <strong>underreporting problem</strong> means VAERS likely captures only a fraction of actual adverse events</li>
              <li>Reports require follow-up investigation to determine causal relationships</li>
              <li>No denominator data is available (total doses administered), making rate calculations difficult</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="border-blue-200 bg-blue-50/50 dark:border-blue-900 dark:bg-blue-950/20">
        <CardHeader>
          <CardTitle>Correlation vs. Causation: A Critical Distinction</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Badge variant="outline" className="mb-2">Correlation (VAERS)</Badge>
              <p className="text-sm">
                <strong>Definition:</strong> Two events happen around the same time
              </p>
              <p className="text-sm text-muted-foreground">
                "My child got a vaccine on Monday and developed a rash on Wednesday."
              </p>
              <p className="text-sm text-muted-foreground">
                This timing <em>might</em> indicate causation, or it might be coincidence. Further investigation needed.
              </p>
            </div>

            <div className="space-y-2">
              <Badge variant="outline" className="mb-2">Causation (Confirmed Link)</Badge>
              <p className="text-sm">
                <strong>Definition:</strong> One event directly causes the other
              </p>
              <p className="text-sm text-muted-foreground">
                Established through controlled studies, biological mechanism, consistent patterns across populations, and dose-response relationship.
              </p>
              <p className="text-sm text-muted-foreground">
                Example: Fever after MMR vaccine (proven causal relationship in ~5-15% of recipients).
              </p>
            </div>
          </div>

          <Separator className="my-4" />

          <Alert>
            <Info size={18} weight="fill" />
            <AlertDescription className="ml-2 text-sm">
              <strong>Example of why this matters:</strong> Millions of babies receive vaccines at 2, 4, and 6 months - the same ages when many developmental conditions first become apparent (autism, seizure disorders, etc.). If a child shows signs of autism at 18 months (typical age of diagnosis), and they received vaccines at 2, 4, 6, 12, and 15 months, the temporal association is inevitable but does not prove causation. Extensive research has found no causal link between vaccines and autism.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>How to Interpret VAERS Data Responsibly</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <Badge variant="secondary" className="w-8 h-8 flex items-center justify-center">1</Badge>
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold">Understand the denominator</h3>
                <p className="text-sm text-muted-foreground">
                  If VAERS shows 100 reports of a symptom after a vaccine, but 10 million doses were given, that's 0.001%. Context matters.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <Badge variant="secondary" className="w-8 h-8 flex items-center justify-center">2</Badge>
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold">Look for confirmed causal relationships</h3>
                <p className="text-sm text-muted-foreground">
                  FDA/CDC investigate VAERS signals. When causation is confirmed, it appears in package inserts and official guidance (e.g., anaphylaxis risk 1 in 1 million).
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <Badge variant="secondary" className="w-8 h-8 flex items-center justify-center">3</Badge>
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold">Consider background rates</h3>
                <p className="text-sm text-muted-foreground">
                  Compare reported event rates to how often these events occur naturally in the population. SIDS occurs in ~40 per 100,000 live births with or without vaccination.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <Badge variant="secondary" className="w-8 h-8 flex items-center justify-center">4</Badge>
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold">Seek follow-up studies</h3>
                <p className="text-sm text-muted-foreground">
                  VAERS signals trigger formal studies (Vaccine Safety Datalink, Clinical Immunization Safety Assessment). Check for published research examining the signal.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <Badge variant="secondary" className="w-8 h-8 flex items-center justify-center">5</Badge>
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold">Be wary of cherry-picking</h3>
                <p className="text-sm text-muted-foreground">
                  VAERS contains reports of car accidents, drownings, and other events with no plausible biological connection to vaccination. Focus on events with plausible mechanisms.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-evidence/30 bg-evidence/5">
        <CardHeader>
          <CardTitle>Real Vaccine Risks Identified Through Surveillance</CardTitle>
          <CardDescription>Examples of confirmed adverse events detected by VAERS and confirmed through follow-up research</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold">Intussusception with RotaShield (1999)</h3>
              <p className="text-sm text-muted-foreground">
                VAERS detected increased intussusception risk with first rotavirus vaccine. Follow-up studies confirmed risk of 1 in 10,000. Vaccine was withdrawn. Current rotavirus vaccines have much lower risk (1-5 per 100,000) and are still used because benefits outweigh risks.
              </p>
            </div>

            <Separator />

            <div className="space-y-2">
              <h3 className="font-semibold">Febrile Seizures with MMRV (2008)</h3>
              <p className="text-sm text-muted-foreground">
                VAERS signal showed higher febrile seizure rates with combined MMRV vs separate MMR+Varicella. Confirmed risk: 1 additional febrile seizure per 2,300-2,600 doses. Recommendation changed to prefer separate vaccines for first dose.
              </p>
            </div>

            <Separator />

            <div className="space-y-2">
              <h3 className="font-semibold">Myocarditis with COVID-19 mRNA Vaccines (2021)</h3>
              <p className="text-sm text-muted-foreground">
                VAERS detected rare myocarditis cases in young males after mRNA vaccines. Confirmed risk: ~12-13 per 100,000 males 12-17 after second dose. Most cases mild and resolve. Risk still far lower than myocarditis risk from COVID-19 infection itself (~150 per 100,000 infected males).
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert>
        <Warning size={20} weight="fill" />
        <AlertTitle>Know Your Rights</AlertTitle>
        <AlertDescription className="space-y-2 text-sm">
          <p>
            Under the <strong>National Childhood Vaccine Injury Act of 1986</strong>, vaccine manufacturers are
            shielded from liability for injuries caused by their products. Instead, injured individuals must
            file claims through the <strong>Vaccine Injury Compensation Program (VICP)</strong>, which has
            paid out over <strong>$5 billion</strong> in awards since 1988.
          </p>
          <p>
            You have the right to:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Review the <strong>FDA package insert</strong> (not the VIS handout) before consenting</li>
            <li>Ask about all ingredients and their safety profiles</li>
            <li>Be informed of all known adverse events from VAERS and clinical trials</li>
            <li>Delay, decline, or follow alternative schedules</li>
            <li>File a VAERS report yourself if you observe an adverse event</li>
            <li>Seek a second opinion from another healthcare provider</li>
          </ul>
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle>Additional Vaccine Safety Monitoring Systems</CardTitle>
          <CardDescription>VAERS is just one part of a comprehensive safety net</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h3 className="font-semibold">Vaccine Safety Datalink (VSD)</h3>
              <p className="text-sm text-muted-foreground">
                Collaboration with 9 healthcare organizations covering 12 million people. Uses electronic health records to conduct rigorous studies with comparison groups. Can establish causation.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Clinical Immunization Safety Assessment (CISA)</h3>
              <p className="text-sm text-muted-foreground">
                Network of vaccine safety experts who investigate complex cases and provide clinical consultation for individuals with unusual reactions.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Post-Licensure Rapid Immunization Safety Monitoring (PRISM)</h3>
              <p className="text-sm text-muted-foreground">
                FDA system using claims data from Medicare, Medicaid, and private insurers to detect safety issues quickly in newly licensed vaccines.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Biologics Effectiveness and Safety (BEST)</h3>
              <p className="text-sm text-muted-foreground">
                FDA initiative analyzing real-world data from multiple sources including electronic health records, registries, and claims databases.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-primary/30 bg-primary/5">
        <CardHeader>
          <CardTitle>Making Truly Informed Decisions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p>
            <strong>The data speaks for itself.</strong> With {totalReportsAll.toLocaleString()} adverse event reports,{' '}
            {totalDeathsAll.toLocaleString()} reported deaths, and {totalDisableAll.toLocaleString()} reported permanent
            disabilities in the VAERS database, these numbers deserve serious consideration — regardless of whether each
            individual report represents a confirmed causal link.
          </p>
          <p>
            <strong>Read the FDA package inserts.</strong> The manufacturer's own package insert (not the simplified
            Vaccine Information Statement) contains detailed safety data, contraindications, and adverse event rates from
            clinical trials. This is your right under informed consent.
          </p>
          <p>
            <strong>Question everything.</strong> Informed consent requires that you understand the risks AND
            benefits of any medical intervention — including doing nothing. No one should be pressured into
            a medical decision without full information.
          </p>
          <p>
            <strong>Every child is different.</strong> Family medical history, genetic factors, current health status,
            and prior reactions all matter. A one-size-fits-all approach may not be appropriate for every child.
            You know your child best.
          </p>
          <p>
            <strong>You have the final say.</strong> Ultimately, the decision about what goes into your or your child's
            body is yours. This app provides the data — you make the decision.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
