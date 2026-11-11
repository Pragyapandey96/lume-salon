import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import EditorialImage from '@/components/ui/EditorialImage'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { images } from '@/config/images'
import { cn } from '@/lib/cn'
import { fadeUp, staggerContainer } from '@/lib/motion'
import type { ServiceDisciplineContent } from '@/types/services'

interface ServiceDisciplineProps {
  discipline: ServiceDisciplineContent
  imageSide: 'left' | 'right'
  background: 'ivory' | 'cream'
}

/** One service discipline: editorial photograph beside its offerings. */
export default function ServiceDiscipline({
  discipline,
  imageSide,
  background,
}: ServiceDisciplineProps) {
  const headingId = `${discipline.id}-heading`
  const imageLeft = imageSide === 'left'

  return (
    <section
      id={discipline.id}
      aria-labelledby={headingId}
      className={cn(
        'scroll-mt-20 py-section',
        background === 'cream' ? 'bg-cream' : 'bg-ivory',
      )}
    >
      <Container className="grid items-start gap-14 lg:grid-cols-12 lg:gap-12">
        <Reveal
          className={cn(
            'relative mx-auto w-full max-w-md lg:sticky lg:top-28 lg:row-start-1 lg:col-span-5 lg:max-w-none',
            imageLeft ? 'lg:col-start-1' : 'lg:col-start-8',
          )}
        >
          <div
            aria-hidden="true"
            className={cn(
              'absolute -bottom-4 hidden size-full border border-champagne/60 sm:block',
              imageLeft ? '-right-4' : '-left-4',
            )}
          />
          <EditorialImage
            image={images[discipline.image]}
            tone="warm"
            imgClassName={discipline.imagePosition}
            className="aspect-[3/4] w-full"
          />
        </Reveal>

        <div
          className={cn(
            'lg:row-start-1 lg:col-span-6',
            imageLeft ? 'lg:col-start-7' : 'lg:col-start-1',
          )}
        >
          <SectionHeading
            eyebrow={discipline.eyebrow}
            title={discipline.title}
            description={discipline.description}
            headingId={headingId}
          />

          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="mt-10 border-t border-sand/70"
          >
            {discipline.offerings.map((offering) => (
              <motion.li
                key={offering.title}
                variants={fadeUp}
                className="border-b border-sand/70 py-6"
              >
                <h3 className="font-serif text-2xl text-espresso">
                  {offering.title}
                </h3>
                <p className="mt-2 max-w-lg text-sm text-taupe">
                  {offering.description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          <Reveal className="mt-10">
            <Button to="/contact" size="lg" className="w-full sm:w-auto">
              {discipline.ctaLabel}
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
