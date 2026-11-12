import type { ImageAsset } from '@/types/media'

export type GalleryCategory = 'hair' | 'skin' | 'spa' | 'bridal'

/** A filter is either one category or "all". */
export type GalleryFilter = 'all' | GalleryCategory

export interface GalleryFilterOption {
  id: GalleryFilter
  label: string
}

export interface GalleryCategoryInfo {
  /** Full category name shown on each photograph. */
  label: string
}

export interface GalleryItem {
  id: string
  category: GalleryCategory
  image: ImageAsset
  /** Short description shown under the photograph and in the viewer. */
  caption: string
  /** Tailwind aspect-ratio class for the tile, e.g. "aspect-[4/5]". */
  aspect: string
  /** Optional crop focus for the tile only, e.g. "object-top". */
  focus?: string
}
