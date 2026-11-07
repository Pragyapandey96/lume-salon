import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Logo from '@/components/layout/Logo'
import Container from '@/components/ui/Container'
import { navItems } from '@/config/navigation'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/cn'

const currentYear = new Date().getFullYear()

interface FooterColumnProps {
  title: string
  className?: string
  children: ReactNode
}

function FooterColumn({ title, className, children }: FooterColumnProps) {
  return (
    <div className={className}>
      <h2 className="font-sans text-eyebrow font-medium uppercase text-champagne">
        {title}
      </h2>
      <div className="mt-6 space-y-3 text-sm">{children}</div>
    </div>
  )
}

const linkClass = 'transition-colors duration-300 hover:text-champagne-light'
const iconClass = 'mt-0.5 size-4 shrink-0 text-champagne'

export default function Footer() {
  return (
    <footer className="bg-espresso text-ivory/70">
      <Container className="py-20 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Logo tone="light" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          <FooterColumn title="Explore" className="lg:col-span-2 lg:col-start-6">
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Visit" className="lg:col-span-3">
            <p className="flex gap-3">
              <MapPin className={iconClass} strokeWidth={1.5} aria-hidden="true" />
              <span>
                {siteConfig.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </p>
            <div className="flex gap-3">
              <Clock className={iconClass} strokeWidth={1.5} aria-hidden="true" />
              <dl className="space-y-1">
                {siteConfig.hours.map((entry) => (
                  <div key={entry.days}>
                    <dt className="inline">{entry.days}</dt>
                    <dd className="block text-ivory">{entry.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </FooterColumn>

          <FooterColumn title="Contact" className="lg:col-span-2">
            <a href={siteConfig.contact.phoneHref} className={cn('flex gap-3', linkClass)}>
              <Phone className={iconClass} strokeWidth={1.5} aria-hidden="true" />
              {siteConfig.contact.phone}
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className={cn('flex gap-3', linkClass)}
            >
              <Mail className={iconClass} strokeWidth={1.5} aria-hidden="true" />
              <span className="break-all">{siteConfig.contact.email}</span>
            </a>
          </FooterColumn>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-ivory/10 pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {currentYear} {siteConfig.name} {siteConfig.tagline}. All rights
            reserved.
          </p>
          <ul className="flex gap-6">
            {siteConfig.social.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={linkClass}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  )
}
