import { images } from '@/config/images'
import type { NarrativeItem } from '@/types/about'
import type { ImageAsset } from '@/types/media'

/**
 * About page copy. Deliberately free of founder names, dates, locations,
 * awards, certifications and product partnerships — add verified business
 * details before launch.
 */

/**
 * About page photography. These reuse files already in `public/images/`
 * (via the shared image config) with alt text and placeholder labels that
 * describe how each photograph is used on this page.
 */
export const aboutImages = {
  hero: {
    ...images.gallery4,
    width: 736,
    height: 1318,
    label: 'About · Natural beauty portrait',
    alt: 'A woman with long, softly waved hair having her makeup applied in warm, even light.',
  },
  story: {
    ...images.about,
    width: 736,
    height: 1104,
    label: 'Story · Stylist consulting a guest',
    alt: 'A stylist with a clipboard talking through ideas with a guest during a consultation.',
  },
  experience: {
    ...images.experience,
    width: 735,
    height: 490,
    label: 'Experience · Salon interior',
    alt: 'The salon interior, with softly lit mirrors, woven pendant lights and natural textures.',
  },
  experienceInset: {
    ...images.gallery3,
    width: 736,
    height: 1104,
    label: 'Experience · Detail',
    alt: 'A row of styling chairs facing round, softly backlit mirrors, with plants and warm wood.',
  },
  cta: {
    ...images.booking,
    width: 735,
    height: 490,
    label: 'Booking · Salon interior',
    alt: '',
  },
} satisfies Record<string, ImageAsset>

export const aboutHeroContent = {
  eyebrow: 'About Lumé',
  description:
    'Lumé is a place where beauty, thoughtful care and personal attention come together. Appointments are never rushed, and no look is taken from a template — each one begins with you, and ends with you feeling entirely at ease.',
  linkLabel: 'Read our story',
}

export const storyContent = {
  eyebrow: 'Our Story',
  title: 'A little about Lumé.',
  paragraphs: [
    'Lumé began with a simple idea: a salon should feel less like a transaction and more like a welcome — somewhere you look forward to arriving, and leave feeling lighter, more confident and more like yourself.',
    'We believe the best results come from paying attention: to the way you describe your hair or your skin, to how you live day to day, to the small preferences that make something feel right. So we take the time to listen before we begin, and we shape every treatment around what we hear.',
    'From a precise cut to a quiet facial or a look for a once-in-a-lifetime day, our aim is the same — care that feels personal, craft that is quietly confident, and an atmosphere in which you can simply relax.',
  ],
  quote: 'Care that feels personal. Craft that is quietly confident.',
  caption: 'Every appointment begins with a conversation.',
}

export const philosophyContent = {
  eyebrow: 'Our Philosophy',
  title: 'Beauty, without the rush.',
  description:
    'Three simple principles shape everything we do, from the first conversation to the final finish.',
}

export const principles: NarrativeItem[] = [
  {
    title: 'Listen first.',
    description:
      'Every appointment begins with a conversation. We ask, we listen, and we make sure we understand what you want before we pick up a single tool.',
  },
  {
    title: 'Personalise every experience.',
    description:
      'No two guests are the same, so no two appointments should be either. Techniques, products and pace are chosen to suit you.',
  },
  {
    title: 'Care about the details.',
    description:
      'The small things — a considered finish, a comfortable seat, a moment to check that everything feels right — turn a good appointment into a memorable one.',
  },
]

export const experienceContent = {
  eyebrow: 'The Lumé Experience',
  title: 'What a visit should feel like.',
  description:
    'From the moment you arrive to the moment you leave, every part of your visit is designed to feel calm, considered and entirely yours.',
}

export const experienceMoments: NarrativeItem[] = [
  {
    title: 'A welcoming atmosphere',
    description:
      'Warm light, calm surroundings and a genuine welcome the moment you walk in.',
  },
  {
    title: 'Thoughtful consultations',
    description:
      'Time to talk through what you would like, ask questions and agree a plan together.',
  },
  {
    title: 'Comfort throughout',
    description:
      'An unhurried pace and small touches that keep you relaxed from the first moment to the last.',
  },
  {
    title: 'Attention to the final details',
    description:
      'A closing check and a finishing touch, so you leave certain that it is exactly right.',
  },
]

export const valuesContent = {
  eyebrow: 'Our Values',
  title: 'What we hold close.',
}

export const values: NarrativeItem[] = [
  {
    title: 'Individuality',
    description:
      'Your features, your lifestyle and your taste lead the way. We enhance who you are — we never replace it.',
  },
  {
    title: 'Thoughtful care',
    description:
      'Genuine attention, patience and respect for every guest, in every appointment.',
  },
  {
    title: 'Quality',
    description:
      'A considered standard in our work and our finish — never rushed, never careless.',
  },
  {
    title: 'Comfort',
    description:
      'A space and a pace that let you relax, speak openly and feel entirely at ease.',
  },
]

export const aboutCtaContent = {
  eyebrow: 'Visit Lumé',
  title: 'Your time at Lumé is waiting.',
  description:
    'Explore our services to find the right treatment, or get in touch and we will help you plan your visit.',
}
