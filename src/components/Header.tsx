import { ArrowLeft, House, Gear } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useUnreadComments } from '@/hooks/use-unread-comments'

interface HeaderProps {
  currentView: string
  onBack?: () => void
  onHome?: () => void
  onSettingsClick: () => void
}

const viewTitles: Record<string, string> = {
  'home': 'Respectful Maternity & Newborn Care',
  'library': 'Procedure Library',
  'procedure-detail': 'Procedure Details',
  'compare': 'Compare Options',
  'reflection': 'Reflection & Notes',
  'export': 'Decision Summary',
  'birth-plan': 'Birth Plan',
  'settings': 'Settings'
}

export function Header({ currentView, onBack, onHome, onSettingsClick }: HeaderProps) {
  const showBackButton = currentView === 'procedure-detail' || currentView === 'compare'
  const showHomeButton = currentView !== 'home' && currentView !== 'library' && !showBackButton
  const { unreadCount } = useUnreadComments()

  return (
    <header className="sticky top-0 z-40 glass-panel shadow-sm md:border-l">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            {showBackButton && onBack && (
              <Button
                variant="ghost"
                size="icon"
                onClick={onBack}
                aria-label="Go back"
                className="hover:bg-muted"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
            )}
            {showHomeButton && onHome && (
              <Button
                variant="ghost"
                size="icon"
                onClick={onHome}
                aria-label="Go to home"
                className="hover:bg-muted md:hidden"
              >
                <House className="h-5 w-5" />
              </Button>
            )}
            <h1 className="text-lg md:text-2xl font-semibold text-foreground truncate">
              {viewTitles[currentView] || 'Respectful Maternity & Newborn Care'}
            </h1>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={onSettingsClick}
            aria-label="Settings"
            className="relative hover:bg-muted shrink-0 md:hidden"
          >
            <Gear className="h-5 w-5" />
            {unreadCount > 0 && (
              <Badge 
                variant="default" 
                className="absolute -top-1 -right-1 h-5 min-w-5 px-1.5 flex items-center justify-center text-[10px] bg-accent text-accent-foreground shadow-md"
              >
                {unreadCount > 99 ? '99+' : unreadCount}
              </Badge>
            )}
          </Button>
        </div>
      </div>
    </header>
  )
}
