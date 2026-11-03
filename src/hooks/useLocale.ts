import { useContext } from 'react'
import { LocaleContext } from './locale-context.ts'

export function useLocale() {
  const value = useContext(LocaleContext)
  if (!value) {
    throw new Error('useLocale must be used within LocaleProvider')
  }
  return value
}
