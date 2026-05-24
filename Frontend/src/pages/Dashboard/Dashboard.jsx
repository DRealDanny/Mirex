import DashboardLayout from '../../layouts/DashboardLayout/DashboardLayout'
import { traders } from '../../data/traders'
import { Link } from 'react-router-dom'
import './Dashboard.css'

const KPI_CARDS = [
  { icon: 'ri-funds-line',      label: 'Total Portfolio Value', value: '$12,840.00', change: '+8.4%',  up: true  },
  { icon: 'ri-arrow-up-circle-line', label: 'Total Profit / Loss',  value: '+$1,084.00', change: '+9.2%', up: true  },
  { icon: 'ri-swap-line',       label: 'Active Copied Trades', value: '14 trades',  change: null,     up: null  },
  { icon: 'ri-user-star-line',  label: 'Traders Being Copied', value: '2 traders',  change: null,     up: null  },
  { icon: 'ri-wallet-3-line',   label: 'Available Balance',    value: '$3,200.00',  change: null,     up: null  },
]

const ACTIVE_TRADERS = [
  { handle: 'VXTrader', allocated: '$5,000', plToday: '+$42.00', plTotal: '+$420.00', winRate: '73%', status: 'Active' },
  { handle: 'FXPrecision', allocated: '$4,640', plToday: '+$51.80', plTotal: '+$520.00', winRate: '79%', status: 'Active' },
]

const RECENT_TRADES = [
  { pair: 'EUR/USD', type: 'BUY',  trader: '@VXTrader',    open: '1.08420', close: '1.08710', pl: '+$21.30', date: 'Today, 10:42' },
  { pair: 'GBP/USD', type: 'SELL', trader: '@FXPrecision', open: '1.27180', close: '1.26850', pl: '+$33.00', date: 'Today, 09:15' },
  { pair: 'EUR/USD', type: 'BUY',  trader: '@VXTrader',    open: '1.08200', close: '1.08180', pl: '-$2.00',  date: 'Yesterday' },
  { pair: 'USD/JPY', type: 'SELL', trader: '@FXPrecision', open: '149.820', close: '149.340', pl: '+$48.00', date: 'Yesterday' },
]

export default function Dashboard() {
  return (
    <DashboardLayout pageTitle="Main Dashboard">
      <div className="dash-page">

        {/* Greeting */}
        <div className="dash-greeting">
          <div>
            <h2 className="dash-greeting__title">Good morning, James.</h2>
            <p className="dash-greeting__sub">
              Here's a real-time overview of your Mirex investments and copied trades.
            </p>
          </div>
          <Link to="/traders" className="btn btn-primary btn-sm">
            <i className="ri-add-line"></i> Copy New Trader
          </Link>
        </div>

        {/* KPI Cards */}
        <div className="dash-kpis">
          {KPI_CARDS.map(({ icon, label, value, change, up }) => (
            <div key={label} className="dash-kpi">
              <div className="dash-kpi__top">
                <div className="dash-kpi__icon"><i className={icon}></i></div>
                {change && (
                  <span className={`dash-kpi__change${up ? ' dash-kpi__change--up' : ' dash-kpi__change--down'}`}>
                    <i className={up ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'}></i>
                    {change}
                  </span>
                )}
              </div>
              <p className="dash-kpi__value mono">{value}</p>
              <p className="dash-kpi__label">{label}</p>
            </div>
          ))}
        </div>

        {/* Active Traders */}
        <div className="dash-section">
          <div className="dash-section__head">
            <h3 className="dash-section__title">Active Copy Relationships</h3>
            <Link to="/traders" className="btn btn-ghost btn-sm">
              Add Trader <i className="ri-add-line"></i>
            </Link>
          </div>
          <div className="dash-table-wrap">
            <table className="dash-table">
              <thead>
                <tr>
                  <th>Trader</th>
                  <th>Allocated</th>
                  <th>P&amp;L Today</th>
                  <th>Total P&amp;L</th>
                  <th>Win Rate</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {ACTIVE_TRADERS.map(({ handle, allocated, plToday, plTotal, winRate, status }) => (
                  <tr key={handle}>
                    <td>
                      <div className="dash-table__trader">
                        <div className="dash-table__avatar">{handle.slice(0,2).toUpperCase()}</div>
                        <span className="dash-table__handle">@{handle}</span>
                      </div>
                    </td>
                    <td><span className="mono">{allocated}</span></td>
                    <td><span className={`mono ${plToday.startsWith('+') ? 'text-green' : 'dash-table__red'}`}>{plToday}</span></td>
                    <td><span className={`mono ${plTotal.startsWith('+') ? 'text-green' : 'dash-table__red'}`}>{plTotal}</span></td>
                    <td><span className="mono">{winRate}</span></td>
                    <td>
                      <span className="dash-status">
                        <span className="dash-status__dot"></span> {status}
                      </span>
                    </td>
                    <td>
                      <div className="dash-table__actions">
                        <button className="dash-table__btn" title="Adjust"><i className="ri-equalizer-line"></i></button>
                        <button className="dash-table__btn" title="Pause"><i className="ri-pause-line"></i></button>
                        <button className="dash-table__btn dash-table__btn--danger" title="Stop"><i className="ri-stop-circle-line"></i></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Trades + Quick Actions */}
        <div className="dash-bottom">
          <div className="dash-section dash-recent">
            <div className="dash-section__head">
              <h3 className="dash-section__title">Recent Trades</h3>
            </div>
            <div className="dash-table-wrap">
              <table className="dash-table">
                <thead>
                  <tr>
                    <th>Pair</th>
                    <th>Type</th>
                    <th>Trader</th>
                    <th>Open</th>
                    <th>Close</th>
                    <th>P&amp;L</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {RECENT_TRADES.map((t, i) => (
                    <tr key={i}>
                      <td><span className="dash-table__pair mono">{t.pair}</span></td>
                      <td>
                        <span className={`dash-trade-type dash-trade-type--${t.type.toLowerCase()}`}>{t.type}</span>
                      </td>
                      <td><span className="dash-table__handle">{t.trader}</span></td>
                      <td><span className="mono">{t.open}</span></td>
                      <td><span className="mono">{t.close}</span></td>
                      <td><span className={`mono ${t.pl.startsWith('+') ? 'text-green' : 'dash-table__red'}`}>{t.pl}</span></td>
                      <td><span className="dash-table__date">{t.date}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="dash-quick">
            <h3 className="dash-section__title" style={{marginBottom:'20px'}}>Quick Actions</h3>
            <div className="dash-quick__items">
              {[
                { icon: 'ri-add-circle-line',   label: 'Deposit Funds',   to: '/wallet',  primary: true },
                { icon: 'ri-user-star-line',    label: 'Explore Traders', to: '/traders', primary: false },
                { icon: 'ri-arrow-left-right-line', label: 'Withdraw Funds', to: '/wallet', primary: false },
                { icon: 'ri-pulse-line',        label: 'Trade History',   to: '/dashboard', primary: false },
              ].map(({ icon, label, to, primary }) => (
                <Link key={label} to={to}
                  className={`dash-quick__item${primary ? ' dash-quick__item--primary' : ''}`}
                >
                  <i className={icon}></i>
                  <span>{label}</span>
                  <i className="ri-arrow-right-line dash-quick__arrow"></i>
                </Link>
              ))}
            </div>
            <div className="dash-quick__disclaimer">
              <i className="ri-information-line"></i>
              <p>Funds allocated to active copy positions cannot be withdrawn until copying is stopped.</p>
            </div>
          </div>
        </div>

      </div>
    </DashboardLayout>
  )
}
