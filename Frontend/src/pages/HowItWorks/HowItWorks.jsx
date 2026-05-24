import { Link } from 'react-router-dom'
import './HowItWorks.css'

const STEPS = [
  {
    n: '01', icon: 'ri-user-add-line', title: 'Create Your Account',
    desc: "Visit Mirex and click 'Get Started.' Fill in your name, email, and create a secure password. You'll receive a verification email — click the link to activate your account.",
    note: 'Takes: Under 2 minutes',
  },
  {
    n: '02', icon: 'ri-fingerprint-line', title: 'Complete Identity Verification',
    desc: "Mirex is a regulated platform. To protect all users, we require a simple KYC process: upload a government-issued ID and a selfie. Verification is typically completed within 24 hours.",
    note: '5 minutes to submit · 24 hrs to verify',
  },
  {
    n: '03', icon: 'ri-bank-card-line', title: 'Fund Your Mirex Wallet',
    desc: 'Once verified, navigate to your Wallet and choose your deposit method — bank transfer, debit/credit card, or supported cryptocurrency. Funds are credited and ready to allocate immediately.',
    note: 'Minimum Deposit: $100',
  },
  {
    n: '04', icon: 'ri-user-search-line', title: 'Explore & Analyse Traders',
    desc: 'Head to the Traders section. Browse profiles by performance metrics: monthly returns, win rate, risk score, drawdown history, trading style, and the number of current copiers.',
    note: 'Tip: Diversify across 2–3 traders to spread risk',
  },
  {
    n: '05', icon: 'ri-settings-4-line', title: 'Set Your Copy Parameters',
    desc: "Select a trader and click 'Copy.' Define how much of your wallet to allocate, set a stop-loss limit (optional but recommended), and choose whether to mirror trades proportionally or with a fixed lot size.",
    note: 'You are always in control of your allocation',
  },
  {
    n: '06', icon: 'ri-pulse-line', title: 'Monitor, Adjust, or Stop Anytime',
    desc: 'Your dashboard shows real-time updates on every copied trade: open positions, closed trades, profit and loss, and your overall portfolio performance. You can pause copying, switch traders, or withdraw funds at any time.',
    note: 'Copy can be stopped instantly with one click',
  },
]

const DEPOSIT_METHODS = [
  { icon: 'ri-bank-line',       method: 'Bank Transfer', time: '1–3 Business Days', min: '$100', fee: 'None' },
  { icon: 'ri-bank-card-line',  method: 'Debit / Credit Card', time: 'Instant', min: '$100', fee: '1.5% processing fee' },
  { icon: 'ri-bit-coin-line',   method: 'Crypto (USDT/BTC)', time: '10–30 Minutes', min: '$100', fee: 'Network fee only' },
]

export default function HowItWorks() {
  return (
    <div className="hiw">

      {/* Hero */}
      <section className="hiw-hero">
        <div className="hiw-hero__glow"></div>
        <div className="hiw-hero__grid"></div>
        <div className="container hiw-hero__inner">
          <span className="eyebrow">Simple. Systematic. Proven.</span>
          <h1 className="hiw-hero__title">
            From Zero to Copying Elite Traders<br />
            <span className="highlight">In Under 10 Minutes.</span>
          </h1>
          <p className="hiw-hero__sub">
            Mirex is designed so that complexity lives on our side, not yours.
            Here's exactly how the platform works — step by step.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="section hiw-steps">
        <div className="container">
          <div className="hiw-steps__list">
            {STEPS.map(({ n, icon, title, desc, note }, idx) => (
              <div key={n} className="hiw-step">
                <div className="hiw-step__aside">
                  <div className="hiw-step__num mono">{n}</div>
                  {idx < STEPS.length - 1 && <div className="hiw-step__line"></div>}
                </div>
                <div className="hiw-step__body">
                  <div className="hiw-step__icon-wrap">
                    <i className={icon}></i>
                  </div>
                  <h3 className="hiw-step__title">{title}</h3>
                  <p className="hiw-step__desc">{desc}</p>
                  <div className="hiw-step__note">
                    <i className="ri-information-line"></i>
                    <span>{note}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profit Share */}
      <section className="section hiw-profit">
        <div className="hiw-profit__bg"></div>
        <div className="container hiw-profit__inner">
          <div className="hiw-profit__content">
            <span className="eyebrow">The Business Model</span>
            <h2 className="section-title">
              We Only Win<br />
              <span className="highlight">When You Win.</span>
            </h2>
            <p className="hiw-profit__body">
              Mirex operates on a transparent profit-sharing model. There are no monthly
              subscription fees, no platform charges on deposits, and no hidden costs.
            </p>
            <p className="hiw-profit__body">
              When a trader generates a profit on your copied trades, they receive a
              pre-disclosed commission percentage from that profit — typically between
              15% and 30%, depending on the trader's tier. This commission is deducted
              only from profits, never from your principal capital.
            </p>
            <p className="hiw-profit__body">
              The result: a fully aligned incentive structure where traders are motivated
              to deliver consistent performance — because their income depends entirely on yours.
            </p>
            <Link to="/traders" className="btn btn-primary" style={{marginTop:'8px'}}>
              Explore Traders <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
          <div className="hiw-profit__visual">
            <div className="hiw-profit__card">
              <p className="hiw-profit__card-label">Profit-Share Breakdown</p>
              <div className="hiw-profit__example">
                <div className="hiw-profit__row">
                  <span>Your Investment</span>
                  <span className="mono">$2,000.00</span>
                </div>
                <div className="hiw-profit__row">
                  <span>Monthly Return (8.4%)</span>
                  <span className="mono text-green">+$168.00</span>
                </div>
                <div className="hiw-profit__row hiw-profit__row--divider">
                  <span>Trader Commission (20%)</span>
                  <span className="mono">-$33.60</span>
                </div>
                <div className="hiw-profit__row hiw-profit__row--total">
                  <span>Your Net Profit</span>
                  <span className="mono text-green">+$134.40</span>
                </div>
              </div>
              <p className="hiw-profit__card-note">
                <i className="ri-information-line"></i>
                Commission is deducted from profits only — never from principal.
              </p>
            </div>

            {/* Deposit Methods */}
            <div className="hiw-deposit">
              <p className="hiw-deposit__title">Deposit Methods</p>
              {DEPOSIT_METHODS.map(({ icon, method, time, min, fee }) => (
                <div key={method} className="hiw-deposit__item">
                  <div className="hiw-deposit__icon"><i className={icon}></i></div>
                  <div className="hiw-deposit__info">
                    <p className="hiw-deposit__method">{method}</p>
                    <p className="hiw-deposit__time">{time} · Min {min}</p>
                  </div>
                  <span className="hiw-deposit__fee">{fee}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hiw-cta section-sm">
        <div className="container hiw-cta__inner">
          <h2 className="hiw-cta__title">
            Ready to Start? It Takes<br />
            <span className="highlight">Under 10 Minutes.</span>
          </h2>
          <div className="hiw-cta__actions">
            <Link to="/signup" className="btn btn-primary btn-lg">
              Create Free Account <i className="ri-arrow-right-line"></i>
            </Link>
            <Link to="/traders" className="btn btn-outline btn-lg">
              Browse Traders
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
