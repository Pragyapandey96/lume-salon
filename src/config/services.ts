import { HeartHandshake, MessageCircle, Sparkles } from 'lucide-react'
import type { ApproachStep, ServiceDisciplineContent } from '@/types/services'

/**
 * Services page copy. Deliberately free of prices, awards, credentials and
 * customer counts — add verified business details before launch.
 */

export const servicesHeroContent = {
  eyebrow: 'Our Services',
  description:
    'Lumé brings together four disciplines — hair, skin, spa and bridal — guided by one belief: great results begin with listening. Explore the menu below, then choose the experience that feels right for you.',
}

export const serviceDisciplines: ServiceDisciplineContent[] = [
  {
    id: 'hair',
    number: '01',
    name: 'Hair Artistry',
    summary: 'Cut, colour, treatments and finishing.',
    eyebrow: '01 · Hair Artistry',
    title: 'Hair, considered from root to finish.',
    description:
      'From a precise restyle to a complete change of colour, every service begins with a consultation and is shaped around your hair, your routine and the way you like to wear it.',
    offerings: [
      {
        title: 'Haircuts & styling',
        description:
          'Precision cutting that frames your features and grows out gracefully, finished with styling you can recreate at home.',
      },
      {
        title: 'Hair colouring',
        description:
          'Soft, dimensional colour — from subtle brightening to rich, deep tones — blended to complement your skin and lifestyle.',
      },
      {
        title: 'Hair treatments',
        description:
          'Restorative care that nourishes, strengthens and brings back shine, chosen after a careful look at your hair’s condition.',
      },
      {
        title: 'Blow-dry & finishing',
        description:
          'A polished finish for everyday ease or an occasion, from smooth, glossy blow-dries to soft, voluminous waves.',
      },
    ],
    image: 'serviceHair',
    imagePosition: 'object-[center_30%]',
    ctaLabel: 'Book a Hair Appointment',
  },
  {
    id: 'skin',
    number: '02',
    name: 'Skin & Facial Care',
    summary: 'Facials, cleansing, hydration and renewal.',
    eyebrow: '02 · Skin & Facial Care',
    title: 'Skincare that listens to your skin.',
    description:
      'Each facial begins with a close look at what your skin needs, then unfolds calmly and deliberately — focused on how your skin looks and feels, today and over time.',
    offerings: [
      {
        title: 'Signature facials',
        description:
          'Our most personal facial, composed around your skin type and goals, combining cleansing, massage and a nourishing mask.',
      },
      {
        title: 'Deep cleansing',
        description:
          'A thorough, gentle purification that clears congestion and refines the look of the skin, leaving it balanced and fresh.',
      },
      {
        title: 'Hydration treatments',
        description:
          'Replenishing care for skin that feels tight or dull, restoring comfort, softness and a healthy-looking glow.',
      },
      {
        title: 'Skin rejuvenation',
        description:
          'Revitalising treatments that support a smoother, brighter and more radiant-looking complexion.',
      },
    ],
    image: 'serviceSkin',
    imagePosition: 'object-center',
    ctaLabel: 'Book a Skin Appointment',
  },
  {
    id: 'spa',
    number: '03',
    name: 'Spa & Relaxation',
    summary: 'Massage, body care and restorative rituals.',
    eyebrow: '03 · Spa & Relaxation',
    title: 'Slow, restorative moments.',
    description:
      'A quiet retreat from the pace of the day. Warm light, soft textures and unhurried treatments, designed to release tension and bring back a sense of calm.',
    offerings: [
      {
        title: 'Relaxing massage',
        description:
          'Slow, flowing massage tailored to your preferred pressure, easing tension from head to toe.',
      },
      {
        title: 'Body treatments',
        description:
          'Nourishing body rituals that polish, soften and replenish the skin.',
      },
      {
        title: 'Restorative rituals',
        description:
          'Layered treatments that bring together warmth, touch and aroma for a complete reset.',
      },
      {
        title: 'Relaxation experiences',
        description:
          'Time set aside to simply rest — in a calm space, at your own pace — before or after your treatment.',
      },
    ],
    image: 'serviceSpa',
    imagePosition: 'object-center',
    ctaLabel: 'Book a Spa Appointment',
  },
  {
    id: 'bridal',
    number: '04',
    name: 'Bridal & Makeup',
    summary: 'Bridal, engagement and occasion looks.',
    eyebrow: '04 · Bridal & Makeup',
    title: 'For the days you will remember.',
    description:
      'From the wedding itself to the celebrations around it, we plan your look with you in advance, so the day feels effortless and entirely like you.',
    offerings: [
      {
        title: 'Bridal makeup',
        description:
          'A considered look planned together beforehand, designed to feel comfortable and last beautifully from ceremony to celebration.',
      },
      {
        title: 'Engagement makeup',
        description:
          'Soft, photograph-ready makeup for engagement celebrations and portraits.',
      },
      {
        title: 'Party makeup',
        description:
          'Polished, expressive makeup for parties and special evenings, from understated glow to statement colour.',
      },
      {
        title: 'Hair styling for occasions',
        description:
          'Elegant updos, soft waves and finished styling to complete your look for any occasion.',
      },
    ],
    image: 'serviceBridal',
    imagePosition: 'object-center',
    ctaLabel: 'Book a Bridal Appointment',
  },
]

export const approachContent = {
  eyebrow: 'Our Approach',
  title: 'Considered at every step',
  description:
    'Whichever service you choose, the way we work stays the same: listen first, tailor everything, and never rush the finish.',
}

export const approachSteps: ApproachStep[] = [
  {
    icon: MessageCircle,
    title: 'Consultation',
    description:
      'We begin by listening. Your goals, routine and preferences shape the plan before any treatment starts.',
  },
  {
    icon: HeartHandshake,
    title: 'Personalised care',
    description:
      'No two guests are alike, so no two appointments are either. Techniques and products are chosen specifically for you.',
  },
  {
    icon: Sparkles,
    title: 'Attention to detail',
    description:
      'From the first stroke to the final finish, we take the time to refine every element until it feels right.',
  },
]

export const servicesBookingContent = {
  eyebrow: 'Book Your Visit',
  title: 'Let’s find the right treatment for you.',
  description:
    'Tell us what you have in mind — or simply that you would like something new — and we will recommend the best way forward.',
}
