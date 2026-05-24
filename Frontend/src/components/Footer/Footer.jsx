import { Link } from 'react-router-dom'
import './Footer.css'

const FOOTER_LINKS = {
  Platform: [
    { label: 'How It Works',   to: '/how-it-works' },
    { label: 'Explore Traders',to: '/traders' },
    { label: 'Pricing & Fees', to: '/faq' },
    { label: 'Become a Trader',to: '/signup' },
    { label: 'Affiliate Program', to: '/' },
  ],
  Company: [
    { label: 'About Mirex', to: '/about' },
    { label: 'Careers',     to: '/' },
    { label: 'Blog',        to: '/' },
    { label: 'Press',       to: '/' },
    { label: 'Contact Us',  to: '/' },
  ],
  Legal: [
    { label: 'Terms of Service', to: '/' },
    { label: 'Privacy Policy',   to: '/' },
    { label: 'Risk Disclosure',  to: '/' },
    { label: 'Cookie Policy',    to: '/' },
  ],
}

export default function Footer() {
  return (
    <footer className="footer">
      {/* CTA Band */}
      <div className="footer-cta">
        <div className="container footer-cta__inner">
          <div className="footer-cta__content">
            <p className="eyebrow">Join Mirex Today</p>
            <h2 className="footer-cta__title">
              The Markets Don't Wait.<br />
              <span className="highlight">Neither Should You.</span>
            </h2>
            <p className="footer-cta__sub">
              Join over 12,000 investors who trust Mirex to put their capital
              in the hands of proven traders — and deliver results.
            </p>
          </div>
          <div className="footer-cta__actions">
            <Link to="/signup" className="btn btn-primary btn-lg">
              Create Free Account <i className="ri-arrow-right-line"></i>
            </Link>
            <Link to="/traders" className="btn btn-outline btn-lg">
              Explore Traders
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="container footer-main__inner">

          {/* Brand Column */}
          <div className="footer-brand">
            <Link to="/" className="footer-brand__logo">
              <span className="footer-brand__mark">
                <i className="ri-bar-chart-grouped-fill"></i>
              </span>
              <span className="footer-brand__name">MIREX</span>
            </Link>
            <p className="footer-brand__tagline">
              Mirror the world's best traders.<br />Profit in real time.
            </p>
            <div className="footer-social">
              {[
                { icon: 'ri-twitter-x-line', href: '#' },
                { icon: 'ri-instagram-line', href: '#' },
                { icon: 'ri-linkedin-line',  href: '#' },
                { icon: 'ri-telegram-line',  href: '#' },
              ].map(({ icon, href }) => (
                <a key={icon} href={href} className="footer-social__link" aria-label={icon}>
                  <i className={icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group} className="footer-col">
              <h4 className="footer-col__heading">{group}</h4>
              <ul className="footer-col__list">
                {links.map(({ label, to }) => (
                  <li key={label}>
                    <Link to={to} className="footer-col__link">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="container footer-bottom__inner">
            <p className="footer-bottom__copy">
              &copy; {new Date().getFullYear()} Mirex Technologies Ltd. All rights reserved.
            </p>
            <p className="footer-bottom__disclaimer">
              Trading involves significant risk. Past performance is not indicative of future results.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
