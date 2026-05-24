import { useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import './DashboardLayout.css'

const NAV_ITEMS = [
  { to: '/dashboard', icon: 'ri-layout-2-line',    label: 'Overview'         },
  { to: '/wallet',    icon: 'ri-wallet-3-line',     label: 'My Wallet'        },
  { to: '/traders',   icon: 'ri-user-star-line',    label: 'Copied Traders'   },
  { to: '/traders',   icon: 'ri-pulse-line',        label: 'Trade History'    },
  { to: '/traders',   icon: 'ri-compass-discover-line', label: 'Explore Traders'},
]

const BOTTOM_ITEMS = [
  { to: '/',     icon: 'ri-notification-3-line', label: 'Notifications' },
  { to: '/',     icon: 'ri-settings-3-line',     label: 'Settings'      },
  { to: '/',     icon: 'ri-customer-service-2-line', label: 'Support'   },
]

export default function DashboardLayout({ children, pageTitle }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="dash-layout">
      {/* Sidebar */}
      <aside className={`dash-sidebar${sidebarOpen ? ' dash-sidebar--open' : ''}`}>
        <div className="dash-sidebar__head">
          <Link to="/" className="dash-logo">
            <span className="dash-logo__mark">
              <i className="ri-bar-chart-grouped-fill"></i>
            </span>
            <span className="dash-logo__text">MIREX</span>
          </Link>
          <button className="dash-sidebar__close" onClick={() => setSidebarOpen(false)}>
            <i className="ri-close-line"></i>
          </button>
        </div>

        {/* User Chip */}
        <div className="dash-user">
          <div className="dash-user__avatar">
            <i className="ri-user-line"></i>
          </div>
          <div>
            <p className="dash-user__name">James Okonkwo</p>
            <p className="dash-user__status">
              <span className="dash-user__dot"></span> Active
            </p>
          </div>
        </div>

        {/* Nav */}
        <nav className="dash-nav">
          <p className="dash-nav__label">Menu</p>
          {NAV_ITEMS.map(({ to, icon, label }) => (
            <NavLink
              key={label}
              to={to}
              className={({ isActive }) =>
                `dash-nav__item${isActive && label === 'Overview' && to === '/dashboard' ? ' dash-nav__item--active' : ''}${isActive && label === 'My Wallet' && to === '/wallet' ? ' dash-nav__item--active' : ''}`
              }
              onClick={() => setSidebarOpen(false)}
            >
              <i className={icon}></i>
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="dash-nav__divider"></div>

        <nav className="dash-nav">
          {BOTTOM_ITEMS.map(({ to, icon, label }) => (
            <Link key={label} to={to} className="dash-nav__item" onClick={() => setSidebarOpen(false)}>
              <i className={icon}></i>
              <span>{label}</span>
            </Link>
          ))}
        </nav>

        {/* Logout */}
        <div className="dash-logout">
          <button className="dash-nav__item dash-logout__btn" onClick={() => navigate('/')}>
            <i className="ri-logout-box-r-line"></i>
            <span>Log Out</span>
          </button>
        </div>
      </aside>

      {/* Overlay (mobile) */}
      {sidebarOpen && (
        <div className="dash-overlay" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main */}
      <div className="dash-main">
        {/* Top bar */}
        <header className="dash-topbar">
          <button className="dash-topbar__hamburger" onClick={() => setSidebarOpen(true)}>
            <i className="ri-menu-3-line"></i>
          </button>
          <h1 className="dash-topbar__title">{pageTitle}</h1>
          <div className="dash-topbar__right">
            <button className="dash-topbar__icon-btn">
              <i className="ri-notification-3-line"></i>
              <span className="dash-topbar__badge"></span>
            </button>
            <div className="dash-topbar__avatar">
              <i className="ri-user-line"></i>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="dash-content">
          {children}
        </div>
      </div>
    </div>
  )
}
