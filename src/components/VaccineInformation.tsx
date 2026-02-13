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
  ExclamationTriangleIcon 
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
                <ChartBarIcon className="h-5 w-5 text-primary" />
                <span className="font-semibold">VAERS Adverse Event Reports</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-4">
                <Alert>
                  <AlertTitle className="text-sm font-semibold">Understanding VAERS Data</AlertTitle>
                  <AlertDescription className="text-sm">
                    VAERS is a passive reporting system where anyone can report events that occur after vaccination. 
                    <strong> Reports do not prove causation</strong> — they indicate events that occurred in a timeframe 
                    after vaccination and require further investigation. Healthcare providers are required to report certain events. 
                    Both under-reporting and coincidental reporting occur.
                  </AlertDescription>
                </Alert>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {vaccineName} - {vaccineInfo.vaersData.reportYear}
                    </CardTitle>
                    <CardDescription>
                      Total reports submitted to VAERS for this vaccine
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Total Reports</p>
                        <p className="text-2xl font-bold">{vaccineInfo.vaersData.totalReports.toLocaleString()}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Serious Reports</p>
                        <p className="text-2xl font-bold text-destructive">
                          {vaccineInfo.vaersData.seriousReports.toLocaleString()}
                        </p>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Serious Event Categories</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="bg-muted p-3 rounded-md">
                          <p className="text-xs text-muted-foreground">Deaths</p>
                          <p className="text-xl font-semibold">{vaccineInfo.vaersData.deaths.toLocaleString()}</p>
                        </div>
                        <div className="bg-muted p-3 rounded-md">
                          <p className="text-xs text-muted-foreground">Permanent Disability</p>
                          <p className="text-xl font-semibold">{vaccineInfo.vaersData.permanentDisability.toLocaleString()}</p>
                        </div>
                        <div className="bg-muted p-3 rounded-md">
                          <p className="text-xs text-muted-foreground">Hospitalizations</p>
                          <p className="text-xl font-semibold">{vaccineInfo.vaersData.hospitalizations.toLocaleString()}</p>
                        </div>
                      </div>
                      <div className="bg-muted p-3 rounded-md">
                        <p className="text-xs text-muted-foreground">Emergency Room Visits</p>
                        <p className="text-xl font-semibold">{vaccineInfo.vaersData.emergencyRoomVisits.toLocaleString()}</p>
                      </div>
                    </div>

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
                        VAERS Database
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
