import { AnimatePresence, motion } from 'framer-motion'
import EditorialImage from '@/components/ui/EditorialImage'
import { galleryCategories } from '@/config/gallery'
import { cn } from '@/lib/cn'
import { fadeUp, staggerContainer } from '@/lib/motion'
import type { GalleryFilter, GalleryItem } from '@/types/gallery'

interface GalleryGridProps {
  items: GalleryItem[]
  /** Changing this key swaps the list with a short cross-fade. */
  filter: GalleryFilter
  onOpen: (id: string) => void
}

const tones = ['light', 'warm'] as const

/**
 * Editorial masonry: CSS columns let tiles keep their own proportions
 * while the columns settle to uneven heights.
 */
export default function GalleryGrid({ items, filter, onOpen }: GalleryGridProps) {
  return (
    <div className="min-h-[70svh]">
      <AnimatePresence mode="wait">
        <motion.ul
          key={filter}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: { duration: 0.25 } }}
          className="columns-2 gap-x-4 sm:gap-x-6 lg:columns-3 lg:gap-x-10"
        >
          {items.map((item, index) => {
            const categoryLabel = galleryCategories[item.category].label
            return (
              <motion.li
                key={item.id}
                variants={fadeUp}
                className="mb-10 break-inside-avoid sm:mb-14"
              >
                <button
                  type="button"
                  onClick={() => onOpen(item.id)}
                  aria-label={`View larger: ${item.caption} (${categoryLabel})`}
                  aria-haspopup="dialog"
                  className="group block w-full cursor-zoom-in text-left"
                >
                  <EditorialImage
                    image={item.image}
                    decorative
                    tone={tones[index % tones.length]}
                    className={cn('w-full', item.aspect)}
                    imgClassName={cn(
                      'transition-transform duration-[1400ms] ease-luxe group-hover:scale-[1.04] group-focus-visible:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100 motion-reduce:group-focus-visible:scale-100',
                      item.focus,
                    )}
                  />
                  <span className="mt-4 block text-eyebrow font-medium uppercase text-champagne-deep max-sm:text-[0.625rem] max-sm:tracking-[0.14em]">
                    {categoryLabel}
                  </span>
                  <span className="mt-1 block font-serif text-lg leading-snug text-espresso sm:text-xl">
                    {item.caption}
                  </span>
                </button>
              </motion.li>
            )
          })}
        </motion.ul>
      </AnimatePresence>
    </div>
  )
}
