import { useEffect, useState } from 'react'
import { useHashRoute, type Route } from './hooks/useHashRoute'
import { formatDate } from './lib/format'
import { AboutPage } from './pages/AboutPage'
import { BlogPage } from './pages/BlogPage'
import { FaqPage } from './pages/FaqPage'
import { HelpPage } from './pages/HelpPage'
import { HomePage } from './pages/HomePage'
import { getDataMeta } from './services/staticData'

const NAV: Array<{ route: Route; hash: string; label: string }> = [
  { route: 'home', hash: '#/', label: 'Home' },
  { route: 'blog', hash: '#/blog', label: 'Why Localista' },
  { route: 'help', hash: '#/help', label: 'Help' },
  { route: 'faq', hash: '#/faq', label: 'FAQ' },
  { route: 'about', hash: '#/about', label: 'About' }
]

export default function App() {
  const route = useHashRoute()
  const [dataSnapshot, setDataSnapshot] = useState<string | undefined>()
  useEffect(() => {
    void getDataMeta().then((meta) => {
      if (meta?.generatedAt) setDataSnapshot(meta.generatedAt)
    })
  }, [])

  return (
    <div className="app">
      <header className="app-header">
        <h1>
          <a href="#/" className="brand">
            <span aria-hidden="true">🏛️ </span>Localista
          </a>
        </h1>
        <nav className="site-nav" aria-label="Site">
          {NAV.map((item) => (
            <a
              key={item.route}
              href={item.hash}
              aria-current={route === item.route ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      {route === 'home' && <HomePage />}
      {route === 'blog' && <BlogPage />}
      {route === 'help' && <HelpPage />}
      {route === 'faq' && <FaqPage />}
      {route === 'about' && <AboutPage />}

      <footer className="app-footer">
        {dataSnapshot && (
          <p>Data snapshot compiled {formatDate(dataSnapshot.slice(0, 10))}.</p>
        )}
        <p>
          Data: U.S. Census Bureau · unitedstates/congress-legislators · DC Open Data ·
          Open States · Congress.gov · Google Civic Information. Your location is sent
          only to these providers to answer your query, and never stored by Localista.
        </p>
        <p>
          <a href="#/blog">Why Localista</a> · <a href="#/help">Help</a> ·{' '}
          <a href="#/faq">FAQ</a> · <a href="#/about">About</a>
        </p>
      </footer>
    </div>
  )
}
