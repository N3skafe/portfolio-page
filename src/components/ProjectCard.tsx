import { useState } from 'react'
import { isProjectId } from '../data/projects.ts'
import type { ProjectId } from '../data/projects.ts'
import { useLocale } from '../hooks/useLocale.ts'
import { publicAsset } from '../lib/publicAsset.ts'
import { statusLabel } from '../lib/statusLabel.ts'
import type { Project } from '../types/project.ts'
import { ExternalLink } from './ExternalLink.tsx'

export function ProjectCard({
  project,
  onOpen,
}: {
  project: Project
  onOpen: (id: ProjectId, opener: HTMLButtonElement) => void
}) {
  const { messages } = useLocale()
  const projectId = project.id
  if (!isProjectId(projectId)) return null
  const copy = messages.projects[projectId]
  const category = messages.projectsSection.categories[project.category]

  return (
    <article className="card" id={`project-${projectId}`}>
      <ProjectVisual project={project} alt={copy.imageAlt} />
      <div className="card-body">
        <p className="kicker">{category}</p>
        {project.status ? <p className="status">{statusLabel(project.status, messages)}</p> : null}
        <p>{copy.problem}</p>
        <ul className="tags">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div className="card-actions">
          <button
            type="button"
            className="button primary"
            aria-haspopup="dialog"
            aria-controls="project-dialog"
            onClick={(event) => onOpen(projectId, event.currentTarget)}
          >
            {messages.projectsSection.details}
          </button>
          <ProjectLinkRow project={project} />
        </div>
      </div>
    </article>
  )
}

export function ProjectLinkRow({ project }: { project: Project }) {
  const { messages } = useLocale()

  return (
    <>
      {project.links.map((link) => {
        if (link.kind === 'github') {
          return (
            <ExternalLink key={link.href} className="button" href={link.href}>
              {messages.github}
            </ExternalLink>
          )
        }
        if (link.kind === 'release') {
          return (
            <ExternalLink key={link.href} className="button" href={link.href}>
              {messages.dialog.release} {link.version}
            </ExternalLink>
          )
        }
        return (
          <ExternalLink key={link.href} className="button" href={link.href}>
            {messages.dialog.demo}
          </ExternalLink>
        )
      })}
    </>
  )
}

function ProjectVisual({ project, alt }: { project: Project; alt?: string }) {
  const [failed, setFailed] = useState(false)
  const { messages } = useLocale()

  if (project.imageSrc && alt && !failed) {
    return (
      <img
        className="project-shot"
        src={publicAsset(project.imageSrc)}
        alt={alt}
        onError={() => setFailed(true)}
      />
    )
  }

  return (
    <div className={`mark tone-${project.tone}`}>
      <div className="mark-top">
        <span>{messages.projectsSection.markLabel}</span>
      </div>
      <h3 className="mark-name">{project.name}</h3>
      <p className="mark-repo">{project.repository}</p>
    </div>
  )
}
