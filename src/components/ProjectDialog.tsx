import { useEffect, useId, useRef } from 'react'
import type { KeyboardEvent, MouseEvent, ReactNode, RefObject } from 'react'
import { isProjectId, projectById } from '../data/projects.ts'
import type { ProjectId } from '../data/projects.ts'
import { useLocale } from '../hooks/useLocale.ts'
import { statusLabel } from '../lib/statusLabel.ts'
import { ProjectLinkRow } from './ProjectCard.tsx'

export function ProjectDialog({
  projectId,
  openerRef,
  onClose,
}: {
  projectId: ProjectId | null
  openerRef: RefObject<HTMLButtonElement | null>
  onClose: () => void
}) {
  const { messages } = useLocale()
  const dialogRef = useRef<HTMLDialogElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const ignoreCloseRef = useRef(false)
  const titleId = useId()
  const project = projectId ? projectById(projectId) : undefined
  const copy = project && isProjectId(project.id) ? messages.projects[project.id] : undefined

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog || !projectId) return
    if (!dialog.open) dialog.showModal()
    closeRef.current?.focus()
    const body = dialog.querySelector('.dialog-body')
    if (body instanceof HTMLElement) body.scrollTo(0, 0)
    return () => {
      if (!dialog.open) return
      ignoreCloseRef.current = true
      dialog.close()
      ignoreCloseRef.current = false
    }
  }, [projectId])

  function handleClose() {
    if (ignoreCloseRef.current) return
    const opener = openerRef.current
    onClose()
    opener?.focus()
  }

  function onBackdropClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === event.currentTarget) event.currentTarget.close()
  }

  function onKeyDown(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key !== 'Escape' || !event.currentTarget.open) return
    event.preventDefault()
    event.currentTarget.close()
  }

  return (
    <dialog
      id="project-dialog"
      ref={dialogRef}
      className="project-dialog"
      aria-labelledby={project ? titleId : undefined}
      onClose={handleClose}
      onClick={onBackdropClick}
      onKeyDown={onKeyDown}
    >
      {project && copy ? (
        <div className="dialog-sheet">
          <div className="dialog-bar">
            <div>
              <p className="kicker">{messages.projectsSection.categories[project.category]}</p>
              <h2 id={titleId}>{project.name}</h2>
              <p className="repo">{project.repository}</p>
            </div>
            <button ref={closeRef} type="button" className="button" onClick={() => dialogRef.current?.close()}>
              {messages.dialog.close}
            </button>
          </div>
          <div className="dialog-body">
            {project.status ? <p className="status">{statusLabel(project.status, messages)}</p> : null}
            <Section title={messages.dialog.overview}>
              <p>{copy.overview}</p>
            </Section>
            {copy.problem ? (
              <Section title={messages.dialog.problem}>
                <p>{copy.problem}</p>
              </Section>
            ) : null}
            <BulletSection title={messages.dialog.implementation} items={copy.implementation} />
            <BulletSection title={messages.dialog.decisions} items={copy.decisions} />
            <BulletSection title={messages.dialog.limitations} items={copy.limitations} />
            {project.links.length > 0 ? (
              <Section title={messages.dialog.source}>
                <div className="card-actions">
                  <ProjectLinkRow project={project} />
                </div>
              </Section>
            ) : null}
          </div>
        </div>
      ) : null}
    </dialog>
  )
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="dialog-section">
      <h3>{title}</h3>
      {children}
    </section>
  )
}

function BulletSection({ title, items }: { title: string; items: readonly string[] }) {
  if (items.length === 0) return null
  return (
    <Section title={title}>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Section>
  )
}
