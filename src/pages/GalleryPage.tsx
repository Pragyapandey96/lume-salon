import PageTransition from '@/components/layout/PageTransition'
import PageHeader from '@/components/ui/PageHeader'
import PlaceholderNotice from '@/components/ui/PlaceholderNotice'

export default function GalleryPage() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Portfolio"
        title="Gallery"
        description="A look inside the space and the work we are proud of."
      />
      <PlaceholderNotice />
    </PageTransition>
  )
}
