import { profile } from '../data/profile.ts'
import { projectById } from '../data/projects.ts'
import { techGroups } from '../data/tech.ts'
import { useLocale } from '../hooks/useLocale.ts'
import { ExternalLink } from './ExternalLink.tsx'

export function AboutSection() {
  const { messages } = useLocale()

  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="shell">
        <p className="kicker">{messages.about.kicker}</p>
        <h2 id="about-title">{messages.about.title}</h2>
        {messages.about.paragraphs.map((paragraph) => (
          <p key={paragraph} className="lede">
            {paragraph}
          </p>
        ))}
        {profile.showGithubBio ? (
          <figure className="bio">
            <figcaption className="kicker">{messages.about.bioLabel}</figcaption>
            <blockquote>{profile.githubBio}</blockquote>
            <p>{messages.about.bioNote}</p>
          </figure>
        ) : null}
        <h3>{messages.about.interestsTitle}</h3>
        <ul className="interest-list">
          {messages.about.interests.map((interest) => (
            <li key={interest}>{interest}</li>
          ))}
        </ul>
        <h3>{messages.about.techTitle}</h3>
        <div className="tech-groups">
          {techGroups.map((group) => (
            <section key={group.id} className="tech-group" aria-labelledby={`tech-${group.id}`}>
              <h4 id={`tech-${group.id}`}>{messages.about.groups[group.id]}</h4>
              <ul className="tech-list">
                {group.items.map((item) => {
                  const note = messages.about.notes[item.id]
                  const projectIds = 'projectIds' in item ? item.projectIds : []
                  const related = projectIds
                    .map((id) => projectById(id))
                    .filter((entry) => entry !== undefined)
                  return (
                    <li key={item.id}>
                      {'href' in item && item.href ? (
                        <ExternalLink href={item.href}>{item.name}</ExternalLink>
                      ) : (
                        <span className="tech-name">{item.name}</span>
                      )}
                      {related.length > 0 ? (
                        <>
                          <p className="tech-related">{messages.about.related}</p>
                          <ul>
                            {related.map((entry) => (
                              <li key={entry.id}>
                                <a href={`#project-${entry.id}`}>{entry.name}</a>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : null}
                      {note ? <p className="tech-note">{note}</p> : null}
                    </li>
                  )
                })}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
