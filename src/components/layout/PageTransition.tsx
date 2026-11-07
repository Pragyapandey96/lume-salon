import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { EASE_LUXE } from '@/lib/motion'

/** Subtle fade-and-rise applied when a page mounts. */
export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: EASE_LUXE }}
    >
      {children}
    </motion.div>
  )
}
