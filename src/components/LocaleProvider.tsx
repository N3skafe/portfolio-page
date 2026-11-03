import { useCallback, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { dictionaryFor } from '../i18n/index.ts'
import { isLocale } from '../i18n/locales.ts'
import type { Locale } from '../i18n/locales.ts'
import { setMeta } from '../lib/meta.ts'
import { LocaleContext } from '../hooks/locale-context.ts'

const LOCALE_KEY = 'portfolio.locale'

function readStoredLocale(): Locale {
  try {
    const stored = localStorage.getItem(LOCALE_KEY)
    if (isLocale(stored)) return stored
  } catch {
    /* Private mode or blocked storage. English stays the default. */
  }
  return 'en'
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readStoredLocale)

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    try {
      localStorage.setItem(LOCALE_KEY, next)
    } catch {
      /* Keep the in-memory choice even if storage is blocked. */
    }
  }, [])

  const messages = dictionaryFor(locale)

  useEffect(() => {
    document.documentElement.lang = locale
    document.title = messages.meta.title
    setMeta('name', 'description', messages.meta.description)
    setMeta('property', 'og:title', messages.meta.title)
    setMeta('property', 'og:description', messages.meta.description)
    setMeta('property', 'og:locale', messages.meta.ogLocale)
  }, [locale, messages])

  const value = useMemo(
    () => ({ locale, setLocale, messages }),
    [locale, messages, setLocale],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}
