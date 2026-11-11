import Container from '@/components/ui/Container'
import EditorialImage from '@/components/ui/EditorialImage'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { aboutImages, storyContent } from '@/config/about'

export default function OurStory() {
  return (
    <section
      id="story"
      aria-labelledby="story-heading"
      className="scroll-mt-20 bg-cream py-section"
    >
      <Container className="grid items-start gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-6 lg:col-start-1 lg:row-start-1">
          <SectionHeading
            eyebrow={storyContent.eyebrow}
            title={storyContent.title}
            headingId="story-heading"
          />

          <Reveal className="mt-10 max-w-xl space-y-6 text-taupe">
            {storyContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <blockquote className="border-l border-champagne pl-6 pt-2 font-serif text-[clamp(1.5rem,2.4vw,2rem)] italic leading-snug text-espresso">
              {storyContent.quote}
            </blockquote>
          </Reveal>
        </div>

        <Reveal className="mx-auto w-full max-w-md lg:sticky lg:top-28 lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:max-w-none">
          <figure>
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -left-4 hidden size-full border border-champagne/60 sm:block"
              />
              <EditorialImage
                image={aboutImages.story}
                tone="warm"
                className="aspect-[4/5] w-full"
              />
            </div>
            <figcaption className="mt-8 text-eyebrow font-medium uppercase text-taupe">
              {storyContent.caption}
            </figcaption>
          </figure>
        </Reveal>
      </Container>
    </section>
  )
}
