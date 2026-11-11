import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import EditorialImage from '@/components/ui/EditorialImage'
import { aboutHeroContent, aboutImages } from '@/config/about'
import { EASE_LUXE, fadeUp, staggerContainer } from '@/lib/motion'

export default function AboutHero() {
  return (
    <section
      aria-labelledby="about-heading"
      className="relative overflow-hidden bg-ivory pb-section pt-32 lg:pt-40"
    >
      <Container className="grid items-center gap-16 lg:grid-cols-12 lg:gap-12">
        <motion.div
          className="relative order-2 mx-auto w-full max-w-md lg:order-none lg:col-span-6 lg:col-start-1 lg:row-start-1 lg:max-w-none"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: EASE_LUXE, delay: 0.15 }}
        >
          <div
            aria-hidden="true"
            className="absolute -bottom-4 -right-4 hidden size-full border border-champagne/60 sm:block"
          />
          <EditorialImage
            image={aboutImages.hero}
            priority
            tone="warm"
            imgClassName="object-[center_15%]"
            className="aspect-[4/5] w-full"
          />
        </motion.div>

        <motion.div
          className="order-1 lg:order-none lg:col-span-5 lg:col-start-8 lg:row-start-1"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={fadeUp}
            className="flex items-center gap-4 text-eyebrow font-medium uppercase text-champagne-deep"
          >
            <span aria-hidden="true" className="h-px w-10 bg-champagne" />
            {aboutHeroContent.eyebrow}
          </motion.p>

          <motion.h1
            id="about-heading"
            variants={fadeUp}
            className="mt-8 font-serif text-[clamp(2.75rem,5.2vw,4.75rem)] leading-[1.05] tracking-[-0.02em] text-espresso"
          >
            <span className="block">More than a salon.</span>
            <span className="block italic text-champagne-deep">
              A space to feel like yourself.
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-8 max-w-md text-lg text-taupe">
            {aboutHeroContent.description}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10">
            <a
              href="#story"
              className="inline-block border-b border-champagne pb-1 text-eyebrow font-medium uppercase text-espresso transition-colors duration-500 ease-luxe hover:text-champagne-deep"
            >
              {aboutHeroContent.linkLabel}
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
