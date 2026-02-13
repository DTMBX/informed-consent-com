import { ArrowLeft, Gear } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useUnreadComments } from '@/hooks/use-unread-comments'

interface HeaderProps {
  currentView: string
  onBack?: () => void
  onSettingsClick: () => void
}

const viewTitles: Record<string, string> = {
  'library': 'Procedure Library',
  'procedure-detail': 'Procedure Details',
  'compare': 'Compare Options',
  'reflection': 'Reflection & Notes',
  'export': 'Decision Summary',
  'settings': 'Settings'
}

export function Header({ currentView, onBack, onSettingsClick }: HeaderProps) {
  const showBackButton = currentView === 'procedure-detail' || currentView === 'compare'
  const { unreadCount } = useUnreadComments()

  return (
    <header className="sticky top-0 z-10 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            {showBackButton && onBack && (
              <Button
                variant="ghost"
                size="icon"
                onClick={onBack}
                aria-label="Go back"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
            )}
            <h1 className="text-xl md:text-2xl font-semibold text-foreground">
              {viewTitles[currentView] || 'Informed Consent Companion'}
            </h1>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={onSettingsClick}
            aria-label="Settings"
            className="relative"
          >
            <Gear className="h-5 w-5" />
            {unreadCount > 0 && (
              <Badge 
                variant="default" 
                className="absolute -top-1 -right-1 h-5 min-w-5 px-1.5 flex items-center justify-center text-[10px] bg-accent text-accent-foreground"
              >
                {unreadCount}
              </Badge>
            )}
          </Button>
        </div>
      </div>
    </header>
  )
}
