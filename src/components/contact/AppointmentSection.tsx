import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import AppointmentForm from '@/components/contact/AppointmentForm'
import { appointmentContent } from '@/config/contact'

export default function AppointmentSection() {
  return (
    <section
      id="appointment"
      aria-labelledby="appointment-heading"
      className="scroll-mt-20 bg-ivory py-section"
    >
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow={appointmentContent.eyebrow}
              title={appointmentContent.title}
              description={appointmentContent.description}
              headingId="appointment-heading"
            />
            <p className="mt-8 max-w-prose border-l border-champagne pl-6 text-sm text-taupe">
              {appointmentContent.demoNotice}
            </p>
          </div>
        </div>

        <div className="border border-sand/70 bg-cream/60 p-6 sm:p-10 lg:col-span-8 lg:p-12">
          <AppointmentForm />
        </div>
      </Container>
    </section>
  )
}
