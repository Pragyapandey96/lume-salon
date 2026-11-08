import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import { trustFootnote, trustStats } from '@/config/home'
import { cn } from '@/lib/cn'
import { fadeUp, staggerContainer } from '@/lib/motion'

export default function TrustBar() {
  return (
    <section
      aria-label="Why guests choose Lumé"
      className="border-y border-sand/50 bg-cream"
    >
      <Container className="py-16 lg:py-20">
        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-2 gap-y-14 lg:grid-cols-4"
        >
          {trustStats.map((stat, index) => (
            <motion.li
              key={stat.label}
              variants={fadeUp}
              className={cn(
                'px-5 sm:px-8',
                index % 2 === 1 && 'border-l border-sand/60',
                index > 0 && 'lg:border-l lg:border-sand/60',
              )}
            >
              <stat.icon
                className="size-5 text-champagne-deep"
                strokeWidth={1.25}
                aria-hidden="true"
              />
              <p className="mt-6 flex items-start gap-2 font-serif text-5xl leading-none text-espresso">
                {stat.value}
                <span className="mt-1 border border-champagne/50 px-1.5 py-0.5 font-sans text-[0.5625rem] uppercase leading-none tracking-[0.2em] text-champagne-deep">
                  Sample
                </span>
              </p>
              <p className="mt-5 text-eyebrow font-medium uppercase text-espresso">
                {stat.label}
              </p>
              <p className="mt-2 text-sm text-taupe">{stat.description}</p>
            </motion.li>
          ))}
        </motion.ul>

        <p className="mt-14 text-center text-xs text-taupe">{trustFootnote}</p>
      </Container>
    </section>
  )
}
