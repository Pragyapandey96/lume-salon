import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import EditorialImage from '@/components/ui/EditorialImage'
import { contactBookingContent, contactBookingImage } from '@/config/contact'
import { fadeUp, staggerContainer } from '@/lib/motion'
import { scrollToId } from '@/lib/scrollToId'

export default function ContactBooking() {
  return (
    <section
      aria-labelledby="contact-booking-heading"
      className="relative isolate overflow-hidden border-b border-champagne/30 bg-espresso py-section"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-20">
        <EditorialImage
          image={contactBookingImage}
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
            {contactBookingContent.eyebrow}
            <span aria-hidden="true" className="h-px w-10 bg-champagne/70" />
          </motion.p>
          <motion.h2
            id="contact-booking-heading"
            variants={fadeUp}
            className="mt-6 text-balance font-serif text-headline text-ivory"
          >
            {contactBookingContent.title}
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-xl text-lg text-ivory/75">
            {contactBookingContent.description}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 flex justify-center">
            <Button variant="light" size="lg" onClick={() => scrollToId('appointment')}>
              {contactBookingContent.buttonLabel}
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
