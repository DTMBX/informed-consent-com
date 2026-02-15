import { useState, useEffect } from 'react'
import { useKV } from '@/lib/kv'
import { ReflectionEntry } from '@/lib/types'
import { procedures } from '@/lib/proceduresData'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Progress } from '@/components/ui/progress'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Timer, Download, Plus, FirstAid } from '@phosphor-icons/react'
import { REFLECTION_TIMER_OPTIONS } from '@/lib/constants'
import { toast } from 'sonner'

interface ReflectionNotesProps {
  savedProcedures: string[]
  onExport: () => void
  onBirthPlan?: () => void
}

export function ReflectionNotes({ savedProcedures, onExport, onBirthPlan }: ReflectionNotesProps) {
  const [reflections, setReflections] = useKV<ReflectionEntry[]>('reflection-entries', [])
  const [notes, setNotes] = useState('')
  const [selectedProcedures, setSelectedProcedures] = useState<string[]>([])
  const [questions, setQuestions] = useState<{ text: string; completed: boolean }[]>([])
  const [newQuestion, setNewQuestion] = useState('')
  const [timerMinutes, setTimerMinutes] = useState<number>(30)
  const [timerActive, setTimerActive] = useState(false)
  const [timerStartTime, setTimerStartTime] = useState<number | null>(null)
  const [timerElapsed, setTimerElapsed] = useState(0)

  const handleSaveReflection = () => {
    const entry: ReflectionEntry = {
      id: `reflection-${Date.now()}`,
      procedureIds: selectedProcedures,
      notes,
      questions: questions.map(q => q.text),
      timerMinutes: timerActive ? timerMinutes : undefined,
      timerStarted: timerActive && timerStartTime ? new Date(timerStartTime).toISOString() : undefined,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    setReflections((prev) => {
      const current = prev || []
      return [...current, entry]
    })
    
    toast.success('Reflection saved')
  }

  const handleAddQuestion = () => {
    if (newQuestion.trim()) {
      setQuestions([...questions, { text: newQuestion, completed: false }])
      setNewQuestion('')
    }
  }

  const handleToggleQuestion = (index: number) => {
    setQuestions(questions.map((q, i) => 
      i === index ? { ...q, completed: !q.completed } : q
    ))
  }

  const startTimer = () => {
    setTimerActive(true)
    setTimerStartTime(Date.now())
    setTimerElapsed(0)
  }

  const stopTimer = () => {
    setTimerActive(false)
    setTimerStartTime(null)
    setTimerElapsed(0)
  }

  useEffect(() => {
    if (timerActive && timerStartTime) {
      const interval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - timerStartTime) / 1000)
        setTimerElapsed(elapsed)
        
        if (elapsed >= timerMinutes * 60) {
          stopTimer()
          toast.info('Reflection time complete')
        }
      }, 1000)
      
      return () => clearInterval(interval)
    }
  }, [timerActive, timerStartTime, timerMinutes])

  const timerProgress = timerActive ? (timerElapsed / (timerMinutes * 60)) * 100 : 0
  const timeRemaining = timerActive ? Math.max(0, timerMinutes * 60 - timerElapsed) : timerMinutes * 60
  const minutesRemaining = Math.floor(timeRemaining / 60)
  const secondsRemaining = timeRemaining % 60

  return (
    <div className="content-reading px-4 sm:px-6 lg:px-8 py-8 md:py-16">
      <div className="section-header-spacing-mobile md:section-header-spacing">
        <h2 className="text-3xl font-semibold mb-4">Reflection & Notes</h2>
        <p className="text-muted-foreground text-base leading-relaxed">
          Take time to process information and document your questions. Use the timer to ensure you have adequate time for non-urgent decisions.
        </p>
      </div>

      <div className="card-stack card-stack-mobile">
        <Card variant="glass">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Timer className="h-5 w-5" />
              Reflection Timer
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Set aside time to reflect on non-urgent decisions without pressure
            </p>
            
            <div className="flex items-center gap-4">
              <Select 
                value={String(timerMinutes)} 
                onValueChange={(v) => setTimerMinutes(Number(v))}
                disabled={timerActive}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {REFLECTION_TIMER_OPTIONS.map((opt) => (
                    <SelectItem key={opt.value} value={String(opt.value)}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {!timerActive ? (
                <Button onClick={startTimer}>
                  Start Timer
                </Button>
              ) : (
                <Button onClick={stopTimer} variant="outline">
                  Stop Timer
                </Button>
              )}
            </div>

            {timerActive && (
              <div className="space-y-2">
                <Progress value={timerProgress} className="h-2" />
                <p className="text-2xl font-semibold text-center">
                  {minutesRemaining}:{secondsRemaining.toString().padStart(2, '0')}
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        <Card variant="glass">
          <CardHeader>
            <CardTitle>Related Procedures</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {savedProcedures.length === 0 ? (
                <p className="text-sm text-muted-foreground">
                  No saved procedures. Browse the library to save procedures for reference.
                </p>
              ) : (
                savedProcedures.map((procId) => {
                  const proc = procedures.find(p => p.id === procId)
                  if (!proc) return null
                  
                  return (
                    <div key={procId} className="flex items-center gap-3">
                      <Checkbox
                        checked={selectedProcedures.includes(procId)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedProcedures([...selectedProcedures, procId])
                          } else {
                            setSelectedProcedures(selectedProcedures.filter(id => id !== procId))
                          }
                        }}
                      />
                      <span className="text-sm">{proc.name}</span>
                    </div>
                  )
                })
              )}
            </div>
          </CardContent>
        </Card>

        <Card variant="glass">
          <CardHeader>
            <CardTitle>Questions to Ask</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Add a question..."
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleAddQuestion()
                  }
                }}
                className="flex-1 px-3 py-2 border border-input rounded-md bg-background text-sm"
              />
              <Button onClick={handleAddQuestion} size="icon">
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            {questions.length > 0 && (
              <div className="space-y-2">
                {questions.map((question, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Checkbox
                      checked={question.completed}
                      onCheckedChange={() => handleToggleQuestion(index)}
                    />
                    <span className={`text-sm ${question.completed ? 'line-through text-muted-foreground' : ''}`}>
                      {question.text}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <Card variant="glass">
          <CardHeader>
            <CardTitle>My Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Write your thoughts, concerns, or decisions here..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={8}
              className="resize-none"
            />
          </CardContent>
        </Card>

        <div className="flex gap-4">
          <Button onClick={handleSaveReflection} className="flex-1">
            Save Reflection
          </Button>
          <Button onClick={onExport} variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export Summary
          </Button>
          {onBirthPlan && (
            <Button onClick={onBirthPlan} variant="outline" className="gap-2">
              <FirstAid className="h-4 w-4" />
              Birth Plan
            </Button>
          )}
        </div>

        {reflections && reflections.length > 0 && (
          <Card variant="glass">
            <CardHeader>
              <CardTitle>Past Reflections</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {reflections.slice().reverse().slice(0, 5).map((entry) => (
                  <div key={entry.id} className="p-4 border border-border rounded-lg">
                    <p className="text-xs text-muted-foreground mb-2">
                      {new Date(entry.createdAt).toLocaleDateString()}
                    </p>
                    <p className="text-sm line-clamp-3">{entry.notes}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
