import { images } from '@/config/images'
import type {
  GalleryCategory,
  GalleryCategoryInfo,
  GalleryFilterOption,
  GalleryItem,
} from '@/types/gallery'
import type { ImageAsset } from '@/types/media'

/**
 * Gallery copy and photographs.
 *
 * Every photograph here is illustrative: it conveys the style and
 * atmosphere of Lumé and must not be presented as a real client or as
 * completed salon work until it is replaced with the salon's own photography.
 */

export const galleryHeroContent = {
  eyebrow: 'The Gallery',
  description:
    'An expression of beauty, artistry and the little details that make every visit special.',
  image: {
    ...images.booking,
    width: 735,
    height: 490,
    label: 'Gallery · Warm, light-filled salon interior',
    alt: 'A spacious, softly lit salon with styling stations, mirrors and a tree at its centre.',
  } satisfies ImageAsset,
}

export const galleryIntroContent = {
  eyebrow: 'About this gallery',
  title: 'Style and atmosphere, in pictures.',
  paragraphs: [
    'This collection is a visual impression of what we aim for at Lumé: warm light, considered detail and an unhurried pace, whether you are here for hair, skin, a quiet hour of restoration or a day that calls for something special.',
    'The photographs are illustrative. They have been chosen to convey the mood of the salon and the kinds of care we offer, and they do not show Lumé clients or completed salon work.',
  ],
}

export const galleryBookingContent = {
  eyebrow: 'Book Your Visit',
  title: 'Your moment starts here.',
  description:
    'Tell us what you have in mind and we will find a time that suits you. Every visit begins with a conversation, and you set the pace.',
}

export const galleryFilters: GalleryFilterOption[] = [
  { id: 'all', label: 'All' },
  { id: 'hair', label: 'Hair' },
  { id: 'skin', label: 'Skin' },
  { id: 'spa', label: 'Spa' },
  { id: 'bridal', label: 'Bridal' },
]

export const galleryCategories: Record<GalleryCategory, GalleryCategoryInfo> = {
  hair: { label: 'Hair transformations' },
  skin: { label: 'Skin and facial care' },
  spa: { label: 'Spa and relaxation' },
  bridal: { label: 'Bridal and makeup' },
}

/**
 * Intrinsic sizes below match the files in `public/images/`. Each photograph
 * appears once. To add one, drop the file into `public/images/` and add an
 * entry to this list (see the Gallery section of `public/images/README.md`).
 */
const photo = (
  base: ImageAsset,
  width: number,
  height: number,
  label: string,
  alt: string,
): ImageAsset => ({ ...base, width, height, label, alt })

export const galleryItems: GalleryItem[] = [
  {
    id: 'blow-dry',
    category: 'hair',
    caption: 'A soft, voluminous blow-dry',
    aspect: 'aspect-[5/8]',
    image: photo(
      images.serviceHair,
      736,
      1308,
      'Hair · Blow-dry',
      'A stylist blow-drying a smiling guest’s long, glossy hair in a bright salon.',
    ),
  },
  {
    id: 'bridal-makeup',
    category: 'bridal',
    caption: 'Bridal makeup, finished by hand',
    aspect: 'aspect-[2/3]',
    image: photo(
      images.serviceBridal,
      720,
      1080,
      'Bridal · Makeup',
      'A bride in a red and gold outfit and heavy gold jewellery having her makeup finished.',
    ),
  },
  {
    id: 'facial-ritual',
    category: 'skin',
    caption: 'A restorative facial ritual',
    aspect: 'aspect-[2/3]',
    image: photo(
      images.serviceSkin,
      736,
      1104,
      'Skin · Facial care',
      'A guest in a towel wrap with a creamy mask, shown beside close-ups of facial treatments.',
    ),
  },
  {
    id: 'mirrors',
    category: 'hair',
    caption: 'Mirrors, plants and warm light',
    aspect: 'aspect-[4/5]',
    image: photo(
      images.gallery3,
      736,
      1104,
      'Hair · Styling floor',
      'A row of styling chairs facing round, softly backlit mirrors, with plants and warm wood.',
    ),
  },
  {
    id: 'treatment-room',
    category: 'spa',
    caption: 'A quiet treatment room',
    aspect: 'aspect-[4/5]',
    image: photo(
      images.serviceSpa,
      736,
      1104,
      'Spa · Treatment room',
      'A therapist treating a guest lying on a treatment bed beside candles, stones and flowers.',
    ),
  },
  {
    id: 'consultation',
    category: 'hair',
    caption: 'Every visit begins with a conversation',
    aspect: 'aspect-[4/3]',
    focus: 'object-top',
    image: photo(
      images.about,
      736,
      1104,
      'Hair · Consultation',
      'A stylist with a clipboard talking through ideas with a guest during a consultation.',
    ),
  },
  {
    id: 'makeup-artistry',
    category: 'bridal',
    caption: 'Makeup artistry, brush by brush',
    aspect: 'aspect-[4/5]',
    focus: 'object-[center_20%]',
    image: photo(
      images.gallery4,
      736,
      1318,
      'Bridal · Makeup artistry',
      'A woman with long, softly waved hair having her makeup finished with several brushes.',
    ),
  },
  {
    id: 'arrival',
    category: 'spa',
    caption: 'An unhurried arrival',
    aspect: 'aspect-square',
    image: photo(
      images.gallery1,
      736,
      1104,
      'Spa · Reception',
      'A softly lit reception desk with timber panelling, a plant and a lounge seat.',
    ),
  },
  {
    id: 'waves',
    category: 'hair',
    caption: 'Soft, lived-in waves',
    aspect: 'aspect-[2/3]',
    image: photo(
      images.gallery6,
      236,
      354,
      'Hair · Waves',
      'A stylist working on long, softly waved hair with highlights, seen from behind.',
    ),
  },
  {
    id: 'manicure',
    category: 'spa',
    caption: 'Manicure, in detail',
    aspect: 'aspect-[4/5]',
    image: photo(
      images.gallery5,
      736,
      1153,
      'Spa · Manicure',
      'A manicure in progress, with polish colours, towels and a vase of pink flowers on the table.',
    ),
  },
  {
    id: 'styling-station',
    category: 'hair',
    caption: 'The styling station',
    aspect: 'aspect-[4/5]',
    image: photo(
      images.heroInset,
      735,
      919,
      'Hair · Styling station',
      'A styling station with a framed portrait on the wall and a leather chair in a warmly lit salon.',
    ),
  },
]
