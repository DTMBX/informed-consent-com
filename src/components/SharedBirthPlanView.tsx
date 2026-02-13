import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Printer, Download, ShareNetwork, Heart, Clock, UserCircle } from '@phosphor-icons/react'
import { toast } from 'sonner'

interface SharedBirthPlanData {
  id: string
  birthPlanDocument: string
  parentName: string
  sharedAt: string
  recipientName: string
  message: string
  expiresAt: string
}

interface SharedBirthPlanViewProps {
  shareId: string
}

export function SharedBirthPlanView({ shareId }: SharedBirthPlanViewProps) {
  const [birthPlanData, setBirthPlanData] = useState<SharedBirthPlanData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadSharedBirthPlan = async () => {
      try {
        const data = await window.spark.kv.get<SharedBirthPlanData>(`shared-birth-plan-${shareId}`)
        
        if (!data) {
          setError('This birth plan link is invalid or has expired.')
          setLoading(false)
          return
        }

        const expiresAt = new Date(data.expiresAt)
        if (expiresAt < new Date()) {
          setError('This birth plan link has expired.')
          setLoading(false)
          return
        }

        setBirthPlanData(data)
        setLoading(false)
      } catch (err) {
        setError('Failed to load birth plan. Please check the link and try again.')
        setLoading(false)
      }
    }

    loadSharedBirthPlan()
  }, [shareId])

  const handleDownload = () => {
    if (!birthPlanData) return
    
    const blob = new Blob([birthPlanData.birthPlanDocument], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `birth-plan-${birthPlanData.parentName.replace(/\s+/g, '-').toLowerCase()}-${Date.now()}.txt`
    a.click()
    URL.revokeObjectURL(url)
    toast.success('Birth plan downloaded')
  }

  const handlePrint = () => {
    if (!birthPlanData) return
    
    const printWindow = window.open('', '', 'width=800,height=900')
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>${birthPlanData.parentName}'s Birth Plan</title>
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
            <pre>${birthPlanData.birthPlanDocument}</pre>
          </body>
        </html>
      `)
      printWindow.document.close()
      printWindow.print()
      toast.success('Print dialog opened')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardContent className="pt-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
            </div>
            <p className="text-muted-foreground">Loading birth plan...</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-md w-full border-destructive">
          <CardHeader>
            <CardTitle className="text-destructive">Unable to Load Birth Plan</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">{error}</p>
            <p className="text-sm text-muted-foreground">
              If you believe this is an error, please contact the person who shared this link with you.
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (!birthPlanData) {
    return null
  }

  const daysUntilExpiry = Math.ceil(
    (new Date(birthPlanData.expiresAt).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
  )

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-lg bg-primary/10">
              <Heart className="h-8 w-8 text-primary" weight="fill" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-semibold">
                {birthPlanData.parentName}'s Birth Plan
              </h1>
              <p className="text-muted-foreground mt-1">
                Shared with {birthPlanData.recipientName}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 items-center">
            <Badge variant="outline" className="gap-2">
              <ShareNetwork className="h-3 w-3" />
              Shared {new Date(birthPlanData.sharedAt).toLocaleDateString()}
            </Badge>
            <Badge variant="secondary" className="gap-2">
              <Clock className="h-3 w-3" />
              Expires in {daysUntilExpiry} days
            </Badge>
          </div>

          {birthPlanData.message && (
            <Card className="mt-6 bg-accent/10">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <UserCircle className="h-5 w-5 text-accent-foreground mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-sm mb-1">Personal Message:</p>
                    <p className="text-sm text-muted-foreground">{birthPlanData.message}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Birth Plan Document</CardTitle>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleDownload}
                  className="gap-2"
                >
                  <Download className="h-4 w-4" />
                  Download
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handlePrint}
                  className="gap-2"
                >
                  <Printer className="h-4 w-4" />
                  Print
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="bg-muted/50 p-6 rounded-lg font-mono text-xs overflow-x-auto">
              <pre className="whitespace-pre-wrap">{birthPlanData.birthPlanDocument}</pre>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-6 bg-accent/10">
          <CardContent className="pt-6">
            <div className="space-y-3 text-sm">
              <p className="font-medium">About This Birth Plan</p>
              <p className="text-muted-foreground">
                This birth plan was created using the Informed Consent Companion, an educational tool that helps expectant parents make informed decisions about medical procedures based on evidence-based information.
              </p>
              <p className="text-muted-foreground">
                Birth plans represent preferences and may need to be adjusted based on medical circumstances. Please discuss any questions with {birthPlanData.parentName} and their healthcare provider.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>Created with Informed Consent Companion</p>
          <p className="mt-1">Supporting informed decision-making for families</p>
        </div>
      </div>
    </div>
  )
}
