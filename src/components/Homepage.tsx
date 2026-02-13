import { ArrowRight, BookOpen, Heart, ShieldCheck, Users, ClipboardText, Lightbulb } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface HomepageProps {
  onNavigate: (view: 'library' | 'reflection' | 'birth-plan' | 'settings') => void
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
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full">
            <ShieldCheck className="text-primary" weight="fill" />
            <span className="text-sm font-medium text-primary">Evidence-Based Care</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground mb-4 sm:mb-6">
            {parentName ? `Welcome back, ${parentName}` : 'Welcome to Respectful Care'}
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Balanced, evidence-based information for maternal and newborn care decisions. 
            Every claim is sourced, every option is presented, every decision is yours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card 
            className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer group border-2 hover:border-primary/20"
            onClick={() => onNavigate('library')}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <BookOpen className="text-primary" size={24} weight="duotone" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  Procedure Library
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  Explore 50+ procedures with balanced benefits, risks, and alternatives
                </p>
                {savedProceduresCount > 0 && (
                  <Badge variant="secondary" className="text-xs">
                    {savedProceduresCount} saved
                  </Badge>
                )}
              </div>
            </div>
          </Card>

          <Card 
            className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer group border-2 hover:border-secondary/50"
            onClick={() => onNavigate('reflection')}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary/20 rounded-lg group-hover:bg-secondary/30 transition-colors">
                <ClipboardText className="text-secondary-foreground" size={24} weight="duotone" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-secondary-foreground transition-colors">
                  Reflection Notes
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  Private space to process information and prepare questions
                </p>
                {hasReflectionNotes && (
                  <Badge variant="secondary" className="text-xs">
                    Notes saved
                  </Badge>
                )}
              </div>
            </div>
          </Card>

          <Card 
            className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer group border-2 hover:border-accent/30"
            onClick={() => onNavigate('birth-plan')}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                <Heart className="text-accent-foreground" size={24} weight="duotone" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-accent-foreground transition-colors">
                  Birth Plan
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  Create a professional, evidence-based birth plan
                </p>
                {hasBirthPlan && (
                  <Badge className="text-xs bg-accent text-accent-foreground">
                    Plan created
                  </Badge>
                )}
              </div>
            </div>
          </Card>
        </div>

        <div className="bg-card border border-border rounded-xl p-8 sm:p-10 mb-12">
          <div className="flex items-start gap-6 mb-8">
            <div className="hidden sm:block p-4 bg-evidence/10 rounded-xl">
              <Lightbulb className="text-evidence-foreground" size={32} weight="duotone" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
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

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-border">
            <div className="flex items-start gap-3">
              <ShieldCheck className="text-evidence flex-shrink-0 mt-1" size={20} weight="fill" />
              <div>
                <h4 className="font-medium mb-1">Evidence-Based</h4>
                <p className="text-sm text-muted-foreground">
                  Every claim linked to peer-reviewed sources
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Users className="text-secondary-foreground flex-shrink-0 mt-1" size={20} weight="fill" />
              <div>
                <h4 className="font-medium mb-1">Balanced & Neutral</h4>
                <p className="text-sm text-muted-foreground">
                  Benefits and risks presented without bias
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Heart className="text-accent-foreground flex-shrink-0 mt-1" size={20} weight="fill" />
              <div>
                <h4 className="font-medium mb-1">Your Decision</h4>
                <p className="text-sm text-muted-foreground">
                  No pressure, just clear information
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <h3 className="font-semibold text-lg mb-3">Getting Started</h3>
            <ul className="space-y-2 text-sm text-muted-foreground mb-4">
              <li className="flex items-start gap-2">
                <ArrowRight className="flex-shrink-0 mt-0.5 text-primary" size={16} weight="bold" />
                <span>Browse the procedure library by category or search</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="flex-shrink-0 mt-0.5 text-primary" size={16} weight="bold" />
                <span>Save procedures to review later or add to your notes</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="flex-shrink-0 mt-0.5 text-primary" size={16} weight="bold" />
                <span>Compare options side-by-side with evidence</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="flex-shrink-0 mt-0.5 text-primary" size={16} weight="bold" />
                <span>Create a birth plan to share with your care team</span>
              </li>
            </ul>
            <Button 
              onClick={() => onNavigate('library')}
              className="w-full bg-primary hover:bg-primary/90"
            >
              Explore Procedures
              <ArrowRight className="ml-2" size={16} weight="bold" />
            </Button>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-muted/30 to-muted/50">
            <h3 className="font-semibold text-lg mb-3">Important Disclaimer</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              This platform provides educational information only and is not a substitute for medical advice. 
              Always consult with your healthcare provider about your specific situation. 
              You have the right to ask questions, request more time, and make informed decisions about your care.
            </p>
            <Button 
              onClick={() => onNavigate('settings')}
              variant="outline"
              className="w-full"
            >
              View Settings & Privacy
            </Button>
          </Card>
        </div>
      </div>
    </div>
  )
}
