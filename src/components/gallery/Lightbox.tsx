import { AnimatePresence, motion, type PanInfo } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useCallback, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import EditorialImage from '@/components/ui/EditorialImage'
import { galleryCategories } from '@/config/gallery'
import { EASE_LUXE } from '@/lib/motion'
import type { GalleryItem } from '@/types/gallery'

interface LightboxProps {
  /** The photographs currently shown in the gallery, in order. */
  items: GalleryItem[]
  index: number
  onClose: () => void
  onIndexChange: (index: number) => void
}

const SWIPE_DISTANCE = 60

const controlClass =
  'size-12 shrink-0 items-center justify-center border border-ivory/30 text-ivory transition-colors duration-500 ease-luxe hover:border-ivory hover:bg-ivory hover:text-espresso focus-visible:outline-champagne-light'

/**
 * Full-screen photograph viewer. Rendered in a portal as a modal dialog:
 * focus moves in and is trapped, Escape closes, the arrow keys step through
 * the photographs, and page scrolling is locked until it closes.
 */
export default function Lightbox({ items, index, onClose, onIndexChange }: LightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  const count = items.length
  const hasMany = count > 1
  const item = items[index]

  const step = useCallback(
    (delta: number) => onIndexChange((index + delta + count) % count),
    [index, count, onIndexChange],
  )

  // Lock page scroll, move focus into the dialog, and undo both on close.
  useEffect(() => {
    const trigger = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const { overflow, paddingRight } = document.body.style
    const scrollbar = window.innerWidth - document.documentElement.clientWidth

    document.body.style.overflow = 'hidden'
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`
    closeRef.current?.focus()

    return () => {
      document.body.style.overflow = overflow
      document.body.style.paddingRight = paddingRight
      trigger?.focus({ preventScroll: true })
    }
  }, [])

  // Keyboard: Escape, left/right arrows, and a Tab focus trap.
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
      } else if (event.key === 'ArrowRight' && hasMany) {
        event.preventDefault()
        step(1)
      } else if (event.key === 'ArrowLeft' && hasMany) {
        event.preventDefault()
        step(-1)
      } else if (event.key === 'Tab') {
        // Only buttons that are actually displayed (some are mobile-only).
        const focusable = Array.from(
          dialogRef.current?.querySelectorAll<HTMLElement>('button:not([disabled])') ?? [],
        ).filter((el) => el.getClientRects().length > 0)
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        const active = document.activeElement
        if (!dialogRef.current?.contains(active)) {
          event.preventDefault()
          first.focus()
        } else if (event.shiftKey && active === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && active === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [hasMany, onClose, step])

  // Warm the cache for the neighbouring photographs.
  useEffect(() => {
    if (!hasMany) return
    for (const delta of [1, -1]) {
      const neighbour = items[(index + delta + count) % count]
      new Image().src = neighbour.image.src
    }
  }, [hasMany, index, count, items])

  const onDragEnd = (_event: unknown, info: PanInfo) => {
    if (!hasMany) return
    if (info.offset.x < -SWIPE_DISTANCE) step(1)
    else if (info.offset.x > SWIPE_DISTANCE) step(-1)
  }

  const ratio = item.image.width / item.image.height
  const categoryLabel = galleryCategories[item.category].label

  return createPortal(
    <motion.div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Photograph viewer"
      className="fixed inset-0 z-[60] flex flex-col overscroll-contain bg-espresso/95 text-ivory backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: EASE_LUXE }}
    >
      <div className="flex items-center justify-between px-gutter py-4">
        <p className="text-eyebrow font-medium uppercase text-champagne">
          {String(index + 1).padStart(2, '0')}
          <span aria-hidden="true"> / </span>
          <span className="sr-only"> of </span>
          {String(count).padStart(2, '0')}
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close photograph viewer"
          className={`${controlClass} inline-flex`}
        >
          <X className="size-5" strokeWidth={1.25} aria-hidden="true" />
        </button>
      </div>

      <div
        className="relative flex min-h-0 flex-1 items-center justify-center px-4 md:px-24"
        onClick={(event) => {
          if (event.target === event.currentTarget) onClose()
        }}
      >
        {hasMany && (
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Previous photograph"
            className={`${controlClass} absolute left-6 top-1/2 hidden -translate-y-1/2 md:inline-flex`}
          >
            <ChevronLeft className="size-5" strokeWidth={1.25} aria-hidden="true" />
          </button>
        )}

        <AnimatePresence mode="wait" initial={false}>
          <motion.figure
            key={item.id}
            className="flex w-full justify-center"
            drag={hasMany ? 'x' : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.3}
            onDragEnd={onDragEnd}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE_LUXE }}
          >
            <div
              style={{
                aspectRatio: `${item.image.width} / ${item.image.height}`,
                width: `min(100%, calc((100dvh - 15rem) * ${ratio.toFixed(4)}), ${item.image.width * 2}px)`,
              }}
            >
              <EditorialImage image={item.image} priority tone="dark" className="size-full" />
            </div>
          </motion.figure>
        </AnimatePresence>

        {hasMany && (
          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Next photograph"
            className={`${controlClass} absolute right-6 top-1/2 hidden -translate-y-1/2 md:inline-flex`}
          >
            <ChevronRight className="size-5" strokeWidth={1.25} aria-hidden="true" />
          </button>
        )}
      </div>

      <div className="flex items-center justify-between gap-4 px-gutter pb-6 pt-4">
        {hasMany && (
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Previous photograph"
            className={`${controlClass} inline-flex md:hidden`}
          >
            <ChevronLeft className="size-5" strokeWidth={1.25} aria-hidden="true" />
          </button>
        )}
        <div aria-live="polite" className="flex-1 text-center">
          <p className="text-eyebrow font-medium uppercase text-champagne">{categoryLabel}</p>
          <p className="mt-1 font-serif text-xl text-ivory">{item.caption}</p>
          <p className="sr-only">{item.image.alt}</p>
        </div>
        {hasMany && (
          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Next photograph"
            className={`${controlClass} inline-flex md:hidden`}
          >
            <ChevronRight className="size-5" strokeWidth={1.25} aria-hidden="true" />
          </button>
        )}
      </div>
    </motion.div>,
    document.body,
  )
}
