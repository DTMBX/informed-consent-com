import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { Check, Copy, ShareNetwork, Link as LinkIcon, UserCircle } from '@phosphor-icons/react'
import { toast } from 'sonner'

interface BirthPlanShareProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  birthPlanData: string
  parentName: string
}

export function BirthPlanShare({ open, onOpenChange, birthPlanData, parentName }: BirthPlanShareProps) {
  const [shareId, setShareId] = useState<string | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [copied, setCopied] = useState(false)
  const [recipientName, setRecipientName] = useState('')
  const [message, setMessage] = useState('')

  const generateShareLink = async () => {
    setIsGenerating(true)
    try {
      const id = `bp-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`
      
      const shareData = {
        id,
        birthPlanDocument: birthPlanData,
        parentName,
        sharedAt: new Date().toISOString(),
        recipientName: recipientName || 'Partner/Support Person',
        message: message || '',
        expiresAt: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString()
      }

      await window.spark.kv.set(`shared-birth-plan-${id}`, shareData)
      
      setShareId(id)
      toast.success('Share link created successfully')
    } catch (error) {
      toast.error('Failed to create share link')
      console.error(error)
    } finally {
      setIsGenerating(false)
    }
  }

  const shareLink = shareId 
    ? `${window.location.origin}${window.location.pathname}?share=${shareId}`
    : ''

  const copyToClipboard = async () => {
    if (!shareLink) return
    
    try {
      await navigator.clipboard.writeText(shareLink)
      setCopied(true)
      toast.success('Link copied to clipboard')
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      toast.error('Failed to copy link')
    }
  }

  const shareViaEmail = () => {
    if (!shareLink) return
    
    const subject = encodeURIComponent(`${parentName}'s Birth Plan`)
    const body = encodeURIComponent(
      `Hi ${recipientName || 'there'},\n\n` +
      `${message || `I wanted to share my birth plan with you so we're on the same page.`}\n\n` +
      `View my birth plan here:\n${shareLink}\n\n` +
      `This link will be available for 90 days.\n\n` +
      `- ${parentName}`
    )
    
    window.open(`mailto:?subject=${subject}&body=${body}`, '_blank')
    toast.success('Opening email client')
  }

  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setShareId(null)
        setCopied(false)
      }, 300)
    }
  }, [open])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ShareNetwork className="h-5 w-5" />
            Share Birth Plan
          </DialogTitle>
          <DialogDescription>
            Create a secure link to share your birth plan with partners, doulas, or support persons
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {!shareId ? (
            <>
              <Card className="bg-accent/10">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">
                      <LinkIcon className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <div className="space-y-2 text-sm">
                      <p className="font-medium">About Sharing</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Share links are valid for 90 days</li>
                        <li>• Recipients can view but not edit your birth plan</li>
                        <li>• No account required to view shared plans</li>
                        <li>• Links can be shared with multiple people</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="recipient-name">
                    Recipient Name <span className="text-muted-foreground">(Optional)</span>
                  </Label>
                  <div className="flex items-center gap-2">
                    <UserCircle className="h-5 w-5 text-muted-foreground" />
                    <Input
                      id="recipient-name"
                      placeholder="e.g., Partner's name, Doula, Mom"
                      value={recipientName}
                      onChange={(e) => setRecipientName(e.target.value)}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    This helps personalize the share link message
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">
                    Personal Message <span className="text-muted-foreground">(Optional)</span>
                  </Label>
                  <textarea
                    id="message"
                    className="w-full min-h-[80px] px-3 py-2 rounded-md border border-input bg-background text-sm resize-none"
                    placeholder="e.g., I'd love for you to review this before our next appointment..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
              </div>

              <Button 
                onClick={generateShareLink} 
                disabled={isGenerating}
                className="w-full"
              >
                {isGenerating ? 'Creating Link...' : 'Create Share Link'}
              </Button>
            </>
          ) : (
            <>
              <Card className="bg-evidence/10">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">
                      <Check className="h-5 w-5 text-evidence" />
                    </div>
                    <div className="space-y-2 text-sm">
                      <p className="font-medium text-evidence-foreground">Share Link Created!</p>
                      <p className="text-muted-foreground">
                        Your birth plan can now be viewed by anyone with this link. The link expires in 90 days.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-2">
                <Label>Share Link</Label>
                <div className="flex gap-2">
                  <Input
                    value={shareLink}
                    readOnly
                    className="font-mono text-sm"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={copyToClipboard}
                    className="shrink-0"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-evidence" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1 gap-2"
                  onClick={shareViaEmail}
                >
                  <ShareNetwork className="h-4 w-4" />
                  Share via Email
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 gap-2"
                  onClick={copyToClipboard}
                >
                  <Copy className="h-4 w-4" />
                  {copied ? 'Copied!' : 'Copy Link'}
                </Button>
              </div>

              <Card className="bg-muted/50">
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground">
                    <strong>Tip:</strong> You can create multiple share links if needed. Each link works independently and can be shared with different people.
                  </p>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
