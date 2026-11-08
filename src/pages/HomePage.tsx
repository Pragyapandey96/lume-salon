import AboutPreview from '@/components/home/AboutPreview'
import BookingCta from '@/components/home/BookingCta'
import Experience from '@/components/home/Experience'
import GalleryPreview from '@/components/home/GalleryPreview'
import Hero from '@/components/home/Hero'
import SignatureServices from '@/components/home/SignatureServices'
import Testimonials from '@/components/home/Testimonials'
import TrustBar from '@/components/home/TrustBar'
import PageTransition from '@/components/layout/PageTransition'
import { siteConfig } from '@/config/site'

export default function HomePage() {
  return (
    <PageTransition>
      <title>{`${siteConfig.name} ${siteConfig.tagline} · Your beauty, thoughtfully reimagined`}</title>
      <Hero />
      <TrustBar />
      <SignatureServices />
      <AboutPreview />
      <Experience />
      <GalleryPreview />
      <Testimonials />
      <BookingCta />
    </PageTransition>
  )
}
