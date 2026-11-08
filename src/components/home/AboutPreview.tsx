import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import EditorialImage from '@/components/ui/EditorialImage'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { aboutContent, principles } from '@/config/home'
import { images } from '@/config/images'

export default function AboutPreview() {
  return (
    <section aria-labelledby="about-heading" className="bg-cream py-section">
      <Container className="grid items-center gap-20 lg:grid-cols-12 lg:gap-12">
        <Reveal className="relative lg:col-span-6">
          <EditorialImage
            image={images.about}
            className="aspect-[4/5] w-full"
          />
          <figure className="absolute -bottom-10 right-4 max-w-[17rem] bg-ivory p-6 shadow-soft sm:right-8 lg:-right-10">
            <figcaption className="text-eyebrow font-medium uppercase text-champagne-deep">
              {aboutContent.quoteLabel}
            </figcaption>
            <blockquote className="mt-3 font-serif text-2xl italic leading-snug text-espresso">
              {aboutContent.quote}
            </blockquote>
          </figure>
        </Reveal>

        <div className="mt-6 lg:col-span-5 lg:col-start-8 lg:mt-0">
          <SectionHeading
            eyebrow={aboutContent.eyebrow}
            title={aboutContent.title}
            description={aboutContent.description}
            headingId="about-heading"
          />
          <Reveal>
            <p className="mt-5 text-taupe">{aboutContent.secondary}</p>

            <ul className="mt-10 border-t border-sand/70">
              {principles.map((principle, index) => (
                <li
                  key={principle.title}
                  className="flex gap-6 border-b border-sand/70 py-5"
                >
                  <span className="pt-1 text-eyebrow font-medium text-champagne-deep">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-espresso">
                      {principle.title}
                    </h3>
                    <p className="mt-1 text-sm text-taupe">
                      {principle.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <Button to="/about" variant="secondary" size="lg" className="mt-10">
              Discover Our Story
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
