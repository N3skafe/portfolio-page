import type { ReactNode } from 'react'
import { useLocale } from '../hooks/useLocale.ts'

export function ExternalLink({
  href,
  children,
  className,
}: {
  href: string
  children: ReactNode
  className?: string
}) {
  const { messages } = useLocale()
  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="sr-only"> ({messages.opensInNewTab})</span>
    </a>
  )
}
