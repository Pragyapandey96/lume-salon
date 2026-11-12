import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import EditorialImage from '@/components/ui/EditorialImage'
import { contactHeroContent } from '@/config/contact'
import { EASE_LUXE, fadeUp, staggerContainer } from '@/lib/motion'
import { scrollToId } from '@/lib/scrollToId'

export default function ContactHero() {
  return (
    <section
      aria-labelledby="contact-heading"
      className="relative overflow-hidden bg-ivory pb-section pt-32 lg:pt-40"
    >
      <Container className="grid items-center gap-16 lg:grid-cols-12 lg:gap-12">
        <motion.div
          className="lg:col-span-7"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={fadeUp}
            className="flex items-center gap-4 text-eyebrow font-medium uppercase text-champagne-deep"
          >
            <span aria-hidden="true" className="h-px w-10 bg-champagne" />
            {contactHeroContent.eyebrow}
          </motion.p>

          <motion.h1
            id="contact-heading"
            variants={fadeUp}
            className="mt-8 font-serif text-display text-espresso"
          >
            Your moment
            <span className="mt-2 block italic text-champagne-deep">starts here.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-8 max-w-lg text-lg text-taupe">
            {contactHeroContent.description}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-10"
          >
            <Button size="lg" onClick={() => scrollToId('appointment')}>
              Request an Appointment
            </Button>
            <a
              href="#details"
              className="inline-block border-b border-champagne pb-1 text-eyebrow font-medium uppercase text-espresso transition-colors duration-500 ease-luxe hover:text-champagne-deep"
            >
              Contact details
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: EASE_LUXE, delay: 0.15 }}
        >
          <div
            aria-hidden="true"
            className="absolute -bottom-4 -right-4 hidden size-full border border-champagne/60 sm:block"
          />
          <EditorialImage
            image={contactHeroContent.image}
            priority
            tone="warm"
            className="aspect-[4/5] w-full"
          />
        </motion.div>
      </Container>
    </section>
  )
}
