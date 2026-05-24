import { Link } from 'react-router-dom'
import { traders } from '../../data/traders'
import './Home.css'

/* ── Hero Dashboard Mockup ───────────────────────────────── */
function DashboardMockup() {
  return (
    <div className="mockup">
      <div className="mockup__sidebar">
        <div className="mockup__logo">
          <span className="mockup__logo-mark"><i className="ri-bar-chart-grouped-fill"></i></span>
          <span>MIREX</span>
        </div>
        {['ri-layout-2-line','ri-wallet-3-line','ri-user-star-line','ri-pulse-line','ri-settings-3-line'].map((ic, i) => (
          <div key={i} className={`mockup__nav-item${i === 0 ? ' active' : ''}`}>
            <i className={ic}></i>
          </div>
        ))}
      </div>
      <div className="mockup__body">
        <div className="mockup__topbar">
          <span className="mockup__topbar-title">Main Dashboard</span>
          <div className="mockup__topbar-right">
            <div className="mockup__search"><i className="ri-search-line"></i></div>
            <div className="mockup__avatar"><i className="ri-user-line"></i></div>
          </div>
        </div>
        <div className="mockup__content">
          <div className="mockup__balance-section">
            <p className="mockup__label">Portfolio Value</p>
            <p className="mockup__balance">$12,840.00</p>
            <span className="mockup__change">+8.4% <i className="ri-arrow-up-s-line"></i></span>
          </div>
          <div className="mockup__chart">
            <div className="mockup__chart-line"></div>
            <div className="mockup__chart-fill"></div>
          </div>
          <div className="mockup__traders">
            <p className="mockup__section-label">Copied Traders</p>
            {[
              { h: 'VXTrader', r: '+8.4%', w: '73%' },
              { h: 'FXPrecision', r: '+11.2%', w: '79%' },
            ].map(({ h, r, w }) => (
              <div key={h} className="mockup__trader-row">
                <div className="mockup__trader-dot"></div>
                <span className="mockup__trader-handle">@{h}</span>
                <span className="mockup__trader-ret">{r}</span>
                <span className="mockup__trader-win">{w} Win</span>
              </div>
            ))}
          </div>
          <div className="mockup__stats-row">
            <div className="mockup__stat"><p className="mockup__stat-v">+$840</p><p className="mockup__stat-l">Today's P&L</p></div>
            <div className="mockup__stat"><p className="mockup__stat-v">2</p><p className="mockup__stat-l">Traders</p></div>
            <div className="mockup__stat"><p className="mockup__stat-v">$3,200</p><p className="mockup__stat-l">Available</p></div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Trader Card (preview) ───────────────────────────────── */
function TraderCard({ trader }) {
  const riskColor = {
    Conservative:   'badge-blue',
    Moderate:       'badge-green',
    'Moderate-High':'badge-yellow',
    Aggressive:     'badge-orange',
  }[trader.risk] || 'badge-green'

  return (
    <div className="home-trader-card">
      <div className="home-trader-card__head">
        <div className="home-trader-card__avatar">
          {trader.handle.slice(0,2).toUpperCase()}
        </div>
        <div>
          <p className="home-trader-card__handle">@{trader.handle}</p>
          <p className="home-trader-card__style">{trader.style}</p>
        </div>
        {trader.verified && (
          <span className="home-trader-card__verified" title="Verified">
            <i className="ri-verified-badge-fill"></i>
          </span>
        )}
      </div>
      <p className="home-trader-card__tagline">{trader.tagline}</p>
      <div className="home-trader-card__metrics">
        <div className="home-trader-card__metric">
          <p className="home-trader-card__metric-v mono text-green">+{trader.monthlyReturn}%</p>
          <p className="home-trader-card__metric-l">Monthly Return</p>
        </div>
        <div className="home-trader-card__metric">
          <p className="home-trader-card__metric-v mono">{trader.winRate}%</p>
          <p className="home-trader-card__metric-l">Win Rate</p>
        </div>
        <div className="home-trader-card__metric">
          <p className="home-trader-card__metric-v mono">{trader.copiers.toLocaleString()}</p>
          <p className="home-trader-card__metric-l">Copiers</p>
        </div>
      </div>
      <div className="home-trader-card__footer">
        <span className={`badge ${riskColor}`}>{trader.risk}</span>
        <Link to="/signup" className="btn btn-ghost btn-sm">
          Copy <i className="ri-arrow-right-line"></i>
        </Link>
      </div>
    </div>
  )
}

/* ── Features Data ───────────────────────────────────────── */
const FEATURES = [
  { icon: 'ri-flashlight-line',   title: 'Real-Time Copy Execution',
    desc: 'When your chosen trader places a trade, your account mirrors it instantly. No lag. No manual input. Precision-automated.' },
  { icon: 'ri-shield-check-line', title: 'Risk Controls You Set',
    desc: 'Define your copy allocation, set stop-loss limits, and control maximum exposure per trader. You stay in command, always.' },
  { icon: 'ri-verified-badge-fill', title: 'Verified Trader Profiles',
    desc: 'Every trader on Mirex is vetted. Live performance data, win rate, and drawdown history — all transparent, all audited.' },
  { icon: 'ri-wallet-3-line',     title: 'Seamless Wallet Management',
    desc: 'Deposit, allocate, and withdraw with ease. Your Mirex Wallet gives a real-time overview of your portfolio.' },
  { icon: 'ri-percent-line',      title: 'Profit-Share Model',
    desc: 'Traders earn only when you earn. Our commission structure aligns their incentives directly with yours.' },
  { icon: 'ri-radar-line',        title: '24/7 Platform Monitoring',
    desc: 'Our systems monitor every position, every account, every trade — day and night. Your capital never sleeps unguarded.' },
]

const STEPS = [
  { n:'01', icon:'ri-user-add-line',   title:'Create Your Account',
    desc:'Sign up in under 2 minutes. No prior trading knowledge required.' },
  { n:'02', icon:'ri-bank-card-line',  title:'Fund Your Wallet',
    desc:'Deposit securely via bank transfer, card, or crypto. Your funds sit in a dedicated wallet — fully yours.' },
  { n:'03', icon:'ri-swap-line',       title:'Choose a Trader & Copy',
    desc:'Browse verified traders. Analyze their performance. One click to copy. We handle the rest.' },
]

const STATS = [
  { value: '$248M+',  label: 'Total Volume Traded',  icon: 'ri-funds-line' },
  { value: '12,400+', label: 'Active Investors',     icon: 'ri-group-line' },
  { value: '340+',    label: 'Verified Traders',     icon: 'ri-user-star-line' },
  { value: '98.6%',   label: 'Uptime Reliability',   icon: 'ri-server-line' },
]

/* ── Main Component ──────────────────────────────────────── */
export default function Home() {
  const previewTraders = traders.slice(0, 3)

  return (
    <div className="home">

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="home-hero">
        <div className="home-hero__glow"></div>
        <div className="home-hero__grid"></div>
        <div className="container home-hero__inner">
          <div className="home-hero__content">
            <span className="badge badge-green home-hero__pill">
              <span className="home-hero__pill-dot"></span>
              The World's Premier Copy Trading Platform
            </span>
            <h1 className="home-hero__title">
              The World's Best Traders Are Already{' '}
              <span className="highlight">Working For You.</span>
            </h1>
            <p className="home-hero__sub">
              Mirex connects you to a curated network of elite forex traders.
              Mirror their strategies, share their gains — in real time, automatically.
            </p>
            <div className="home-hero__actions">
              <Link to="/signup" className="btn btn-primary btn-lg">
                Start Copying Trades <i className="ri-arrow-right-line"></i>
              </Link>
              <Link to="/traders" className="btn btn-outline btn-lg">
                Explore Traders
              </Link>
            </div>
            <p className="home-hero__trust">
              <i className="ri-checkbox-circle-line"></i> No experience required &nbsp;·&nbsp;
              <i className="ri-checkbox-circle-line"></i> Start from $100 &nbsp;·&nbsp;
              <i className="ri-checkbox-circle-line"></i> Withdraw anytime
            </p>
          </div>
          <div className="home-hero__preview">
            <DashboardMockup />
          </div>
        </div>
      </section>

      {/* ── Stats Bar ────────────────────────────────────── */}
      <section className="home-stats">
        <div className="container">
          <div className="home-stats__grid">
            {STATS.map(({ value, label, icon }) => (
              <div key={label} className="home-stats__item">
                <div className="home-stats__icon"><i className={icon}></i></div>
                <p className="home-stats__value mono">{value}</p>
                <p className="home-stats__label">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────── */}
      <section className="section home-how">
        <div className="container">
          <div className="home-how__head">
            <span className="eyebrow">Simple Process</span>
            <h2 className="section-title">
              From Sign-Up to Gains —<br />
              <span className="highlight">In Three Steps.</span>
            </h2>
            <p className="section-sub">
              Mirex is built for action. No courses. No complexity.
              Just disciplined copy trading at your fingertips.
            </p>
          </div>
          <div className="home-how__steps">
            {STEPS.map(({ n, icon, title, desc }, idx) => (
              <div key={n} className="home-step">
                <div className="home-step__num mono">{n}</div>
                <div className="home-step__icon-wrap">
                  <i className={icon}></i>
                </div>
                <h3 className="home-step__title">{title}</h3>
                <p className="home-step__desc">{desc}</p>
                {idx < STEPS.length - 1 && (
                  <div className="home-step__arrow">
                    <i className="ri-arrow-right-line"></i>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────── */}
      <section className="section home-features">
        <div className="home-features__bg"></div>
        <div className="container">
          <div className="home-features__head">
            <span className="eyebrow">Platform Features</span>
            <h2 className="section-title">
              Built for Performance.<br />
              <span className="highlight">Designed for Trust.</span>
            </h2>
            <p className="section-sub">
              Every feature on Mirex exists for one reason: to give you a clear,
              reliable path to returns — with full transparency at every step.
            </p>
          </div>
          <div className="home-features__grid">
            {FEATURES.map(({ icon, title, desc }) => (
              <div key={title} className="home-feature-card card">
                <div className="home-feature-card__icon">
                  <i className={icon}></i>
                </div>
                <h3 className="home-feature-card__title">{title}</h3>
                <p className="home-feature-card__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Traders Preview ──────────────────────────────── */}
      <section className="section home-traders-preview">
        <div className="container">
          <div className="home-traders-preview__head">
            <div>
              <span className="eyebrow">Top Performers</span>
              <h2 className="section-title">
                Meet the Traders<br />
                <span className="highlight">Behind the Returns.</span>
              </h2>
            </div>
            <Link to="/traders" className="btn btn-outline">
              View All Traders <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
          <div className="home-traders-preview__grid">
            {previewTraders.map(t => <TraderCard key={t.id} trader={t} />)}
          </div>
        </div>
      </section>

      {/* ── Trust Strip ──────────────────────────────────── */}
      <section className="home-trust section-sm">
        <div className="container">
          <p className="home-trust__label">Trusted by investors across 140+ countries</p>
          <div className="home-trust__items">
            {['Bank-Level Security','KYC Verified Traders','Transparent Fees','No Lock-in Periods','Instant Copy Execution'].map(item => (
              <div key={item} className="home-trust__item">
                <i className="ri-checkbox-circle-fill"></i>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
