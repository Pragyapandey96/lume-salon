import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import EditorialImage from '@/components/ui/EditorialImage'
import { bookingContent } from '@/config/home'
import { images } from '@/config/images'
import { siteConfig } from '@/config/site'
import { fadeUp, staggerContainer } from '@/lib/motion'

export default function BookingCta() {
  return (
    <section
      aria-labelledby="booking-heading"
      className="relative isolate overflow-hidden border-b border-champagne/30 bg-espresso py-section"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-20">
        <EditorialImage
          image={images.booking}
          decorative
          showLabel={false}
          tone="dark"
          className="size-full"
        />
      </div>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-espresso/75" />

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
            {bookingContent.eyebrow}
            <span aria-hidden="true" className="h-px w-10 bg-champagne/70" />
          </motion.p>
          <motion.h2
            id="booking-heading"
            variants={fadeUp}
            className="mt-6 font-serif text-display text-ivory"
          >
            {bookingContent.title}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-xl text-lg text-ivory/75"
          >
            {bookingContent.description}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 flex flex-col items-center gap-6">
            <Button to="/contact" variant="light" size="lg">
              Book an Appointment
            </Button>
            <a
              href={siteConfig.contact.phoneHref}
              className="inline-flex items-center gap-2 text-sm text-ivory/75 transition-colors duration-300 hover:text-champagne-light"
            >
              <Phone className="size-4" strokeWidth={1.5} aria-hidden="true" />
              Or call {siteConfig.contact.phone}
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
