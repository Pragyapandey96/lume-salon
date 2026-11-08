import type { ImageAsset } from '@/types/media'

/**
 * Homepage photography.
 *
 * Add a file with the matching name to `public/images/` and it appears
 * automatically — no code changes needed. Until a file exists, each slot
 * shows a tonal placeholder that keeps the layout intact.
 *
 * Export at roughly 2x the displayed size, as optimised JPEG or WebP
 * (the sizes below are the recommended export dimensions). Keep the
 * `width`/`height` here in sync with the exported file so the browser can
 * reserve space and avoid layout shift.
 */
const asset = (
  file: string,
  width: number,
  height: number,
  label: string,
  alt: string,
): ImageAsset => ({ src: `/images/${file}`, width, height, label, alt })

export const images = {
  heroMain: asset(
    'hero-main.jpg',
    1200,
    1500,
    'Hero · Portrait in soft window light',
    'A stylist finishing a client’s hair in a calm, light-filled salon.',
  ),
  heroInset: asset(
    'hero-inset.jpg',
    600,
    800,
    'Hero · Detail',
    'A close detail of styled hair and a hand holding a brush.',
  ),

  serviceHair: asset(
    'service-hair.jpg',
    800,
    1067,
    'Hair',
    'A stylist blow-drying long, glossy hair.',
  ),
  serviceSkin: asset(
    'service-skin.jpg',
    800,
    1067,
    'Skin',
    'A facial treatment in progress, with soft neutral towels.',
  ),
  serviceSpa: asset(
    'service-spa.jpg',
    800,
    1067,
    'Spa',
    'A quiet treatment room with warm light and natural textures.',
  ),
  serviceBridal: asset(
    'service-bridal.jpg',
    800,
    1067,
    'Bridal & makeup',
    'Bridal makeup being applied in natural light.',
  ),

  about: asset(
    'about.jpg',
    1200,
    1500,
    'About · Stylist and guest in consultation',
    'A stylist and guest in conversation during a consultation.',
  ),

  experience: asset(
    'experience.jpg',
    2100,
    900,
    'Experience · Wide view of the salon interior',
    'The Lumé salon interior with warm light, mirrors and natural materials.',
  ),

  gallery1: asset(
    'gallery-1.jpg',
    1000,
    1250,
    'Gallery 1',
    'A polished, softly waved hairstyle seen from behind.',
  ),
  gallery2: asset(
    'gallery-2.jpg',
    1000,
    1250,
    'Gallery 2',
    'Salon products arranged on a marble shelf.',
  ),
  gallery3: asset(
    'gallery-3.jpg',
    800,
    1067,
    'Gallery 3',
    'A guest relaxing during a facial.',
  ),
  gallery4: asset(
    'gallery-4.jpg',
    800,
    1067,
    'Gallery 4',
    'Warm light falling across a styling station.',
  ),
  gallery5: asset(
    'gallery-5.jpg',
    1000,
    1250,
    'Gallery 5',
    'A colour treatment with rich brown tones.',
  ),
  gallery6: asset(
    'gallery-6.jpg',
    1250,
    1000,
    'Gallery 6',
    'A softly lit reception area with fresh flowers.',
  ),

  booking: asset(
    'booking.jpg',
    2400,
    1200,
    'Booking · Warm, atmospheric interior',
    'A softly lit salon interior in warm tones.',
  ),
} as const satisfies Record<string, ImageAsset>

export type ImageKey = keyof typeof images
