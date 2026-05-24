import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

export default function Login() {
  const [showPass, setShowPass] = useState(false)
  const [form, setForm] = useState({ email: '', password: '' })

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  return (
    <div className="auth-page">
      {/* Left Panel */}
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
              Your portfolio is<br />
              <span className="highlight">one login away.</span>
            </h2>
            <p className="auth-brand-sub">
              Access your dashboard, monitor live copied trades, and manage your wallet
              — all in one place.
            </p>
            <div className="auth-brand-stats">
              {[
                { v: '$248M+', l: 'Total Volume' },
                { v: '12K+',   l: 'Investors' },
                { v: '340+',   l: 'Traders' },
              ].map(({ v, l }) => (
                <div key={l} className="auth-brand-stat">
                  <p className="auth-brand-stat__v mono">{v}</p>
                  <p className="auth-brand-stat__l">{l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="auth-brand-mockup">
            <div className="auth-mockup-row">
              <div className="auth-mockup-dot"></div>
              <div className="auth-mockup-info">
                <span className="auth-mockup-handle">@VXTrader</span>
                <span className="auth-mockup-status">Copying Active</span>
              </div>
              <span className="auth-mockup-ret mono">+8.4%</span>
            </div>
            <div className="auth-mockup-row">
              <div className="auth-mockup-dot"></div>
              <div className="auth-mockup-info">
                <span className="auth-mockup-handle">@FXPrecision</span>
                <span className="auth-mockup-status">Copying Active</span>
              </div>
              <span className="auth-mockup-ret mono">+11.2%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel — Form */}
      <div className="auth-panel auth-panel--form">
        <div className="auth-form-wrap">
          <div className="auth-form-head">
            <h1 className="auth-form-title">Welcome Back.</h1>
            <p className="auth-form-sub">
              Log in to your Mirex account to monitor your portfolio and copied trades.
            </p>
          </div>

          <div className="auth-form">
            <div className="auth-field">
              <label className="auth-field__label">Email Address</label>
              <div className="auth-field__input-wrap">
                <i className="ri-mail-line auth-field__icon"></i>
                <input
                  type="email" name="email" value={form.email}
                  onChange={handleChange} placeholder="Enter your email"
                  className="auth-field__input"
                />
              </div>
            </div>
            <div className="auth-field">
              <div className="auth-field__label-row">
                <label className="auth-field__label">Password</label>
                <a href="#" className="auth-forgot">Forgot password?</a>
              </div>
              <div className="auth-field__input-wrap">
                <i className="ri-lock-2-line auth-field__icon"></i>
                <input
                  type={showPass ? 'text' : 'password'} name="password" value={form.password}
                  onChange={handleChange} placeholder="Enter your password"
                  className="auth-field__input auth-field__input--padded"
                />
                <button className="auth-field__toggle" onClick={() => setShowPass(!showPass)}>
                  <i className={showPass ? 'ri-eye-off-line' : 'ri-eye-line'}></i>
                </button>
              </div>
            </div>

            <Link to="/dashboard" className="btn btn-primary auth-submit">
              Log In to Mirex <i className="ri-arrow-right-line"></i>
            </Link>

            <p className="auth-switch">
              New to Mirex?{' '}
              <Link to="/signup" className="auth-switch__link">Create a Free Account</Link>
            </p>
          </div>

          <div className="auth-divider">
            <span>or continue with</span>
          </div>
          <div className="auth-socials">
            <button className="auth-social-btn">
              <i className="ri-google-fill"></i> Google
            </button>
            <button className="auth-social-btn">
              <i className="ri-apple-fill"></i> Apple
            </button>
          </div>

          <p className="auth-disclaimer">
            By continuing, you agree to Mirex's{' '}
            <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  )
}
