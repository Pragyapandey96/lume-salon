import PageTransition from '@/components/layout/PageTransition'
import ApproachSection from '@/components/services/ApproachSection'
import ServiceDiscipline from '@/components/services/ServiceDiscipline'
import ServicesBooking from '@/components/services/ServicesBooking'
import ServicesHero from '@/components/services/ServicesHero'
import { serviceDisciplines } from '@/config/services'
import { siteConfig } from '@/config/site'

export default function ServicesPage() {
  return (
    <PageTransition>
      <title>{`Services · ${siteConfig.name} ${siteConfig.tagline}`}</title>
      <ServicesHero />
      {serviceDisciplines.map((discipline, index) => (
        <ServiceDiscipline
          key={discipline.id}
          discipline={discipline}
          imageSide={index % 2 === 0 ? 'left' : 'right'}
          background={index % 2 === 0 ? 'cream' : 'ivory'}
        />
      ))}
      <ApproachSection />
      <ServicesBooking />
    </PageTransition>
  )
}
