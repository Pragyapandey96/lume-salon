import { motion } from 'framer-motion'
import { galleryFilters } from '@/config/gallery'
import { cn } from '@/lib/cn'
import { EASE_LUXE } from '@/lib/motion'
import type { GalleryFilter } from '@/types/gallery'

interface GalleryFiltersProps {
  value: GalleryFilter
  onChange: (filter: GalleryFilter) => void
  /** Short, visible summary such as "11 photographs". */
  summary: string
}

/**
 * Category filter. Plain toggle buttons (aria-pressed), so Tab, Enter and
 * Space all work. The row scrolls sideways on narrow screens.
 */
export default function GalleryFilters({ value, onChange, summary }: GalleryFiltersProps) {
  return (
    <div className="sticky top-20 z-30 border-b border-sand/60 bg-ivory/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-page items-center justify-between gap-8 px-gutter">
        <div
          role="group"
          aria-label="Filter photographs by category"
          className="-mx-gutter flex overflow-x-auto px-gutter [scrollbar-width:none] md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden"
        >
          {galleryFilters.map((filter) => {
            const active = filter.id === value
            return (
              <button
                key={filter.id}
                type="button"
                aria-pressed={active}
                onClick={() => onChange(filter.id)}
                className={cn(
                  'relative shrink-0 px-4 py-5 text-eyebrow font-medium uppercase transition-colors duration-500 ease-luxe first:pl-0 focus-visible:-outline-offset-4 sm:px-6 sm:first:pl-0',
                  active ? 'text-espresso' : 'text-taupe hover:text-espresso',
                )}
              >
                <span className="relative inline-block py-1">
                  {filter.label}
                  {active && (
                    <motion.span
                      layoutId="gallery-filter-underline"
                      aria-hidden="true"
                      className="absolute inset-x-0 -bottom-1 h-px bg-champagne-deep"
                      transition={{ duration: 0.5, ease: EASE_LUXE }}
                    />
                  )}
                </span>
              </button>
            )
          })}
        </div>

        <p aria-hidden="true" className="hidden shrink-0 text-sm text-taupe md:block">
          {summary}
        </p>
      </div>
      <p role="status" className="sr-only">
        {summary}
      </p>
    </div>
  )
}
