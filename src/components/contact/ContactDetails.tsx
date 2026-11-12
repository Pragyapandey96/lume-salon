import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import { contactDetailsContent } from '@/config/contact'
import { siteConfig } from '@/config/site'
import { fadeUp, staggerContainer } from '@/lib/motion'

const linkClass =
  'border-b border-transparent transition-colors duration-500 ease-luxe hover:border-champagne hover:text-champagne-deep'

interface DetailRow {
  label: string
  content: ReactNode
}

const rows: DetailRow[] = [
  {
    label: 'Phone',
    content: (
      <a href={siteConfig.contact.phoneHref} className={`font-serif text-2xl sm:text-3xl ${linkClass}`}>
        {siteConfig.contact.phone}
      </a>
    ),
  },
  {
    label: 'Email',
    content: (
      <a
        href={`mailto:${siteConfig.contact.email}`}
        className={`break-all font-serif text-2xl sm:text-3xl ${linkClass}`}
      >
        {siteConfig.contact.email}
      </a>
    ),
  },
  {
    label: 'WhatsApp',
    content: (
      <a
        href={siteConfig.whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`font-serif text-2xl sm:text-3xl ${linkClass}`}
      >
        {siteConfig.whatsapp.number}
        <span className="sr-only"> (opens WhatsApp in a new tab)</span>
      </a>
    ),
  },
  {
    label: 'Address',
    content: (
      <address className="text-lg not-italic text-espresso">
        {siteConfig.address.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </address>
    ),
  },
  {
    label: 'Opening hours',
    content: (
      <dl className="space-y-2 text-lg">
        {siteConfig.hours.map((entry) => (
          <div key={entry.days} className="flex flex-wrap gap-x-6">
            <dt className="min-w-44 text-taupe">{entry.days}</dt>
            <dd className="text-espresso">{entry.time}</dd>
          </div>
        ))}
      </dl>
    ),
  },
]

export default function ContactDetails() {
  return (
    <section
      id="details"
      aria-labelledby="details-heading"
      className="scroll-mt-20 bg-cream py-section"
    >
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow={contactDetailsContent.eyebrow}
              title={contactDetailsContent.title}
              description={contactDetailsContent.description}
              headingId="details-heading"
            />
            {siteConfig.detailsAreSample && (
              <p className="mt-8 max-w-prose border-l border-champagne pl-6 text-sm text-taupe">
                {contactDetailsContent.sampleNotice}
              </p>
            )}
          </div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="border-t border-sand/70 lg:col-span-8"
        >
          {rows.map((row) => (
            <motion.div
              key={row.label}
              variants={fadeUp}
              className="grid gap-3 border-b border-sand/70 py-8 sm:grid-cols-12 sm:gap-8"
            >
              <div className="sm:col-span-4">
                <p className="text-eyebrow font-medium uppercase text-champagne-deep">
                  {row.label}
                </p>
                {siteConfig.detailsAreSample && (
                  <p className="mt-2 inline-block border border-champagne/60 px-2 py-0.5 text-[0.625rem] font-medium uppercase tracking-[0.2em] text-taupe">
                    Sample
                  </p>
                )}
              </div>
              <div className="sm:col-span-8">{row.content}</div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
