import { useState, useEffect } from 'react'
import { useKV } from '@/lib/kv'
import { SharedBirthPlanLink, BirthPlanComment } from '@/lib/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { X, ChatCircle, Question, CheckCircle, User, Clock, Bell } from '@phosphor-icons/react'
import { toast } from 'sonner'
import { BirthPlanComments } from '@/components/BirthPlanComments'
import { useUnreadComments } from '@/hooks/use-unread-comments'

interface ViewAllCommentsProps {
  onClose: () => void
  parentName: string
}

export function ViewAllComments({ onClose, parentName }: ViewAllCommentsProps) {
  const [sharedLinks] = useKV<SharedBirthPlanLink[]>('shared-birth-plan-links', [])
  const [allComments, setAllComments] = useState<Record<string, BirthPlanComment[]>>({})
  const [loading, setLoading] = useState(true)
  const [selectedShareId, setSelectedShareId] = useState<string | null>(null)
  const { refresh } = useUnreadComments()

  const links = sharedLinks || []
  const activeLinks = links.filter(link => !link.isRevoked && new Date(link.expiresAt) > new Date())

  useEffect(() => {
    loadAllComments()
  }, [])

  const loadAllComments = async () => {
    const commentsMap: Record<string, BirthPlanComment[]> = {}
    
    for (const link of activeLinks) {
      const comments = await window.spark.kv.get<BirthPlanComment[]>(`birth-plan-comments-${link.shareId}`) || []
      if (comments.length > 0) {
        commentsMap[link.shareId] = comments
      }
    }

    setAllComments(commentsMap)
    setLoading(false)
  }

  const handleCommentsRead = () => {
    refresh()
    loadAllComments()
  }

  const totalComments = Object.values(allComments).reduce((sum, comments) => sum + comments.length, 0)
  const totalUnreadComments = Object.values(allComments).reduce(
    (sum, comments) => sum + comments.filter(c => !c.readByOwner).length,
    0
  )
  const totalQuestions = Object.values(allComments).reduce(
    (sum, comments) => sum + comments.filter(c => c.isQuestion && !c.isResolved).length,
    0
  )

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / 60000)
    const diffHours = Math.floor(diffMins / 60)
    const diffDays = Math.floor(diffHours / 24)

    if (diffMins < 1) return 'Just now'
    if (diffMins < 60) return `${diffMins}m ago`
    if (diffHours < 24) return `${diffHours}h ago`
    if (diffDays < 7) return `${diffDays}d ago`
    
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }

  if (selectedShareId) {
    const link = activeLinks.find(l => l.shareId === selectedShareId)
    return (
      <div className="clinical-container card-padding md:card-padding card-padding-mobile md:py-8">
        <div className="mb-6 flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => setSelectedShareId(null)}>
            ← Back to All Comments
          </Button>
          <div className="flex-1">
            <h3 className="font-semibold">Comments from {link?.recipientName}</h3>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        <BirthPlanComments 
          shareId={selectedShareId} 
          isOwner={true} 
          ownerName={parentName}
          onCommentsRead={handleCommentsRead}
        />
      </div>
    )
  }

  return (
    <div className="clinical-container card-padding md:card-padding card-padding-mobile md:py-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-semibold mb-2 flex items-center gap-3">
            <ChatCircle className="h-8 w-8" weight="fill" />
            Birth Plan Comments
          </h2>
          <p className="text-muted-foreground">
            View and respond to comments from partners and support persons
          </p>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-5 w-5" />
        </Button>
      </div>

      <div className="space-y-6">
        {loading ? (
          <Card>
            <CardContent className="pt-12 pb-12 text-center">
              <p className="text-muted-foreground">Loading comments...</p>
            </CardContent>
          </Card>
        ) : totalComments === 0 ? (
          <Card>
            <CardContent className="pt-12 pb-12 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-muted rounded-full">
                  <ChatCircle className="h-8 w-8 text-muted-foreground" />
                </div>
              </div>
              <p className="text-muted-foreground mb-2">No comments yet</p>
              <p className="text-sm text-muted-foreground">
                When people view your shared birth plan, their comments will appear here
              </p>
            </CardContent>
          </Card>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card>
                <CardContent className="card-padding-mobile md:card-padding">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <ChatCircle className="h-6 w-6 text-primary" weight="fill" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{totalComments}</p>
                      <p className="text-sm text-muted-foreground">Total Comments</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className={totalUnreadComments > 0 ? 'border-accent' : ''}>
                <CardContent className="card-padding-mobile md:card-padding">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-accent/10 rounded-full">
                      <Bell className="h-6 w-6 text-accent" weight="fill" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{totalUnreadComments}</p>
                      <p className="text-sm text-muted-foreground">Unread Comments</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="card-padding-mobile md:card-padding">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-accent/10 rounded-full">
                      <Question className="h-6 w-6 text-accent" weight="fill" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{totalQuestions}</p>
                      <p className="text-sm text-muted-foreground">Open Questions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader className="card-padding-mobile md:card-padding">
                <CardTitle>Comments by Shared Link</CardTitle>
              </CardHeader>
              <CardContent className="card-padding-mobile md:card-padding">
                <div className="space-y-4">
                  {activeLinks.map((link) => {
                    const comments = allComments[link.shareId] || []
                    if (comments.length === 0) return null

                    const questions = comments.filter(c => c.isQuestion && !c.isResolved)
                    const unreadComments = comments.filter(c => !c.readByOwner)
                    const recentComment = comments.sort((a, b) => 
                      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
                    )[0]

                    return (
                      <div key={link.id}>
                        <Card className="cursor-pointer hover:border-primary transition-colors" onClick={() => setSelectedShareId(link.shareId)}>
                          <CardContent className="card-padding-mobile md:card-padding">
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1 space-y-3">
                                <div className="flex items-center gap-3 flex-wrap">
                                  <div className="flex items-center gap-2">
                                    <User className="h-4 w-4 text-muted-foreground" weight="fill" />
                                    <span className="font-semibold">{link.recipientName}</span>
                                  </div>
                                  {unreadComments.length > 0 && (
                                    <Badge variant="default" className="gap-1.5 bg-accent">
                                      <Bell className="h-3 w-3" weight="fill" />
                                      {unreadComments.length} unread
                                    </Badge>
                                  )}
                                  <Badge variant="secondary" className="gap-1.5">
                                    <ChatCircle className="h-3 w-3" />
                                    {comments.length} {comments.length === 1 ? 'comment' : 'comments'}
                                  </Badge>
                                  {questions.length > 0 && (
                                    <Badge variant="default" className="gap-1.5">
                                      <Question className="h-3 w-3" />
                                      {questions.length} {questions.length === 1 ? 'question' : 'questions'}
                                    </Badge>
                                  )}
                                </div>

                                {recentComment && (
                                  <div className="text-sm">
                                    <p className="text-muted-foreground line-clamp-2">
                                      Most recent: "{recentComment.content}"
                                    </p>
                                    <p className="text-xs text-muted-foreground mt-1">
                                      {formatDate(recentComment.createdAt)}
                                    </p>
                                  </div>
                                )}

                                <Button variant="outline" size="sm" className="gap-2">
                                  View & Respond
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                        <Separator className="my-4" />
                      </div>
                    )
                  })}

                  {Object.keys(allComments).length === 0 && (
                    <p className="text-center text-muted-foreground py-8">
                      No comments found on any active shared links
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  )
}
