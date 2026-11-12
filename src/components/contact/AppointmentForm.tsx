import { motion } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import AppointmentSuccess from '@/components/contact/AppointmentSuccess'
import FormField from '@/components/contact/FormField'
import Button from '@/components/ui/Button'
import {
  appointmentContent,
  fieldIds,
  fieldOrder,
  MESSAGE_MAX_LENGTH,
  serviceOptions,
  timeOptions,
} from '@/config/contact'
import { EASE_LUXE } from '@/lib/motion'
import { emptyAppointment, todayISO, validateAppointment } from '@/lib/appointment'
import type { AppointmentField, AppointmentValues } from '@/types/contact'

type Status = 'editing' | 'submitted'

/**
 * Frontend-only appointment request. Validation runs in the browser; a valid
 * submission only switches to the demo success state. Nothing is sent or stored.
 */
export default function AppointmentForm() {
  const [values, setValues] = useState<AppointmentValues>(emptyAppointment)
  const [touched, setTouched] = useState<Partial<Record<AppointmentField, boolean>>>({})
  const [attempted, setAttempted] = useState(false)
  const [status, setStatus] = useState<Status>('editing')
  const [today] = useState(todayISO)

  const successHeadingRef = useRef<HTMLHeadingElement>(null)
  const formHeadingRef = useRef<HTMLHeadingElement>(null)
  const moveFocus = useRef(false)

  const errors = useMemo(() => validateAppointment(values, today), [values, today])
  const errorCount = Object.keys(errors).length

  // After switching between the form and the success state, move focus to its heading.
  useEffect(() => {
    if (!moveFocus.current) return
    moveFocus.current = false
    const target = status === 'submitted' ? successHeadingRef : formHeadingRef
    target.current?.focus()
  }, [status])

  const visibleError = (field: AppointmentField) =>
    touched[field] || attempted ? errors[field] : undefined

  const update = (field: AppointmentField) => (value: string) =>
    setValues((current) => ({ ...current, [field]: value }))

  const blur = (field: AppointmentField) => () =>
    setTouched((current) => ({ ...current, [field]: true }))

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setAttempted(true)

    const firstInvalid = fieldOrder.find((field) => errors[field])
    if (firstInvalid) {
      document.getElementById(fieldIds[firstInvalid])?.focus()
      return
    }

    moveFocus.current = true
    setStatus('submitted')
  }

  const handleEdit = () => {
    moveFocus.current = true
    setStatus('editing')
  }

  const handleReset = () => {
    moveFocus.current = true
    setValues(emptyAppointment)
    setTouched({})
    setAttempted(false)
    setStatus('editing')
  }

  const field = (name: AppointmentField) => ({
    id: fieldIds[name],
    value: values[name],
    onChange: update(name),
    onBlur: blur(name),
    error: visibleError(name),
  })

  return (
    <>
      {status === 'submitted' ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE_LUXE }}
        >
          <AppointmentSuccess
            ref={successHeadingRef}
            values={values}
            onEdit={handleEdit}
            onReset={handleReset}
          />
        </motion.div>
      ) : (
        <motion.form
          key="form"
          noValidate
          onSubmit={handleSubmit}
          aria-labelledby="appointment-form-heading"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE_LUXE }}
        >
          <h3
            ref={formHeadingRef}
            id="appointment-form-heading"
            tabIndex={-1}
            className="font-serif text-title text-espresso focus:outline-none"
          >
            Your details
          </h3>
          <p className="mt-2 text-sm text-taupe">
            <span aria-hidden="true" className="text-champagne-deep">
              *
            </span>{' '}
            Required fields
          </p>

          {attempted && errorCount > 0 && (
            <p
              role="alert"
              className="mt-6 border-l border-[#8f3b2f] pl-4 text-sm text-[#8f3b2f]"
            >
              {errorCount === 1
                ? 'Please check the highlighted field before sending.'
                : `Please check the ${errorCount} highlighted fields before sending.`}
            </p>
          )}

          <div className="mt-8 grid gap-x-8 gap-y-7 sm:grid-cols-2">
            <FormField
              {...field('fullName')}
              label="Full name"
              required
              autoComplete="name"
              placeholder="Your full name"
              className="sm:col-span-2"
            />
            <FormField
              {...field('phone')}
              label="Phone number"
              type="tel"
              required
              autoComplete="tel"
              placeholder="+00 00000 00000"
            />
            <FormField
              {...field('email')}
              label="Email address"
              type="email"
              required
              autoComplete="email"
              placeholder="name@example.com"
            />
            <FormField
              {...field('service')}
              kind="select"
              label="Service"
              required
              placeholder="Choose a service"
              options={serviceOptions}
              className="sm:col-span-2"
            />
            <FormField
              {...field('date')}
              label="Preferred date"
              type="date"
              required
              min={today}
            />
            <FormField
              {...field('time')}
              kind="select"
              label="Preferred time"
              required
              placeholder="Choose a time of day"
              options={timeOptions}
            />
            <div className="sm:col-span-2">
              <FormField
                {...field('message')}
                kind="textarea"
                label="Additional message (optional)"
                placeholder="Anything we should know, such as the look you have in mind or any preferences."
                maxLength={MESSAGE_MAX_LENGTH}
              />
              <p className="mt-1 text-right text-xs text-taupe" aria-hidden="true">
                {values.message.length} / {MESSAGE_MAX_LENGTH}
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <Button type="submit" size="lg">
              {appointmentContent.submitLabel}
            </Button>
            <p className="text-sm text-taupe">{appointmentContent.submitHint}</p>
          </div>
        </motion.form>
      )}
    </>
  )
}
