import type { ProjectId } from '../data/projects.ts'
import type { TechGroupId, TechId } from '../types/project.ts'
import type { Locale } from './locales.ts'

export type ProjectCopy = {
  problem: string
  overview: string
  implementation: string[]
  decisions: string[]
  limitations: string[]
  imageAlt?: string
}

export type Dictionary = {
  meta: {
    title: string
    description: string
    ogLocale: string
  }
  skip: string
  home: string
  github: string
  opensInNewTab: string
  nav: {
    label: string
    projects: string
    about: string
    contact: string
  }
  language: {
    label: string
    short: Record<Locale, string>
    name: Record<Locale, string>
  }
  theme: {
    toLight: string
    toDark: string
  }
  hero: {
    intro: string
    direction: string
    viewProjects: string
    githubProfile: string
    indexLabel: string
  }
  projectsSection: {
    kicker: string
    title: string
    lede: string
    empty: string
    details: string
    categories: Record<'devtool' | 'backend' | 'utility' | 'android', string>
    statusRelease: string
    statusPhase: string
    statusPartial: string
    markLabel: string
  }
  dialog: {
    close: string
    overview: string
    problem: string
    implementation: string
    decisions: string
    limitations: string
    source: string
    release: string
    demo: string
  }
  about: {
    kicker: string
    title: string
    paragraphs: string[]
    bioLabel: string
    bioNote: string
    interestsTitle: string
    interests: string[]
    techTitle: string
    groups: Record<TechGroupId, string>
    notes: Partial<Record<TechId, string>>
    related: string
  }
  contact: {
    kicker: string
    title: string
    body: string
    githubLabel: string
    emailLabel: string
    linkedinLabel: string
  }
  footer: {
    rights: string
  }
  projects: Record<ProjectId, ProjectCopy>
}
