import { useState, useEffect } from 'react'
import { BirthPlanComment } from '@/lib/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ChatCircle, Question, CheckCircle, PaperPlaneRight, User } from '@phosphor-icons/react'
import { toast } from 'sonner'

interface BirthPlanCommentsProps {
  shareId: string
  isOwner: boolean
  ownerName?: string
  onCommentsRead?: () => void
}

export function BirthPlanComments({ shareId, isOwner, ownerName, onCommentsRead }: BirthPlanCommentsProps) {
  const [comments, setComments] = useState<BirthPlanComment[]>([])
  const [loading, setLoading] = useState(true)
  const [newComment, setNewComment] = useState('')
  const [commenterName, setCommenterName] = useState('')
  const [commenterEmail, setCommenterEmail] = useState('')
  const [isQuestion, setIsQuestion] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    loadComments()
  }, [shareId])

  useEffect(() => {
    if (isOwner && comments.length > 0) {
      markCommentsAsRead()
    }
  }, [comments.length, isOwner])

  const loadComments = async () => {
    try {
      const data = await window.spark.kv.get<BirthPlanComment[]>(`birth-plan-comments-${shareId}`)
      setComments(data || [])
    } catch (error) {
      console.error('Failed to load comments:', error)
    } finally {
      setLoading(false)
    }
  }

  const markCommentsAsRead = async () => {
    try {
      const unreadComments = comments.filter(c => !c.readByOwner)
      if (unreadComments.length === 0) return

      const updatedComments = comments.map(c => ({
        ...c,
        readByOwner: true,
        readByOwnerAt: c.readByOwnerAt || new Date().toISOString()
      }))

      await window.spark.kv.set(`birth-plan-comments-${shareId}`, updatedComments)
      setComments(updatedComments)
      
      if (onCommentsRead) {
        onCommentsRead()
      }
    } catch (error) {
      console.error('Failed to mark comments as read:', error)
    }
  }

  const handleSubmitComment = async () => {
    if (!newComment.trim()) {
      toast.error('Please enter a comment')
      return
    }

    if (!isOwner && !commenterName.trim()) {
      toast.error('Please enter your name')
      return
    }

    setSubmitting(true)

    try {
      const comment: BirthPlanComment = {
        id: `comment-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
        shareId,
        commenterName: isOwner ? (ownerName || 'Birth Plan Owner') : commenterName,
        commenterEmail: isOwner ? undefined : commenterEmail || undefined,
        content: newComment,
        isQuestion,
        isResolved: false,
        createdAt: new Date().toISOString()
      }

      const currentComments = await window.spark.kv.get<BirthPlanComment[]>(`birth-plan-comments-${shareId}`) || []
      await window.spark.kv.set(`birth-plan-comments-${shareId}`, [...currentComments, comment])

      setComments([...currentComments, comment])
      setNewComment('')
      setIsQuestion(false)
      
      if (isOwner) {
        toast.success('Response added')
      } else {
        toast.success('Comment added - the birth plan owner will see this')
      }
    } catch (error) {
      toast.error('Failed to add comment')
      console.error(error)
    } finally {
      setSubmitting(false)
    }
  }

  const handleResolveQuestion = async (commentId: string) => {
    try {
      const updatedComments = comments.map(c =>
        c.id === commentId
          ? { ...c, isResolved: true, resolvedAt: new Date().toISOString(), resolvedBy: ownerName || 'Owner' }
          : c
      )

      await window.spark.kv.set(`birth-plan-comments-${shareId}`, updatedComments)
      setComments(updatedComments)
      toast.success('Question marked as resolved')
    } catch (error) {
      toast.error('Failed to resolve question')
    }
  }

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
    
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  const questions = comments.filter(c => c.isQuestion && !c.isResolved)
  const resolvedQuestions = comments.filter(c => c.isQuestion && c.isResolved)
  const generalComments = comments.filter(c => !c.isQuestion)

  if (loading) {
    return (
      <Card>
        <CardContent className="pt-6 text-center">
          <p className="text-muted-foreground">Loading comments...</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ChatCircle className="h-5 w-5" weight="fill" />
            Comments & Questions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            {!isOwner && (
              <div className="bg-accent/10 p-4 rounded-lg text-sm space-y-2">
                <p className="font-medium">About Comments</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Your comments are visible to the birth plan owner</li>
                  <li>• Mark your comment as a question to request a response</li>
                  <li>• The owner will be notified of new comments</li>
                </ul>
              </div>
            )}

            {!isOwner && (
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="commenter-name">Your Name *</Label>
                  <Input
                    id="commenter-name"
                    placeholder="e.g., Sarah (Partner)"
                    value={commenterName}
                    onChange={(e) => setCommenterName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="commenter-email">
                    Email <span className="text-muted-foreground">(Optional)</span>
                  </Label>
                  <Input
                    id="commenter-email"
                    type="email"
                    placeholder="your@email.com"
                    value={commenterEmail}
                    onChange={(e) => setCommenterEmail(e.target.value)}
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="new-comment">
                {isOwner ? 'Add a Response or Note' : 'Your Comment'}
              </Label>
              <Textarea
                id="new-comment"
                placeholder={isOwner ? 'Respond to questions or add notes...' : 'Add your comment or question...'}
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="min-h-[100px] resize-none"
              />
            </div>

            {!isOwner && (
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="is-question"
                  checked={isQuestion}
                  onChange={(e) => setIsQuestion(e.target.checked)}
                  className="rounded border-input"
                />
                <Label htmlFor="is-question" className="font-normal cursor-pointer">
                  This is a question that needs a response
                </Label>
              </div>
            )}

            <Button
              onClick={handleSubmitComment}
              disabled={submitting}
              className="w-full gap-2"
            >
              <PaperPlaneRight className="h-4 w-4" />
              {submitting ? 'Adding...' : isOwner ? 'Add Response' : 'Post Comment'}
            </Button>
          </div>

          {comments.length > 0 && (
            <>
              <Separator />

              {questions.length > 0 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Question className="h-5 w-5 text-accent" weight="fill" />
                    <h3 className="font-semibold">
                      Open Questions ({questions.length})
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {questions.map((comment) => (
                      <Card key={comment.id} className="bg-accent/5">
                        <CardContent className="pt-4">
                          <div className="space-y-3">
                            <div className="flex items-start justify-between gap-3">
                              <div className="flex items-center gap-2">
                                <User className="h-4 w-4 text-muted-foreground" weight="fill" />
                                <span className="font-medium text-sm">{comment.commenterName}</span>
                                <Badge variant="secondary" className="text-xs">Question</Badge>
                              </div>
                              <span className="text-xs text-muted-foreground">
                                {formatDate(comment.createdAt)}
                              </span>
                            </div>
                            <p className="text-sm">{comment.content}</p>
                            {isOwner && (
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleResolveQuestion(comment.id)}
                                className="gap-2"
                              >
                                <CheckCircle className="h-4 w-4" />
                                Mark as Resolved
                              </Button>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {generalComments.length > 0 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <ChatCircle className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">
                      Comments ({generalComments.length})
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {generalComments.map((comment) => (
                      <Card key={comment.id}>
                        <CardContent className="pt-4">
                          <div className="space-y-2">
                            <div className="flex items-start justify-between gap-3">
                              <div className="flex items-center gap-2">
                                <User className="h-4 w-4 text-muted-foreground" weight="fill" />
                                <span className="font-medium text-sm">{comment.commenterName}</span>
                              </div>
                              <span className="text-xs text-muted-foreground">
                                {formatDate(comment.createdAt)}
                              </span>
                            </div>
                            <p className="text-sm">{comment.content}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {resolvedQuestions.length > 0 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-evidence" weight="fill" />
                    <h3 className="font-semibold text-muted-foreground">
                      Resolved Questions ({resolvedQuestions.length})
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {resolvedQuestions.map((comment) => (
                      <Card key={comment.id} className="opacity-60">
                        <CardContent className="pt-4">
                          <div className="space-y-2">
                            <div className="flex items-start justify-between gap-3">
                              <div className="flex items-center gap-2">
                                <User className="h-4 w-4 text-muted-foreground" weight="fill" />
                                <span className="font-medium text-sm">{comment.commenterName}</span>
                                <Badge variant="outline" className="text-xs">Resolved</Badge>
                              </div>
                              <span className="text-xs text-muted-foreground">
                                {formatDate(comment.createdAt)}
                              </span>
                            </div>
                            <p className="text-sm">{comment.content}</p>
                            {comment.resolvedAt && (
                              <p className="text-xs text-muted-foreground">
                                Resolved by {comment.resolvedBy} on {formatDate(comment.resolvedAt)}
                              </p>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          {comments.length === 0 && (
            <div className="text-center py-8">
              <ChatCircle className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
              <p className="text-muted-foreground">No comments yet</p>
              <p className="text-sm text-muted-foreground mt-1">
                {isOwner ? 'Comments from viewers will appear here' : 'Be the first to add a comment'}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
