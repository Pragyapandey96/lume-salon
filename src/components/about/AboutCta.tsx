import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import EditorialImage from '@/components/ui/EditorialImage'
import { aboutCtaContent, aboutImages } from '@/config/about'
import { fadeUp, staggerContainer } from '@/lib/motion'

export default function AboutCta() {
  return (
    <section
      aria-labelledby="about-cta-heading"
      className="relative isolate overflow-hidden border-b border-champagne/30 bg-espresso py-section"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-20">
        <EditorialImage
          image={aboutImages.cta}
          decorative
          showLabel={false}
          tone="dark"
          className="size-full"
        />
      </div>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-espresso/80" />

      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mx-auto max-w-3xl py-8 text-center lg:py-16"
        >
          <motion.p
            variants={fadeUp}
            className="flex items-center justify-center gap-4 text-eyebrow font-medium uppercase text-champagne"
          >
            <span aria-hidden="true" className="h-px w-10 bg-champagne/70" />
            {aboutCtaContent.eyebrow}
            <span aria-hidden="true" className="h-px w-10 bg-champagne/70" />
          </motion.p>
          <motion.h2
            id="about-cta-heading"
            variants={fadeUp}
            className="mt-6 text-balance font-serif text-headline text-ivory"
          >
            {aboutCtaContent.title}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-xl text-lg text-ivory/75"
          >
            {aboutCtaContent.description}
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center"
          >
            <Button to="/contact" variant="light" size="lg">
              Book an Appointment
            </Button>
            {/* Outlined-on-dark link; the shared Button has no variant for dark backgrounds. */}
            <Link
              to="/services"
              className="inline-flex h-14 items-center justify-center whitespace-nowrap border border-ivory/40 px-10 font-sans text-[0.8125rem] font-medium uppercase tracking-[0.22em] text-ivory transition-colors duration-500 ease-luxe hover:border-ivory hover:bg-ivory hover:text-espresso"
            >
              Explore Services
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
