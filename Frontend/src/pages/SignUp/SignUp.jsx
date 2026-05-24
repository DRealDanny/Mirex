import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Login/Login.css'
import './SignUp.css'

const TRUST_BULLETS = [
  'Start with as little as $100',
  'No trading experience required',
  'Withdraw your funds anytime',
  'Your data is encrypted & protected',
  'No hidden fees — ever',
]

export default function SignUp() {
  const [showPass, setShowPass] = useState(false)
  const [agreed, setAgreed] = useState(false)
  const [form, setForm] = useState({ fullName: '', email: '', password: '', country: '' })

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  return (
    <div className="auth-page">
      {/* Left Brand Panel */}
      <div className="auth-panel auth-panel--brand">
        <div className="auth-panel__glow"></div>
        <div className="auth-panel__grid"></div>
        <div className="auth-panel__inner">
          <Link to="/" className="auth-logo">
            <span className="auth-logo__mark"><i className="ri-bar-chart-grouped-fill"></i></span>
            <span className="auth-logo__text">MIREX</span>
          </Link>
          <div className="auth-brand-content">
            <h2 className="auth-brand-title">
              Your first step toward<br />
              <span className="highlight">smarter returns.</span>
            </h2>
            <p className="auth-brand-sub">
              Join 12,000+ investors already mirroring elite traders on Mirex.
              No experience needed — just an account and $100.
            </p>
            <div className="auth-brand-bullets">
              {TRUST_BULLETS.map(b => (
                <div key={b} className="auth-brand-bullet">
                  <i className="ri-checkbox-circle-fill"></i>
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="auth-brand-mockup">
            <div className="signup-mockup-stat">
              <span className="signup-mockup-stat__label">Active Investors</span>
              <span className="signup-mockup-stat__val mono">12,400+</span>
            </div>
            <div className="signup-mockup-divider"></div>
            <div className="signup-mockup-stat">
              <span className="signup-mockup-stat__label">Avg Monthly Return</span>
              <span className="signup-mockup-stat__val mono text-green">+8.2%</span>
            </div>
            <div className="signup-mockup-divider"></div>
            <div className="signup-mockup-stat">
              <span className="signup-mockup-stat__label">Verified Traders</span>
              <span className="signup-mockup-stat__val mono">340+</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Form Panel */}
      <div className="auth-panel auth-panel--form signup-form-panel">
        <div className="auth-form-wrap">
          <div className="auth-form-head">
            <h1 className="auth-form-title">Create Your Account.</h1>
            <p className="auth-form-sub">
              Start mirroring elite traders in under 2 minutes.
            </p>
          </div>

          <div className="auth-form">
            <div className="auth-field">
              <label className="auth-field__label">Full Name</label>
              <div className="auth-field__input-wrap">
                <i className="ri-user-line auth-field__icon"></i>
                <input type="text" name="fullName" value={form.fullName} onChange={handleChange}
                  placeholder="e.g. James Okonkwo" className="auth-field__input" />
              </div>
            </div>
            <div className="auth-field">
              <label className="auth-field__label">Email Address</label>
              <div className="auth-field__input-wrap">
                <i className="ri-mail-line auth-field__icon"></i>
                <input type="email" name="email" value={form.email} onChange={handleChange}
                  placeholder="e.g. james@email.com" className="auth-field__input" />
              </div>
            </div>
            <div className="auth-field">
              <label className="auth-field__label">Password</label>
              <div className="auth-field__input-wrap">
                <i className="ri-lock-2-line auth-field__icon"></i>
                <input type={showPass ? 'text' : 'password'} name="password" value={form.password}
                  onChange={handleChange} placeholder="Min. 8 characters"
                  className="auth-field__input auth-field__input--padded" />
                <button className="auth-field__toggle" onClick={() => setShowPass(!showPass)}>
                  <i className={showPass ? 'ri-eye-off-line' : 'ri-eye-line'}></i>
                </button>
              </div>
            </div>
            <div className="auth-field">
              <label className="auth-field__label">Country of Residence</label>
              <div className="auth-field__input-wrap">
                <i className="ri-global-line auth-field__icon"></i>
                <select name="country" value={form.country} onChange={handleChange}
                  className="auth-field__input auth-field__select">
                  <option value="">Select your country</option>
                  <option>Nigeria</option><option>United States</option><option>United Kingdom</option>
                  <option>Canada</option><option>Germany</option><option>South Africa</option>
                  <option>Ghana</option><option>Kenya</option><option>Other</option>
                </select>
              </div>
            </div>

            <label className="auth-check">
              <input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)} />
              <span className="auth-check__label">
                I agree to Mirex's <a href="#">Terms of Service</a>,{' '}
                <a href="#">Privacy Policy</a>, and acknowledge the{' '}
                <a href="#">Risk Disclosure</a>.
              </span>
            </label>

            <Link to="/dashboard" className="btn btn-primary auth-submit">
              Create My Account <i className="ri-arrow-right-line"></i>
            </Link>

            <p className="auth-switch">
              Already have an account?{' '}
              <Link to="/login" className="auth-switch__link">Log In</Link>
            </p>
          </div>

          <p className="auth-disclaimer" style={{marginTop:'24px'}}>
            Trading in financial markets involves risk. By creating an account, you confirm
            you understand that past performance does not guarantee future results.
          </p>
        </div>
      </div>
    </div>
  )
}
