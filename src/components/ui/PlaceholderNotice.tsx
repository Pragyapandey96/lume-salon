import Container from '@/components/ui/Container'

interface PlaceholderNoticeProps {
  children?: string
}

/** Temporary marker for sections that have not been designed yet. */
export default function PlaceholderNotice({
  children = 'This page is being crafted.',
}: PlaceholderNoticeProps) {
  return (
    <section className="py-section">
      <Container>
        <div className="border border-dashed border-sand px-8 py-20 text-center">
          <p className="font-serif text-title text-taupe">{children}</p>
        </div>
      </Container>
    </section>
  )
}
