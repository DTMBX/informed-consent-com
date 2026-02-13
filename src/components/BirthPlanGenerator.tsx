import { useState } from 'react'
import { useKV } from '@github/spark/hooks'
import { procedures } from '@/lib/proceduresData'
import { Procedure, Stage } from '@/lib/types'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Download, Printer, X, Baby, FirstAid, Heartbeat } from '@phosphor-icons/react'
import { DISCLAIMER_TEXT, formatDate } from '@/lib/constants'
import { toast } from 'sonner'

interface BirthPlanGeneratorProps {
  savedProcedures: string[]
  currentStage: Stage
  onClose: () => void
}

interface BirthPlanPreferences {
  parentName: string
  partnerName: string
  dueDate: string
  hospitalName: string
  providerName: string
  laborPreferences: {
    movementDuringLabor: string
    painManagementPreference: string
    environmentPreferences: string
    supportPersons: string
  }
  deliveryPreferences: {
    deliveryPosition: string
    delayedCordClamping: boolean
    skinToSkinImmediate: boolean
    birthPhotography: boolean
  }
  newbornProcedureDecisions: Record<string, {
    decision: 'accept' | 'decline' | 'discuss' | 'delay'
    notes: string
  }>
  postpartumPreferences: {
    feedingPlan: string
    roominIn: boolean
    visitationPreferences: string
  }
  additionalNotes: string
}

export function BirthPlanGenerator({ savedProcedures, currentStage, onClose }: BirthPlanGeneratorProps) {
  const [birthPlan, setBirthPlan] = useKV<BirthPlanPreferences>('birth-plan-preferences', {
    parentName: '',
    partnerName: '',
    dueDate: '',
    hospitalName: '',
    providerName: '',
    laborPreferences: {
      movementDuringLabor: '',
      painManagementPreference: '',
      environmentPreferences: '',
      supportPersons: ''
    },
    deliveryPreferences: {
      deliveryPosition: '',
      delayedCordClamping: true,
      skinToSkinImmediate: true,
      birthPhotography: false
    },
    newbornProcedureDecisions: {},
    postpartumPreferences: {
      feedingPlan: '',
      roominIn: true,
      visitationPreferences: ''
    },
    additionalNotes: ''
  })

  type Section = 'basic' | 'labor' | 'delivery' | 'newborn' | 'postpartum' | 'preview'
  const [currentSection, setCurrentSection] = useState<Section>('basic')

  const plan = birthPlan || {
    parentName: '',
    partnerName: '',
    dueDate: '',
    hospitalName: '',
    providerName: '',
    laborPreferences: {
      movementDuringLabor: '',
      painManagementPreference: '',
      environmentPreferences: '',
      supportPersons: ''
    },
    deliveryPreferences: {
      deliveryPosition: '',
      delayedCordClamping: true,
      skinToSkinImmediate: true,
      birthPhotography: false
    },
    newbornProcedureDecisions: {},
    postpartumPreferences: {
      feedingPlan: '',
      roominIn: true,
      visitationPreferences: ''
    },
    additionalNotes: ''
  }

  const updateBasicInfo = (field: string, value: string) => {
    setBirthPlan((prev) => {
      const current = prev || plan
      return { ...current, [field]: value }
    })
  }

  const updateLaborPreferences = (field: string, value: string) => {
    setBirthPlan((prev) => {
      const current = prev || plan
      return {
        ...current,
        laborPreferences: { ...current.laborPreferences, [field]: value }
      }
    })
  }

  const updateDeliveryPreferences = (field: string, value: boolean | string) => {
    setBirthPlan((prev) => {
      const current = prev || plan
      return {
        ...current,
        deliveryPreferences: { ...current.deliveryPreferences, [field]: value }
      }
    })
  }

  const updateProcedureDecision = (procId: string, decision: 'accept' | 'decline' | 'discuss' | 'delay', notes: string = '') => {
    setBirthPlan((prev) => {
      const current = prev || plan
      return {
        ...current,
        newbornProcedureDecisions: {
          ...current.newbornProcedureDecisions,
          [procId]: { decision, notes }
        }
      }
    })
  }

  const updatePostpartumPreferences = (field: string, value: string | boolean) => {
    setBirthPlan((prev) => {
      const current = prev || plan
      return {
        ...current,
        postpartumPreferences: { ...current.postpartumPreferences, [field]: value }
      }
    })
  }

  const relevantProcedures = procedures.filter(p => 
    (p.stage === 'labor' || p.stage === 'postpartum' || p.stage === 'all') &&
    savedProcedures.includes(p.id)
  )

  const generateBirthPlanDocument = (): string => {
    const date = new Date().toLocaleDateString()
    
    let doc = `╔════════════════════════════════════════════════════════╗
║                    BIRTH PLAN                          ║
╚════════════════════════════════════════════════════════╝

Created with Informed Consent Companion
Generated: ${date}

${DISCLAIMER_TEXT}

════════════════════════════════════════════════════════

BASIC INFORMATION

Parent/Birthing Person: ${plan.parentName || '[Not specified]'}
Partner/Support Person: ${plan.partnerName || '[Not specified]'}
Expected Due Date: ${plan.dueDate || '[Not specified]'}
Hospital/Birth Location: ${plan.hospitalName || '[Not specified]'}
Healthcare Provider: ${plan.providerName || '[Not specified]'}

════════════════════════════════════════════════════════

LABOR PREFERENCES

Movement During Labor:
${plan.laborPreferences.movementDuringLabor || 'Not specified - I am open to discussing options with my care team.'}

Pain Management Preferences:
${plan.laborPreferences.painManagementPreference || 'Not specified - I am open to discussing options with my care team.'}

Environment Preferences (lighting, music, etc.):
${plan.laborPreferences.environmentPreferences || 'Not specified'}

Support Persons Present:
${plan.laborPreferences.supportPersons || 'Not specified'}

════════════════════════════════════════════════════════

DELIVERY PREFERENCES

Preferred Delivery Position:
${plan.deliveryPreferences.deliveryPosition || 'Open to provider guidance'}

Delayed Cord Clamping:
${plan.deliveryPreferences.delayedCordClamping ? '✓ YES - I request delayed cord clamping (30-180 seconds) if medically appropriate' : '✗ NO - I prefer immediate cord clamping'}

Immediate Skin-to-Skin Contact:
${plan.deliveryPreferences.skinToSkinImmediate ? '✓ YES - I request immediate skin-to-skin contact if baby is healthy' : '✗ NO - I prefer baby to be assessed first'}

Birth Photography/Video:
${plan.deliveryPreferences.birthPhotography ? '✓ YES - I plan to have photography/video during birth' : '✗ NO - I do not plan to photograph/record'}

════════════════════════════════════════════════════════

NEWBORN PROCEDURE DECISIONS

The following decisions are based on my review of evidence-based
information through the Informed Consent Companion. I understand
that these are preferences and medical necessity may require
adjustments.

`

    relevantProcedures.forEach((proc: Procedure) => {
      const decision = plan.newbornProcedureDecisions[proc.id]
      if (decision) {
        doc += `\n${proc.name}\n`
        doc += `Category: ${proc.category} | Urgency: ${proc.urgencyLevel}\n`
        doc += `Decision: ${decision.decision.toUpperCase()}\n`
        if (decision.notes) {
          doc += `Notes: ${decision.notes}\n`
        }
        doc += `Last Reviewed: ${formatDate(proc.lastReviewed)}\n`
        doc += `Sources Consulted: ${proc.citations.length} peer-reviewed sources\n`
        doc += `\n`
      }
    })

    if (relevantProcedures.length === 0) {
      doc += `\nNo specific procedure decisions documented.\nI am open to discussing all recommended procedures with my care team.\n`
    }

    doc += `\n════════════════════════════════════════════════════════

POSTPARTUM PREFERENCES

Infant Feeding Plan:
${plan.postpartumPreferences.feedingPlan || 'Not specified - I am open to discussing options with lactation support.'}

Rooming-In (baby stays with parent):
${plan.postpartumPreferences.roominIn ? '✓ YES - I prefer baby to room-in with me unless medically necessary otherwise' : '✗ NO - I prefer baby to spend time in nursery'}

Visitation Preferences:
${plan.postpartumPreferences.visitationPreferences || 'Not specified'}

════════════════════════════════════════════════════════

ADDITIONAL NOTES & CONSIDERATIONS

${plan.additionalNotes || 'None'}

════════════════════════════════════════════════════════

STATEMENT OF UNDERSTANDING

I understand that this birth plan represents my preferences and 
that flexibility may be necessary based on medical circumstances. 
I trust my care team to communicate with me about any needed 
changes and to include me in decision-making whenever possible.

All procedure decisions were made after reviewing evidence-based
information including benefits, risks, alternatives, and timing
considerations.

This birth plan was created using the Informed Consent Companion,
an educational tool designed to support informed decision-making.
This is not medical advice.

════════════════════════════════════════════════════════

Signature: ________________________  Date: __________

Healthcare Provider Acknowledgment:

I have reviewed this birth plan with the patient and discussed
their preferences and questions.

Provider Signature: ____________________  Date: __________

════════════════════════════════════════════════════════
`

    return doc
  }

  const handleExport = (format: 'text' | 'print') => {
    const document = generateBirthPlanDocument()

    if (format === 'text') {
      const blob = new Blob([document], { type: 'text/plain' })
      const url = URL.createObjectURL(blob)
      const a = window.document.createElement('a')
      a.href = url
      a.download = `birth-plan-${Date.now()}.txt`
      a.click()
      URL.revokeObjectURL(url)
      toast.success('Birth plan exported as text file')
    } else {
      const printWindow = window.open('', '', 'width=800,height=900')
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>Birth Plan</title>
              <style>
                @media print {
                  @page { margin: 0.5in; }
                }
                body {
                  font-family: 'Courier New', monospace;
                  padding: 40px;
                  max-width: 800px;
                  margin: 0 auto;
                  line-height: 1.5;
                  font-size: 11pt;
                }
                pre {
                  white-space: pre-wrap;
                  font-family: inherit;
                  margin: 0;
                }
                @media screen {
                  body {
                    background: #f5f5f5;
                    padding: 20px;
                  }
                }
              </style>
            </head>
            <body>
              <pre>${document}</pre>
            </body>
          </html>
        `)
        printWindow.document.close()
        printWindow.print()
        toast.success('Print dialog opened')
      }
    }
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-semibold mb-2">Birth Plan Generator</h2>
          <p className="text-muted-foreground">
            Create a comprehensive birth plan based on your reviewed procedures
          </p>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {['basic', 'labor', 'delivery', 'newborn', 'postpartum', 'preview'].map((section) => (
          <Button
            key={section}
            variant={currentSection === section ? 'default' : 'outline'}
            size="sm"
            onClick={() => setCurrentSection(section as typeof currentSection)}
            className="capitalize whitespace-nowrap"
          >
            {section === 'preview' ? 'Preview & Export' : section}
          </Button>
        ))}
      </div>

      <div className="space-y-6">
        {currentSection === 'basic' && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Baby className="h-5 w-5" />
                Basic Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="parent-name">Parent/Birthing Person Name</Label>
                  <Input
                    id="parent-name"
                    value={plan.parentName}
                    onChange={(e) => updateBasicInfo('parentName', e.target.value)}
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="partner-name">Partner/Support Person Name</Label>
                  <Input
                    id="partner-name"
                    value={plan.partnerName}
                    onChange={(e) => updateBasicInfo('partnerName', e.target.value)}
                    placeholder="Partner's name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="due-date">Expected Due Date</Label>
                  <Input
                    id="due-date"
                    type="date"
                    value={plan.dueDate}
                    onChange={(e) => updateBasicInfo('dueDate', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hospital-name">Hospital/Birth Location</Label>
                  <Input
                    id="hospital-name"
                    value={plan.hospitalName}
                    onChange={(e) => updateBasicInfo('hospitalName', e.target.value)}
                    placeholder="Hospital or birth center name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="provider-name">Healthcare Provider Name</Label>
                <Input
                  id="provider-name"
                  value={plan.providerName}
                  onChange={(e) => updateBasicInfo('providerName', e.target.value)}
                  placeholder="OB-GYN, Midwife, or care team name"
                />
              </div>
            </CardContent>
          </Card>
        )}

        {currentSection === 'labor' && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heartbeat className="h-5 w-5" />
                Labor Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="movement">Movement During Labor</Label>
                <Textarea
                  id="movement"
                  value={plan.laborPreferences.movementDuringLabor}
                  onChange={(e) => updateLaborPreferences('movementDuringLabor', e.target.value)}
                  placeholder="e.g., I would like to be able to walk, use a birthing ball, change positions freely..."
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="pain-management">Pain Management Preferences</Label>
                <Textarea
                  id="pain-management"
                  value={plan.laborPreferences.painManagementPreference}
                  onChange={(e) => updateLaborPreferences('painManagementPreference', e.target.value)}
                  placeholder="e.g., I plan to use breathing techniques and water therapy; I am open to epidural if needed..."
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="environment">Environment Preferences</Label>
                <Textarea
                  id="environment"
                  value={plan.laborPreferences.environmentPreferences}
                  onChange={(e) => updateLaborPreferences('environmentPreferences', e.target.value)}
                  placeholder="e.g., Dim lighting, music playlist, minimal interruptions..."
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="support-persons">Support Persons Present</Label>
                <Textarea
                  id="support-persons"
                  value={plan.laborPreferences.supportPersons}
                  onChange={(e) => updateLaborPreferences('supportPersons', e.target.value)}
                  placeholder="e.g., Partner, doula, family member names..."
                  rows={2}
                />
              </div>
            </CardContent>
          </Card>
        )}

        {currentSection === 'delivery' && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FirstAid className="h-5 w-5" />
                Delivery Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="delivery-position">Preferred Delivery Position</Label>
                <Select
                  value={plan.deliveryPreferences.deliveryPosition}
                  onValueChange={(v) => updateDeliveryPreferences('deliveryPosition', v)}
                >
                  <SelectTrigger id="delivery-position">
                    <SelectValue placeholder="Select preference" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="open">Open to provider guidance</SelectItem>
                    <SelectItem value="lying">Semi-reclined/lying</SelectItem>
                    <SelectItem value="squatting">Squatting</SelectItem>
                    <SelectItem value="side-lying">Side-lying</SelectItem>
                    <SelectItem value="hands-knees">Hands and knees</SelectItem>
                    <SelectItem value="birth-stool">Birth stool</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="delayed-cord"
                    checked={plan.deliveryPreferences.delayedCordClamping}
                    onCheckedChange={(checked) => updateDeliveryPreferences('delayedCordClamping', !!checked)}
                  />
                  <div className="flex-1">
                    <Label htmlFor="delayed-cord" className="cursor-pointer font-medium">
                      Delayed Cord Clamping (30-180 seconds)
                    </Label>
                    <p className="text-sm text-muted-foreground mt-1">
                      Evidence shows benefits for infant iron stores and blood volume
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="skin-to-skin"
                    checked={plan.deliveryPreferences.skinToSkinImmediate}
                    onCheckedChange={(checked) => updateDeliveryPreferences('skinToSkinImmediate', !!checked)}
                  />
                  <div className="flex-1">
                    <Label htmlFor="skin-to-skin" className="cursor-pointer font-medium">
                      Immediate Skin-to-Skin Contact
                    </Label>
                    <p className="text-sm text-muted-foreground mt-1">
                      Promotes bonding, temperature regulation, and breastfeeding success
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="photography"
                    checked={plan.deliveryPreferences.birthPhotography}
                    onCheckedChange={(checked) => updateDeliveryPreferences('birthPhotography', !!checked)}
                  />
                  <div className="flex-1">
                    <Label htmlFor="photography" className="cursor-pointer font-medium">
                      Birth Photography/Video
                    </Label>
                    <p className="text-sm text-muted-foreground mt-1">
                      I plan to have photography or video recording during birth
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {currentSection === 'newborn' && (
          <div className="space-y-6">
            <Card className="bg-accent/10">
              <CardContent className="pt-6">
                <p className="text-sm">
                  Document your decisions for newborn procedures you've reviewed. These preferences will be included in your birth plan with references to the evidence you've consulted.
                </p>
              </CardContent>
            </Card>

            {relevantProcedures.length === 0 ? (
              <Card>
                <CardContent className="pt-6 text-center text-muted-foreground">
                  <p className="mb-4">No procedures from your saved list are applicable to birth planning.</p>
                  <p className="text-sm">Save procedures from the library to include them in your birth plan.</p>
                </CardContent>
              </Card>
            ) : (
              relevantProcedures.map((proc) => {
                const decision = plan.newbornProcedureDecisions[proc.id] || { decision: 'discuss', notes: '' }
                
                return (
                  <Card key={proc.id}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg">{proc.name}</CardTitle>
                          <div className="flex gap-2 mt-2">
                            <Badge variant="outline">{proc.category}</Badge>
                            <Badge variant={
                              proc.urgencyLevel === 'emergency' ? 'destructive' :
                              proc.urgencyLevel === 'urgent' ? 'default' :
                              'secondary'
                            }>
                              {proc.urgencyLevel}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">{proc.summary}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label>Your Decision</Label>
                        <Select
                          value={decision.decision}
                          onValueChange={(v) => updateProcedureDecision(proc.id, v as any, decision.notes)}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="accept">Accept - I plan to proceed with this procedure</SelectItem>
                            <SelectItem value="decline">Decline - I do not wish to have this procedure</SelectItem>
                            <SelectItem value="discuss">Discuss - I want to discuss this further with my provider</SelectItem>
                            <SelectItem value="delay">Delay - I would like to delay this if medically appropriate</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>Additional Notes (Optional)</Label>
                        <Textarea
                          value={decision.notes}
                          onChange={(e) => updateProcedureDecision(proc.id, decision.decision, e.target.value)}
                          placeholder="Any specific conditions, questions, or preferences..."
                          rows={2}
                        />
                      </div>

                      <div className="text-xs text-muted-foreground">
                        Last reviewed: {formatDate(proc.lastReviewed)} | {proc.citations.length} sources consulted
                      </div>
                    </CardContent>
                  </Card>
                )
              })
            )}
          </div>
        )}

        {currentSection === 'postpartum' && (
          <Card>
            <CardHeader>
              <CardTitle>Postpartum Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="feeding-plan">Infant Feeding Plan</Label>
                <Textarea
                  id="feeding-plan"
                  value={plan.postpartumPreferences.feedingPlan}
                  onChange={(e) => updatePostpartumPreferences('feedingPlan', e.target.value)}
                  placeholder="e.g., I plan to breastfeed exclusively; I plan to use formula; I'm open to both..."
                  rows={3}
                />
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="rooming-in"
                  checked={plan.postpartumPreferences.roominIn}
                  onCheckedChange={(checked) => updatePostpartumPreferences('roominIn', !!checked)}
                />
                <div className="flex-1">
                  <Label htmlFor="rooming-in" className="cursor-pointer font-medium">
                    Rooming-In
                  </Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    I prefer baby to stay in my room unless medical needs require otherwise
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="visitation">Visitation Preferences</Label>
                <Textarea
                  id="visitation"
                  value={plan.postpartumPreferences.visitationPreferences}
                  onChange={(e) => updatePostpartumPreferences('visitationPreferences', e.target.value)}
                  placeholder="e.g., Limited visitors in first 24 hours; immediate family only; specific visiting hours..."
                  rows={3}
                />
              </div>

              <Separator />

              <div className="space-y-2">
                <Label htmlFor="additional-notes">Additional Notes & Considerations</Label>
                <Textarea
                  id="additional-notes"
                  value={plan.additionalNotes}
                  onChange={(e) => {
                    setBirthPlan((prev) => {
                      const current = prev || plan
                      return { ...current, additionalNotes: e.target.value }
                    })
                  }}
                  placeholder="Any other preferences, concerns, or information your care team should know..."
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>
        )}

        {currentSection === 'preview' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Birth Plan Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/50 p-6 rounded-lg font-mono text-xs overflow-x-auto max-h-[600px] overflow-y-auto">
                  <pre className="whitespace-pre-wrap">{generateBirthPlanDocument()}</pre>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-accent/10">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Important Reminders:</h3>
                <ul className="text-sm space-y-2 list-disc pl-6">
                  <li>This birth plan represents preferences, not rigid requirements</li>
                  <li>Medical circumstances may require flexibility</li>
                  <li>Discuss this plan with your healthcare provider before labor</li>
                  <li>Bring copies to the hospital for your medical team</li>
                  <li>All decisions are based on evidence-based information you've reviewed</li>
                </ul>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Button 
                onClick={() => handleExport('text')}
                className="flex-1 gap-2"
              >
                <Download className="h-4 w-4" />
                Download Birth Plan
              </Button>
              <Button 
                onClick={() => handleExport('print')}
                variant="outline"
                className="flex-1 gap-2"
              >
                <Printer className="h-4 w-4" />
                Print Birth Plan
              </Button>
            </div>
          </div>
        )}

        {currentSection !== 'preview' && (
          <div className="flex justify-between pt-4">
            <Button
              variant="outline"
              onClick={() => {
                const sections: Section[] = ['basic', 'labor', 'delivery', 'newborn', 'postpartum', 'preview']
                const currentIndex = sections.indexOf(currentSection)
                if (currentIndex > 0) {
                  setCurrentSection(sections[currentIndex - 1])
                }
              }}
              disabled={currentSection === 'basic'}
            >
              Previous
            </Button>
            <Button
              onClick={() => {
                const sections: Section[] = ['basic', 'labor', 'delivery', 'newborn', 'postpartum', 'preview']
                const currentIndex = sections.indexOf(currentSection)
                if (currentIndex < sections.length - 1) {
                  setCurrentSection(sections[currentIndex + 1])
                }
              }}
            >
              {currentSection === 'postpartum' ? 'Preview & Export' : 'Next'}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
