import { useState } from 'react'
import { useKV } from '@github/spark/hooks'
import { ReflectionEntry } from '@/lib/types'
import { procedures } from '@/lib/proceduresData'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Download, Printer, X } from '@phosphor-icons/react'
import { VOLUNTARINESS_STATEMENT, DISCLAIMER_TEXT, formatDate } from '@/lib/constants'
import { toast } from 'sonner'

interface DecisionExportProps {
  savedProcedures: string[]
  onClose: () => void
}

export function DecisionExport({ savedProcedures, onClose }: DecisionExportProps) {
  const [reflections] = useKV<ReflectionEntry[]>('reflection-entries', [])
  const [selectedProcedures, setSelectedProcedures] = useState<string[]>(savedProcedures)
  const [includeVoluntariness, setIncludeVoluntariness] = useState(true)
  const [includeDisclaimer, setIncludeDisclaimer] = useState(true)

  const handleExport = (format: 'text' | 'pdf') => {
    const exportDate = new Date().toLocaleDateString()
    const selectedProcs = selectedProcedures
      .map(id => procedures.find(p => p.id === id))
      .filter(Boolean)

    let content = `INFORMED CONSENT COMPANION - DECISION SUMMARY\n`
    content += `Generated: ${exportDate}\n\n`
    content += `═══════════════════════════════════════════════\n\n`

    if (includeDisclaimer) {
      content += `DISCLAIMER:\n${DISCLAIMER_TEXT}\n\n`
      content += `═══════════════════════════════════════════════\n\n`
    }

    content += `PROCEDURES REVIEWED:\n\n`
    selectedProcs.forEach((proc, idx) => {
      if (!proc) return
      content += `${idx + 1}. ${proc.name}\n`
      content += `   Category: ${proc.category}\n`
      content += `   Urgency Level: ${proc.urgencyLevel}\n`
      content += `   Last Reviewed: ${formatDate(proc.lastReviewed)}\n`
      content += `   Sources Cited: ${proc.citations.length}\n\n`
    })

    if (reflections && reflections.length > 0) {
      const relevantReflections = reflections.filter(r =>
        r.procedureIds.some(id => selectedProcedures.includes(id))
      )

      if (relevantReflections.length > 0) {
        content += `═══════════════════════════════════════════════\n\n`
        content += `MY REFLECTIONS & NOTES:\n\n`
        relevantReflections.slice(-3).forEach((entry, idx) => {
          content += `Reflection ${idx + 1} (${new Date(entry.createdAt).toLocaleDateString()}):\n`
          content += `${entry.notes}\n\n`
          if (entry.questions && entry.questions.length > 0) {
            content += `Questions:\n`
            entry.questions.forEach((q, qIdx) => {
              content += `  ${qIdx + 1}. ${q}\n`
            })
            content += `\n`
          }
        })
      }
    }

    content += `═══════════════════════════════════════════════\n\n`
    content += `SOURCES VIEWED:\n\n`
    const allCitations = new Set<string>()
    selectedProcs.forEach(proc => {
      if (!proc) return
      proc.citations.forEach(cit => {
        allCitations.add(`• ${cit.title}. ${cit.authors}. ${cit.source}. ${cit.date}.`)
      })
    })
    Array.from(allCitations).forEach(citation => {
      content += `${citation}\n`
    })

    if (includeVoluntariness) {
      content += `\n═══════════════════════════════════════════════\n\n`
      content += `STATEMENT OF VOLUNTARINESS:\n\n`
      content += `${VOLUNTARINESS_STATEMENT}\n\n`
      content += `Date: ${exportDate}\n`
    }

    if (format === 'text') {
      const blob = new Blob([content], { type: 'text/plain' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `informed-consent-summary-${Date.now()}.txt`
      a.click()
      URL.revokeObjectURL(url)
      toast.success('Summary exported as text file')
    } else {
      const printWindow = window.open('', '', 'width=800,height=600')
      if (printWindow) {
        printWindow.document.write('<html><head><title>Decision Summary</title>')
        printWindow.document.write('<style>body { font-family: serif; padding: 40px; max-width: 800px; margin: 0 auto; line-height: 1.6; }</style>')
        printWindow.document.write('</head><body>')
        printWindow.document.write('<pre style="white-space: pre-wrap; font-family: inherit;">')
        printWindow.document.write(content)
        printWindow.document.write('</pre></body></html>')
        printWindow.document.close()
        printWindow.print()
        toast.success('Print dialog opened')
      }
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-semibold mb-2">Decision Summary Export</h2>
          <p className="text-muted-foreground">
            Generate a document of your research and reflections
          </p>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-5 w-5" />
        </Button>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Select Procedures to Include</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {savedProcedures.length === 0 ? (
                <p className="text-sm text-muted-foreground">
                  No saved procedures. Save procedures from the library to include them in your export.
                </p>
              ) : (
                savedProcedures.map((procId) => {
                  const proc = procedures.find(p => p.id === procId)
                  if (!proc) return null
                  
                  return (
                    <div key={procId} className="flex items-center gap-3">
                      <Checkbox
                        checked={selectedProcedures.includes(procId)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedProcedures([...selectedProcedures, procId])
                          } else {
                            setSelectedProcedures(selectedProcedures.filter(id => id !== procId))
                          }
                        }}
                      />
                      <div className="flex-1">
                        <p className="font-medium">{proc.name}</p>
                        <p className="text-sm text-muted-foreground">{proc.category}</p>
                      </div>
                    </div>
                  )
                })
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Export Options</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3">
              <Checkbox
                checked={includeVoluntariness}
                onCheckedChange={(checked) => setIncludeVoluntariness(!!checked)}
              />
              <label className="text-sm">Include statement of voluntariness</label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox
                checked={includeDisclaimer}
                onCheckedChange={(checked) => setIncludeDisclaimer(!!checked)}
              />
              <label className="text-sm">Include disclaimer</label>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-muted/50">
          <CardHeader>
            <CardTitle className="text-lg">Export Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>Your export will include:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>{selectedProcedures.length} selected procedure(s)</li>
                <li>Summary of each procedure (benefits, risks, alternatives)</li>
                <li>All cited sources</li>
                {reflections && reflections.length > 0 && <li>Your reflection notes and questions</li>}
                {includeVoluntariness && <li>Statement of voluntariness</li>}
                {includeDisclaimer && <li>Educational disclaimer</li>}
              </ul>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-4">
          <Button 
            onClick={() => handleExport('text')}
            disabled={selectedProcedures.length === 0}
            className="flex-1 gap-2"
          >
            <Download className="h-4 w-4" />
            Download as Text
          </Button>
          <Button 
            onClick={() => handleExport('pdf')}
            disabled={selectedProcedures.length === 0}
            variant="outline"
            className="flex-1 gap-2"
          >
            <Printer className="h-4 w-4" />
            Print / Save as PDF
          </Button>
        </div>
      </div>
    </div>
  )
}
