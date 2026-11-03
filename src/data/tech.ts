import type { TechGroup } from '../types/project.ts'

export const techGroups = [
  {
    id: 'tools',
    items: [
      {
        id: 'python',
        name: 'Python',
        projectIds: ['tui-helper', 'perplexity-door-bell', 'maidops-lab'],
      },
      { id: 'prompt-toolkit', name: 'prompt_toolkit', projectIds: ['tui-helper'] },
      { id: 'pywinauto', name: 'pywinauto', projectIds: ['perplexity-door-bell'] },
      { id: 'pyinstaller', name: 'PyInstaller', projectIds: ['perplexity-door-bell'] },
      { id: 'textual', name: 'Textual', projectIds: ['maidops-lab'] },
    ],
  },
  {
    id: 'backend',
    items: [
      { id: 'java', name: 'Java', projectIds: ['maidops-lab'] },
      { id: 'spring-boot', name: 'Spring Boot', projectIds: ['maidops-lab'] },
      { id: 'postgresql', name: 'PostgreSQL', projectIds: ['maidops-lab'] },
      { id: 'docker-compose', name: 'Docker Compose', projectIds: ['maidops-lab'] },
    ],
  },
  {
    id: 'ai',
    items: [
      { id: 'pytorch', name: 'PyTorch', projectIds: ['maidops-lab'] },
      { id: 'kotlin', name: 'Kotlin', projectIds: ['sena-cue'] },
      { id: 'android', name: 'Android', projectIds: ['sena-cue'] },
      { id: 'mediapipe', name: 'MediaPipe', projectIds: ['sena-cue'] },
      { id: 'sherpa-onnx', name: 'sherpa-onnx', projectIds: ['sena-cue'] },
    ],
  },
  {
    id: 'apps',
    items: [
      { id: 'flutter', name: 'Flutter', href: 'https://github.com/N3skafe/flutter_project' },
      { id: 'dart', name: 'Dart', href: 'https://github.com/N3skafe/flutter_project' },
      { id: 'unity', name: 'Unity' },
    ],
  },
] as const satisfies readonly TechGroup[]
