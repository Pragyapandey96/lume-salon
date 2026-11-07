import PageTransition from '@/components/layout/PageTransition'
import PageHeader from '@/components/ui/PageHeader'
import PlaceholderNotice from '@/components/ui/PlaceholderNotice'

export default function AboutPage() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Our Story"
        title="About"
        description="The philosophy, the craft and the people behind Lumé."
      />
      <PlaceholderNotice />
    </PageTransition>
  )
}
