import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import { siteConfig } from '@/config/site'
import { fadeUp, staggerContainer } from '@/lib/motion'

interface PageHeaderProps {
  eyebrow: string
  title: string
  description?: string
}

/** Standard page intro. Also sets the document title for the page. */
export default function PageHeader({
  eyebrow,
  title,
  description,
}: PageHeaderProps) {
  return (
    <header className="bg-cream pb-16 pt-36 md:pb-24 md:pt-44">
      <title>{`${title} · ${siteConfig.name} ${siteConfig.tagline}`}</title>
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-prose"
        >
          <motion.p
            variants={fadeUp}
            className="text-eyebrow font-medium uppercase text-champagne-deep"
          >
            {eyebrow}
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-5 font-serif text-display text-espresso"
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p variants={fadeUp} className="mt-8 max-w-xl text-lg text-taupe">
              {description}
            </motion.p>
          )}
        </motion.div>
      </Container>
    </header>
  )
}
