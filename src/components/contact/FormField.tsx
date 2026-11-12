import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/cn'
import type { SelectOption } from '@/types/contact'

interface FormFieldProps {
  id: string
  label: string
  kind?: 'input' | 'select' | 'textarea'
  type?: 'text' | 'email' | 'tel' | 'date'
  value: string
  onChange: (value: string) => void
  onBlur: () => void
  error?: string
  required?: boolean
  hint?: string
  placeholder?: string
  autoComplete?: string
  options?: SelectOption[]
  min?: string
  rows?: number
  maxLength?: number
  className?: string
}

const controlClass =
  'w-full border bg-ivory px-4 text-base text-espresso transition-colors duration-300 placeholder:text-taupe/60 focus:border-champagne-deep'

/** Label, control, hint and error message, wired together for assistive technology. */
export default function FormField({
  id,
  label,
  kind = 'input',
  type = 'text',
  value,
  onChange,
  onBlur,
  error,
  required = false,
  hint,
  placeholder,
  autoComplete,
  options = [],
  min,
  rows = 5,
  maxLength,
  className,
}: FormFieldProps) {
  const hintId = `${id}-hint`
  const errorId = `${id}-error`
  const describedBy = [hint ? hintId : null, error ? errorId : null].filter(Boolean).join(' ')

  const shared = {
    id,
    name: id,
    value,
    required,
    'aria-required': required || undefined,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': describedBy || undefined,
    onBlur,
    className: cn(controlClass, error ? 'border-[#8f3b2f]' : 'border-sand'),
  }

  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-espresso">
        {label}
        {required && (
          <>
            <span aria-hidden="true" className="ml-1 text-champagne-deep">
              *
            </span>
            <span className="sr-only"> (required)</span>
          </>
        )}
      </label>

      <div className="relative mt-2">
        {kind === 'select' ? (
          <>
            <select
              {...shared}
              onChange={(event) => onChange(event.target.value)}
              className={cn(shared.className, 'h-12 appearance-none pr-12', !value && 'text-taupe/70')}
            >
              <option value="" disabled>
                {placeholder ?? 'Select'}
              </option>
              {options.map((option) => (
                <option key={option.value} value={option.value} className="text-espresso">
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown
              aria-hidden="true"
              strokeWidth={1.5}
              className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-taupe"
            />
          </>
        ) : kind === 'textarea' ? (
          <textarea
            {...shared}
            rows={rows}
            maxLength={maxLength}
            placeholder={placeholder}
            onChange={(event) => onChange(event.target.value)}
            className={cn(shared.className, 'resize-y py-3 leading-relaxed')}
          />
        ) : (
          <input
            {...shared}
            type={type}
            min={min}
            placeholder={placeholder}
            autoComplete={autoComplete}
            onChange={(event) => onChange(event.target.value)}
            className={cn(shared.className, 'h-12')}
          />
        )}
      </div>

      {hint && (
        <p id={hintId} className="mt-2 text-sm text-taupe">
          {hint}
        </p>
      )}
      {error && (
        <p id={errorId} className="mt-2 text-sm text-[#8f3b2f]">
          {error}
        </p>
      )}
    </div>
  )
}
