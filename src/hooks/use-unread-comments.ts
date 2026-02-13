import { useState, useEffect } from 'react'
import { useKV } from '@/lib/kv'
import { SharedBirthPlanLink, BirthPlanComment } from '@/lib/types'

export function useUnreadComments() {
  const [sharedLinks] = useKV<SharedBirthPlanLink[]>('shared-birth-plan-links', [])
  const [unreadCount, setUnreadCount] = useState(0)
  const [loading, setLoading] = useState(true)
  const [lastCheck, setLastCheck] = useState<string | null>(null)

  useEffect(() => {
    loadUnreadCount()
  }, [sharedLinks])

  const loadUnreadCount = async () => {
    try {
      const links = sharedLinks || []
      const activeLinks = links.filter(link => !link.isRevoked && new Date(link.expiresAt) > new Date())
      
      let totalUnread = 0

      for (const link of activeLinks) {
        const comments = await window.spark.kv.get<BirthPlanComment[]>(`birth-plan-comments-${link.shareId}`) || []
        const unreadComments = comments.filter(c => !c.readByOwner)
        totalUnread += unreadComments.length
      }

      setUnreadCount(totalUnread)
    } catch (error) {
      console.error('Failed to load unread count:', error)
    } finally {
      setLoading(false)
    }
  }

  const markAllAsRead = async (shareId: string) => {
    try {
      const comments = await window.spark.kv.get<BirthPlanComment[]>(`birth-plan-comments-${shareId}`) || []
      const updatedComments = comments.map(c => ({
        ...c,
        readByOwner: true,
        readByOwnerAt: new Date().toISOString()
      }))
      
      await window.spark.kv.set(`birth-plan-comments-${shareId}`, updatedComments)
      await loadUnreadCount()
    } catch (error) {
      console.error('Failed to mark comments as read:', error)
    }
  }

  const markCommentAsRead = async (shareId: string, commentId: string) => {
    try {
      const comments = await window.spark.kv.get<BirthPlanComment[]>(`birth-plan-comments-${shareId}`) || []
      const updatedComments = comments.map(c => 
        c.id === commentId 
          ? { ...c, readByOwner: true, readByOwnerAt: new Date().toISOString() }
          : c
      )
      
      await window.spark.kv.set(`birth-plan-comments-${shareId}`, updatedComments)
      await loadUnreadCount()
    } catch (error) {
      console.error('Failed to mark comment as read:', error)
    }
  }

  const refresh = () => {
    loadUnreadCount()
  }

  return {
    unreadCount,
    loading,
    markAllAsRead,
    markCommentAsRead,
    refresh
  }
}
