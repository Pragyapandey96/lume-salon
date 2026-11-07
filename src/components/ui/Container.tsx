import type { ElementType, ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface ContainerProps {
  as?: ElementType
  className?: string
  children: ReactNode
}

/** Centers content to the site's max width with responsive side gutters. */
export default function Container({
  as: Tag = 'div',
  className,
  children,
}: ContainerProps) {
  return (
    <Tag className={cn('mx-auto w-full max-w-page px-gutter', className)}>
      {children}
    </Tag>
  )
}
