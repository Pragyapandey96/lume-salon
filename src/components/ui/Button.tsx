import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/cn'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'light'
export type ButtonSize = 'md' | 'lg'

interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  /** When provided, renders a router link instead of a <button>. */
  to?: string
  type?: 'button' | 'submit'
  disabled?: boolean
  onClick?: () => void
  className?: string
  children: ReactNode
}

const base =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans font-medium uppercase transition-colors duration-500 ease-luxe disabled:pointer-events-none disabled:opacity-50'

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-espresso text-ivory hover:bg-champagne-deep',
  secondary:
    'border border-espresso/30 text-espresso hover:border-espresso hover:bg-espresso hover:text-ivory',
  ghost: 'text-espresso hover:text-champagne-deep',
  light: 'bg-ivory text-espresso hover:bg-champagne-light',
}

const sizes: Record<ButtonSize, string> = {
  md: 'h-11 px-7 text-[0.75rem] tracking-[0.2em]',
  lg: 'h-14 px-10 text-[0.8125rem] tracking-[0.22em]',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  to,
  type = 'button',
  disabled,
  onClick,
  className,
  children,
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className)

  if (to !== undefined) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}
