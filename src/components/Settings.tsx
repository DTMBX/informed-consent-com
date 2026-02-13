import { UserPreferences, Stage } from '@/lib/types'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { X, Info } from '@phosphor-icons/react'
import { stageConfig, LANGUAGES, DISCLAIMER_TEXT } from '@/lib/constants'
import { toast } from 'sonner'

interface SettingsProps {
  preferences: UserPreferences
  onUpdatePreferences: (updates: Partial<UserPreferences>) => void
  onClose: () => void
}

export function Settings({ preferences, onUpdatePreferences, onClose }: SettingsProps) {
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

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-semibold mb-2">Settings</h2>
          <p className="text-muted-foreground">
            Manage your preferences and app settings
          </p>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-5 w-5" />
        </Button>
      </div>

      <div className="space-y-6">
        <Card>
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

        <Card>
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

        <Card>
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
