import { useEffect, useState } from 'react'

/**
 * Minimal hash router (#/help, #/faq …). Hash-based so deep links work on
 * static hosts (GitHub Pages has no SPA rewrites) and under any base path.
 */
export type Route = 'home' | 'blog' | 'help' | 'faq' | 'about'

const ROUTES: Route[] = ['blog', 'help', 'faq', 'about']

function parseHash(): Route {
  const h = window.location.hash.replace(/^#\/?/, '').split('?')[0]
  return (ROUTES as string[]).includes(h) ? (h as Route) : 'home'
}

export function useHashRoute(): Route {
  const [route, setRoute] = useState<Route>(parseHash)
  useEffect(() => {
    const onHashChange = () => {
      setRoute(parseHash())
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])
  return route
}
