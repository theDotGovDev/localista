/**
 * Miniature mock screens shown inside <PhoneFrame> in the blog
 * walkthrough. Built from the same sample data as demo mode so the
 * "screenshots" match what the real app shows.
 */
import { demoDemographics, demoGeo, demoReps } from '../services/demo'

function MiniHeader() {
  return (
    <div className="m-header">
      <span className="m-title">🏛️ Localista</span>
      <span className="m-tagline">Your representatives, bills & local facts</span>
    </div>
  )
}

function MiniButtons({ active }: { active?: 'locate' | 'address' | 'demo' }) {
  return (
    <div className="m-buttons">
      <span className={`m-btn m-btn-primary${active === 'locate' ? ' m-active' : ''}`}>
        📍 Use my location
      </span>
      <span className={`m-input${active === 'address' ? ' m-active' : ''}`}>
        …or type an address
      </span>
      <span className={`m-btn m-btn-ghost${active === 'demo' ? ' m-active' : ''}`}>
        Try the demo
      </span>
    </div>
  )
}

export function ScreenHome() {
  return (
    <>
      <MiniHeader />
      <MiniButtons />
      <p className="m-note">
        Localista never stores your location — it’s used once, in your browser, then
        discarded.
      </p>
    </>
  )
}

export function ScreenPermission() {
  return (
    <>
      <MiniHeader />
      <MiniButtons active="locate" />
      <div className="m-dialog">
        <p className="m-dialog-title">Allow “localista” to use your location?</p>
        <div className="m-dialog-actions">
          <span className="m-btn m-btn-primary">Allow</span>
          <span className="m-btn">Block</span>
        </div>
      </div>
    </>
  )
}

export function ScreenAddress() {
  return (
    <>
      <MiniHeader />
      <div className="m-buttons">
        <span className="m-btn m-btn-primary">📍 Use my location</span>
        <span className="m-input m-active">
          1600 Pennsylvania Ave NW, Washington…<span className="m-caret" />
        </span>
        <span className="m-btn">Look up</span>
      </div>
    </>
  )
}

export function ScreenWhereYouAre() {
  return (
    <>
      <MiniHeader />
      <div className="m-panel">
        <p className="m-panel-title">Where you are</p>
        {demoGeo.jurisdictions.slice(1, 7).map((j) => (
          <div className="m-row" key={j.name}>
            <span className="m-row-label">{j.label}</span>
            <span className="m-row-value">{j.name}</span>
          </div>
        ))}
      </div>
    </>
  )
}

export function ScreenReps() {
  return (
    <>
      <MiniHeader />
      <div className="m-panel">
        <p className="m-panel-title">Your elected representatives</p>
        {demoReps.map((r) => (
          <div className="m-card" key={r.name}>
            <p className="m-card-name">{r.name}</p>
            <p className="m-card-sub">
              {r.office}
              {r.jurisdiction ? ` · ${r.jurisdiction}` : ''}
            </p>
            {r.nextElection && (
              <p className="m-card-sub">
                Next election: {/^\d{4}/.test(r.nextElection) ? r.nextElection : '2026'}
              </p>
            )}
          </div>
        ))}
      </div>
    </>
  )
}

export function ScreenBillsElections() {
  return (
    <>
      <MiniHeader />
      <div className="m-panel">
        <p className="m-panel-title">Bills & measures</p>
        <div className="m-card">
          <p className="m-card-name">H.R. 51 · U.S. Congress</p>
          <p className="m-card-sub">Washington, D.C. Admission Act</p>
        </div>
        <div className="m-card">
          <p className="m-card-name">B26-0104 · DC Council</p>
          <p className="m-card-sub">Public hearing scheduled</p>
        </div>
      </div>
      <div className="m-panel">
        <p className="m-panel-title">Upcoming elections</p>
        <div className="m-row">
          <span className="m-row-label">Jun 2, 2026</span>
          <span className="m-row-value">DC primary</span>
        </div>
        <div className="m-row">
          <span className="m-row-label">Nov 3, 2026</span>
          <span className="m-row-value">General election</span>
        </div>
      </div>
    </>
  )
}

export function ScreenDemographics() {
  const dc = demoDemographics[0]
  return (
    <>
      <MiniHeader />
      <div className="m-panel">
        <p className="m-panel-title">About your jurisdictions</p>
        <p className="m-card-sub">{dc.jurisdictionName}</p>
        {dc.rows.slice(0, 4).map((row) => (
          <div className="m-row" key={row.label}>
            <span className="m-row-label">{row.label}</span>
            <span className="m-row-value">{row.value}</span>
          </div>
        ))}
      </div>
    </>
  )
}

export function ScreenInstall() {
  return (
    <>
      <MiniHeader />
      <div className="m-panel">
        <p className="m-panel-title">Where you are</p>
        <div className="m-row">
          <span className="m-row-label">State</span>
          <span className="m-row-value">District of Columbia</span>
        </div>
      </div>
      <div className="m-dialog">
        <p className="m-dialog-title">Add Localista to Home Screen?</p>
        <div className="m-dialog-actions">
          <span className="m-btn m-btn-primary">Add</span>
          <span className="m-btn">Cancel</span>
        </div>
      </div>
    </>
  )
}
