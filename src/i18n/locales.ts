export const localeOrder = ['en', 'ko', 'ja'] as const

export type Locale = (typeof localeOrder)[number]

export function isLocale(value: string | null): value is Locale {
  return value !== null && (localeOrder as readonly string[]).includes(value)
}
