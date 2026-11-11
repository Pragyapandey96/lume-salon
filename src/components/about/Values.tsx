import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import { values, valuesContent } from '@/config/about'
import { fadeUp, staggerContainer } from '@/lib/motion'

export default function Values() {
  return (
    <section aria-labelledby="values-heading" className="bg-cream py-section">
      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <SectionHeading
            eyebrow={valuesContent.eyebrow}
            title={valuesContent.title}
            headingId="values-heading"
          />
        </div>

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid border-t border-sand sm:grid-cols-2 lg:col-span-8"
        >
          {values.map((value) => (
            <motion.li
              key={value.title}
              variants={fadeUp}
              className="border-b border-sand py-10 sm:px-8 sm:odd:pl-0 sm:even:border-l sm:even:border-sand sm:even:pr-0"
            >
              <span
                aria-hidden="true"
                className="block h-px w-8 bg-champagne"
              />
              <h3 className="mt-6 font-serif text-[clamp(2rem,3.4vw,2.75rem)] leading-none text-espresso">
                {value.title}
              </h3>
              <p className="mt-4 max-w-xs text-sm text-taupe">
                {value.description}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  )
}
