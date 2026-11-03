import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

/** GitHub project pages need a trailing slash, for example `/repo-name/`. */
function normalizeBase(value: string | undefined): string {
  const trimmed = value?.trim() ?? ''
  if (trimmed === '' || trimmed === '/') return '/'
  const slug = trimmed.replace(/^\/+|\/+$/g, '')
  return `/${slug}/`
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    base: normalizeBase(env.VITE_BASE_PATH),
    plugins: [react()],
  }
})
