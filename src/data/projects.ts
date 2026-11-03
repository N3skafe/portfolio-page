import type { Project } from '../types/project.ts'

export const projectIds = [
  'tui-helper',
  'maidops-lab',
  'perplexity-door-bell',
  'sena-cue',
] as const

export type ProjectId = (typeof projectIds)[number]

export function isProjectId(id: string): id is ProjectId {
  return (projectIds as readonly string[]).includes(id)
}

export const projects: readonly Project[] = [
  {
    id: 'tui-helper',
    name: 'tui helper',
    repository: 'N3skafe/tui_helper',
    category: 'devtool',
    tone: 'teal',
    tags: ['Python', 'prompt_toolkit', 'Windows', 'Linux'],
    status: { kind: 'release', version: 'v1.0.0' },
    links: [
      { kind: 'github', href: 'https://github.com/N3skafe/tui_helper' },
      {
        kind: 'release',
        href: 'https://github.com/N3skafe/tui_helper/releases/tag/v1.0.0',
        version: 'v1.0.0',
      },
    ],
  },
  {
    id: 'maidops-lab',
    name: 'MaidOps Lab',
    repository: 'N3skafe/project_mio',
    category: 'backend',
    tone: 'blue',
    tags: ['Python', 'Textual', 'Spring Boot', 'PostgreSQL'],
    status: { kind: 'phase', value: '5' },
    links: [{ kind: 'github', href: 'https://github.com/N3skafe/project_mio' }],
  },
  {
    id: 'perplexity-door-bell',
    name: 'Perplexity Door Bell',
    repository: 'N3skafe/perplexity-door-bell',
    category: 'utility',
    tone: 'sand',
    tags: ['Python', 'pywinauto', 'PyInstaller', 'Windows'],
    status: { kind: 'release', version: 'v1.1.1' },
    links: [
      { kind: 'github', href: 'https://github.com/N3skafe/perplexity-door-bell' },
      {
        kind: 'release',
        href: 'https://github.com/N3skafe/perplexity-door-bell/releases/tag/v1.1.1',
        version: 'v1.1.1',
      },
    ],
  },
  {
    id: 'sena-cue',
    name: 'Sena Cue',
    repository: 'N3skafe/yt_handclap',
    category: 'android',
    tone: 'iris',
    tags: ['Kotlin', 'Android', 'MediaPipe', 'sherpa-onnx'],
    links: [{ kind: 'github', href: 'https://github.com/N3skafe/yt_handclap' }],
  },
]

const missingIds = projectIds.filter((id) => !projects.some((project) => project.id === id))
const unknownIds = projects.filter((project) => !isProjectId(project.id)).map((project) => project.id)
if (missingIds.length > 0 || unknownIds.length > 0) {
  throw new Error(`Project ids are out of sync. Missing: ${missingIds.join(', ')}. Unknown: ${unknownIds.join(', ')}.`)
}

export function projectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}
