export function setMeta(attr: 'name' | 'property', key: string, content: string) {
  const selector = `meta[${attr}="${key}"]`
  const existing = document.querySelector(selector)
  if (existing) {
    existing.setAttribute('content', content)
    return
  }
  const meta = document.createElement('meta')
  meta.setAttribute(attr, key)
  meta.setAttribute('content', content)
  document.head.append(meta)
}
