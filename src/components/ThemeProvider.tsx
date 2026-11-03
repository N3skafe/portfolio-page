import { useCallback, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { ThemeContext } from '../hooks/theme-context.ts'
import type { Theme } from '../hooks/theme-context.ts'

const THEME_KEY = 'portfolio.theme'
const themeColor: Record<Theme, string> = {
  dark: '#12151c',
  light: '#f4f1ea',
}

function readTheme(): Theme {
  const current = document.documentElement.dataset.theme
  if (current === 'light' || current === 'dark') return current
  try {
    const stored = localStorage.getItem(THEME_KEY)
    if (stored === 'light' || stored === 'dark') return stored
  } catch {
    /* Fall through to the default dark theme. */
  }
  return 'dark'
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) meta.setAttribute('content', themeColor[theme])
  try {
    localStorage.setItem(THEME_KEY, theme)
  } catch {
    /* The visible theme still changes. */
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(readTheme)

  const setTheme = useCallback((next: Theme) => {
    applyTheme(next)
    setThemeState(next)
  }, [])

  const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
