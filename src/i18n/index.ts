import type { Locale } from './locales.ts'
import type { Dictionary } from './types.ts'
import { en } from './en.ts'
import { ja } from './ja.ts'
import { ko } from './ko.ts'

export const dictionaries: Record<Locale, Dictionary> = { en, ko, ja }

export function dictionaryFor(locale: Locale): Dictionary {
  return dictionaries[locale]
}
