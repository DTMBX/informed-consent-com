import { useState, useEffect } from 'react'
import { useKV } from '@github/spark/hooks'
import { SharedBirthPlanLink } from '@/lib/types'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog'
import { X, Trash, Copy, Eye, Clock, CheckCircle, Prohibit, Link as LinkIcon, Users } from '@phosphor-icons/react'
import { toast } from 'sonner'

interface ManageSharedLinksProps {
  onClose: () => void
}

export function ManageSharedLinks({ onClose }: ManageSharedLinksProps) {
  const [sharedLinks, setSharedLinks] = useKV<SharedBirthPlanLink[]>('shared-birth-plan-links', [])
  const [linkToRevoke, setLinkToRevoke] = useState<string | null>(null)
  const [linkToDelete, setLinkToDelete] = useState<string | null>(null)

  const links = sharedLinks || []
  const activeLinks = links.filter(link => !link.isRevoked && new Date(link.expiresAt) > new Date())
  const revokedLinks = links.filter(link => link.isRevoked)
  const expiredLinks = links.filter(link => !link.isRevoked && new Date(link.expiresAt) <= new Date())

  const handleRevokeLink = async (linkId: string) => {
    setSharedLinks((currentLinks) => {
      const current = currentLinks || []
      return current.map(link => 
        link.id === linkId 
          ? { ...link, isRevoked: true, revokedAt: new Date().toISOString() }
          : link
      )
    })

    const link = links.find(l => l.id === linkId)
    if (link) {
      const shareData = await window.spark.kv.get(`shared-birth-plan-${link.shareId}`)
      if (shareData) {
        await window.spark.kv.set(`shared-birth-plan-${link.shareId}`, {
          ...shareData,
          isRevoked: true,
          revokedAt: new Date().toISOString()
        })
      }
    }

    toast.success('Share link revoked - recipients can no longer access')
    setLinkToRevoke(null)
  }

  const handleDeleteLink = async (linkId: string) => {
    setSharedLinks((currentLinks) => {
      const current = currentLinks || []
      return current.filter(link => link.id !== linkId)
    })

    const link = links.find(l => l.id === linkId)
    if (link) {
      await window.spark.kv.delete(`shared-birth-plan-${link.shareId}`)
      const comments = await window.spark.kv.get<any[]>(`birth-plan-comments-${link.shareId}`) || []
      if (comments.length > 0) {
        await window.spark.kv.delete(`birth-plan-comments-${link.shareId}`)
      }
    }

    toast.success('Share link deleted permanently')
    setLinkToDelete(null)
  }

  const copyLink = (shareId: string) => {
    const link = `${window.location.origin}${window.location.pathname}?share=${shareId}`
    navigator.clipboard.writeText(link)
    toast.success('Link copied to clipboard')
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  const formatRelativeTime = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const days = Math.ceil((date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
    
    if (days < 0) return 'Expired'
    if (days === 0) return 'Expires today'
    if (days === 1) return 'Expires tomorrow'
    if (days < 7) return `${days} days left`
    if (days < 30) return `${Math.floor(days / 7)} weeks left`
    return `${Math.floor(days / 30)} months left`
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-semibold mb-2">Manage Shared Links</h2>
          <p className="text-muted-foreground">
            View, revoke, or delete birth plan share links
          </p>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-5 w-5" />
        </Button>
      </div>

      <div className="space-y-6">
        {links.length === 0 && (
          <Card>
            <CardContent className="pt-12 pb-12 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-muted rounded-full">
                  <LinkIcon className="h-8 w-8 text-muted-foreground" />
                </div>
              </div>
              <p className="text-muted-foreground mb-2">No shared links yet</p>
              <p className="text-sm text-muted-foreground">
                Share links will appear here when you create them in the Birth Plan Generator
              </p>
            </CardContent>
          </Card>
        )}

        {activeLinks.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="h-5 w-5 text-evidence" weight="fill" />
              <h3 className="text-lg font-semibold">Active Links ({activeLinks.length})</h3>
            </div>
            <div className="space-y-3">
              {activeLinks.map((link) => (
                <Card key={link.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center gap-3 flex-wrap">
                          <Badge variant="outline" className="gap-1.5">
                            <Users className="h-3 w-3" />
                            {link.recipientName}
                          </Badge>
                          <Badge variant="secondary" className="gap-1.5">
                            <Eye className="h-3 w-3" />
                            {link.viewCount} {link.viewCount === 1 ? 'view' : 'views'}
                          </Badge>
                          <Badge variant="secondary" className="gap-1.5">
                            <Clock className="h-3 w-3" />
                            {formatRelativeTime(link.expiresAt)}
                          </Badge>
                        </div>

                        <div className="text-sm space-y-1">
                          <p className="text-muted-foreground">
                            Created {formatDate(link.createdAt)}
                          </p>
                          {link.lastViewedAt && (
                            <p className="text-muted-foreground">
                              Last viewed {formatDate(link.lastViewedAt)}
                            </p>
                          )}
                          {link.message && (
                            <p className="text-sm mt-2 italic">"{link.message}"</p>
                          )}
                        </div>

                        <div className="flex items-center gap-2 pt-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => copyLink(link.shareId)}
                            className="gap-2"
                          >
                            <Copy className="h-4 w-4" />
                            Copy Link
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setLinkToRevoke(link.id)}
                            className="gap-2 text-caution hover:text-caution"
                          >
                            <Prohibit className="h-4 w-4" />
                            Revoke Access
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {revokedLinks.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Prohibit className="h-5 w-5 text-muted-foreground" />
              <h3 className="text-lg font-semibold text-muted-foreground">
                Revoked Links ({revokedLinks.length})
              </h3>
            </div>
            <div className="space-y-3">
              {revokedLinks.map((link) => (
                <Card key={link.id} className="opacity-60">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-3 flex-wrap">
                          <Badge variant="outline" className="gap-1.5">
                            <Users className="h-3 w-3" />
                            {link.recipientName}
                          </Badge>
                          <Badge variant="destructive" className="gap-1.5">
                            <Prohibit className="h-3 w-3" />
                            Revoked
                          </Badge>
                        </div>

                        <div className="text-sm space-y-1">
                          <p className="text-muted-foreground">
                            Created {formatDate(link.createdAt)} • Revoked {link.revokedAt ? formatDate(link.revokedAt) : 'recently'}
                          </p>
                          <p className="text-muted-foreground">
                            {link.viewCount} {link.viewCount === 1 ? 'view' : 'views'} before revocation
                          </p>
                        </div>

                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setLinkToDelete(link.id)}
                          className="gap-2 text-destructive hover:text-destructive"
                        >
                          <Trash className="h-4 w-4" />
                          Delete Permanently
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {expiredLinks.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <h3 className="text-lg font-semibold text-muted-foreground">
                Expired Links ({expiredLinks.length})
              </h3>
            </div>
            <div className="space-y-3">
              {expiredLinks.map((link) => (
                <Card key={link.id} className="opacity-60">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-3 flex-wrap">
                          <Badge variant="outline" className="gap-1.5">
                            <Users className="h-3 w-3" />
                            {link.recipientName}
                          </Badge>
                          <Badge variant="secondary" className="gap-1.5">
                            Expired
                          </Badge>
                        </div>

                        <div className="text-sm space-y-1">
                          <p className="text-muted-foreground">
                            Expired {formatDate(link.expiresAt)}
                          </p>
                          <p className="text-muted-foreground">
                            {link.viewCount} total {link.viewCount === 1 ? 'view' : 'views'}
                          </p>
                        </div>

                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setLinkToDelete(link.id)}
                          className="gap-2 text-destructive hover:text-destructive"
                        >
                          <Trash className="h-4 w-4" />
                          Delete
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>

      <AlertDialog open={!!linkToRevoke} onOpenChange={() => setLinkToRevoke(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Revoke Share Link?</AlertDialogTitle>
            <AlertDialogDescription>
              This will immediately prevent anyone from accessing this birth plan using this link. 
              Recipients who have already opened the link will see an error message.
              <br /><br />
              You can delete the link permanently later if needed.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => linkToRevoke && handleRevokeLink(linkToRevoke)}
              className="bg-caution hover:bg-caution/90"
            >
              Revoke Access
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={!!linkToDelete} onOpenChange={() => setLinkToDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Share Link?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete this share link and all associated comments from your records.
              This action cannot be undone.
              <br /><br />
              If the link is still active, revoke it first to prevent access.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => linkToDelete && handleDeleteLink(linkToDelete)}
              className="bg-destructive hover:bg-destructive/90"
            >
              Delete Permanently
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
