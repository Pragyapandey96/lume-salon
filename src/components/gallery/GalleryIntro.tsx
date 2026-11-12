import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { galleryIntroContent } from '@/config/gallery'

export default function GalleryIntro() {
  const [lead, note] = galleryIntroContent.paragraphs

  return (
    <section aria-labelledby="gallery-intro-heading" className="bg-cream py-section">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow={galleryIntroContent.eyebrow}
            title={galleryIntroContent.title}
            headingId="gallery-intro-heading"
          />
        </div>
        <Reveal className="space-y-8 lg:col-span-6 lg:col-start-7">
          <p className="text-lg text-taupe">{lead}</p>
          <p className="border-l border-champagne pl-6 text-sm text-taupe">{note}</p>
        </Reveal>
      </Container>
    </section>
  )
}
