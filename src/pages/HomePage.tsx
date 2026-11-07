import PageTransition from '@/components/layout/PageTransition'
import PageHeader from '@/components/ui/PageHeader'
import PlaceholderNotice from '@/components/ui/PlaceholderNotice'

export default function HomePage() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Welcome"
        title="A sanctuary for stillness"
        description="Hair, skin and restoration, thoughtfully composed."
      />
      <PlaceholderNotice>The homepage design is coming next.</PlaceholderNotice>
    </PageTransition>
  )
}
