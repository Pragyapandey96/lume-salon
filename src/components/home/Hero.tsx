import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import EditorialImage from '@/components/ui/EditorialImage'
import { heroContent } from '@/config/home'
import { images } from '@/config/images'
import { EASE_LUXE, fadeUp, staggerContainer } from '@/lib/motion'

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-ivory pb-section pt-32 lg:pt-40"
    >
      <Container className="grid items-center gap-20 lg:grid-cols-12 lg:gap-12">
        <motion.div
          className="lg:col-span-6 xl:col-span-5"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={fadeUp}
            className="flex items-center gap-4 text-eyebrow font-medium uppercase text-champagne-deep"
          >
            <span aria-hidden="true" className="h-px w-10 bg-champagne" />
            {heroContent.eyebrow}
          </motion.p>

          <motion.h1
            id="hero-heading"
            variants={fadeUp}
            className="mt-8 font-serif text-display text-espresso"
          >
            Your beauty,{' '}
            <span className="italic text-champagne-deep">
              thoughtfully reimagined.
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-8 max-w-md text-lg text-taupe">
            {heroContent.description}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button to="/contact" size="lg" className="w-full sm:w-auto">
              Book an Appointment
            </Button>
            <Button
              to="/services"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Explore Services
            </Button>
          </motion.div>

          <motion.ul
            variants={fadeUp}
            aria-label="Our disciplines"
            className="mt-14 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-sand/60 pt-6 text-eyebrow font-medium uppercase text-taupe"
          >
            {heroContent.disciplines.map((item, index) => (
              <li key={item} className="flex items-center gap-4">
                {index > 0 && (
                  <span
                    aria-hidden="true"
                    className="size-1 rotate-45 bg-champagne"
                  />
                )}
                {item}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          className="relative lg:col-span-6 xl:col-span-7"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: EASE_LUXE, delay: 0.15 }}
        >
          <div
            aria-hidden="true"
            className="absolute -right-4 -top-4 hidden size-full border border-champagne/60 sm:block"
          />
          <EditorialImage
            image={images.heroMain}
            priority
            className="aspect-[4/5] w-full xl:aspect-[5/6]"
          />
          <div className="absolute -bottom-10 -left-4 hidden w-[36%] border-[10px] border-ivory shadow-lift md:block lg:-left-10">
            <EditorialImage
              image={images.heroInset}
              tone="warm"
              className="aspect-[3/4] w-full"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
