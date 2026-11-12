import AppointmentSection from '@/components/contact/AppointmentSection'
import ContactBooking from '@/components/contact/ContactBooking'
import ContactDetails from '@/components/contact/ContactDetails'
import ContactHero from '@/components/contact/ContactHero'
import LocationSection from '@/components/contact/LocationSection'
import PageTransition from '@/components/layout/PageTransition'
import { siteConfig } from '@/config/site'

export default function ContactPage() {
  return (
    <PageTransition>
      <title>{`Contact · ${siteConfig.name} ${siteConfig.tagline}`}</title>
      <ContactHero />
      <ContactDetails />
      <AppointmentSection />
      <LocationSection />
      <ContactBooking />
    </PageTransition>
  )
}
