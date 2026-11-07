import { AnimatePresence, motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import Button from '@/components/ui/Button'
import { navItems } from '@/config/navigation'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/cn'
import { EASE_LUXE, fadeUp, staggerContainer } from '@/lib/motion'

interface MobileMenuProps {
  open: boolean
  onNavigate: () => void
}

/** Full-screen navigation panel for viewports below the `lg` breakpoint. */
export default function MobileMenu({ open, onNavigate }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          key="mobile-menu"
          className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-ivory px-gutter pb-10 pt-28 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: EASE_LUXE }}
        >
          <motion.nav
            aria-label="Mobile"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            {navItems.map((item) => (
              <motion.div
                key={item.to}
                variants={fadeUp}
                className="border-b border-sand/50"
              >
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  onClick={onNavigate}
                  className={({ isActive }) =>
                    cn(
                      'block py-5 font-serif text-[2rem] leading-none transition-colors duration-300',
                      isActive ? 'text-espresso' : 'text-taupe',
                    )
                  }
                >
                  {({ isActive }) => (
                    <span className="flex items-center justify-between">
                      {item.label}
                      {isActive && (
                        <span
                          aria-hidden="true"
                          className="size-1.5 rounded-full bg-champagne"
                        />
                      )}
                    </span>
                  )}
                </NavLink>
              </motion.div>
            ))}
          </motion.nav>

          <div className="mt-auto pt-12">
            <Button to="/contact" size="lg" onClick={onNavigate} className="w-full">
              Book Now
            </Button>
            <p className="mt-8 text-sm text-taupe">
              <a href={siteConfig.contact.phoneHref} className="block">
                {siteConfig.contact.phone}
              </a>
              <a href={`mailto:${siteConfig.contact.email}`} className="mt-1 block">
                {siteConfig.contact.email}
              </a>
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
