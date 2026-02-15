import { useState } from 'react'
import { UserPreferences, Stage } from '@/lib/types'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { X, Info, FirstAid, ClockCounterClockwise, Link as LinkIcon, ChatCircle, Bell, Globe, Database, GraduationCap, Eye } from '@phosphor-icons/react'
import { stageConfig, LANGUAGES, DISCLAIMER_TEXT } from '@/lib/constants'
import { toast } from 'sonner'
import { BirthPlanHistory } from '@/components/BirthPlanHistory'
import { ManageSharedLinks } from '@/components/ManageSharedLinks'
import { ViewAllComments } from '@/components/ViewAllComments'
import { useUnreadComments } from '@/hooks/use-unread-comments'
import { useExtraContrast } from '@/hooks/use-extra-contrast'
import { VaccineScheduleComparison } from '@/components/VaccineScheduleComparison'
import { VAERSExplainer } from '@/components/VAERSExplainer'

interface SettingsProps {
  preferences: UserPreferences
  onUpdatePreferences: (updates: Partial<UserPreferences>) => void
  onClose: () => void
  onBirthPlan?: () => void
  parentName?: string
}

export function Settings({ preferences, onUpdatePreferences, onClose, onBirthPlan, parentName }: SettingsProps) {
  const [historyOpen, setHistoryOpen] = useState(false)
  const [manageLinksOpen, setManageLinksOpen] = useState(false)
  const [commentsOpen, setCommentsOpen] = useState(false)
  const [vaccineComparisonOpen, setVaccineComparisonOpen] = useState(false)
  const [vaersExplainerOpen, setVaersExplainerOpen] = useState(false)
  const { unreadCount } = useUnreadComments()
  const [extraContrast, setExtraContrast] = useExtraContrast()

  const handleStageChange = (stage: Stage) => {
    onUpdatePreferences({ stage })
    toast.success('Stage updated')
  }

  const handleLanguageChange = (language: 'en' | 'es') => {
    onUpdatePreferences({ language })
    toast.success('Language updated (Note: Translation not yet implemented in MVP)')
  }

  const handleClearData = () => {
    if (confirm('Are you sure you want to clear all saved data? This cannot be undone.')) {
      onUpdatePreferences({ savedProcedures: [] })
      toast.success('Saved procedures cleared')
    }
  }

  if (historyOpen) {
    return <BirthPlanHistory onClose={() => setHistoryOpen(false)} />
  }

  if (manageLinksOpen) {
    return <ManageSharedLinks onClose={() => setManageLinksOpen(false)} />
  }

  if (commentsOpen) {
    return <ViewAllComments onClose={() => setCommentsOpen(false)} parentName={parentName || 'Parent'} />
  }

  if (vaccineComparisonOpen) {
    return (
      <div>
        <div className="mb-4 flex items-center justify-between max-w-5xl mx-auto px-6">
          <Button variant="outline" size="sm" onClick={() => setVaccineComparisonOpen(false)}>
            ← Back to Settings
          </Button>
        </div>
        <VaccineScheduleComparison />
      </div>
    )
  }

  if (vaersExplainerOpen) {
    return (
      <div>
        <div className="mb-4 flex items-center justify-between max-w-4xl mx-auto px-6">
          <Button variant="outline" size="sm" onClick={() => setVaersExplainerOpen(false)}>
            ← Back to Settings
          </Button>
        </div>
        <VAERSExplainer />
      </div>
    )
  }

  return (
    <div className="content-reading px-4 sm:px-6 lg:px-8 py-8 md:py-16">
      <div className="section-header-spacing-mobile md:section-header-spacing flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h2 className="text-3xl font-semibold mb-4">Settings</h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Manage your preferences and app settings
          </p>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose} className="shrink-0">
          <X className="h-5 w-5" />
        </Button>
      </div>

      <div className="card-stack card-stack-mobile">
        <Card variant="glass">
          <CardHeader>
            <CardTitle>Current Stage</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              This helps filter procedures relevant to your current situation
            </p>
            <Select value={preferences.stage} onValueChange={(v) => handleStageChange(v as Stage)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {(['prenatal', 'labor', 'postpartum'] as const).map((stage) => (
                  <SelectItem key={stage} value={stage}>
                    {stageConfig[stage].label} - {stageConfig[stage].description}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <Card variant="glass">
          <CardHeader>
            <CardTitle>Language</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Choose your preferred language (full translation coming soon)
            </p>
            <Select value={preferences.language} onValueChange={(v) => handleLanguageChange(v as 'en' | 'es')}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(LANGUAGES).map(([code, label]) => (
                  <SelectItem key={code} value={code}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <Card variant="glass">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              Display Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="extra-contrast" className="text-base font-medium">
                  Extra Contrast Mode
                </Label>
                <p className="text-sm text-muted-foreground">
                  Increase text brightness and reduce transparency for maximum readability
                </p>
              </div>
              <Switch 
                id="extra-contrast"
                checked={extraContrast}
                onCheckedChange={(checked) => {
                  setExtraContrast(checked)
                  toast.success(checked ? 'Extra contrast enabled' : 'Extra contrast disabled')
                }}
              />
            </div>
          </CardContent>
        </Card>

        <Card variant="glass">
          <CardHeader>
            <CardTitle>Saved Procedures</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              You have {preferences.savedProcedures.length} saved procedure(s)
            </p>
            <Button onClick={handleClearData} variant="outline" disabled={preferences.savedProcedures.length === 0}>
              Clear All Saved Procedures
            </Button>
          </CardContent>
        </Card>

        {onBirthPlan && (
          <Card variant="glass-strong" className="border-accent/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FirstAid className="h-5 w-5" />
                Birth Plan Management
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-4">
                  Create a comprehensive birth plan based on the procedures you've reviewed. 
                  Document your preferences for labor, delivery, newborn care, and postpartum.
                </p>
                <Button onClick={onBirthPlan} className="gap-2 w-full">
                  <FirstAid className="h-4 w-4" />
                  Create or Edit Birth Plan
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <Button
                  onClick={() => setHistoryOpen(true)}
                  variant="outline"
                  className="gap-2"
                >
                  <ClockCounterClockwise className="h-4 w-4" />
                  Version History
                </Button>
                <Button
                  onClick={() => setManageLinksOpen(true)}
                  variant="outline"
                  className="gap-2"
                >
                  <LinkIcon className="h-4 w-4" />
                  Manage Links
                </Button>
                <Button
                  onClick={() => setCommentsOpen(true)}
                  variant="outline"
                  className="gap-2 relative"
                >
                  <ChatCircle className="h-4 w-4" />
                  View Comments
                  {unreadCount > 0 && (
                    <Badge 
                      variant="default" 
                      className="absolute -top-2 -right-2 h-5 min-w-5 px-1.5 flex items-center justify-center bg-accent text-accent-foreground"
                    >
                      {unreadCount}
                    </Badge>
                  )}
                </Button>
              </div>

              <p className="text-xs text-muted-foreground">
                View past versions, manage shared link access, or respond to comments from partners
              </p>
            </CardContent>
          </Card>
        )}

        <Card className="bg-evidence/10 border-evidence/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              Educational Resources
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              In-depth guides to help you understand vaccine safety data and international approaches to childhood immunization
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button
                onClick={() => setVaersExplainerOpen(true)}
                variant="outline"
                className="gap-2 h-auto flex-col items-start p-4 text-left"
              >
                <div className="flex items-center gap-2 w-full">
                  <Database className="h-5 w-5 flex-shrink-0" />
                  <span className="font-semibold">Understanding VAERS Data</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Learn how to interpret vaccine adverse event reports, the difference between correlation and causation, and how the safety surveillance system works
                </p>
              </Button>

              <Button
                onClick={() => setVaccineComparisonOpen(true)}
                variant="outline"
                className="gap-2 h-auto flex-col items-start p-4 text-left"
              >
                <div className="flex items-center gap-2 w-full">
                  <Globe className="h-5 w-5 flex-shrink-0" />
                  <span className="font-semibold">International Vaccine Schedules</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Compare US, UK, German, and Swedish childhood vaccine schedules and understand why evidence-based approaches differ by country
                </p>
              </Button>
            </div>

            <p className="text-xs text-muted-foreground italic pt-2">
              These resources provide balanced context to help you make informed decisions without fear-based messaging
            </p>
          </CardContent>
        </Card>

        <Alert>
          <Info className="h-5 w-5" />
          <AlertDescription className="ml-2">
            <strong>About This Tool</strong>
            <p className="mt-2 text-sm">{DISCLAIMER_TEXT}</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle>Important Reminders</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <div>
              <h4 className="font-semibold text-foreground mb-1">Postpartum Capacity</h4>
              <p>If you recently gave birth, remember that fatigue, medication, and stress can affect decision-making. It's okay to ask for more time or involve your support person.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Request More Time</h4>
              <p>For non-urgent procedures, you can say: "I'd like some time to think about this and discuss it with my partner/family. When do you need a decision?"</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Bring Someone In</h4>
              <p>You have the right to have a support person present for discussions. Don't hesitate to ask: "Can we wait for my partner/support person to join us?"</p>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-center pt-4">
          <Button onClick={onClose} variant="outline">
            Close Settings
          </Button>
        </div>
      </div>
    </div>
  )
}
