import es from './es.json'
import en from './en.json'
import pt from './pt.json'

const data = { es, en, pt } as const

type Translations = (typeof data)['es']

export function useTranslations(locale: string) {
  const dict: Translations = data[locale as keyof typeof data] ?? data.es

  function t(path: string): string {
    const keys = path.split('.')
    let value: unknown = dict
    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = (value as Record<string, unknown>)[key]
      } else {
        return path
      }
    }
    return typeof value === 'string' ? value : path
  }

  function tArray<T = unknown>(path: string): T[] {
    const keys = path.split('.')
    let value: unknown = dict
    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = (value as Record<string, unknown>)[key]
      } else {
        return []
      }
    }
    return Array.isArray(value) ? (value as T[]) : []
  }

  return { t, tArray }
}

export function getLocaleFromUrl(url: URL): string {
  const segment = url.pathname.split('/')[1]
  if (segment === 'en' || segment === 'pt') return segment
  return 'es'
}
