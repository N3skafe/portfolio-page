import { createContext } from 'react'

export type Theme = 'dark' | 'light'

export type ThemeState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeState | null>(null)
