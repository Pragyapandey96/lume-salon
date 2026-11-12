import { forwardRef } from 'react'
import Button from '@/components/ui/Button'
import { appointmentSuccessContent, serviceOptions, timeOptions } from '@/config/contact'
import { formatDate } from '@/lib/appointment'
import type { AppointmentValues } from '@/types/contact'

interface AppointmentSuccessProps {
  values: AppointmentValues
  onEdit: () => void
  onReset: () => void
}

const labelFor = (options: { value: string; label: string }[], value: string) =>
  options.find((option) => option.value === value)?.label ?? value

/** Shown after a valid demo submission. Never claims the visit is booked or confirmed. */
const AppointmentSuccess = forwardRef<HTMLHeadingElement, AppointmentSuccessProps>(
  function AppointmentSuccess({ values, onEdit, onReset }, headingRef) {
    const summary = [
      { label: 'Name', value: values.fullName.trim() },
      { label: 'Phone', value: values.phone.trim() },
      { label: 'Email', value: values.email.trim() },
      { label: 'Service', value: labelFor(serviceOptions, values.service) },
      { label: 'Preferred date', value: formatDate(values.date) },
      { label: 'Preferred time', value: labelFor(timeOptions, values.time) },
      ...(values.message.trim()
        ? [{ label: 'Message', value: values.message.trim() }]
        : []),
    ]

    return (
      <div>
        <p className="text-eyebrow font-medium uppercase text-champagne-deep">
          {appointmentSuccessContent.eyebrow}
        </p>
        <h3
          ref={headingRef}
          tabIndex={-1}
          className="mt-4 font-serif text-title text-espresso focus:outline-none"
        >
          {appointmentSuccessContent.title}
        </h3>
        <p className="mt-4 max-w-prose text-taupe">{appointmentSuccessContent.description}</p>

        <h4 className="mt-10 font-sans text-eyebrow font-medium uppercase text-espresso">
          {appointmentSuccessContent.summaryTitle}
        </h4>
        <dl className="mt-4 border-t border-sand/70">
          {summary.map((item) => (
            <div
              key={item.label}
              className="grid gap-1 border-b border-sand/70 py-4 sm:grid-cols-3 sm:gap-6"
            >
              <dt className="text-sm text-taupe">{item.label}</dt>
              <dd className="break-words text-espresso sm:col-span-2">{item.value}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-8 max-w-prose text-sm text-taupe">
          {appointmentSuccessContent.nextSteps}
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button variant="secondary" size="lg" onClick={onEdit}>
            {appointmentSuccessContent.editLabel}
          </Button>
          <Button variant="ghost" size="lg" onClick={onReset}>
            {appointmentSuccessContent.resetLabel}
          </Button>
        </div>
      </div>
    )
  },
)

export default AppointmentSuccess
