import { ArrowRight, BookOpen, Heart, ShieldCheck, Users, ClipboardText, Lightbulb, Globe } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

interface HomepageProps {
  onNavigate: (view: 'library' | 'reflection' | 'birth-plan' | 'settings' | 'vaccine-schedule') => void
  savedProceduresCount: number
  hasReflectionNotes: boolean
  hasBirthPlan: boolean
  parentName?: string
}

export function Homepage({
  onNavigate,
  savedProceduresCount,
  hasReflectionNotes,
  hasBirthPlan,
  parentName
}: HomepageProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="clinical-container px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="text-center section-header-spacing-mobile md:section-header-spacing">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 glass-subtle rounded-full">
            <ShieldCheck className="text-primary" weight="fill" size={18} />
            <span className="text-sm font-medium text-primary ui-text">Evidence-Based Care</span>
          </div>
          
          <h1 className="text-foreground mb-6">
            {parentName ? `Welcome back, ${parentName}` : 'Welcome to Respectful Care'}
          </h1>
          
          <p className="text-lg text-muted-foreground content-narrow leading-relaxed mx-auto">
            Balanced, evidence-based information for maternal and newborn care decisions. 
            Every claim is sourced, every option is presented, every decision is yours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <Card 
            className="card-padding cursor-pointer group border-border hover:border-primary/40 transition-all duration-150 tap-target"
            onClick={() => onNavigate('library')}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                <BookOpen className="text-primary" size={24} weight="duotone" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="ui-text mb-2">
                  Procedure Library
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  Explore 50+ procedures with balanced benefits, risks, and alternatives
                </p>
                {savedProceduresCount > 0 && (
                  <Badge variant="secondary" className="text-xs ui-text">
                    {savedProceduresCount} saved
                  </Badge>
                )}
              </div>
            </div>
          </Card>

          <Card 
            className="card-padding cursor-pointer group border-border hover:border-secondary/60 transition-all duration-150 tap-target"
            onClick={() => onNavigate('reflection')}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary/20 rounded-lg shrink-0">
                <ClipboardText className="text-secondary-foreground" size={24} weight="duotone" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="ui-text mb-2">
                  Reflection Notes
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  Private space to process information and prepare questions
                </p>
                {hasReflectionNotes && (
                  <Badge variant="secondary" className="text-xs ui-text">
                    Notes saved
                  </Badge>
                )}
              </div>
            </div>
          </Card>

          <Card 
            className="card-padding cursor-pointer group border-border hover:border-accent/50 transition-all duration-150 tap-target"
            onClick={() => onNavigate('birth-plan')}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/10 rounded-lg shrink-0">
                <Heart className="text-accent" size={24} weight="duotone" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="ui-text mb-2">
                  Birth Plan
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  Create a professional, evidence-based birth plan
                </p>
                {hasBirthPlan && (
                  <Badge className="text-xs bg-accent text-accent-foreground ui-text">
                    Plan created
                  </Badge>
                )}
              </div>
            </div>
          </Card>

          <Card 
            className="card-padding cursor-pointer group border-border hover:border-evidence/50 transition-all duration-150 tap-target"
            onClick={() => onNavigate('vaccine-schedule')}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-evidence/10 rounded-lg shrink-0">
                <Globe className="text-evidence" size={24} weight="duotone" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="ui-text mb-2">
                  Vaccine Schedules
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  Compare international childhood vaccine schedules
                </p>
                <Badge variant="outline" className="text-xs ui-text">
                  12 countries
                </Badge>
              </div>
            </div>
          </Card>
        </div>

        <div className="glass-panel rounded-xl card-padding mb-16">
          <div className="flex items-start gap-6 mb-8">
            <div className="hidden sm:block p-4 bg-evidence/10 rounded-xl shrink-0">
              <Lightbulb className="text-evidence" size={32} weight="duotone" />
            </div>
            <div className="flex-1">
              <h2 className="mb-4">
                Why This Platform Exists
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Making decisions about your care and your newborn's care can feel overwhelming. 
                  You deserve clear, balanced information that respects your autonomy and intelligence.
                </p>
                <p>
                  This platform provides evidence-based education without pressure, coercion, or bias. 
                  Every claim is cited, every statistic is sourced, and every decision remains yours.
                </p>
              </div>
            </div>
          </div>

          <Separator className="mb-8" />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <ShieldCheck className="text-evidence shrink-0 mt-1" size={20} weight="fill" />
              <div>
                <h4 className="ui-text mb-1">Evidence-Based</h4>
                <p className="text-sm text-muted-foreground">
                  Every claim linked to peer-reviewed sources
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Users className="text-secondary-foreground shrink-0 mt-1" size={20} weight="fill" />
              <div>
                <h4 className="ui-text mb-1">Balanced & Neutral</h4>
                <p className="text-sm text-muted-foreground">
                  Benefits and risks presented without bias
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Heart className="text-accent shrink-0 mt-1" size={20} weight="fill" />
              <div>
                <h4 className="ui-text mb-1">Your Decision</h4>
                <p className="text-sm text-muted-foreground">
                  No pressure, just clear information
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Card className="card-padding bg-primary/5 border-primary/20">
            <h3 className="ui-text mb-4">Getting Started</h3>
            <ul className="space-y-3 text-sm text-muted-foreground mb-6">
              <li className="flex items-start gap-2">
                <ArrowRight className="shrink-0 mt-0.5 text-primary" size={16} weight="bold" />
                <span>Browse the procedure library by category or search</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="shrink-0 mt-0.5 text-primary" size={16} weight="bold" />
                <span>Save procedures to review later or add to your notes</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="shrink-0 mt-0.5 text-primary" size={16} weight="bold" />
                <span>Compare options side-by-side with evidence</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="shrink-0 mt-0.5 text-primary" size={16} weight="bold" />
                <span>Create a birth plan to share with your care team</span>
              </li>
            </ul>
            <Button 
              onClick={() => onNavigate('library')}
              className="w-full bg-primary hover:bg-primary/90 btn-base"
            >
              Explore Procedures
              <ArrowRight className="ml-2" size={16} weight="bold" />
            </Button>
          </Card>

          <Card className="card-padding bg-muted/20 border-border">
            <h3 className="ui-text mb-4">Important Disclaimer</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              This platform provides educational information only and is not a substitute for medical advice. 
              Always consult with your healthcare provider about your specific situation. 
              You have the right to ask questions, request more time, and make informed decisions about your care.
            </p>
            <Button 
              onClick={() => onNavigate('settings')}
              variant="outline"
              className="w-full btn-base"
            >
              View Settings & Privacy
            </Button>
          </Card>
        </div>
      </div>
    </div>
  )
}
