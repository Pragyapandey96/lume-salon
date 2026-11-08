import type { LucideIcon } from 'lucide-react'
import type { ImageKey } from '@/config/images'

export interface TrustStat {
  icon: LucideIcon
  value: string
  label: string
  description: string
}

export interface ServiceHighlight {
  number: string
  title: string
  description: string
  image: ImageKey
}

export interface Principle {
  title: string
  description: string
}

export interface Pillar {
  icon: LucideIcon
  title: string
  description: string
}

export interface GalleryTile {
  image: ImageKey
  /** Grid column span and vertical offset for the tile. */
  placement: string
  /** Aspect ratio of the photograph, e.g. "aspect-[4/5]". */
  aspect: string
}

export interface Testimonial {
  quote: string
  author: string
  context: string
}
