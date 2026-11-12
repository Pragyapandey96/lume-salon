export type AppointmentField =
  | 'fullName'
  | 'phone'
  | 'email'
  | 'service'
  | 'date'
  | 'time'
  | 'message'

export type AppointmentValues = Record<AppointmentField, string>

export type AppointmentErrors = Partial<Record<AppointmentField, string>>

export interface SelectOption {
  value: string
  label: string
}
