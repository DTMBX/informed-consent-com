export type EvidenceLevel = 'systematic-review' | 'rct' | 'cohort-study' | 'expert-consensus' | 'case-report'

export type UrgencyLevel = 'emergency' | 'urgent' | 'routine' | 'elective'

export type Stage = 'prenatal' | 'labor' | 'postpartum' | 'all'

export type UserRole = 'parent' | 'clinician' | 'clinical-reviewer' | 'admin'

export type Category = 'vaccination' | 'screening' | 'surgical' | 'medication' | 'monitoring' | 'other'

export interface EvidenceCitation {
  id: string
  title: string
  authors: string
  source: string
  date: string
  url?: string
  evidenceLevel: EvidenceLevel
}

export interface RiskItem {
  id: string
  description: string
  frequency?: string
  severity: 'mild' | 'moderate' | 'severe'
  citations: string[]
}

export interface BenefitItem {
  id: string
  description: string
  citations: string[]
}

export interface AlternativeOption {
  id: string
  name: string
  description: string
  isEquivalent: boolean
  benefits: BenefitItem[]
  risks: RiskItem[]
  evidenceLevel: EvidenceLevel
  citations: string[]
}

export interface Contraindication {
  id: string
  condition: string
  severity: 'absolute' | 'relative'
  explanation: string
  citations: string[]
}

export interface Procedure {
  id: string
  name: string
  shortName: string
  category: Category
  stage: Stage
  urgencyLevel: UrgencyLevel
  summary: string
  indication: string
  benefits: BenefitItem[]
  risks: RiskItem[]
  alternatives: AlternativeOption[]
  whatIfWeWait: string
  contraindications: Contraindication[]
  questionsToAsk: string[]
  citations: EvidenceCitation[]
  lastReviewed: string
  nextReviewDue: string
  reviewedBy?: string
}

export interface ReflectionEntry {
  id: string
  procedureIds: string[]
  notes: string
  questions: string[]
  timerMinutes?: number
  timerStarted?: string
  createdAt: string
  updatedAt: string
}

export interface DecisionSummary {
  id: string
  procedureIds: string[]
  proceduresReviewed: string[]
  questionsAsked: string[]
  sourcesViewed: string[]
  reflectionNotes: string
  voluntarinessStatement: string
  createdAt: string
  exportFormat: 'pdf' | 'text'
}

export interface UserPreferences {
  language: 'en' | 'es'
  stage: Stage
  savedProcedures: string[]
  completedOnboarding: boolean
}

export interface SharedBirthPlanLink {
  id: string
  shareId: string
  birthPlanVersionId: string
  recipientName: string
  message: string
  createdAt: string
  expiresAt: string
  revokedAt?: string
  isRevoked: boolean
  viewCount: number
  lastViewedAt?: string
}

export interface BirthPlanComment {
  id: string
  shareId: string
  commenterName: string
  commenterEmail?: string
  content: string
  isQuestion: boolean
  isResolved: boolean
  createdAt: string
  resolvedAt?: string
  resolvedBy?: string
  parentCommentId?: string
  readByOwner?: boolean
  readByOwnerAt?: string
}

export interface BirthPlanVersion {
  id: string
  birthPlanDocument: string
  parentName: string
  preferences: any
  version: number
  createdAt: string
  createdBy: string
  changeNotes?: string
  previousVersionId?: string
}

export interface AuditEntry {
  id: string
  timestamp: string
  userId: string
  userRole: UserRole
  action: 'create' | 'update' | 'delete' | 'approve' | 'reject'
  entityType: 'procedure' | 'citation' | 'alternative'
  entityId: string
  changes: Record<string, any>
  rationale: string
}
