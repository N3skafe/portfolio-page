export const profile = {
  handle: 'N3skafe',
  nameEn: 'Dongjoon Kim',
  nameKo: '김동준',
  /** Japanese screen only. English name stays nameEn. */
  nameJaKo: '金東俊/김동준',
  githubUrl: 'https://github.com/N3skafe',
  /** Quoted from the public GitHub profile. Set false to hide it. */
  showGithubBio: true,
  githubBio: 'Media Software Student at Sungkyul University',
  contacts: [
    { id: 'github', href: 'https://github.com/N3skafe' },
    { id: 'linkedin', href: 'https://www.linkedin.com/in/dongjoon-kim-603640444' },
    { id: 'email', href: 'mailto:dkim816@gmail.com' },
  ] as const,
} as const

export function displayName(locale: 'en' | 'ko' | 'ja'): { primary: string; secondary: string } {
  if (locale === 'ko') {
    return { primary: profile.nameKo, secondary: profile.nameEn }
  }
  if (locale === 'ja') {
    return { primary: profile.nameEn, secondary: profile.nameJaKo }
  }
  return { primary: profile.nameEn, secondary: profile.nameKo }
}
