import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'
import { fadeUp, staggerContainer } from '@/lib/motion'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  /** "light" renders ivory text for use on espresso backgrounds. */
  tone?: 'dark' | 'light'
  /** Applied to the <h2>, so a parent <section> can reference it. */
  headingId?: string
  className?: string
}

/** Eyebrow + serif title + intro paragraph, revealed on scroll. */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'dark',
  headingId,
  className,
}: SectionHeadingProps) {
  const isLight = tone === 'light'

  return (
    <motion.div
      className={cn(
        'max-w-prose',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      {eyebrow && (
        <motion.p
          variants={fadeUp}
          className={cn(
            'text-eyebrow font-medium uppercase',
            isLight ? 'text-champagne' : 'text-champagne-deep',
          )}
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        id={headingId}
        variants={fadeUp}
        className={cn(
          'mt-4 font-serif text-headline',
          isLight ? 'text-ivory' : 'text-espresso',
        )}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          className={cn('mt-6', isLight ? 'text-ivory/70' : 'text-taupe')}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}
