import { VaccineInfo } from '@/lib/types'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  BeakerIcon, 
  ChartBarIcon, 
  ScaleIcon, 
  GlobeAltIcon,
  ExclamationTriangleIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

interface VaccineInformationProps {
  vaccineInfo: VaccineInfo
  vaccineName: string
}

export function VaccineInformation({ vaccineInfo, vaccineName }: VaccineInformationProps) {
  return (
    <div className="space-y-6">
      <Alert className="border-caution bg-caution/10">
        <ExclamationTriangleIcon className="h-5 w-5 text-caution-foreground" />
        <AlertTitle className="text-caution-foreground font-semibold">
          Full Informed Consent Information
        </AlertTitle>
        <AlertDescription className="text-foreground/80">
          This section provides complete transparency about vaccine ingredients, reported adverse events, 
          legal compensation data, and international schedule comparisons. All data is sourced from official 
          FDA package inserts, VAERS (Vaccine Adverse Event Reporting System), VICP (Vaccine Injury Compensation Program), 
          and international health agencies. This is educational information, not medical advice.
        </AlertDescription>
      </Alert>

      <Accordion type="multiple" className="space-y-4" defaultValue={['ingredients', 'vaers', 'vicp', 'international']}>
        <AccordionItem value="ingredients" className="border rounded-lg px-4">
          <AccordionTrigger className="hover:no-underline">
            <div className="flex items-center gap-3">
              <BeakerIcon className="h-5 w-5 text-primary" />
              <span className="font-semibold">Complete Ingredient List</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-4">
              {vaccineInfo.fdaPackageInsertUrl && (
                <div className="bg-muted p-3 rounded-md">
                  <p className="text-sm text-muted-foreground mb-2">Official source:</p>
                  <a 
                    href={vaccineInfo.fdaPackageInsertUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline font-medium"
                  >
                    FDA Package Insert (PDF)
                  </a>
                </div>
              )}
              
              <div className="space-y-3">
                {vaccineInfo.ingredients.map((ingredient) => (
                  <Card key={ingredient.id} className="border-border/50">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">{ingredient.name}</CardTitle>
                      <CardDescription className="text-sm">
                        <span className="font-medium">Purpose:</span> {ingredient.purpose}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {ingredient.amount && (
                        <p className="text-sm">
                          <span className="font-medium">Amount:</span> {ingredient.amount}
                        </p>
                      )}
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">Safety Profile:</span> {ingredient.safetyProfile}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {vaccineInfo.vaersData && (
          <AccordionItem value="vaers" className="border rounded-lg px-4">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3">
                <ChartBarIcon className="h-5 w-5 text-destructive" />
                <span className="font-semibold">VAERS Adverse Event Reports — Real Data</span>
                <Badge variant="destructive" className="ml-2">{vaccineInfo.vaersData.totalReports.toLocaleString()} reports</Badge>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-4">
                <Alert variant="destructive">
                  <ExclamationTriangleIcon className="h-5 w-5" />
                  <AlertTitle className="text-sm font-semibold">Real VAERS Data — {vaccineInfo.vaersData.dataAsOf || 'Current'}</AlertTitle>
                  <AlertDescription className="text-sm">
                    This data is aggregated directly from official VAERS CSV downloads at{' '}
                    <a href="https://vaers.hhs.gov/data/datasets.html" target="_blank" rel="noopener noreferrer" className="underline font-semibold">
                      vaers.hhs.gov
                    </a>. VAERS is a passive reporting system — some experts estimate it captures only 1-10% of actual adverse events
                    (the "VAERS underreporting factor"). These numbers represent the minimum known reported events.
                  </AlertDescription>
                </Alert>

                <Card className="border-destructive/30">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {vaccineName} — {vaccineInfo.vaersData.reportYear}
                    </CardTitle>
                    <CardDescription>
                      Adverse event reports submitted to VAERS. Source: Official VAERS data files.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Primary Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1 bg-destructive/5 p-3 rounded-md border border-destructive/20">
                        <p className="text-sm text-muted-foreground">Total Adverse Event Reports</p>
                        <p className="text-3xl font-bold text-destructive">{vaccineInfo.vaersData.totalReports.toLocaleString()}</p>
                      </div>
                      <div className="space-y-1 bg-destructive/5 p-3 rounded-md border border-destructive/20">
                        <p className="text-sm text-muted-foreground">Serious Reports</p>
                        <p className="text-3xl font-bold text-destructive">
                          {vaccineInfo.vaersData.seriousReports.toLocaleString()}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          ({((vaccineInfo.vaersData.seriousReports / vaccineInfo.vaersData.totalReports) * 100).toFixed(1)}% of all reports)
                        </p>
                      </div>
                    </div>

                    <Separator />

                    {/* Serious Event Breakdown */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-destructive">Serious Adverse Event Categories</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        <div className="bg-destructive/10 p-3 rounded-md border border-destructive/20">
                          <p className="text-xs text-muted-foreground font-medium">Deaths Reported</p>
                          <p className="text-2xl font-bold text-destructive">{vaccineInfo.vaersData.deaths.toLocaleString()}</p>
                        </div>
                        <div className="bg-destructive/10 p-3 rounded-md border border-destructive/20">
                          <p className="text-xs text-muted-foreground font-medium">Life-Threatening</p>
                          <p className="text-2xl font-bold text-destructive">{vaccineInfo.vaersData.lifeThreatening.toLocaleString()}</p>
                        </div>
                        <div className="bg-destructive/10 p-3 rounded-md border border-destructive/20">
                          <p className="text-xs text-muted-foreground font-medium">Permanent Disability</p>
                          <p className="text-2xl font-bold text-destructive">{vaccineInfo.vaersData.permanentDisability.toLocaleString()}</p>
                        </div>
                        <div className="bg-destructive/10 p-3 rounded-md border border-destructive/20">
                          <p className="text-xs text-muted-foreground font-medium">Hospitalizations</p>
                          <p className="text-2xl font-bold text-destructive">{vaccineInfo.vaersData.hospitalizations.toLocaleString()}</p>
                        </div>
                        <div className="bg-destructive/10 p-3 rounded-md border border-destructive/20">
                          <p className="text-xs text-muted-foreground font-medium">ER Visits</p>
                          <p className="text-2xl font-bold text-destructive">{vaccineInfo.vaersData.emergencyRoomVisits.toLocaleString()}</p>
                        </div>
                        <div className="bg-destructive/10 p-3 rounded-md border border-destructive/20">
                          <p className="text-xs text-muted-foreground font-medium">Birth Defects</p>
                          <p className="text-2xl font-bold text-destructive">{vaccineInfo.vaersData.birthDefects.toLocaleString()}</p>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    {/* Top Reported Symptoms */}
                    {vaccineInfo.vaersData.topReportedSymptoms && vaccineInfo.vaersData.topReportedSymptoms.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm">Most Frequently Reported Symptoms</h4>
                        <div className="space-y-1">
                          {vaccineInfo.vaersData.topReportedSymptoms.slice(0, 12).map((s, idx) => {
                            const maxCount = vaccineInfo.vaersData!.topReportedSymptoms[0].count
                            const pct = (s.count / maxCount) * 100
                            return (
                              <div key={idx} className="flex items-center gap-2">
                                <span className="text-xs text-muted-foreground w-4 text-right">{idx + 1}.</span>
                                <div className="flex-1 flex items-center gap-2">
                                  <div className="relative h-6 flex-1 bg-muted rounded overflow-hidden">
                                    <div
                                      className="absolute inset-y-0 left-0 bg-destructive/20 rounded"
                                      style={{ width: `${pct}%` }}
                                    />
                                    <span className="relative z-10 text-xs font-medium px-2 leading-6">{s.symptom}</span>
                                  </div>
                                  <span className="text-xs font-mono text-muted-foreground w-16 text-right">{s.count.toLocaleString()}</span>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    )}

                    <Separator />

                    {/* Age Breakdown */}
                    {vaccineInfo.vaersData.ageBreakdown && vaccineInfo.vaersData.ageBreakdown.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm flex items-center gap-2">
                          <UserGroupIcon className="h-4 w-4" />
                          Reports by Age Group
                        </h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {vaccineInfo.vaersData.ageBreakdown
                            .filter(a => a.group !== 'unknown')
                            .map((ag, idx) => (
                            <div key={idx} className="bg-muted p-2 rounded-md text-center">
                              <p className="text-xs text-muted-foreground">{ag.group}</p>
                              <p className="text-lg font-semibold">{ag.count.toLocaleString()}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <Separator />

                    {/* Yearly Trend */}
                    {vaccineInfo.vaersData.yearlyTrend && vaccineInfo.vaersData.yearlyTrend.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm">Yearly Report Trend (Recent Years)</h4>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left py-1 px-2 font-medium">Year</th>
                                <th className="text-right py-1 px-2 font-medium">Reports</th>
                                <th className="text-right py-1 px-2 font-medium text-destructive">Deaths</th>
                                <th className="text-right py-1 px-2 font-medium text-destructive">Serious</th>
                              </tr>
                            </thead>
                            <tbody>
                              {vaccineInfo.vaersData.yearlyTrend.map((y, idx) => (
                                <tr key={idx} className="border-b border-border/50">
                                  <td className="py-1 px-2">{y.year}</td>
                                  <td className="text-right py-1 px-2 font-mono">{y.reports.toLocaleString()}</td>
                                  <td className="text-right py-1 px-2 font-mono text-destructive">{y.deaths.toLocaleString()}</td>
                                  <td className="text-right py-1 px-2 font-mono text-destructive">{y.serious.toLocaleString()}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {vaccineInfo.vaersData.note && (
                      <Alert className="mt-4">
                        <AlertDescription className="text-sm">
                          {vaccineInfo.vaersData.note}
                        </AlertDescription>
                      </Alert>
                    )}

                    <div className="bg-muted p-3 rounded-md mt-4">
                      <p className="text-sm text-muted-foreground mb-2">Official source:</p>
                      <a 
                        href={vaccineInfo.vaersData.sourceUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline font-medium"
                      >
                        VAERS Data Downloads (vaers.hhs.gov)
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AccordionContent>
          </AccordionItem>
        )}

        {vaccineInfo.vicpInfo && (
          <AccordionItem value="vicp" className="border rounded-lg px-4">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3">
                <ScaleIcon className="h-5 w-5 text-primary" />
                <span className="font-semibold">Vaccine Injury Compensation Program (VICP)</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-4">
                <Alert>
                  <AlertTitle className="text-sm font-semibold">About VICP</AlertTitle>
                  <AlertDescription className="text-sm">
                    The National Vaccine Injury Compensation Program is a federal program created to compensate 
                    individuals who may have been injured by certain vaccines. Compensation awards do not necessarily 
                    prove causation but provide a no-fault alternative to the traditional legal system. The program is 
                    funded by an excise tax on vaccines, not taxpayer dollars.
                  </AlertDescription>
                </Alert>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">{vaccineInfo.vicpInfo.vaccineName}</CardTitle>
                    <CardDescription>
                      {vaccineInfo.vicpInfo.timeframe}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Total Cases Compensated</p>
                        <p className="text-2xl font-bold">{vaccineInfo.vicpInfo.totalCasesCompensated.toLocaleString()}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Total Amount Awarded</p>
                        <p className="text-2xl font-bold">{vaccineInfo.vicpInfo.totalAmountAwarded}</p>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-semibold text-sm mb-3">Most Common Compensated Injuries</h4>
                      <div className="flex flex-wrap gap-2">
                        {vaccineInfo.vicpInfo.mostCommonInjuries.map((injury, idx) => (
                          <Badge key={idx} variant="secondary" className="text-sm">
                            {injury}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="bg-muted p-3 rounded-md mt-4">
                      <p className="text-sm text-muted-foreground mb-2">Official source:</p>
                      <a 
                        href={vaccineInfo.vicpInfo.sourceUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline font-medium"
                      >
                        HRSA VICP Data
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AccordionContent>
          </AccordionItem>
        )}

        {vaccineInfo.internationalComparison && vaccineInfo.internationalComparison.length > 0 && (
          <AccordionItem value="international" className="border rounded-lg px-4">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3">
                <GlobeAltIcon className="h-5 w-5 text-primary" />
                <span className="font-semibold">International Schedule Comparison</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-4">
                <Alert>
                  <AlertDescription className="text-sm">
                    Different countries have different vaccination schedules based on their specific disease burden, 
                    healthcare systems, cost-benefit analyses, and public health priorities. This comparison provides 
                    context but does not suggest one approach is superior to another.
                  </AlertDescription>
                </Alert>

                <div className="grid gap-4">
                  {vaccineInfo.internationalComparison.map((schedule, idx) => (
                    <Card key={idx}>
                      <CardHeader>
                        <CardTitle className="text-base flex items-center justify-between">
                          {schedule.country}
                          <Badge variant="outline">
                            {schedule.totalDosesFirstYear} doses (first year)
                          </Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-sm mb-2">Vaccines at Birth</h4>
                          {schedule.vaccinesAtBirth.length > 0 ? (
                            <p className="text-sm text-muted-foreground">
                              {schedule.vaccinesAtBirth.join(', ')}
                            </p>
                          ) : (
                            <p className="text-sm text-muted-foreground italic">None</p>
                          )}
                        </div>

                        <div>
                          <h4 className="font-semibold text-sm mb-2">First Year Schedule</h4>
                          <p className="text-sm text-muted-foreground">
                            {schedule.vaccinesFirstYear.join(', ')}
                          </p>
                        </div>

                        {schedule.notes && (
                          <div className="bg-muted p-3 rounded-md">
                            <p className="text-sm">{schedule.notes}</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        )}

        {vaccineInfo.alternativeSchedules && vaccineInfo.alternativeSchedules.length > 0 && (
          <AccordionItem value="alternatives" className="border rounded-lg px-4">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3">
                <span className="font-semibold">Alternative Schedules & Approaches</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-4">
                {vaccineInfo.alternativeSchedules.map((schedule, idx) => (
                  <Card key={idx}>
                    <CardHeader>
                      <CardTitle className="text-base">{schedule.name}</CardTitle>
                      <div className="flex gap-2">
                        <Badge variant="outline">{schedule.evidenceLevel}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm">{schedule.description}</p>
                      <div className="bg-muted p-3 rounded-md">
                        <p className="text-xs text-muted-foreground mb-1">Citation:</p>
                        <p className="text-sm font-medium">{schedule.citation}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        )}
      </Accordion>
    </div>
  )
}
