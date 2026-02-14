import { useState, useMemo } from 'react'
import { Stage, Category, UrgencyLevel } from '@/lib/types'
import { procedures } from '@/lib/proceduresData'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { BookmarkSimple, MagnifyingGlass, Baby, Article } from '@phosphor-icons/react'
import { urgencyConfig, categoryConfig, formatDate } from '@/lib/constants'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { RSVExplainer } from '@/components/RSVExplainer'

interface ProcedureLibraryProps {
  stage: Stage
  savedProcedures: string[]
  onProcedureClick: (id: string) => void
  onSaveProcedure: (id: string) => void
}

export function ProcedureLibrary({
  stage,
  savedProcedures,
  onProcedureClick,
  onSaveProcedure
}: ProcedureLibraryProps) {
  const [search, setSearch] = useState('')
  const [categoryFilter, setCategoryFilter] = useState<Category | 'all'>('all')
  const [urgencyFilter, setUrgencyFilter] = useState<UrgencyLevel | 'all'>('all')
  const [showSavedOnly, setShowSavedOnly] = useState(false)
  const [showRSVExplainer, setShowRSVExplainer] = useState(false)

  const filteredProcedures = useMemo(() => {
    return procedures.filter(proc => {
      if (showSavedOnly && !savedProcedures.includes(proc.id)) return false
      
      if (stage !== 'all' && proc.stage !== stage && proc.stage !== 'all') return false
      
      if (categoryFilter !== 'all' && proc.category !== categoryFilter) return false
      
      if (urgencyFilter !== 'all' && proc.urgencyLevel !== urgencyFilter) return false
      
      if (search) {
        const searchLower = search.toLowerCase()
        return (
          proc.name.toLowerCase().includes(searchLower) ||
          proc.shortName.toLowerCase().includes(searchLower) ||
          proc.summary.toLowerCase().includes(searchLower)
        )
      }
      
      return true
    })
  }, [stage, search, categoryFilter, urgencyFilter, showSavedOnly, savedProcedures])

  return (
    <div className="content-max-width px-4 sm:px-6 lg:px-8 section-spacing-mobile md:section-spacing-y">
      <div className="mb-12">
        <h2 className="mb-2">Procedure Library</h2>
        <p className="text-muted-foreground text-lg">
          Explore evidence-based information about common procedures
        </p>
      </div>

      <div className="space-y-4 mb-8">
        <div className="relative">
          <MagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search procedures..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 h-12"
            id="procedure-search"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          <Select value={categoryFilter} onValueChange={(v) => setCategoryFilter(v as Category | 'all')}>
            <SelectTrigger className="w-[200px] h-11">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {Object.entries(categoryConfig).map(([key, { label }]) => (
                <SelectItem key={key} value={key}>{label}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={urgencyFilter} onValueChange={(v) => setUrgencyFilter(v as UrgencyLevel | 'all')}>
            <SelectTrigger className="w-[200px] h-11">
              <SelectValue placeholder="Urgency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Urgency Levels</SelectItem>
              {Object.entries(urgencyConfig).map(([key, { label }]) => (
                <SelectItem key={key} value={key}>{label}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button
            variant={showSavedOnly ? 'default' : 'outline'}
            onClick={() => setShowSavedOnly(!showSavedOnly)}
            className="gap-2"
          >
            <BookmarkSimple weight={showSavedOnly ? 'fill' : 'regular'} />
            Saved Only
          </Button>
        </div>
      </div>

      {(stage === 'prenatal' || stage === 'postpartum' || stage === 'all') && !showSavedOnly && !search && (
        <Card className="mb-6 border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-secondary/5">
          <CardHeader className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Baby size={32} weight="duotone" className="text-primary" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-2xl mb-2 flex items-center gap-2">
                  Understanding RSV in Newborns
                  <Badge className="bg-destructive text-destructive-foreground">Important</Badge>
                </CardTitle>
                <CardDescription className="text-base leading-relaxed mb-4">
                  RSV is the leading cause of hospitalization for infants under 1 year. Learn about hospitalization rates, risk factors, warning signs, and evidence-based prevention options including maternal vaccination and infant immunization.
                </CardDescription>
                <div className="flex flex-wrap gap-3">
                  <Dialog open={showRSVExplainer} onOpenChange={setShowRSVExplainer}>
                    <DialogTrigger asChild>
                      <Button variant="default" className="gap-2">
                        <Article className="h-4 w-4" />
                        Read Detailed RSV Guide
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="sr-only">RSV Detailed Information</DialogTitle>
                      </DialogHeader>
                      <RSVExplainer />
                    </DialogContent>
                  </Dialog>
                  <Button 
                    variant="outline" 
                    onClick={() => onProcedureClick('proc-rsv-prevention')}
                  >
                    View RSV Prevention Procedure
                  </Button>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>
      )}

      {filteredProcedures.length === 0 ? (
        <Card className="p-12 text-center">
          <p className="text-muted-foreground mb-4">No procedures found</p>
          <p className="text-sm text-muted-foreground">
            Try adjusting your filters or search terms
          </p>
        </Card>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {filteredProcedures.map((proc) => {
            const isSaved = savedProcedures.includes(proc.id)
            const urgencyStyle = urgencyConfig[proc.urgencyLevel]
            
            return (
              <Card
                key={proc.id}
                className="hover:shadow-lg transition-all cursor-pointer group relative"
                onClick={() => onProcedureClick(proc.id)}
              >
                <CardHeader className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                        {proc.name}
                      </CardTitle>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant={urgencyStyle.color === 'destructive' ? 'destructive' : 'secondary'}>
                          {urgencyStyle.label}
                        </Badge>
                        <Badge variant="outline">
                          {categoryConfig[proc.category].label}
                        </Badge>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation()
                        onSaveProcedure(proc.id)
                      }}
                      className="shrink-0"
                    >
                      <BookmarkSimple
                        className="h-5 w-5"
                        weight={isSaved ? 'fill' : 'regular'}
                      />
                    </Button>
                  </div>

                  <CardDescription className="text-base leading-relaxed">
                    {proc.summary}
                  </CardDescription>

                  <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground">
                    <span>{proc.citations.length} sources</span>
                    <span>•</span>
                    <span>Reviewed {formatDate(proc.lastReviewed)}</span>
                  </div>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      )}
    </div>
  )
}
