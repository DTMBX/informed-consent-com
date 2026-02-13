import { procedures } from '@/lib/proceduresData'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { X } from '@phosphor-icons/react'

interface CompareViewProps {
  procedureIds: string[]
  onClose: () => void
}

export function CompareView({ procedureIds, onClose }: CompareViewProps) {
  const items = procedureIds
    .map(id => procedures.find(p => p.id === id))
    .filter(Boolean)
    .slice(0, 3)

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p>No procedures to compare</p>
        <Button onClick={onClose}>Close</Button>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-semibold mb-2">Compare Options</h2>
          <p className="text-muted-foreground">
            Side-by-side comparison of procedures and alternatives
          </p>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-5 w-5" />
        </Button>
      </div>

      <div className="overflow-x-auto">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 min-w-full">
          {items.map((item) => {
            if (!item) return null
            
            return (
              <Card key={item.id} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="text-xl">{item.name}</CardTitle>
                  <Badge variant="outline" className="w-fit">
                    {item.urgencyLevel}
                  </Badge>
                </CardHeader>
                <CardContent className="flex-1 space-y-6">
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-evidence">Benefits</h4>
                    <ul className="space-y-1 text-sm">
                      {item.benefits.slice(0, 3).map((ben) => (
                        <li key={ben.id} className="flex gap-2">
                          <span className="text-evidence">•</span>
                          <span className="text-sm">{ben.description}</span>
                        </li>
                      ))}
                      {item.benefits.length > 3 && (
                        <li className="text-xs text-muted-foreground">
                          +{item.benefits.length - 3} more
                        </li>
                      )}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-destructive">Risks</h4>
                    <ul className="space-y-1 text-sm">
                      {item.risks.slice(0, 3).map((risk) => (
                        <li key={risk.id} className="flex gap-2">
                          <span className="text-destructive">•</span>
                          <div className="flex-1">
                            <span className="text-sm">{risk.description}</span>
                            {risk.frequency && (
                              <p className="text-xs text-muted-foreground">
                                {risk.frequency}
                              </p>
                            )}
                          </div>
                        </li>
                      ))}
                      {item.risks.length > 3 && (
                        <li className="text-xs text-muted-foreground">
                          +{item.risks.length - 3} more
                        </li>
                      )}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">What if we wait?</h4>
                    <p className="text-sm text-muted-foreground line-clamp-4">
                      {item.whatIfWeWait}
                    </p>
                  </div>

                  <div className="text-xs text-muted-foreground pt-4 border-t">
                    {item.citations.length} sources cited
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <Button onClick={onClose} variant="outline">
          Close Comparison
        </Button>
      </div>
    </div>
  )
}
