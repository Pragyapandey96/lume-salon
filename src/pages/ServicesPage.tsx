import PageTransition from '@/components/layout/PageTransition'
import PageHeader from '@/components/ui/PageHeader'
import PlaceholderNotice from '@/components/ui/PlaceholderNotice'

export default function ServicesPage() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Our Menu"
        title="Services"
        description="Treatments for hair, skin and body, each tailored to you."
      />
      <PlaceholderNotice />
    </PageTransition>
  )
}
