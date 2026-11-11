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

Use only photographs you own or are licensed to use.
