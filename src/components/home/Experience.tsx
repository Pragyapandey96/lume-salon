import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import EditorialImage from '@/components/ui/EditorialImage'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { experienceContent, experiencePillars } from '@/config/home'
import { images } from '@/config/images'
import { fadeUp, staggerContainer } from '@/lib/motion'

export default function Experience() {
  return (
    <section
      aria-labelledby="experience-heading"
      className="bg-espresso py-section text-ivory/70"
    >
      <Container>
        <SectionHeading
          tone="light"
          eyebrow={experienceContent.eyebrow}
          title={experienceContent.title}
          description={experienceContent.description}
          headingId="experience-heading"
        />

        <Reveal className="mt-14 lg:mt-20">
          <EditorialImage
            image={images.experience}
            tone="dark"
            className="aspect-[4/3] w-full md:aspect-[21/9]"
          />
        </Reveal>

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10"
        >
          {experiencePillars.map((pillar, index) => (
            <motion.li
              key={pillar.title}
              variants={fadeUp}
              className="border-t border-ivory/15 pt-8"
            >
              <div className="flex items-center justify-between">
                <pillar.icon
                  className="size-6 text-champagne"
                  strokeWidth={1.25}
                  aria-hidden="true"
                />
                <span className="text-eyebrow font-medium text-champagne/70">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-8 font-serif text-title text-ivory">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm">{pillar.description}</p>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  )
}
