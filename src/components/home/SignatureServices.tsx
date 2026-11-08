import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import EditorialImage from '@/components/ui/EditorialImage'
import SectionHeading from '@/components/ui/SectionHeading'
import { servicesIntro, signatureServices } from '@/config/home'
import { images } from '@/config/images'
import { fadeUp, staggerContainer } from '@/lib/motion'

export default function SignatureServices() {
  return (
    <section
      aria-labelledby="services-heading"
      className="bg-ivory py-section"
    >
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow={servicesIntro.eyebrow}
            title={servicesIntro.title}
            description={servicesIntro.description}
            headingId="services-heading"
          />
          <Button to="/services" variant="secondary" className="self-start md:self-auto">
            View All Services
          </Button>
        </div>

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4"
        >
          {signatureServices.map((service) => (
            <motion.li
              key={service.number}
              variants={fadeUp}
              className="lg:even:mt-14"
            >
              <Link to="/services" className="group block">
                <div className="overflow-hidden">
                  <EditorialImage
                    image={images[service.image]}
                    tone="warm"
                    className="aspect-[3/4] w-full transition-transform duration-[1200ms] ease-luxe group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                </div>
                <p className="mt-6 text-eyebrow font-medium uppercase text-champagne-deep">
                  {service.number}
                </p>
                <h3 className="mt-3 font-serif text-title text-espresso">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-taupe">{service.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 border-b border-champagne pb-1 text-eyebrow font-medium uppercase text-espresso">
                  Discover
                  <ArrowRight
                    className="size-3.5 transition-transform duration-500 ease-luxe group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  )
}
