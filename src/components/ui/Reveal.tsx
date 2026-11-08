import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { fadeUp } from '@/lib/motion'

interface RevealProps {
  className?: string
  children: ReactNode
}

/** Fades content in once, the first time it scrolls into view. */
export default function Reveal({ className, children }: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      {children}
    </motion.div>
  )
}
