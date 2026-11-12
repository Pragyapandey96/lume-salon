import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import EditorialImage from '@/components/ui/EditorialImage'
import { galleryHeroContent } from '@/config/gallery'
import { EASE_LUXE, fadeUp, staggerContainer } from '@/lib/motion'

export default function GalleryHero() {
  return (
    <section
      aria-labelledby="gallery-page-heading"
      className="relative overflow-hidden bg-ivory pb-section pt-32 lg:pt-40"
    >
      <Container className="grid items-center gap-16 lg:grid-cols-12 lg:gap-12">
        <motion.div
          className="lg:col-span-6"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={fadeUp}
            className="flex items-center gap-4 text-eyebrow font-medium uppercase text-champagne-deep"
          >
            <span aria-hidden="true" className="h-px w-10 bg-champagne" />
            {galleryHeroContent.eyebrow}
          </motion.p>

          <motion.h1
            id="gallery-page-heading"
            variants={fadeUp}
            className="mt-8 font-serif text-[clamp(2.75rem,5.6vw,5rem)] leading-[1.04] tracking-[-0.02em] text-espresso"
          >
            A closer look at
            <span className="mt-2 block italic text-champagne-deep">
              the Lumé experience.
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-8 max-w-md text-lg text-taupe">
            {galleryHeroContent.description}
          </motion.p>

          <motion.a
            variants={fadeUp}
            href="#photographs"
            className="mt-10 inline-block border-b border-champagne pb-1 text-eyebrow font-medium uppercase text-espresso transition-colors duration-500 ease-luxe hover:text-champagne-deep"
          >
            Browse the gallery
          </motion.a>
        </motion.div>

        <motion.div
          className="relative lg:col-span-6"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: EASE_LUXE, delay: 0.15 }}
        >
          <div
            aria-hidden="true"
            className="absolute -bottom-4 -left-4 hidden size-full border border-champagne/60 sm:block"
          />
          <EditorialImage
            image={galleryHeroContent.image}
            priority
            tone="warm"
            className="aspect-[4/3] w-full lg:aspect-[5/4]"
          />
        </motion.div>
      </Container>
    </section>
  )
}
