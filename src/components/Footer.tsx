import { displayName, profile } from '../data/profile.ts'
import { useLocale } from '../hooks/useLocale.ts'
import { ExternalLink } from './ExternalLink.tsx'

const year = new Date().getFullYear()

export function Footer() {
  const { locale, messages } = useLocale()
  const name = displayName(locale)

  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <p>{name.primary}</p>
        <p>{year}</p>
        <ExternalLink href={profile.githubUrl}>{messages.github}</ExternalLink>
        <p className="footer-note">{messages.footer.rights}</p>
      </div>
    </footer>
  )
}
