import { List, NotePencil, Gear } from '@phosphor-icons/react'

interface BottomNavProps {
  currentView: string
  onNavigate: (view: 'library' | 'reflection' | 'settings') => void
}

export function BottomNav({ currentView, onNavigate }: BottomNavProps) {
  const navItems = [
    { id: 'library' as const, icon: List, label: 'Library' },
    { id: 'reflection' as const, icon: NotePencil, label: 'Notes' },
    { id: 'settings' as const, icon: Gear, label: 'Settings' }
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border md:hidden">
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = currentView === item.id
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center justify-center gap-1 px-4 py-2 transition-colors ${
                isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon className="h-6 w-6" weight={isActive ? 'fill' : 'regular'} />
              <span className="text-xs ui-text">{item.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
