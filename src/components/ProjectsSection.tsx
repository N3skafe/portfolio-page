import type { ProjectId } from '../data/projects.ts'
import { projects } from '../data/projects.ts'
import { useLocale } from '../hooks/useLocale.ts'
import { ProjectCard } from './ProjectCard.tsx'

export function ProjectsSection({
  onOpen,
}: {
  onOpen: (id: ProjectId, opener: HTMLButtonElement) => void
}) {
  const { messages } = useLocale()

  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="shell">
        <p className="kicker">{messages.projectsSection.kicker}</p>
        <h2 id="projects-title">{messages.projectsSection.title}</h2>
        <p className="lede">{messages.projectsSection.lede}</p>
        {projects.length > 0 ? (
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} onOpen={onOpen} />
            ))}
          </div>
        ) : (
          <p>{messages.projectsSection.empty}</p>
        )}
      </div>
    </section>
  )
}
