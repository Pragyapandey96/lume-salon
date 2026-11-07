import PageTransition from '@/components/layout/PageTransition'
import PageHeader from '@/components/ui/PageHeader'
import PlaceholderNotice from '@/components/ui/PlaceholderNotice'

export default function ContactPage() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Reservations"
        title="Contact"
        description="Book an appointment or ask us anything — we are happy to help."
      />
      <PlaceholderNotice />
    </PageTransition>
  )
}
