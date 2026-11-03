/** Prefix a `public/` path with Vite's base, including GitHub project-page bases. */
export function publicAsset(path: string): string {
  const base = import.meta.env.BASE_URL
  const normalized = path.replace(/^\/+/, '')
  return `${base}${normalized}`
}
