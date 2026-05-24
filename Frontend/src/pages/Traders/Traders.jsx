import { useState } from 'react'
import { Link } from 'react-router-dom'
import { traders, getRiskBadgeClass } from '../../data/traders'
import './Traders.css'

const RISK_OPTIONS = ['All', 'Conservative', 'Moderate', 'Moderate-High', 'Aggressive']
const STYLE_OPTIONS = ['All', 'Swing Trading', 'Scalping', 'Position Trading', 'News Trading']
const SORT_OPTIONS  = [
  { label: 'Best Returns',  value: 'monthlyReturn' },
  { label: 'Most Copied',   value: 'copiers' },
  { label: 'Highest Win %', value: 'winRate' },
  { label: 'Lowest Risk',   value: 'maxDrawdown_asc' },
]

function TraderCard({ trader }) {
  const riskClass = getRiskBadgeClass(trader.risk)
  return (
    <div className="t-card">
      <div className="t-card__head">
        <div className="t-card__avatar">{trader.handle.slice(0,2).toUpperCase()}</div>
        <div className="t-card__info">
          <div className="t-card__handle-row">
            <span className="t-card__handle">@{trader.handle}</span>
            {trader.verified && (
              <span className="t-card__verified" title="Verified Trader">
                <i className="ri-verified-badge-fill"></i>
              </span>
            )}
          </div>
          <p className="t-card__name">{trader.name}</p>
        </div>
        <span className={`badge ${riskClass} t-card__risk`}>{trader.risk}</span>
      </div>

      <p className="t-card__tagline">{trader.tagline}</p>

      <div className="t-card__pairs">
        {trader.specialty.map(p => (
          <span key={p} className="t-card__pair-tag">{p}</span>
        ))}
        <span className="t-card__style-tag">{trader.style}</span>
      </div>

      <div className="t-card__metrics">
        <div className="t-card__metric">
          <p className="t-card__metric-v mono text-green">+{trader.monthlyReturn}%</p>
          <p className="t-card__metric-l">Monthly</p>
        </div>
        <div className="t-card__metric">
          <p className="t-card__metric-v mono text-green">+{trader.allTimeReturn}%</p>
          <p className="t-card__metric-l">All-Time</p>
        </div>
        <div className="t-card__metric">
          <p className="t-card__metric-v mono">{trader.winRate}%</p>
          <p className="t-card__metric-l">Win Rate</p>
        </div>
        <div className="t-card__metric">
          <p className="t-card__metric-v mono">-{trader.maxDrawdown}%</p>
          <p className="t-card__metric-l">Max Draw.</p>
        </div>
      </div>

      <div className="t-card__win-bar">
        <div className="t-card__win-fill" style={{ width: `${trader.winRate}%` }}></div>
      </div>

      <div className="t-card__footer">
        <div className="t-card__footer-meta">
          <span className="t-card__copiers">
            <i className="ri-group-line"></i> {trader.copiers.toLocaleString()} copiers
          </span>
          <span className="t-card__commission">
            <i className="ri-percent-line"></i> {trader.commission}% commission
          </span>
        </div>
        <Link to="/signup" className="btn btn-primary btn-sm">
          Copy <i className="ri-arrow-right-line"></i>
        </Link>
      </div>
    </div>
  )
}

export default function Traders() {
  const [riskFilter,  setRiskFilter]  = useState('All')
  const [styleFilter, setStyleFilter] = useState('All')
  const [sortBy,      setSortBy]      = useState('monthlyReturn')

  const filtered = traders
    .filter(t => riskFilter  === 'All' || t.risk  === riskFilter)
    .filter(t => styleFilter === 'All' || t.style === styleFilter)
    .sort((a, b) => {
      if (sortBy === 'maxDrawdown_asc') return a.maxDrawdown - b.maxDrawdown
      return b[sortBy] - a[sortBy]
    })

  return (
    <div className="traders-page">

      {/* Hero */}
      <section className="traders-hero">
        <div className="traders-hero__glow"></div>
        <div className="traders-hero__grid"></div>
        <div className="container traders-hero__inner">
          <span className="eyebrow">Verified. Vetted. Proven.</span>
          <h1 className="traders-hero__title">
            Find Your Trader.<br />
            <span className="highlight">Mirror Their Edge.</span>
          </h1>
          <p className="traders-hero__sub">
            Every trader on Mirex has passed our rigorous vetting process.
            Browse by performance, risk tolerance, and style — then copy with one click.
          </p>
          <div className="traders-hero__stats">
            <div className="traders-hero__stat">
              <span className="mono">{traders.length}</span> Active Traders
            </div>
            <div className="traders-hero__divider"></div>
            <div className="traders-hero__stat">
              <span className="mono">12,400+</span> Copiers
            </div>
            <div className="traders-hero__divider"></div>
            <div className="traders-hero__stat">
              <span className="mono">$248M+</span> Volume
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <div className="traders-filters">
        <div className="container traders-filters__inner">
          <div className="traders-filters__group">
            <label className="traders-filters__label">Risk Level</label>
            <div className="traders-filters__pills">
              {RISK_OPTIONS.map(r => (
                <button
                  key={r}
                  onClick={() => setRiskFilter(r)}
                  className={`traders-filter-pill${riskFilter === r ? ' active' : ''}`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>
          <div className="traders-filters__group">
            <label className="traders-filters__label">Style</label>
            <div className="traders-filters__pills">
              {STYLE_OPTIONS.map(s => (
                <button
                  key={s}
                  onClick={() => setStyleFilter(s)}
                  className={`traders-filter-pill${styleFilter === s ? ' active' : ''}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div className="traders-filters__sort">
            <label className="traders-filters__label">Sort By</label>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="traders-sort-select"
            >
              {SORT_OPTIONS.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="section traders-grid-section">
        <div className="container">
          <div className="traders-grid-head">
            <p className="traders-grid-count">
              Showing <span className="mono text-green">{filtered.length}</span> traders
            </p>
          </div>
          {filtered.length > 0 ? (
            <div className="traders-grid">
              {filtered.map(t => <TraderCard key={t.id} trader={t} />)}
            </div>
          ) : (
            <div className="traders-empty">
              <i className="ri-user-search-line"></i>
              <p>No traders match your current filters.</p>
              <button
                className="btn btn-ghost btn-sm"
                onClick={() => { setRiskFilter('All'); setStyleFilter('All') }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Become a Trader */}
      <section className="traders-become section-sm">
        <div className="container traders-become__inner">
          <div className="traders-become__icon">
            <i className="ri-trophy-line"></i>
          </div>
          <div>
            <h3 className="traders-become__title">A Consistent Trader? Earn More on Mirex.</h3>
            <p className="traders-become__sub">
              Apply to join the Mirex Trader Roster. Build your following and earn commissions
              on every profit you generate for your copiers.
            </p>
          </div>
          <Link to="/signup" className="btn btn-primary" style={{flexShrink:0}}>
            Apply as Trader <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </section>

    </div>
  )
}
