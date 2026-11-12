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
  // Set to false once every detail below has been replaced with real business information.
  detailsAreSample: true,
  contact: {
    phone: '+00 00000 00000',
    phoneHref: 'tel:+0000000000',
    email: 'hello@lume.example',
  },
  whatsapp: {
    number: '+00 00000 00000',
    // Placeholder number: replace the digits after wa.me/ with the real one (country code, no "+").
    href: 'https://wa.me/0000000000?text=Hello%20Lum%C3%A9%2C%20I%27d%20like%20to%20ask%20about%20an%20appointment.',
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
