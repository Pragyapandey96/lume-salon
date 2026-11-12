import GalleryBooking from '@/components/gallery/GalleryBooking'
import GalleryBrowser from '@/components/gallery/GalleryBrowser'
import GalleryHero from '@/components/gallery/GalleryHero'
import GalleryIntro from '@/components/gallery/GalleryIntro'
import PageTransition from '@/components/layout/PageTransition'
import { siteConfig } from '@/config/site'

export default function GalleryPage() {
  return (
    <PageTransition>
      <title>{`Gallery · ${siteConfig.name} ${siteConfig.tagline}`}</title>
      <GalleryHero />
      <GalleryIntro />
      <GalleryBrowser />
      <GalleryBooking />
    </PageTransition>
  )
}
