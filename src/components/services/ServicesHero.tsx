import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Container from '@/components/ui/Container'
import EditorialImage from '@/components/ui/EditorialImage'
import { serviceDisciplines, servicesHeroContent } from '@/config/services'
import { images } from '@/config/images'
import { cn } from '@/lib/cn'
import { EASE_LUXE, fadeUp, staggerContainer } from '@/lib/motion'

export default function ServicesHero() {
  return (
    <section
      aria-labelledby="services-heading"
      className="relative overflow-hidden bg-ivory pb-section pt-32 lg:pt-40"
    >
      <Container>
        <div className="grid items-end gap-16 lg:grid-cols-12 lg:gap-12">
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
              {servicesHeroContent.eyebrow}
            </motion.p>

            <motion.h1
              id="services-heading"
              variants={fadeUp}
              className="mt-8 font-serif text-display text-espresso"
            >
              A little more you,{' '}
              <span className="italic text-champagne-deep">in every detail.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-8 max-w-xl text-lg text-taupe">
              {servicesHeroContent.description}
            </motion.p>
          </motion.div>

          <motion.div
            className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: EASE_LUXE, delay: 0.15 }}
          >
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -left-4 hidden size-full border border-champagne/60 sm:block"
            />
            <EditorialImage
              image={images.heroMain}
              priority
              className="aspect-[4/5] w-full"
            />
          </motion.div>
        </div>

        <motion.nav
          aria-label="Service disciplines"
          className="mt-24 border-t border-sand/70 lg:mt-28"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4">
            {serviceDisciplines.map((discipline) => (
              <motion.li
                key={discipline.id}
                variants={fadeUp}
                className={cn(
                  'border-b border-sand/70 lg:border-b-0 lg:border-l lg:border-sand/70',
                  'lg:px-6 lg:first:border-l-0 lg:first:pl-0',
                )}
              >
                <a
                  href={`#${discipline.id}`}
                  className="group flex h-full flex-col gap-3 py-7"
                >
                  <span className="text-eyebrow font-medium text-champagne-deep">
                    {discipline.number}
                  </span>
                  <span className="font-serif text-2xl text-espresso">
                    {discipline.name}
                  </span>
                  <span className="text-sm text-taupe">{discipline.summary}</span>
                  <ArrowDown
                    className="mt-1 size-4 text-champagne-deep transition-transform duration-500 ease-luxe group-hover:translate-y-1 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      </Container>
    </section>
  )
}

