import { createContext } from 'react'
import type { Dictionary } from '../i18n/types.ts'
import type { Locale } from '../i18n/locales.ts'

export type LocaleState = {
  locale: Locale
  setLocale: (locale: Locale) => void
  messages: Dictionary
}

export const LocaleContext = createContext<LocaleState | null>(null)
