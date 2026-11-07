import type { SiteConfig } from '@/types'

/**
 * Single source of truth for business details.
 * All contact details below are placeholders — replace before launch.
 */
export const siteConfig: SiteConfig = {
  name: 'Lumé',
  tagline: 'Salon & Spa',
  description:
    'An unhurried sanctuary for hair, skin and restoration — where every detail is considered and every visit feels personal.',
  contact: {
    phone: '+00 00000 00000',
    phoneHref: 'tel:+0000000000',
    email: 'hello@lume.example',
  },
  address: ['00 Placeholder Street', 'Your City, State 000000'],
  hours: [
    { days: 'Monday – Friday', time: '10:00 – 20:00' },
    { days: 'Saturday – Sunday', time: '09:00 – 18:00' },
  ],
  social: [
    { label: 'Instagram', href: '#' },
    { label: 'Facebook', href: '#' },
  ],
}
