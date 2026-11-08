import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import {
  testimonials,
  testimonialsFootnote,
  testimonialsIntro,
} from '@/config/home'
import type { Testimonial } from '@/types/home'
import { fadeUp, staggerContainer } from '@/lib/motion'

function SampleTag() {
  return (
    <span className="border border-champagne/50 px-1.5 py-0.5 text-[0.5625rem] uppercase leading-none tracking-[0.2em] text-champagne-deep">
      Sample
    </span>
  )
}

function Attribution({ item }: { item: Testimonial }) {
  return (
    <figcaption className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
      <span className="font-medium text-espresso">{item.author}</span>
      <span aria-hidden="true" className="h-px w-5 bg-champagne" />
      <span className="text-taupe">{item.context}</span>
      <SampleTag />
    </figcaption>
  )
}

export default function Testimonials() {
  const [featured, ...others] = testimonials

  return (
    <section aria-labelledby="testimonials-heading" className="bg-cream py-section">
      <Container className="grid gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <SectionHeading
            eyebrow={testimonialsIntro.eyebrow}
            title={testimonialsIntro.title}
            description={testimonialsIntro.description}
            headingId="testimonials-heading"
          />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="lg:col-span-8"
        >
          <motion.figure variants={fadeUp}>
            <Quote
              className="size-10 text-champagne"
              strokeWidth={1}
              aria-hidden="true"
            />
            <blockquote className="mt-6 font-serif text-[clamp(1.625rem,3vw,2.5rem)] italic leading-snug text-espresso">
              <p>{featured.quote}</p>
            </blockquote>
            <Attribution item={featured} />
          </motion.figure>

          <div className="mt-14 grid gap-10 border-t border-sand/70 pt-10 md:grid-cols-2 md:gap-12">
            {others.map((item) => (
              <motion.figure key={item.context} variants={fadeUp}>
                <blockquote className="font-serif text-xl leading-snug text-espresso">
                  <p>{item.quote}</p>
                </blockquote>
                <Attribution item={item} />
              </motion.figure>
            ))}
          </div>

          <p className="mt-12 text-xs text-taupe">{testimonialsFootnote}</p>
        </motion.div>
      </Container>
    </section>
  )
}
