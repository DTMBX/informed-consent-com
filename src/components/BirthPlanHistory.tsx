import { useState, useEffect } from 'react'
import { useKV } from '@github/spark/hooks'
import { BirthPlanVersion } from '@/lib/types'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { X, ClockCounterClockwise, Eye, ArrowCounterClockwise, Download, FileText } from '@phosphor-icons/react'
import { toast } from 'sonner'

interface BirthPlanHistoryProps {
  onClose: () => void
  onRestoreVersion?: (version: BirthPlanVersion) => void
}

export function BirthPlanHistory({ onClose, onRestoreVersion }: BirthPlanHistoryProps) {
  const [versions, setVersions] = useKV<BirthPlanVersion[]>('birth-plan-versions', [])
  const [selectedVersion, setSelectedVersion] = useState<BirthPlanVersion | null>(null)
  const [viewDialogOpen, setViewDialogOpen] = useState(false)

  const versionsList = versions || []
  const sortedVersions = [...versionsList].sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    })
  }

  const formatRelativeTime = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / 60000)
    const diffHours = Math.floor(diffMins / 60)
    const diffDays = Math.floor(diffHours / 24)

    if (diffMins < 1) return 'Just now'
    if (diffMins < 60) return `${diffMins} minutes ago`
    if (diffHours < 24) return `${diffHours} ${diffHours === 1 ? 'hour' : 'hours'} ago`
    if (diffDays < 7) return `${diffDays} ${diffDays === 1 ? 'day' : 'days'} ago`
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} ${Math.floor(diffDays / 7) === 1 ? 'week' : 'weeks'} ago`
    
    return `${Math.floor(diffDays / 30)} ${Math.floor(diffDays / 30) === 1 ? 'month' : 'months'} ago`
  }

  const handleViewVersion = (version: BirthPlanVersion) => {
    setSelectedVersion(version)
    setViewDialogOpen(true)
  }

  const handleRestoreVersion = (version: BirthPlanVersion) => {
    if (onRestoreVersion) {
      onRestoreVersion(version)
      toast.success(`Restored to version ${version.version}`)
      onClose()
    }
  }

  const handleDownloadVersion = (version: BirthPlanVersion) => {
    const blob = new Blob([version.birthPlanDocument], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `birth-plan-v${version.version}-${Date.now()}.txt`
    a.click()
    URL.revokeObjectURL(url)
    toast.success('Version downloaded')
  }

  const getChangeSummary = (version: BirthPlanVersion): string => {
    if (version.changeNotes) return version.changeNotes
    if (version.version === 1) return 'Initial birth plan created'
    return 'Updated birth plan'
  }

  return (
    <>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-semibold mb-2 flex items-center gap-3">
              <ClockCounterClockwise className="h-8 w-8" />
              Birth Plan History
            </h2>
            <p className="text-muted-foreground">
              View and restore previous versions of your birth plan
            </p>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="space-y-6">
          {sortedVersions.length === 0 && (
            <Card>
              <CardContent className="pt-12 pb-12 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-muted rounded-full">
                    <FileText className="h-8 w-8 text-muted-foreground" />
                  </div>
                </div>
                <p className="text-muted-foreground mb-2">No version history yet</p>
                <p className="text-sm text-muted-foreground">
                  Birth plan versions are automatically saved each time you make changes
                </p>
              </CardContent>
            </Card>
          )}

          {sortedVersions.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Version History</CardTitle>
                <CardDescription>
                  {sortedVersions.length} {sortedVersions.length === 1 ? 'version' : 'versions'} saved
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sortedVersions.map((version, index) => {
                    const isLatest = index === 0
                    
                    return (
                      <div key={version.id}>
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 mt-1">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              isLatest ? 'bg-primary text-primary-foreground' : 'bg-muted'
                            }`}>
                              <span className="text-sm font-semibold">v{version.version}</span>
                            </div>
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-3 mb-2">
                              <div className="space-y-1">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <h3 className="font-semibold">
                                    Version {version.version}
                                  </h3>
                                  {isLatest && (
                                    <Badge variant="default" className="text-xs">
                                      Current
                                    </Badge>
                                  )}
                                </div>
                                <p className="text-sm text-muted-foreground">
                                  {getChangeSummary(version)}
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                              <span>{formatDate(version.createdAt)}</span>
                              <span>•</span>
                              <span>{formatRelativeTime(version.createdAt)}</span>
                              <span>•</span>
                              <span>By {version.createdBy}</span>
                            </div>

                            <div className="flex flex-wrap gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleViewVersion(version)}
                                className="gap-2"
                              >
                                <Eye className="h-4 w-4" />
                                View
                              </Button>
                              
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleDownloadVersion(version)}
                                className="gap-2"
                              >
                                <Download className="h-4 w-4" />
                                Download
                              </Button>

                              {!isLatest && onRestoreVersion && (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => handleRestoreVersion(version)}
                                  className="gap-2 text-accent hover:text-accent"
                                >
                                  <ArrowCounterClockwise className="h-4 w-4" />
                                  Restore
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>

                        {index < sortedVersions.length - 1 && (
                          <Separator className="my-4" />
                        )}
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          )}

          <Card className="bg-accent/10">
            <CardContent className="pt-6">
              <div className="space-y-3 text-sm">
                <p className="font-medium">About Version History</p>
                <ul className="space-y-1.5 text-muted-foreground">
                  <li>• Versions are automatically saved when you update your birth plan</li>
                  <li>• You can view, download, or restore any previous version</li>
                  <li>• Restoring a version creates a new version with that content</li>
                  <li>• Version history is stored locally and privately</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Dialog open={viewDialogOpen} onOpenChange={setViewDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Version {selectedVersion?.version}
            </DialogTitle>
            <DialogDescription>
              {selectedVersion && (
                <>
                  Created {formatDate(selectedVersion.createdAt)} by {selectedVersion.createdBy}
                </>
              )}
            </DialogDescription>
          </DialogHeader>

          {selectedVersion && (
            <div className="space-y-4">
              {selectedVersion.changeNotes && (
                <Card className="bg-accent/10">
                  <CardContent className="pt-4">
                    <p className="text-sm">
                      <span className="font-medium">Changes: </span>
                      {selectedVersion.changeNotes}
                    </p>
                  </CardContent>
                </Card>
              )}

              <div className="bg-muted/50 p-6 rounded-lg font-mono text-xs overflow-x-auto">
                <pre className="whitespace-pre-wrap">{selectedVersion.birthPlanDocument}</pre>
              </div>

              <div className="flex justify-end gap-2">
                <Button
                  variant="outline"
                  onClick={() => handleDownloadVersion(selectedVersion)}
                  className="gap-2"
                >
                  <Download className="h-4 w-4" />
                  Download
                </Button>
                
                {onRestoreVersion && selectedVersion.id !== sortedVersions[0]?.id && (
                  <Button
                    onClick={() => {
                      handleRestoreVersion(selectedVersion)
                      setViewDialogOpen(false)
                    }}
                    className="gap-2"
                  >
                    <ArrowCounterClockwise className="h-4 w-4" />
                    Restore This Version
                  </Button>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
