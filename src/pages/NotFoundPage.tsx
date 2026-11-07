import PageTransition from '@/components/layout/PageTransition'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import PageHeader from '@/components/ui/PageHeader'

export default function NotFoundPage() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="404"
        title="Page not found"
        description="The page you are looking for has moved or no longer exists."
      />
      <section className="py-section">
        <Container>
          <Button to="/" variant="secondary" size="lg">
            Return home
          </Button>
        </Container>
      </section>
    </PageTransition>
  )
}
