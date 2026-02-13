import { House, List, NotePencil, Gear, BookOpen, FileText } from '@phosphor-icons/react'
import { Badge } from '@/components/ui/badge'
import { useUnreadComments } from '@/hooks/use-unread-comments'
import { cn } from '@/lib/utils'

interface DesktopSidebarProps {
  currentView: string
  onNavigate: (view: 'library' | 'reflection' | 'settings' | 'birth-plan') => void
}

export function DesktopSidebar({ currentView, onNavigate }: DesktopSidebarProps) {
  const { unreadCount } = useUnreadComments()
  
  const navItems = [
    { id: 'library' as const, icon: House, label: 'Home', description: 'Browse procedures' },
    { id: 'library' as const, icon: List, label: 'Library', description: 'All procedures' },
    { id: 'reflection' as const, icon: NotePencil, label: 'Notes', description: 'Reflections & decisions' },
    { id: 'birth-plan' as const, icon: BookOpen, label: 'Birth Plan', description: 'Create & manage' },
    { id: 'settings' as const, icon: Gear, label: 'Settings', description: 'Preferences & sharing', badge: unreadCount }
  ]

  return (
    <aside className="hidden md:flex md:flex-col md:w-64 lg:w-72 bg-card border-r border-border fixed left-0 top-0 h-screen z-30">
      <div className="flex items-center h-16 px-6 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <FileText className="h-5 w-5 text-primary-foreground" weight="fill" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-foreground leading-tight">Respectful Care</span>
            <span className="text-xs text-muted-foreground leading-tight">Decision Support</span>
          </div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-6 px-3">
        <div className="space-y-1">
          {navItems.map((item, index) => {
            const Icon = item.icon
            const isActive = currentView === item.id
            
            return (
              <button
                key={`${item.id}-${index}`}
                onClick={() => onNavigate(item.id)}
                className={cn(
                  'w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 relative group',
                  isActive 
                    ? 'bg-primary/10 text-primary shadow-sm' 
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                )}
              >
                <Icon 
                  className="h-5 w-5 shrink-0" 
                  weight={isActive ? 'fill' : 'regular'} 
                />
                <div className="flex-1 text-left min-w-0">
                  <div className="text-sm font-medium leading-tight truncate">
                    {item.label}
                  </div>
                  <div className="text-xs opacity-75 leading-tight truncate">
                    {item.description}
                  </div>
                </div>
                {item.badge && item.badge > 0 && (
                  <Badge 
                    variant="default" 
                    className="h-5 min-w-5 px-1.5 flex items-center justify-center text-[10px] bg-accent text-accent-foreground shadow-md"
                  >
                    {item.badge > 99 ? '99+' : item.badge}
                  </Badge>
                )}
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full" />
                )}
              </button>
            )
          })}
        </div>
      </nav>

      <div className="border-t border-border p-4">
        <div className="text-xs text-muted-foreground space-y-1 px-2">
          <p className="font-medium">Evidence-based information</p>
          <p className="leading-relaxed">Content reviewed by medical professionals. Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </aside>
  )
}
