import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import EditorialImage from '@/components/ui/EditorialImage'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { galleryIntro, galleryTiles } from '@/config/home'
import { images } from '@/config/images'
import { cn } from '@/lib/cn'
import { fadeUp, staggerContainer } from '@/lib/motion'

const tones = ['light', 'warm', 'light', 'warm', 'warm', 'light'] as const

export default function GalleryPreview() {
  return (
    <section aria-labelledby="gallery-heading" className="bg-ivory py-section">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow={galleryIntro.eyebrow}
            title={galleryIntro.title}
            description={galleryIntro.description}
            headingId="gallery-heading"
          />
          <Button to="/gallery" variant="secondary" className="self-start md:self-auto">
            View the Gallery
          </Button>
        </div>

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-14 grid grid-cols-2 items-start gap-3 sm:gap-5 md:grid-cols-12 md:gap-6"
        >
          {galleryTiles.map((tile, index) => (
            <motion.li
              key={tile.image}
              variants={fadeUp}
              className={cn('group overflow-hidden', tile.placement)}
            >
              <EditorialImage
                image={images[tile.image]}
                tone={tones[index % tones.length]}
                className={cn(
                  'w-full transition-transform duration-[1400ms] ease-luxe group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100',
                  tile.aspect,
                )}
              />
            </motion.li>
          ))}
        </motion.ul>

        <Reveal className="mt-14 text-center">
          <Button to="/gallery" size="lg">
            Explore the Full Gallery
          </Button>
        </Reveal>
      </Container>
    </section>
  )
}
