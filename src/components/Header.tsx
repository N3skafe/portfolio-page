import { displayName, profile } from '../data/profile.ts'
import { useLocale } from '../hooks/useLocale.ts'
import { useTheme } from '../hooks/useTheme.ts'
import { ExternalLink } from './ExternalLink.tsx'
import { LanguageSwitcher } from './LanguageSwitcher.tsx'

export function Header() {
  const { locale, messages } = useLocale()
  const { theme, setTheme } = useTheme()
  const name = displayName(locale)
  const themeLabel = theme === 'dark' ? messages.theme.toLight : messages.theme.toDark

  return (
    <header className="header" id="top">
      <div className="shell header-inner">
        <a className="wordmark" href="#top">
          <span className="wordmark-mark" aria-hidden="true">
            N3
          </span>
          <span>{name.primary}</span>
          <span className="sr-only">, {messages.home}</span>
        </a>
        <nav className="nav" aria-label={messages.nav.label}>
          <a href="#projects">{messages.nav.projects}</a>
          <a href="#about">{messages.nav.about}</a>
          <a href="#contact">{messages.nav.contact}</a>
        </nav>
        <div className="header-tools">
          <LanguageSwitcher />
          <button
            type="button"
            className="icon-button"
            aria-label={themeLabel}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <ExternalLink className="button header-github" href={profile.githubUrl}>
            {messages.github}
          </ExternalLink>
        </div>
      </div>
    </header>
  )
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <circle cx="12" cy="12" r="3.25" fill="none" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M12 3.5v2.2M12 18.3v2.2M3.5 12h2.2M18.3 12h2.2M6 6l1.6 1.6M16.4 16.4 18 18M18 6l-1.6 1.6M7.6 16.4 6 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path
        d="M15.5 3.8A8.2 8.2 0 1 0 20.2 15 6.4 6.4 0 0 1 15.5 3.8Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  )
}
