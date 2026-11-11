import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import EditorialImage from '@/components/ui/EditorialImage'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { approachContent, approachSteps } from '@/config/services'
import { images } from '@/config/images'
import { fadeUp, staggerContainer } from '@/lib/motion'

export default function ApproachSection() {
  return (
    <section
      aria-labelledby="approach-heading"
      className="bg-beige/50 py-section"
    >
      <Container className="grid gap-16 lg:grid-cols-12 lg:gap-12">
        <Reveal className="relative mx-auto w-full max-w-md lg:sticky lg:top-28 lg:col-span-5 lg:max-w-none lg:self-start">
          <div
            aria-hidden="true"
            className="absolute -bottom-4 -right-4 hidden size-full border border-champagne/60 sm:block"
          />
          <EditorialImage
            image={images.about}
            tone="warm"
            className="aspect-[4/5] w-full"
          />
        </Reveal>

        <div className="lg:col-span-6 lg:col-start-7">
          <SectionHeading
            eyebrow={approachContent.eyebrow}
            title={approachContent.title}
            description={approachContent.description}
            headingId="approach-heading"
          />

          <motion.ol
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="mt-12 border-t border-sand"
          >
            {approachSteps.map((step, index) => (
              <motion.li
                key={step.title}
                variants={fadeUp}
                className="grid grid-cols-[auto_1fr] gap-6 border-b border-sand py-10 sm:gap-10"
              >
                <span
                  aria-hidden="true"
                  className="font-serif text-6xl leading-none text-champagne"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <div className="flex items-center gap-3">
                    <step.icon
                      className="size-5 text-champagne-deep"
                      strokeWidth={1.25}
                      aria-hidden="true"
                    />
                    <h3 className="font-serif text-title text-espresso">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-3 max-w-md text-sm text-taupe">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </Container>
    </section>
  )
}
