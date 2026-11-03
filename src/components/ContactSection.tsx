import { profile } from '../data/profile.ts'
import { useLocale } from '../hooks/useLocale.ts'
import { ExternalLink } from './ExternalLink.tsx'

export function ContactSection() {
  const { messages } = useLocale()

  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="shell">
        <p className="kicker">{messages.contact.kicker}</p>
        <h2 id="contact-title">{messages.contact.title}</h2>
        <p className="lede">{messages.contact.body}</p>
        <ul className="contact-list">
          {profile.contacts.map((contact) => (
            <li key={contact.id}>
              {contact.id === 'email' ? (
                <a className="button primary" href={contact.href}>
                  {messages.contact.emailLabel}
                </a>
              ) : (
                <ExternalLink className="button primary" href={contact.href}>
                  {contact.id === 'linkedin'
                    ? messages.contact.linkedinLabel
                    : messages.contact.githubLabel}
                </ExternalLink>
              )}
              <p className="url">{visibleContact(contact.href)}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function visibleContact(href: string): string {
  if (href.startsWith('mailto:')) return href.slice('mailto:'.length)
  try {
    const url = new URL(href)
    return `${url.host}${url.pathname}`.replace(/\/$/, '')
  } catch {
    return href
  }
}
