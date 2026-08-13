import { useEffect, useState } from 'react'

export type Route = { path: string; query: URLSearchParams }

function parse(): Route {
  const raw = window.location.hash.replace(/^#/, '') || '/'
  const [path, qs] = raw.split('?')
  return { path: path || '/', query: new URLSearchParams(qs || '') }
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(parse)
  useEffect(() => {
    const on = () => setRoute(parse())
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])
  return route
}

/** Переход с прокруткой наверх — кроме случая, когда меняются только фильтры каталога. */
export function go(to: string, keepScroll = false) {
  const y = window.scrollY
  window.location.hash = to
  requestAnimationFrame(() => window.scrollTo({ top: keepScroll ? y : 0, behavior: 'auto' }))
}

export const href = (to: string) => `#${to}`
