import { procedures } from '@/lib/proceduresData'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { BookmarkSimple, ArrowsLeftRight, NotePencil, Seal, WarningOctagon, CheckCircle, Clock, Info } from '@phosphor-icons/react'
import { urgencyConfig, evidenceLevelConfig, formatDate, getSeverityColor } from '@/lib/constants'
import { CesareanVBACComparison } from '@/components/OutcomeComparisonChart'

interface ProcedureDetailProps {
  procedureId: string
  isSaved: boolean
  onSave: () => void
  onCompare: (ids: string[]) => void
  onAddToReflection: () => void
}

export function ProcedureDetail({
  procedureId,
  isSaved,
  onSave,
  onCompare,
  onAddToReflection
}: ProcedureDetailProps) {
  const procedure = procedures.find(p => p.id === procedureId)

  if (!procedure) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Alert variant="destructive">
          <AlertDescription>Procedure not found</AlertDescription>
        </Alert>
      </div>
    )
  }

  const urgencyStyle = urgencyConfig[procedure.urgencyLevel]

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-semibold mb-3">{procedure.name}</h1>
            <div className="flex flex-wrap gap-2">
              <Badge variant={urgencyStyle.color === 'destructive' ? 'destructive' : 'secondary'} className="text-sm">
                {urgencyStyle.label}
              </Badge>
              <Badge variant="outline" className="text-sm">
                {procedure.category.replace('-', ' ')}
              </Badge>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={onSave}>
              <BookmarkSimple className="h-5 w-5" weight={isSaved ? 'fill' : 'regular'} />
            </Button>
          </div>
        </div>

        <Alert className="mb-6">
          <Info className="h-5 w-5" />
          <AlertDescription className="ml-2">
            <strong>{urgencyStyle.label}:</strong> {urgencyStyle.description}
          </AlertDescription>
        </Alert>

        <p className="text-lg leading-relaxed mb-4">{procedure.summary}</p>
        <p className="text-foreground/90 leading-relaxed mb-6">
          <strong>Why it's offered:</strong> {procedure.indication}
        </p>

        <div className="flex flex-wrap gap-3">
          <Button onClick={onAddToReflection} variant="default" className="gap-2">
            <NotePencil className="h-4 w-4" />
            Add to Notes
          </Button>
          {procedure.alternatives.length > 0 && (
            <Button 
              onClick={() => onCompare([procedure.id, ...procedure.alternatives.map(a => a.id)])} 
              variant="outline"
              className="gap-2"
            >
              <ArrowsLeftRight className="h-4 w-4" />
              Compare Options
            </Button>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="bg-evidence/10 border-evidence/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-evidence-foreground">
              <CheckCircle className="h-5 w-5 text-evidence" weight="fill" />
              Benefits
            </CardTitle>
          </CardHeader>
          <CardContent>
            {procedure.benefits.length === 0 ? (
              <p className="text-sm text-muted-foreground">No specific benefits documented</p>
            ) : (
              <ul className="space-y-3">
                {procedure.benefits.map((benefit) => (
                  <li key={benefit.id} className="flex gap-3">
                    <span className="text-evidence mt-1">•</span>
                    <div className="flex-1">
                      <p className="leading-relaxed">{benefit.description}</p>
                      <div className="flex gap-1 mt-1">
                        {benefit.citations.map((citId, idx) => (
                          <sup key={idx} className="text-xs text-evidence">[{idx + 1}]</sup>
                        ))}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>

        <Card className="bg-destructive/5 border-destructive/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <WarningOctagon className="h-5 w-5 text-destructive" weight="fill" />
              Risks & Side Effects
            </CardTitle>
          </CardHeader>
          <CardContent>
            {procedure.risks.length === 0 ? (
              <p className="text-sm text-muted-foreground">No specific risks documented</p>
            ) : (
              <ul className="space-y-4">
                {procedure.risks.map((risk) => (
                  <li key={risk.id} className="flex gap-3">
                    <span className={`mt-1 ${getSeverityColor(risk.severity)}`}>•</span>
                    <div className="flex-1">
                      <p className="leading-relaxed">{risk.description}</p>
                      {risk.frequency && (
                        <p className="text-sm text-muted-foreground mt-1">
                          <strong>Frequency:</strong> {risk.frequency}
                        </p>
                      )}
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {risk.severity}
                        </Badge>
                        {risk.citations.map((citId, idx) => (
                          <sup key={idx} className="text-xs text-muted-foreground">[{idx + 1}]</sup>
                        ))}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>

      {procedure.id === 'proc-cesarean-vbac-comparison' && (
        <div className="mb-8">
          <CesareanVBACComparison />
        </div>
      )}

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            What if we wait or decline?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed">{procedure.whatIfWeWait}</p>
        </CardContent>
      </Card>

      {procedure.alternatives.length > 0 && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Alternatives</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {procedure.alternatives.map((alt) => (
                <AccordionItem key={alt.id} value={alt.id}>
                  <AccordionTrigger className="text-left">
                    <div>
                      <span className="font-semibold">{alt.name}</span>
                      {!alt.isEquivalent && (
                        <Badge variant="outline" className="ml-2 text-xs">
                          Not Equivalent
                        </Badge>
                      )}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground mb-4">{alt.description}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-2 text-evidence">Benefits:</h4>
                        <ul className="space-y-1 text-sm">
                          {alt.benefits.map((ben) => (
                            <li key={ben.id} className="flex gap-2">
                              <span className="text-evidence">•</span>
                              <span>{ben.description}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-sm mb-2 text-destructive">Risks:</h4>
                        <ul className="space-y-1 text-sm">
                          {alt.risks.map((risk) => (
                            <li key={risk.id} className="flex gap-2">
                              <span className="text-destructive">•</span>
                              <span>{risk.description}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Seal className="h-4 w-4" />
                        <span>Evidence Level: {evidenceLevelConfig[alt.evidenceLevel].label}</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      )}

      {procedure.contraindications.length > 0 && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <WarningOctagon className="h-5 w-5 text-caution-foreground" />
              Contraindications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {procedure.contraindications.map((contra) => (
                <li key={contra.id}>
                  <div className="flex items-start gap-3">
                    <Badge variant={contra.severity === 'absolute' ? 'destructive' : 'secondary'}>
                      {contra.severity}
                    </Badge>
                    <div className="flex-1">
                      <p className="font-semibold">{contra.condition}</p>
                      <p className="text-sm text-muted-foreground mt-1">{contra.explanation}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Questions to Ask Your Healthcare Provider</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {procedure.questionsToAsk.map((question, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="text-primary font-semibold">{idx + 1}.</span>
                <span>{question}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Seal className="h-5 w-5" />
            Evidence & Sources
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {procedure.citations.map((citation, idx) => (
              <div key={citation.id} className="text-sm">
                <span className="font-semibold">[{idx + 1}]</span>{' '}
                <span className="font-semibold">{citation.title}</span>
                <br />
                <span className="text-muted-foreground">
                  {citation.authors}. {citation.source}. {citation.date}.
                </span>
                {citation.url && (
                  <a 
                    href={citation.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline ml-2"
                  >
                    View Source →
                  </a>
                )}
                <div className="mt-1">
                  <Badge variant="outline" className="text-xs">
                    {evidenceLevelConfig[citation.evidenceLevel].label}
                  </Badge>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-border text-sm text-muted-foreground">
            <p><strong>Last Reviewed:</strong> {formatDate(procedure.lastReviewed)}</p>
            <p><strong>Next Review Due:</strong> {formatDate(procedure.nextReviewDue)}</p>
            {procedure.reviewedBy && <p><strong>Reviewed By:</strong> {procedure.reviewedBy}</p>}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
