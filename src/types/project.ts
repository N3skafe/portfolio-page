export const projectCategories = ['devtool', 'backend', 'utility', 'android'] as const
export type ProjectCategory = (typeof projectCategories)[number]

export const techGroupIds = ['tools', 'backend', 'ai', 'apps'] as const
export type TechGroupId = (typeof techGroupIds)[number]

export const techIds = [
  'python',
  'prompt-toolkit',
  'pywinauto',
  'pyinstaller',
  'textual',
  'java',
  'spring-boot',
  'postgresql',
  'docker-compose',
  'pytorch',
  'kotlin',
  'android',
  'mediapipe',
  'sherpa-onnx',
  'flutter',
  'dart',
  'unity',
] as const
export type TechId = (typeof techIds)[number]

export type ProjectLink =
  | { kind: 'github'; href: string }
  | { kind: 'release'; href: string; version: string }
  | { kind: 'demo'; href: string }

export type ProjectStatus =
  | { kind: 'release'; version: string }
  | { kind: 'phase'; value: string }
  | { kind: 'partial' }

export type Project = {
  id: string
  name: string
  repository: string
  category: ProjectCategory
  tone: 'teal' | 'blue' | 'sand' | 'iris'
  tags: readonly string[]
  status?: ProjectStatus
  links: readonly ProjectLink[]
  /** Path inside `public/`, without a leading slash. */
  imageSrc?: string
}

export type TechItem = {
  id: TechId
  name: string
  projectIds?: readonly string[]
  href?: string
}

export type TechGroup = {
  id: TechGroupId
  items: readonly TechItem[]
}
