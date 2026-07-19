import type { ReactNode } from 'react'

/**
 * A simulated mobile-device frame for walkthrough "screenshots". Rendered
 * as code (not images) so the mock screens stay in sync with the app's
 * styling, scale crisply, and follow the light/dark theme.
 */
export function PhoneFrame({
  caption,
  children
}: {
  caption: string
  children: ReactNode
}) {
  return (
    <figure className="phone-figure">
      <div className="phone" role="img" aria-label={`Simulated screenshot: ${caption}`}>
        <div className="phone-statusbar" aria-hidden="true">
          <span>9:41</span>
          <span className="phone-notch" />
          <span>📶 🔋</span>
        </div>
        <div className="phone-screen">{children}</div>
        <div className="phone-homebar" aria-hidden="true" />
      </div>
      <figcaption>Simulated screenshot: {caption}</figcaption>
    </figure>
  )
}
