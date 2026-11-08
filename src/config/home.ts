import { Award, Coffee, Gem, HeartHandshake, Leaf, Users } from 'lucide-react'
import type {
  GalleryTile,
  Pillar,
  Principle,
  ServiceHighlight,
  Testimonial,
  TrustStat,
} from '@/types/home'

/**
 * Homepage copy. Anything marked as sample is placeholder content that
 * must be replaced with verified business details before launch.
 */

export const heroContent = {
  eyebrow: 'Lumé Salon & Spa',
  description:
    'An unhurried sanctuary for hair, skin and restoration — where every appointment begins with a conversation and ends with you feeling entirely like yourself.',
  disciplines: ['Hair', 'Skin', 'Spa', 'Bridal'],
}

/** SAMPLE FIGURES — placeholders, not real business statistics. */
export const trustStats: TrustStat[] = [
  {
    icon: Award,
    value: '15+',
    label: 'Years of expertise',
    description: 'A foundation of craft built over many years.',
  },
  {
    icon: Users,
    value: '12',
    label: 'Expert stylists',
    description: 'Specialists in colour, cutting, skin and bridal.',
  },
  {
    icon: HeartHandshake,
    value: '1:1',
    label: 'Personalised treatments',
    description: 'Every visit begins with a private consultation.',
  },
  {
    icon: Leaf,
    value: '8',
    label: 'Premium product houses',
    description: 'Considered formulations, chosen with care.',
  },
]

export const trustFootnote =
  'Sample figures shown as placeholders — replace with verified business details before launch.'

export const servicesIntro = {
  eyebrow: 'Signature Services',
  title: 'Crafted around you',
  description:
    'Four disciplines, one standard: thoughtful, skilled and tailored to the person in the chair.',
}

export const signatureServices: ServiceHighlight[] = [
  {
    number: '01',
    title: 'Hair Styling & Treatments',
    description:
      'Precision cutting, considered colour and restorative care, designed around your hair and your life.',
    image: 'serviceHair',
  },
  {
    number: '02',
    title: 'Skin & Facial Treatments',
    description:
      'Calm, results-led facials tailored to your skin’s needs, using carefully chosen formulations.',
    image: 'serviceSkin',
  },
  {
    number: '03',
    title: 'Spa & Relaxation',
    description:
      'Slow, restorative rituals that release tension and restore balance — a pause from the pace of the day.',
    image: 'serviceSpa',
  },
  {
    number: '04',
    title: 'Bridal & Makeup',
    description:
      'Refined bridal styling and makeup, planned with you well in advance so the day feels effortless.',
    image: 'serviceBridal',
  },
]

export const aboutContent = {
  eyebrow: 'About Lumé',
  title: 'Care that begins with listening.',
  description:
    'Lumé was created around a simple belief: beauty is personal. Every appointment starts with an unhurried consultation, so the result reflects who you are — not a passing trend.',
  secondary:
    'Our team brings craft, patience and genuine attention to every detail, from the first conversation to the final finish.',
  quoteLabel: 'Our philosophy',
  quote: 'Beauty is a conversation, not a formula.',
}

export const principles: Principle[] = [
  {
    title: 'Consultation first',
    description: 'We listen before we begin, and agree the plan together.',
  },
  {
    title: 'Considered products',
    description: 'Fewer, better formulations chosen for performance and care.',
  },
  {
    title: 'Unhurried appointments',
    description: 'Time set aside so nothing is ever rushed.',
  },
]

export const experienceContent = {
  eyebrow: 'The Lumé Experience',
  title: 'A space designed to slow time',
  description:
    'Soft light, quiet materials and attentive service — an atmosphere in which you can simply be looked after.',
}

export const experiencePillars: Pillar[] = [
  {
    icon: Coffee,
    title: 'Comfort',
    description:
      'From the moment you arrive, every detail is arranged for your ease: warm light, quiet music and a seat worth sinking into.',
  },
  {
    icon: Gem,
    title: 'Quality',
    description:
      'Skilled hands, carefully chosen products and a standard of finish we are never in a hurry to compromise.',
  },
  {
    icon: HeartHandshake,
    title: 'Personal service',
    description:
      'No two guests are alike. Your stylist or therapist shapes each visit around your preferences and goals.',
  },
]

export const galleryIntro = {
  eyebrow: 'Gallery',
  title: 'Moments from the salon',
  description:
    'A glimpse of the space, the craft and the quiet details that define a visit to Lumé.',
}

export const galleryTiles: GalleryTile[] = [
  { image: 'gallery1', placement: 'col-span-2 md:col-span-5', aspect: 'aspect-[4/5]' },
  { image: 'gallery2', placement: 'col-span-1 md:col-span-4 md:mt-16', aspect: 'aspect-[4/5]' },
  { image: 'gallery3', placement: 'col-span-1 md:col-span-3', aspect: 'aspect-[3/4]' },
  { image: 'gallery4', placement: 'col-span-1 md:col-span-3 md:-mt-8', aspect: 'aspect-[3/4]' },
  { image: 'gallery5', placement: 'col-span-1 md:col-span-4', aspect: 'aspect-[4/5]' },
  { image: 'gallery6', placement: 'col-span-2 md:col-span-5 md:mt-10', aspect: 'aspect-[5/4]' },
]

export const testimonialsIntro = {
  eyebrow: 'Kind Words',
  title: 'What our guests say',
  description: 'Sample testimonials, shown to demonstrate the layout.',
}

/** SAMPLE TESTIMONIALS — not real customer reviews. */
export const testimonials: Testimonial[] = [
  {
    quote:
      'I arrived with a rough idea and left with exactly what I had hoped for. Every step was explained, nothing felt rushed, and the result was beautifully natural.',
    author: 'Sample Client',
    context: 'Colour & cut',
  },
  {
    quote:
      'The most restful hour of my month. Calm, thoughtful and genuinely attentive.',
    author: 'Sample Client',
    context: 'Signature facial',
  },
  {
    quote:
      'My bridal look was planned with me months ahead. On the day, I simply felt like myself.',
    author: 'Sample Client',
    context: 'Bridal styling',
  },
]

export const testimonialsFootnote =
  'Sample testimonials — replace with real, permissioned guest feedback before launch.'

export const bookingContent = {
  eyebrow: 'Reservations',
  title: 'Your next appointment awaits.',
  description:
    'Reserve a time that suits you, or tell us what you have in mind — we will take care of the rest.',
}
