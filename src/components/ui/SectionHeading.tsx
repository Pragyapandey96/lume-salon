import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'
import { fadeUp, staggerContainer } from '@/lib/motion'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

/** Eyebrow + serif title + intro paragraph, revealed on scroll. */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
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
          className="text-eyebrow font-medium uppercase text-champagne-deep"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        variants={fadeUp}
        className="mt-4 font-serif text-headline text-espresso"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p variants={fadeUp} className="mt-6 text-taupe">
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}
