import { Link } from 'react-router-dom'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/cn'

interface LogoProps {
  /** "light" is for use on dark (espresso) backgrounds. */
  tone?: 'dark' | 'light'
  onClick?: () => void
}

export default function Logo({ tone = 'dark', onClick }: LogoProps) {
  const isLight = tone === 'light'

  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label={`${siteConfig.name} ${siteConfig.tagline} — home`}
      className="inline-flex flex-col leading-none"
    >
      <span
        className={cn(
          'font-serif text-[1.75rem] font-medium tracking-[0.04em]',
          isLight ? 'text-ivory' : 'text-espresso',
        )}
      >
        {siteConfig.name}
      </span>
      <span
        className={cn(
          'mt-1.5 text-[0.5625rem] font-medium uppercase tracking-[0.42em]',
          isLight ? 'text-champagne' : 'text-champagne-deep',
        )}
      >
        {siteConfig.tagline}
      </span>
    </Link>
  )
}
