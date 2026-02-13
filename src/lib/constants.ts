import { UrgencyLevel, EvidenceLevel, Stage, Category } from './types'

export const urgencyConfig: Record<UrgencyLevel, { label: string; color: string; description: string }> = {
  'emergency': {
    label: 'Emergency',
    color: 'destructive',
    description: 'Immediate decision required for safety'
  },
  'urgent': {
    label: 'Urgent',
    color: 'caution',
    description: 'Decision needed soon; time-sensitive'
  },
  'routine': {
    label: 'Routine',
    color: 'primary',
    description: 'Standard care; can be discussed'
  },
  'elective': {
    label: 'Elective',
    color: 'secondary',
    description: 'Optional; personal choice'
  }
}

export const evidenceLevelConfig: Record<EvidenceLevel, { label: string; color: string }> = {
  'systematic-review': { label: 'Systematic Review', color: 'evidence' },
  'rct': { label: 'Randomized Controlled Trial', color: 'evidence' },
  'cohort-study': { label: 'Cohort Study', color: 'secondary' },
  'expert-consensus': { label: 'Expert Consensus', color: 'secondary' },
  'case-report': { label: 'Case Report', color: 'muted' }
}

export const stageConfig: Record<Stage, { label: string; description: string }> = {
  'prenatal': {
    label: 'Prenatal',
    description: 'During pregnancy, before labor'
  },
  'labor': {
    label: 'Labor & Delivery',
    description: 'During active labor and birth'
  },
  'postpartum': {
    label: 'Postpartum',
    description: 'After birth (newborn period)'
  },
  'all': {
    label: 'All Stages',
    description: 'Relevant to multiple stages'
  }
}

export const categoryConfig: Record<Category, { label: string; icon: string }> = {
  'vaccination': { label: 'Vaccination', icon: 'Syringe' },
  'screening': { label: 'Screening & Testing', icon: 'MagnifyingGlass' },
  'surgical': { label: 'Surgical Procedure', icon: 'FirstAid' },
  'medication': { label: 'Medication', icon: 'Pill' },
  'monitoring': { label: 'Care & Monitoring', icon: 'Heartbeat' },
  'other': { label: 'Other', icon: 'Dot' }
}

export const formatFrequency = (frequency?: string): string => {
  if (!frequency) return 'Frequency not specified'
  return frequency
}

export const getSeverityColor = (severity: 'mild' | 'moderate' | 'severe'): string => {
  switch (severity) {
    case 'mild':
      return 'text-secondary'
    case 'moderate':
      return 'text-caution-foreground'
    case 'severe':
      return 'text-destructive'
    default:
      return 'text-foreground'
  }
}

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export const calculateDaysSinceReview = (lastReviewed: string): number => {
  const reviewed = new Date(lastReviewed)
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - reviewed.getTime())
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
}

export const isReviewOverdue = (nextReviewDue: string): boolean => {
  const dueDate = new Date(nextReviewDue)
  const now = new Date()
  return now > dueDate
}

export const DISCLAIMER_TEXT = `This tool provides educational information only and is not medical advice. It does not replace consultation with qualified healthcare providers. All medical decisions should be made in partnership with your healthcare team based on your individual circumstances.`

export const VOLUNTARINESS_STATEMENT = `I confirm that I have reviewed this information voluntarily, without pressure, and understand that I have the right to ask questions, request more time, and make decisions that are right for my family in consultation with my healthcare providers.`

export const LANGUAGES = {
  en: 'English',
  es: 'Español'
} as const

export const REFLECTION_TIMER_OPTIONS = [
  { value: 15, label: '15 minutes' },
  { value: 30, label: '30 minutes' },
  { value: 45, label: '45 minutes' },
  { value: 60, label: '1 hour' }
]
