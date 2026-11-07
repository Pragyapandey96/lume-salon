import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '@/components/layout/Logo'
import MobileMenu from '@/components/layout/MobileMenu'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import { navItems } from '@/config/navigation'
import { useScrolled } from '@/hooks/useScrolled'
import { cn } from '@/lib/cn'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = useScrolled()
  const solid = scrolled || menuOpen

  const closeMenu = () => setMenuOpen(false)

  // While the mobile menu is open: lock page scroll and close on Escape.
  useEffect(() => {
    if (!menuOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  // Close the mobile menu if the viewport grows to the desktop layout.
  useEffect(() => {
    const query = window.matchMedia('(min-width: 1024px)')
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false)
    }
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-500 ease-luxe',
          solid
            ? 'border-sand/50 bg-ivory/90 backdrop-blur-md'
            : 'border-transparent bg-transparent',
        )}
      >
        <Container className="flex h-20 items-center justify-between">
          <Logo onClick={closeMenu} />

          <nav aria-label="Primary" className="hidden items-center gap-10 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'group relative py-2 text-[0.8125rem] font-medium uppercase tracking-[0.18em] transition-colors duration-300',
                    isActive ? 'text-espresso' : 'text-taupe hover:text-espresso',
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        'absolute inset-x-0 -bottom-0.5 h-px origin-left bg-champagne transition-transform duration-500 ease-luxe',
                        isActive
                          ? 'scale-x-100'
                          : 'scale-x-0 group-hover:scale-x-100',
                      )}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <Button to="/contact">Book Now</Button>
            </div>
            <button
              type="button"
              className="-mr-2 inline-flex size-11 items-center justify-center text-espresso lg:hidden"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? (
                <X className="size-6" strokeWidth={1.5} />
              ) : (
                <Menu className="size-6" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </Container>
      </header>

      {/* Rendered outside <header>: its backdrop-filter would otherwise trap
          this fixed-position panel inside the header's box. */}
      <MobileMenu open={menuOpen} onNavigate={closeMenu} />
    </>
  )
}
