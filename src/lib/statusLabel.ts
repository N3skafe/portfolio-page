import type { Dictionary } from '../i18n/types.ts'
import type { ProjectStatus } from '../types/project.ts'

export function statusLabel(status: ProjectStatus, messages: Dictionary): string {
  if (status.kind === 'release') {
    return `${messages.projectsSection.statusRelease} ${status.version}`
  }
  if (status.kind === 'phase') {
    return `${messages.projectsSection.statusPhase} ${status.value}`
  }
  return messages.projectsSection.statusPartial
}
