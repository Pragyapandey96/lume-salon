import { AnimatePresence } from 'framer-motion'
import { useMemo, useRef, useState } from 'react'
import GalleryFilters from '@/components/gallery/GalleryFilters'
import GalleryGrid from '@/components/gallery/GalleryGrid'
import Lightbox from '@/components/gallery/Lightbox'
import Container from '@/components/ui/Container'
import { galleryCategories, galleryItems } from '@/config/gallery'
import type { GalleryFilter } from '@/types/gallery'

/** Owns the filter and lightbox state and wires the three pieces together. */
export default function GalleryBrowser() {
  const [filter, setFilter] = useState<GalleryFilter>('all')
  const [activeId, setActiveId] = useState<string | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const visible = useMemo(
    () =>
      filter === 'all'
        ? galleryItems
        : galleryItems.filter((item) => item.category === filter),
    [filter],
  )

  const activeIndex =
    activeId === null ? -1 : visible.findIndex((item) => item.id === activeId)

  const summary = `${visible.length} ${visible.length === 1 ? 'photograph' : 'photographs'}${
    filter === 'all' ? '' : ` · ${galleryCategories[filter].label}`
  }`

  const handleFilter = (next: GalleryFilter) => {
    if (next === filter) return
    setFilter(next)
    // If the filter bar is stuck to the top, bring the new set into view.
    const top = sectionRef.current?.getBoundingClientRect().top ?? 0
    if (top < 80) sectionRef.current?.scrollIntoView({ block: 'start' })
  }

  return (
    <section
      id="photographs"
      ref={sectionRef}
      aria-labelledby="gallery-photographs-heading"
      className="scroll-mt-20 bg-ivory"
    >
      <h2 id="gallery-photographs-heading" className="sr-only">
        Photographs
      </h2>
      <GalleryFilters value={filter} onChange={handleFilter} summary={summary} />

      <Container className="py-section">
        <GalleryGrid items={visible} filter={filter} onOpen={setActiveId} />
      </Container>

      <AnimatePresence>
        {activeIndex >= 0 && (
          <Lightbox
            key="lightbox"
            items={visible}
            index={activeIndex}
            onClose={() => setActiveId(null)}
            onIndexChange={(next) => setActiveId(visible[next].id)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
