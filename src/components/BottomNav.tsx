import { House, List, NotePencil, Gear } from '@phosphor-icons/react'
import { Badge } from '@/components/ui/badge'
import { useUnreadComments } from '@/hooks/use-unread-comments'

interface BottomNavProps {
  currentView: string
  onNavigate: (view: 'library' | 'reflection' | 'settings') => void
}

export function BottomNav({ currentView, onNavigate }: BottomNavProps) {
  const { unreadCount } = useUnreadComments()
  
  const navItems = [
    { id: 'library' as const, icon: House, label: 'Home' },
    { id: 'library' as const, icon: List, label: 'Library' },
    { id: 'reflection' as const, icon: NotePencil, label: 'Notes' },
    { id: 'settings' as const, icon: Gear, label: 'Settings', badge: unreadCount }
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-t border-border shadow-lg md:hidden z-50">
      <div className="flex items-center justify-around h-16 max-w-2xl mx-auto">
        {navItems.map((item, index) => {
          const Icon = item.icon
          const isActive = currentView === item.id
          
          return (
            <button
              key={`${item.id}-${index}`}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center justify-center gap-1 flex-1 h-full transition-all duration-200 relative ${
                isActive 
                  ? 'text-primary' 
                  : 'text-muted-foreground hover:text-foreground active:scale-95'
              }`}
            >
              <Icon className="h-6 w-6" weight={isActive ? 'fill' : 'regular'} />
              <span className="text-[11px] ui-text font-medium">{item.label}</span>
              {item.badge && item.badge > 0 && (
                <Badge 
                  variant="default" 
                  className="absolute top-2 right-1/4 h-5 min-w-5 px-1.5 flex items-center justify-center text-[10px] bg-accent text-accent-foreground shadow-md"
                >
                  {item.badge > 99 ? '99+' : item.badge}
                </Badge>
              )}
              {isActive && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-primary rounded-t-full" />
              )}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
