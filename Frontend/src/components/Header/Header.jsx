import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

const NAV_LINKS = [
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/traders',      label: 'Traders' },
  { to: '/about',        label: 'About' },
  { to: '/faq',          label: 'FAQ' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Close menu on resize */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="header__inner container">

        {/* Logo */}
        <Link to="/" className="header__logo" onClick={() => setMenuOpen(false)}>
          <span className="header__logo-mark">
            <i className="ri-bar-chart-grouped-fill"></i>
          </span>
          <span className="header__logo-text">MIREX</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="header__nav">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `header__link${isActive ? ' header__link--active' : ''}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="header__actions">
          <Link to="/login"  className="header__login">Log In</Link>
          <Link to="/signup" className="btn btn-primary btn-sm">
            Get Started <i className="ri-arrow-right-line"></i>
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="header__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <i className={menuOpen ? 'ri-close-line' : 'ri-menu-3-line'}></i>
        </button>
      </div>

      {/* Mobile Overlay */}
      {menuOpen && (
        <div className="header__mobile" onClick={() => setMenuOpen(false)}>
          <div className="header__mobile-inner" onClick={e => e.stopPropagation()}>
            <nav className="header__mobile-nav">
              {NAV_LINKS.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `header__mobile-link${isActive ? ' header__mobile-link--active' : ''}`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                  <i className="ri-arrow-right-line"></i>
                </NavLink>
              ))}
            </nav>
            <div className="header__mobile-actions">
              <Link to="/login"  className="btn btn-outline" style={{width:'100%',justifyContent:'center'}} onClick={() => setMenuOpen(false)}>Log In</Link>
              <Link to="/signup" className="btn btn-primary" style={{width:'100%',justifyContent:'center'}} onClick={() => setMenuOpen(false)}>
                Get Started <i className="ri-arrow-right-line"></i>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
