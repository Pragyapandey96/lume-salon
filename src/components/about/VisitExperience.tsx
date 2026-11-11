import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import EditorialImage from '@/components/ui/EditorialImage'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { aboutImages, experienceContent, experienceMoments } from '@/config/about'
import { fadeUp, staggerContainer } from '@/lib/motion'

export default function VisitExperience() {
  return (
    <section
      aria-labelledby="visit-heading"
      className="bg-espresso py-section text-ivory/70"
    >
      <Container>
        <SectionHeading
          tone="light"
          eyebrow={experienceContent.eyebrow}
          title={experienceContent.title}
          description={experienceContent.description}
          headingId="visit-heading"
        />

        <div className="mt-16 grid items-start gap-16 lg:mt-20 lg:grid-cols-12 lg:gap-12">
          <Reveal className="relative pb-0 sm:pb-10 lg:col-span-7">
            <EditorialImage
              image={aboutImages.experience}
              tone="dark"
              className="aspect-[3/2] w-full"
            />
            <div className="absolute -bottom-0 left-4 hidden w-[30%] border-8 border-espresso shadow-lift sm:block">
              <EditorialImage
                image={aboutImages.experienceInset}
                tone="dark"
                className="aspect-[3/4] w-full"
              />
            </div>
          </Reveal>

          <motion.ol
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="border-t border-ivory/15 lg:col-span-5"
          >
            {experienceMoments.map((moment, index) => (
              <motion.li
                key={moment.title}
                variants={fadeUp}
                className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-ivory/15 py-7"
              >
                <span
                  aria-hidden="true"
                  className="pt-1 text-eyebrow font-medium text-champagne"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-serif text-2xl text-ivory">{moment.title}</h3>
                  <p className="mt-2 text-sm">{moment.description}</p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </Container>
    </section>
  )
}
