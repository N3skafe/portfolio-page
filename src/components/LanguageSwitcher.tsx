import { localeOrder } from '../i18n/locales.ts'
import { useLocale } from '../hooks/useLocale.ts'

export function LanguageSwitcher() {
  const { locale, setLocale, messages } = useLocale()

  return (
    <div className="lang-switch" role="group" aria-label={messages.language.label}>
      {localeOrder.map((code) => (
        <button
          key={code}
          type="button"
          className="lang"
          aria-pressed={locale === code}
          aria-label={messages.language.name[code]}
          onClick={() => setLocale(code)}
        >
          {messages.language.short[code]}
        </button>
      ))}
    </div>
  )
}
