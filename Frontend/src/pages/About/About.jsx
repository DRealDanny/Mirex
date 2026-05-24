import { Link } from 'react-router-dom'
import './About.css'

const VALUES = [
  { icon: 'ri-eye-line',        title: 'Transparency',   desc: 'Every trade, every fee, every return — visible. No hidden charges, no opaque processes. What you see is exactly what happens.' },
  { icon: 'ri-shield-user-line',title: 'Accountability', desc: 'Traders on Mirex are held to strict performance standards. Underperformers are reviewed and removed. Period.' },
  { icon: 'ri-crosshair-line',  title: 'Precision',      desc: "We don't trade on impulse. Every system on Mirex is built for disciplined, data-driven execution at every level." },
  { icon: 'ri-global-line',     title: 'Accessibility',  desc: 'Our minimum entry point ensures that wealth-building is open to everyone — not just the wealthy. $100 is all it takes to start.' },
  { icon: 'ri-lock-2-line',     title: 'Security',       desc: 'Your funds and data are protected by enterprise-grade security protocols at every layer of the platform.' },
]

const WHY_ITEMS = [
  { icon: 'ri-filter-line',        title: 'Curated Trader Roster',
    desc: 'Not everyone makes it onto Mirex. Our traders pass a rigorous vetting process — performance history, risk assessment, and live trading verification.' },
  { icon: 'ri-scales-line',        title: 'Zero Conflict of Interest',
    desc: 'Traders earn only when you profit. Our profit-share model means their success is inseparable from yours.' },
  { icon: 'ri-user-settings-line', title: 'Built for Both Worlds',
    desc: "Whether you're investing for the first time or managing a serious portfolio, Mirex scales with your ambition and risk appetite." },
  { icon: 'ri-bank-line',          title: 'Regulated & Compliant',
    desc: 'Mirex operates under strict financial compliance standards. Your investment is protected by a platform that takes regulation seriously.' },
]

export default function About() {
  return (
    <div className="about">

      {/* ── Page Hero ──────────────────────────────────── */}
      <section className="about-hero">
        <div className="about-hero__glow"></div>
        <div className="about-hero__grid"></div>
        <div className="container about-hero__inner">
          <span className="eyebrow">Our Story</span>
          <h1 className="about-hero__title">
            We Built the Platform<br />
            <span className="highlight">We Wished Existed.</span>
          </h1>
          <p className="about-hero__sub">
            Mirex was founded on a simple belief: access to elite trading
            should not be a privilege reserved for the few.
          </p>
          <div className="about-hero__stats">
            {[
              { v: '2019', l: 'Founded' },
              { v: '140+', l: 'Countries' },
              { v: '12K+', l: 'Investors' },
              { v: '$248M+', l: 'Volume' },
            ].map(({ v, l }) => (
              <div key={l} className="about-hero__stat">
                <p className="about-hero__stat-v mono">{v}</p>
                <p className="about-hero__stat-l">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Story ──────────────────────────────────────── */}
      <section className="section about-story">
        <div className="container about-story__inner">
          <div className="about-story__content">
            <span className="eyebrow">The Background</span>
            <h2 className="section-title">
              Democratizing Access to<br />
              <span className="highlight">Elite Forex Trading.</span>
            </h2>
            <div className="about-story__body">
              <p>
                For too long, institutional-grade forex strategies sat behind closed
                doors — available only to hedge funds, family offices, and high-net-worth
                investors with the right connections.
              </p>
              <p>
                We built Mirex to change that. A transparent, technology-driven platform
                that connects everyday investors to the world's most disciplined forex
                traders — so you can grow your wealth the smart way, without spending
                years mastering the markets.
              </p>
              <p>
                Today, Mirex serves thousands of investors across 140+ countries, with
                over $248M in total trading volume mirrored through the platform.
                Every trade transparent. Every fee disclosed. Every return yours.
              </p>
            </div>
            <Link to="/signup" className="btn btn-primary">
              Join Mirex Today <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
          <div className="about-story__visual">
            <div className="about-story__card">
              <div className="about-story__card-icon">
                <i className="ri-bar-chart-grouped-fill"></i>
              </div>
              <div className="about-story__missions">
                <div className="about-mission">
                  <p className="about-mission__label">
                    <i className="ri-focus-3-line"></i> Mission
                  </p>
                  <p className="about-mission__text">
                    To democratize access to elite forex trading — making expert-level
                    returns available to every investor, everywhere.
                  </p>
                </div>
                <div className="about-mission__divider"></div>
                <div className="about-mission">
                  <p className="about-mission__label">
                    <i className="ri-telescope-line"></i> Vision
                  </p>
                  <p className="about-mission__text">
                    A world where every investor, regardless of experience, can access
                    the discipline and precision of professional trading.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ─────────────────────────────────────── */}
      <section className="section about-values">
        <div className="about-values__bg"></div>
        <div className="container about-values__inner">
          <div className="about-values__head">
            <span className="eyebrow">What We Stand For</span>
            <h2 className="section-title">
              Our Core <span className="highlight">Values.</span>
            </h2>
            <p className="section-sub">
              Every decision we make at Mirex is guided by five principles
              that keep us accountable to our investors.
            </p>
          </div>
          <div className="about-values__grid">
            {VALUES.map(({ icon, title, desc }) => (
              <div key={title} className="about-value-card card">
                <div className="about-value-card__icon">
                  <i className={icon}></i>
                </div>
                <h3 className="about-value-card__title">{title}</h3>
                <p className="about-value-card__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Mirex ──────────────────────────────────── */}
      <section className="section about-why">
        <div className="container">
          <div className="about-why__head">
            <span className="eyebrow">Our Edge</span>
            <h2 className="section-title">
              Why Thousands of Investors<br />
              <span className="highlight">Choose Mirex.</span>
            </h2>
          </div>
          <div className="about-why__grid">
            {WHY_ITEMS.map(({ icon, title, desc }) => (
              <div key={title} className="about-why-item">
                <div className="about-why-item__icon">
                  <i className={icon}></i>
                </div>
                <div>
                  <h3 className="about-why-item__title">{title}</h3>
                  <p className="about-why-item__desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────── */}
      <section className="about-cta section-sm">
        <div className="container about-cta__inner">
          <h2 className="about-cta__title">
            Ready to Mirror the Best?
          </h2>
          <p className="about-cta__sub">
            Create your account in under 2 minutes and start copying elite traders today.
          </p>
          <div className="about-cta__actions">
            <Link to="/signup" className="btn btn-primary btn-lg">
              Get Started <i className="ri-arrow-right-line"></i>
            </Link>
            <Link to="/how-it-works" className="btn btn-outline btn-lg">
              How It Works
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
