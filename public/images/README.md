# Homepage photography

Drop photographs into this folder using the filenames below. They appear on the
homepage automatically. Until a file exists, a tonal placeholder is shown.

Export at about 2x display size as optimised JPEG or WebP quality 75–82. If you use
WebP or a different size, update the matching entry in `src/config/images.ts`.

| File               | Recommended size | Used for                             |
| ------------------ | ---------------- | ------------------------------------ |
| `hero-main.jpg`    | 1200 × 1500      | Hero, main portrait                  |
| `hero-inset.jpg`   | 600 × 800        | Hero, small detail                   |
| `service-hair.jpg` | 800 × 1067       | Services card: hair                  |
| `service-skin.jpg` | 800 × 1067       | Services card: skin                  |
| `service-spa.jpg`  | 800 × 1067       | Services card: spa                   |
| `service-bridal.jpg` | 800 × 1067     | Services card: bridal & makeup       |
| `about.jpg`        | 1200 × 1500      | About split layout                   |
| `experience.jpg`   | 2100 × 900       | Experience, wide interior            |
| `gallery-1.jpg`    | 1000 × 1250      | Gallery preview                      |
| `gallery-2.jpg`    | 1000 × 1250      | Gallery preview                      |
| `gallery-3.jpg`    | 800 × 1067       | Gallery preview                      |
| `gallery-4.jpg`    | 800 × 1067       | Gallery preview                      |
| `gallery-5.jpg`    | 1000 × 1250      | Gallery preview                      |
| `gallery-6.jpg`    | 1250 × 1000      | Gallery preview                      |
| `booking.jpg`      | 2400 × 1200      | Final booking section background     |

## About page

The About page reuses the photographs above — no additional files are needed. Its
alt text and placeholder labels live in `src/config/about.ts` (`aboutImages`), so if
you replace one of these files with a different subject, update the matching entry.

| File             | Used on the About page                                   | Shown as           |
| ---------------- | -------------------------------------------------------- | ------------------ |
| `gallery-4.jpg`  | Hero: natural beauty portrait (portrait photo, 4:5 crop) | Large portrait     |
| `about.jpg`      | Our story: stylist consulting a guest                    | Portrait, 4:5      |
| `experience.jpg` | The Lumé experience: wide salon interior                 | Landscape, 3:2     |
| `gallery-3.jpg`  | The Lumé experience: interior detail                     | Small inset, 3:4   |
| `booking.jpg`    | Final booking section background                         | Full-width, dimmed |

For the sharpest result on large screens, `experience.jpg` works best at 2100 × 1400
or larger (the wide image is shown in landscape at about 3:2).

## Gallery page

The Gallery page needs **no new image files**. Each of the 11 photographs below is
used once, and the hero reuses `booking.jpg`. All entries live in
`src/config/gallery.ts` (`galleryItems`), where each photograph has its own
`width`, `height`, alt text, category and tile proportion.

| File                 | Category | Shown as                          |
| -------------------- | -------- | --------------------------------- |
| `service-hair.jpg`   | Hair     | Tall tile, 5:8                    |
| `gallery-3.jpg`      | Hair     | Tile, 4:5                         |
| `about.jpg`          | Hair     | Landscape tile, 4:3               |
| `gallery-6.jpg`      | Hair     | Tile, 2:3 (see note below)        |
| `hero-inset.jpg`     | Hair     | Tile, 4:5                         |
| `service-skin.jpg`   | Skin     | Tall tile, 2:3                    |
| `service-spa.jpg`    | Spa      | Tile, 4:5                         |
| `gallery-1.jpg`      | Spa      | Square tile                       |
| `gallery-5.jpg`      | Spa      | Tile, 4:5                         |
| `gallery-4.jpg`      | Bridal   | Tile, 4:5                         |
| `service-bridal.jpg` | Bridal   | Tall tile, 2:3                    |
| `booking.jpg`        | (hero)   | Large hero photograph, 5:4        |

Notes:

- `gallery-6.jpg` is only 236 × 354, so it looks soft at full size. The viewer
  never enlarges a photograph beyond twice its real width, but a replacement is
  recommended.
- `service-bridal.jpg` carries a third-party watermark in its top-right corner.
- The **Skin** filter currently has a single photograph and **Bridal** has two.

### Optional additions

To give the Skin, Spa and Bridal filters more depth, add files like these to
`public/images/`, then add one entry per file to `galleryItems` in
`src/config/gallery.ts` (copy an existing entry and change `id`, `category`,
`caption`, `aspect` and the `photo(...)` call). The tiles and viewer pick them up
automatically.

| Suggested filename      | Category | Recommended size |
| ----------------------- | -------- | ---------------- |
| `gallery-skin-1.jpg`    | Skin     | 1000 × 1250      |
| `gallery-skin-2.jpg`    | Skin     | 1000 × 1250      |
| `gallery-spa-1.jpg`     | Spa      | 1000 × 1250      |
| `gallery-bridal-1.jpg`  | Bridal   | 1000 × 1500      |
| `gallery-bridal-2.jpg`  | Bridal   | 1000 × 1250      |
| `gallery-hair-1.jpg`    | Hair     | 1000 × 1250      |

Because `galleryItems` builds on the shared `images` entries, a new file also needs
a matching `asset(...)` line in `src/config/images.ts` (or an inline `ImageAsset`
object in `gallery.ts`) with its real `src`, `width` and `height`.

Use only photographs you own or are licensed to use.
