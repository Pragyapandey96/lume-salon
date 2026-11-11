import AboutCta from '@/components/about/AboutCta'
import AboutHero from '@/components/about/AboutHero'
import OurStory from '@/components/about/OurStory'
import Philosophy from '@/components/about/Philosophy'
import Values from '@/components/about/Values'
import VisitExperience from '@/components/about/VisitExperience'
import PageTransition from '@/components/layout/PageTransition'
import { siteConfig } from '@/config/site'

export default function AboutPage() {
  return (
    <PageTransition>
      <title>{`About · ${siteConfig.name} ${siteConfig.tagline}`}</title>
      <AboutHero />
      <OurStory />
      <Philosophy />
      <VisitExperience />
      <Values />
      <AboutCta />
    </PageTransition>
  )
}
