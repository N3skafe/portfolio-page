import { displayName, profile } from '../data/profile.ts'
import { projects } from '../data/projects.ts'
import { useLocale } from '../hooks/useLocale.ts'
import { ExternalLink } from './ExternalLink.tsx'

export function Hero() {
  const { locale, messages } = useLocale()
  const name = displayName(locale)

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="shell hero-grid">
        <div>
          <p className="kicker">{profile.handle}</p>
          <h1 id="hero-title">
            {name.primary}
            <span className="name-alt">{name.secondary}</span>
          </h1>
          <p className="lede">{messages.hero.intro}</p>
          <p className="lede direction">{messages.hero.direction}</p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">
              {messages.hero.viewProjects}
            </a>
            <ExternalLink className="button" href={profile.githubUrl}>
              {messages.hero.githubProfile}
            </ExternalLink>
          </div>
        </div>
        <aside className="index-card" aria-label={messages.hero.indexLabel}>
          <p className="kicker">{messages.hero.indexLabel}</p>
          <ol className="index-list">
            {projects.map((project) => (
              <li key={project.id}>
                <a href={`#project-${project.id}`}>{project.name}</a>
                <span>{project.repository}</span>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </section>
  )
}
