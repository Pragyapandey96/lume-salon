import { Image as ImageIcon } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/cn'
import type { ImageAsset } from '@/types/media'

type Tone = 'light' | 'warm' | 'dark'

const toneClasses: Record<Tone, string> = {
  light: 'bg-linear-to-br from-cream to-beige text-taupe',
  warm: 'bg-linear-to-br from-beige to-sand text-taupe',
  dark: 'bg-linear-to-br from-espresso-soft to-espresso text-champagne/80',
}

interface EditorialImageProps {
  image: ImageAsset
  /** Size and shape of the frame, e.g. "aspect-[4/5] w-full". */
  className?: string
  imgClassName?: string
  /** Use for the largest above-the-fold image only. */
  priority?: boolean
  /** Purely decorative images are hidden from assistive technology. */
  decorative?: boolean
  /** Background tone used while loading and when no photograph exists yet. */
  tone?: Tone
  showLabel?: boolean
}

/**
 * Photograph that fills its frame. Lazy-loaded by default, with intrinsic
 * dimensions to prevent layout shift. If the file is missing, a tonal
 * placeholder keeps the composition intact.
 */
export default function EditorialImage({
  image,
  className,
  imgClassName,
  priority = false,
  decorative = false,
  tone = 'light',
  showLabel = true,
}: EditorialImageProps) {
  const [failed, setFailed] = useState(false)

  return (
    <div className={cn('relative overflow-hidden', toneClasses[tone], className)}>
      {failed ? (
        <div
          role={decorative ? undefined : 'img'}
          aria-label={decorative ? undefined : image.alt}
          aria-hidden={decorative || undefined}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span
            aria-hidden="true"
            className="absolute inset-3 border border-champagne/40"
          />
          {showLabel && (
            <span className="relative flex flex-col items-center gap-3 px-8 text-center">
              <ImageIcon className="size-6" strokeWidth={1.25} aria-hidden="true" />
              <span className="text-eyebrow font-medium uppercase">
                {image.label}
              </span>
            </span>
          )}
        </div>
      ) : (
        <img
          src={image.src}
          alt={decorative ? '' : image.alt}
          width={image.width}
          height={image.height}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
          onError={() => setFailed(true)}
          className={cn('absolute inset-0 size-full object-cover', imgClassName)}
        />
      )}
    </div>
  )
}
