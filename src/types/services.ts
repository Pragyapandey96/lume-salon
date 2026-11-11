import type { LucideIcon } from 'lucide-react'
import type { ImageKey } from '@/config/images'

export interface ServiceOffering {
  title: string
  description: string
}

export interface ServiceDisciplineContent {
  /** Anchor id, e.g. "hair" -> /services#hair. */
  id: string
  number: string
  /** Short name used in the page index. */
  name: string
  /** One line shown in the page index. */
  summary: string
  eyebrow: string
  title: string
  description: string
  offerings: ServiceOffering[]
  image: ImageKey
  /** Tailwind object-position class that keeps faces in frame when cropped. */
  imagePosition: string
  ctaLabel: string
}

export interface ApproachStep {
  icon: LucideIcon
  title: string
  description: string
}
