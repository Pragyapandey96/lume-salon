import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import { philosophyContent, principles } from '@/config/about'
import { fadeUp, staggerContainer } from '@/lib/motion'

export default function Philosophy() {
  return (
    <section aria-labelledby="philosophy-heading" className="bg-ivory py-section">
      <Container>
        <SectionHeading
          eyebrow={philosophyContent.eyebrow}
          title={philosophyContent.title}
          description={philosophyContent.description}
          headingId="philosophy-heading"
        />

        <motion.ol
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-16 border-t border-sand lg:mt-20"
        >
          {principles.map((principle, index) => (
            <motion.li
              key={principle.title}
              variants={fadeUp}
              className="grid gap-4 border-b border-sand py-10 md:grid-cols-12 md:gap-8 md:py-14"
            >
              <span
                aria-hidden="true"
                className="font-serif text-xl italic text-champagne-deep md:col-span-1 md:pt-2"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="font-serif text-[clamp(1.75rem,3.2vw,2.75rem)] leading-tight text-espresso md:col-span-6">
                {principle.title}
              </h3>
              <p className="max-w-md text-taupe md:col-span-4 md:col-start-9 md:pt-2">
                {principle.description}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </section>
  )
}
