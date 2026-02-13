import { useState, useEffect } from 'react'
import { useKV } from '@/lib/kv'
import { UserPreferences, Stage } from '@/lib/types'
import { Onboarding } from '@/components/Onboarding'
import { Homepage } from '@/components/Homepage'
import { ProcedureLibrary } from '@/components/ProcedureLibrary'
import { ProcedureDetail } from '@/components/ProcedureDetail'
import { CompareView } from '@/components/CompareView'
import { ReflectionNotes } from '@/components/ReflectionNotes'
import { DecisionExport } from '@/components/DecisionExport'
import { BirthPlanGenerator } from '@/components/BirthPlanGenerator'
import { Settings } from '@/components/Settings'
import { BottomNav } from '@/components/BottomNav'
import { DesktopSidebar } from '@/components/DesktopSidebar'
import { Header } from '@/components/Header'
import { SharedBirthPlanView } from '@/components/SharedBirthPlanView'
import { ComprehensiveVaccineSchedule } from '@/components/ComprehensiveVaccineSchedule'
import { Toaster } from '@/components/ui/sonner'

type View = 'home' | 'library' | 'procedure-detail' | 'compare' | 'reflection' | 'export' | 'birth-plan' | 'settings' | 'vaccine-schedule'

function App() {
  const [preferences, setPreferences] = useKV<UserPreferences>('user-preferences', {
    language: 'en',
    stage: 'postpartum',
    savedProcedures: [],
    completedOnboarding: false
  })

  const [sidebarCollapsed, setSidebarCollapsed] = useKV<boolean>('sidebar-collapsed', false)
  const [currentView, setCurrentView] = useState<View>('home')
  const [selectedProcedureId, setSelectedProcedureId] = useState<string | null>(null)
  const [compareIds, setCompareIds] = useState<string[]>([])
  const [sharedBirthPlanId, setSharedBirthPlanId] = useState<string | null>(null)
  const [reflectionNotes] = useKV<string>('reflection-notes', '')
  const [birthPlans] = useKV<any[]>('birth-plans', [])

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const shareId = urlParams.get('share')
    if (shareId) {
      setSharedBirthPlanId(shareId)
    }
  }, [])

  const prefs = preferences || {
    language: 'en' as const,
    stage: 'postpartum' as Stage,
    savedProcedures: [],
    completedOnboarding: false
  }

  if (sharedBirthPlanId) {
    return (
      <>
        <SharedBirthPlanView shareId={sharedBirthPlanId} />
        <Toaster />
      </>
    )
  }

  const handleOnboardingComplete = (stage: Stage) => {
    setPreferences((prev) => {
      const current = prev || prefs
      return {
        ...current,
        stage,
        completedOnboarding: true
      }
    })
  }

  const navigateToProcedure = (procedureId: string) => {
    setSelectedProcedureId(procedureId)
    setCurrentView('procedure-detail')
  }

  const navigateToCompare = (ids: string[]) => {
    setCompareIds(ids)
    setCurrentView('compare')
  }

  const navigateToView = (view: View) => {
    setCurrentView(view)
    if (view === 'library' || view === 'home') {
      setSelectedProcedureId(null)
      setCompareIds([])
    }
  }

  const navigateBack = () => {
    if (currentView === 'procedure-detail' || currentView === 'compare') {
      setCurrentView('library')
      setSelectedProcedureId(null)
      setCompareIds([])
    } else if (currentView !== 'home') {
      setCurrentView('home')
    }
  }

  if (!prefs.completedOnboarding) {
    return (
      <div className="min-h-screen bg-background">
        <Onboarding onComplete={handleOnboardingComplete} />
        <Toaster />
      </div>
    )
  }

  const toggleSidebar = () => {
    setSidebarCollapsed((prev) => !prev)
  }

  return (
    <div className="min-h-screen bg-background flex">
      <DesktopSidebar
        currentView={currentView}
        onNavigate={navigateToView}
        isCollapsed={sidebarCollapsed || false}
        onToggleCollapse={toggleSidebar}
      />
      
      <div className={`flex-1 flex flex-col transition-all duration-300 ${sidebarCollapsed ? 'md:ml-16 lg:ml-16' : 'md:ml-64 lg:ml-72'}`}>
        <Header 
          currentView={currentView}
          onBack={navigateBack}
          onHome={() => navigateToView('library')}
          onSettingsClick={() => navigateToView('settings')}
        />
        
        <main className="flex-1 pb-20 md:pb-8">
          {currentView === 'home' && (
            <Homepage
              onNavigate={navigateToView}
              savedProceduresCount={prefs.savedProcedures.length}
              hasReflectionNotes={!!reflectionNotes && reflectionNotes.length > 0}
              hasBirthPlan={!!birthPlans && birthPlans.length > 0}
            />
          )}

          {currentView === 'library' && (
            <ProcedureLibrary
              stage={prefs.stage}
              savedProcedures={prefs.savedProcedures}
              onProcedureClick={navigateToProcedure}
              onSaveProcedure={(id) => {
                setPreferences((prev) => {
                  const current = prev || prefs
                  return {
                    ...current,
                    savedProcedures: current.savedProcedures.includes(id)
                      ? current.savedProcedures.filter(pid => pid !== id)
                      : [...current.savedProcedures, id]
                  }
                })
              }}
            />
          )}

          {currentView === 'procedure-detail' && selectedProcedureId && (
            <ProcedureDetail
              procedureId={selectedProcedureId}
              isSaved={prefs.savedProcedures.includes(selectedProcedureId)}
              onSave={() => {
                setPreferences((prev) => {
                  const current = prev || prefs
                  return {
                    ...current,
                    savedProcedures: current.savedProcedures.includes(selectedProcedureId)
                      ? current.savedProcedures.filter(pid => pid !== selectedProcedureId)
                      : [...current.savedProcedures, selectedProcedureId]
                  }
                })
              }}
              onCompare={(ids) => navigateToCompare(ids)}
              onAddToReflection={() => navigateToView('reflection')}
            />
          )}

          {currentView === 'compare' && compareIds.length > 0 && (
            <CompareView
              procedureIds={compareIds}
              onClose={() => setCurrentView('library')}
            />
          )}

          {currentView === 'reflection' && (
            <ReflectionNotes
              savedProcedures={prefs.savedProcedures}
              onExport={() => navigateToView('export')}
              onBirthPlan={() => navigateToView('birth-plan')}
            />
          )}

          {currentView === 'export' && (
            <DecisionExport
              savedProcedures={prefs.savedProcedures}
              onClose={() => navigateToView('reflection')}
            />
          )}

          {currentView === 'birth-plan' && (
            <BirthPlanGenerator
              savedProcedures={prefs.savedProcedures}
              currentStage={prefs.stage}
              onClose={() => navigateToView('library')}
            />
          )}

          {currentView === 'settings' && (
            <Settings
              preferences={prefs}
              onUpdatePreferences={(updates) => {
                setPreferences((prev) => {
                  const current = prev || prefs
                  return {
                    ...current,
                    ...updates
                  }
                })
              }}
              onClose={() => setCurrentView('library')}
              onBirthPlan={() => navigateToView('birth-plan')}
              parentName="Parent"
            />
          )}

          {currentView === 'vaccine-schedule' && (
            <ComprehensiveVaccineSchedule />
          )}
        </main>

        <BottomNav
          currentView={currentView}
          onNavigate={navigateToView}
        />
      </div>

      <Toaster />
    </div>
  )
}

export default App
