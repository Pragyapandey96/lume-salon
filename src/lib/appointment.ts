import {
  formMessages,
  MESSAGE_MAX_LENGTH,
  serviceOptions,
  timeOptions,
} from '@/config/contact'
import type { AppointmentErrors, AppointmentValues } from '@/types/contact'

export const emptyAppointment: AppointmentValues = {
  fullName: '',
  phone: '',
  email: '',
  service: '',
  date: '',
  time: '',
  message: '',
}

/** Today's date in the visitor's time zone, as YYYY-MM-DD. */
export function todayISO(): string {
  const now = new Date()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  return `${now.getFullYear()}-${month}-${day}`
}

/** True for a real calendar date written as YYYY-MM-DD. */
function isRealDate(value: string): boolean {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value)
  if (!match) return false
  const [year, month, day] = [Number(match[1]), Number(match[2]), Number(match[3])]
  const date = new Date(year, month - 1, day)
  return (
    date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day
  )
}

/** "2026-11-20" -> "Friday 20 November 2026". Falls back to the raw value. */
export function formatDate(value: string): string {
  if (!isRealDate(value)) return value
  const [year, month, day] = value.split('-').map(Number)
  return new Date(year, month - 1, day).toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

/** Returns an error message for each invalid field; an empty object means valid. */
export function validateAppointment(
  values: AppointmentValues,
  today: string,
): AppointmentErrors {
  const errors: AppointmentErrors = {}

  const name = values.fullName.trim()
  if (!name) errors.fullName = formMessages.fullName.required
  else if (name.length < 2) errors.fullName = formMessages.fullName.short

  const phone = values.phone.trim()
  const phoneDigits = phone.replace(/\D/g, '')
  if (!phone) errors.phone = formMessages.phone.required
  else if (
    !/^[+\d\s().-]+$/.test(phone) ||
    phoneDigits.length < 7 ||
    phoneDigits.length > 15
  ) {
    errors.phone = formMessages.phone.invalid
  }

  const email = values.email.trim()
  if (!email) errors.email = formMessages.email.required
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    errors.email = formMessages.email.invalid
  }

  if (!serviceOptions.some((option) => option.value === values.service)) {
    errors.service = formMessages.service.required
  }

  if (!values.date) errors.date = formMessages.date.required
  else if (!isRealDate(values.date)) errors.date = formMessages.date.invalid
  else if (values.date < today) errors.date = formMessages.date.past

  if (!timeOptions.some((option) => option.value === values.time)) {
    errors.time = formMessages.time.required
  }

  if (values.message.length > MESSAGE_MAX_LENGTH) {
    errors.message = formMessages.message.long
  }

  return errors
}
