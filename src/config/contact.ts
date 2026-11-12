import { images } from '@/config/images'
import type { AppointmentField, SelectOption } from '@/types/contact'
import type { ImageAsset } from '@/types/media'

/**
 * Contact page copy and form settings.
 *
 * Business details (phone, email, WhatsApp, address, hours) live in
 * `src/config/site.ts` so there is one place to replace them. Nothing here
 * invents a real address, map or booking system.
 */

export const contactHeroContent = {
  eyebrow: 'Contact & Reservations',
  description:
    'Tell us what you have in mind and we’ll help you plan a visit that feels just right.',
  image: {
    ...images.gallery1,
    width: 736,
    height: 1104,
    label: 'Contact · Welcoming reception',
    alt: 'A softly lit reception desk with timber panelling, a plant and a lounge seat.',
  } satisfies ImageAsset,
}

export const contactDetailsContent = {
  eyebrow: 'Contact Details',
  title: 'However you prefer to reach us.',
  description:
    'Call, write or send a message. We are happy to talk through a service before you decide on a time.',
  sampleNotice:
    'The details shown here are sample placeholders and will be replaced with the salon’s real information before launch.',
}

export const appointmentContent = {
  eyebrow: 'Appointment Request',
  title: 'Request an appointment.',
  description:
    'Share a few details and when you would like to visit. We will ask about anything else when we are in touch.',
  demoNotice:
    'Demo form. This website is a design preview, so submitting the form does not send your details anywhere, store them or reserve a time.',
  submitLabel: 'Send Demo Request',
  submitHint: 'Demo only: nothing is sent or saved.',
}

export const serviceOptions: SelectOption[] = [
  { value: 'hair', label: 'Hair' },
  { value: 'skin', label: 'Skin' },
  { value: 'spa', label: 'Spa' },
  { value: 'bridal', label: 'Bridal & Makeup' },
]

export const timeOptions: SelectOption[] = [
  { value: 'morning', label: 'Morning' },
  { value: 'afternoon', label: 'Afternoon' },
  { value: 'evening', label: 'Evening' },
  { value: 'flexible', label: 'I’m flexible' },
]

export const MESSAGE_MAX_LENGTH = 500

export const fieldIds: Record<AppointmentField, string> = {
  fullName: 'appointment-name',
  phone: 'appointment-phone',
  email: 'appointment-email',
  service: 'appointment-service',
  date: 'appointment-date',
  time: 'appointment-time',
  message: 'appointment-message',
}

/** Order used to find the first invalid field. */
export const fieldOrder: AppointmentField[] = [
  'fullName',
  'phone',
  'email',
  'service',
  'date',
  'time',
  'message',
]

export const formMessages = {
  fullName: {
    required: 'Please tell us your full name.',
    short: 'Please enter your full name, at least two characters.',
  },
  phone: {
    required: 'Please enter a phone number so we can reach you.',
    invalid: 'Please enter a valid phone number, for example +00 00000 00000.',
  },
  email: {
    required: 'Please enter your email address.',
    invalid: 'Please enter a valid email address, such as name@example.com.',
  },
  service: {
    required: 'Please choose the service you are interested in.',
  },
  date: {
    required: 'Please choose a preferred date.',
    invalid: 'Please enter a valid date.',
    past: 'Please choose today or a later date.',
  },
  time: {
    required: 'Please choose a preferred time of day.',
  },
  message: {
    long: `Please keep your message under ${MESSAGE_MAX_LENGTH} characters.`,
  },
}

export const appointmentSuccessContent = {
  eyebrow: 'Demo request',
  title: 'This was a demo request.',
  description:
    'Thank you for trying the form. Nothing has been sent or saved, and no appointment has been booked or confirmed. This is how a request would look once the salon’s booking process is connected.',
  summaryTitle: 'What you entered',
  editLabel: 'Edit Request',
  resetLabel: 'Start Again',
  nextSteps:
    'To reach the salon now, use the contact details on this page. They are sample details until the real ones are added.',
}

export const locationContent = {
  eyebrow: 'Location',
  title: 'Find your way to Lumé.',
  description:
    'Our full address and directions will appear here once the salon’s location is confirmed.',
  mapLabel: 'Map placeholder',
  mapNote:
    'An interactive map will be added here once the real address is available. No location has been invented for this preview.',
}

export const contactBookingContent = {
  eyebrow: 'Book Your Visit',
  title: 'We look forward to welcoming you.',
  description:
    'Whether it is a first visit or a familiar one, take a moment to tell us what you need.',
  buttonLabel: 'Request an Appointment',
}

export const contactBookingImage = images.booking
