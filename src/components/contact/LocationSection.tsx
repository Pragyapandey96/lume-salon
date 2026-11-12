import { MapPin } from 'lucide-react'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { locationContent } from '@/config/contact'
import { siteConfig } from '@/config/site'

export default function LocationSection() {
  return (
    <section aria-labelledby="location-heading" className="bg-cream py-section">
      <Container className="grid items-start gap-12 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow={locationContent.eyebrow}
            title={locationContent.title}
            description={locationContent.description}
            headingId="location-heading"
          />
          <Reveal className="mt-10 border-t border-sand/70 pt-6">
            <p className="text-eyebrow font-medium uppercase text-champagne-deep">Address</p>
            <address className="mt-3 text-lg not-italic text-espresso">
              {siteConfig.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            {siteConfig.detailsAreSample && (
              <p className="mt-3 text-sm text-taupe">Sample address, not a real location.</p>
            )}
          </Reveal>
        </div>

        <Reveal className="relative lg:col-span-7">
          <div
            aria-hidden="true"
            className="absolute -bottom-4 -left-4 hidden size-full border border-champagne/60 sm:block"
          />
          <div
            role="img"
            aria-label={`${locationContent.mapLabel}. ${locationContent.mapNote}`}
            className="relative flex aspect-[4/3] w-full items-center justify-center bg-beige"
          >
            <span aria-hidden="true" className="absolute inset-3 border border-champagne/40" />
            <div className="relative flex max-w-xs flex-col items-center gap-3 px-6 text-center text-taupe">
              <MapPin className="size-6" strokeWidth={1.25} aria-hidden="true" />
              <p className="text-eyebrow font-medium uppercase">{locationContent.mapLabel}</p>
              <p className="text-sm">{locationContent.mapNote}</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
