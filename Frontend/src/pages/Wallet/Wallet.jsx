import { useState } from 'react'
import { Link } from 'react-router-dom'
import DashboardLayout from '../../layouts/DashboardLayout/DashboardLayout'
import './Wallet.css'

const TRANSACTIONS = [
  { date: '24 May 2025 · 10:42', type: 'Deposit',     desc: 'Bank Transfer',       amount: '+$500.00',  status: 'Completed' },
  { date: '24 May 2025 · 09:15', type: 'Profit',      desc: 'From @VXTrader',       amount: '+$42.30',   status: 'Credited'  },
  { date: '23 May 2025 · 16:01', type: 'Profit',      desc: 'From @FXPrecision',    amount: '+$51.80',   status: 'Credited'  },
  { date: '22 May 2025 · 11:30', type: 'Commission',  desc: 'To @VXTrader (20%)',   amount: '-$8.46',    status: 'Deducted'  },
  { date: '22 May 2025 · 11:30', type: 'Commission',  desc: 'To @FXPrecision (25%)',amount: '-$12.95',   status: 'Deducted'  },
  { date: '20 May 2025 · 09:00', type: 'Deposit',     desc: 'Debit Card',           amount: '+$1,000.00',status: 'Completed' },
  { date: '18 May 2025 · 14:22', type: 'Withdrawal',  desc: 'To Bank Account',      amount: '-$200.00',  status: 'Processing'},
  { date: '15 May 2025 · 08:55', type: 'Profit',      desc: 'From @VXTrader',       amount: '+$38.00',   status: 'Credited'  },
]

const DEPOSIT_METHODS = [
  { icon: 'ri-bank-line',      label: 'Bank Transfer',        time: '1–3 Business Days', fee: 'Free' },
  { icon: 'ri-bank-card-line', label: 'Debit / Credit Card',  time: 'Instant',           fee: '1.5%' },
  { icon: 'ri-bit-coin-line',  label: 'Crypto (USDT/BTC)',    time: '10–30 Minutes',     fee: 'Network fee' },
]

const txTypeStyle = (type) => {
  switch (type) {
    case 'Deposit':    return 'tx-badge tx-badge--deposit'
    case 'Profit':     return 'tx-badge tx-badge--profit'
    case 'Commission': return 'tx-badge tx-badge--commission'
    case 'Withdrawal': return 'tx-badge tx-badge--withdraw'
    default:           return 'tx-badge'
  }
}

const statusStyle = (status) => {
  switch (status) {
    case 'Completed':  return 'tx-status tx-status--ok'
    case 'Credited':   return 'tx-status tx-status--ok'
    case 'Deducted':   return 'tx-status tx-status--muted'
    case 'Processing': return 'tx-status tx-status--pending'
    default:           return 'tx-status'
  }
}

export default function Wallet() {
  const [activeTab, setActiveTab] = useState('deposit')
  const [amount, setAmount]       = useState('')
  const [method, setMethod]       = useState('Bank Transfer')

  return (
    <DashboardLayout pageTitle="My Wallet">
      <div className="wallet-page">

        {/* Balance Card */}
        <div className="wallet-balance-card">
          <div className="wallet-balance-card__glow"></div>
          <div className="wallet-balance-card__left">
            <p className="wallet-balance-card__label">
              <i className="ri-wallet-3-line"></i> Total Available Balance
            </p>
            <p className="wallet-balance-card__value mono">$12,840.00 <span>USD</span></p>
            <div className="wallet-balance-card__breakdown">
              <div className="wallet-breakdown__item">
                <span className="wallet-breakdown__label">Allocated to Traders</span>
                <span className="wallet-breakdown__val mono">$9,640.00</span>
              </div>
              <div className="wallet-breakdown__sep"></div>
              <div className="wallet-breakdown__item">
                <span className="wallet-breakdown__label">Available to Withdraw</span>
                <span className="wallet-breakdown__val mono">$3,200.00</span>
              </div>
              <div className="wallet-breakdown__sep"></div>
              <div className="wallet-breakdown__item">
                <span className="wallet-breakdown__label">Total Earnings</span>
                <span className="wallet-breakdown__val mono text-green">+$1,084.00</span>
              </div>
            </div>
          </div>
          <div className="wallet-balance-card__actions">
            <button
              className={`btn btn-primary${activeTab === 'deposit' ? '' : ' btn-ghost'}`}
              onClick={() => setActiveTab('deposit')}
            >
              <i className="ri-add-circle-line"></i> Deposit Funds
            </button>
            <button
              className={`btn btn-outline${activeTab === 'withdraw' ? ' btn-ghost' : ''}`}
              onClick={() => setActiveTab('withdraw')}
            >
              <i className="ri-arrow-left-right-line"></i> Withdraw
            </button>
          </div>
        </div>

        {/* Deposit / Withdraw Panel + Transaction History */}
        <div className="wallet-main">

          {/* Left: Action Panel */}
          <div className="wallet-action-panel">
            <div className="wallet-tabs">
              <button
                className={`wallet-tab${activeTab === 'deposit' ? ' wallet-tab--active' : ''}`}
                onClick={() => setActiveTab('deposit')}
              >
                <i className="ri-add-circle-line"></i> Deposit
              </button>
              <button
                className={`wallet-tab${activeTab === 'withdraw' ? ' wallet-tab--active' : ''}`}
                onClick={() => setActiveTab('withdraw')}
              >
                <i className="ri-arrow-left-right-line"></i> Withdraw
              </button>
            </div>

            {activeTab === 'deposit' ? (
              <div className="wallet-form">
                <h3 className="wallet-form__title">Fund Your Wallet</h3>
                <p className="wallet-form__sub">
                  Deposits are processed securely and credited to your balance immediately after confirmation.
                </p>

                <div className="wallet-form__field">
                  <label>Deposit Amount (USD)</label>
                  <div className="wallet-form__input-wrap">
                    <span className="wallet-form__prefix">$</span>
                    <input
                      type="number" placeholder="0.00" min="100" value={amount}
                      onChange={e => setAmount(e.target.value)}
                      className="wallet-form__input"
                    />
                  </div>
                  <p className="wallet-form__hint">Minimum deposit: $100</p>
                </div>

                <div className="wallet-form__field">
                  <label>Select Method</label>
                  <div className="wallet-method-list">
                    {DEPOSIT_METHODS.map(({ icon, label, time, fee }) => (
                      <button
                        key={label}
                        className={`wallet-method${method === label ? ' wallet-method--active' : ''}`}
                        onClick={() => setMethod(label)}
                      >
                        <div className="wallet-method__icon"><i className={icon}></i></div>
                        <div className="wallet-method__info">
                          <span className="wallet-method__label">{label}</span>
                          <span className="wallet-method__meta">{time} · Fee: {fee}</span>
                        </div>
                        <div className="wallet-method__check">
                          <i className={method === label ? 'ri-checkbox-circle-fill' : 'ri-checkbox-blank-circle-line'}></i>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <button className="btn btn-primary wallet-form__submit">
                  Proceed to Deposit <i className="ri-arrow-right-line"></i>
                </button>
              </div>
            ) : (
              <div className="wallet-form">
                <h3 className="wallet-form__title">Withdraw Funds</h3>
                <p className="wallet-form__sub">
                  Withdrawal requests are reviewed and processed within 1–3 business days.
                </p>

                <div className="wallet-form__field">
                  <label>Amount to Withdraw (USD)</label>
                  <div className="wallet-form__input-wrap">
                    <span className="wallet-form__prefix">$</span>
                    <input
                      type="number" placeholder="0.00" value={amount}
                      onChange={e => setAmount(e.target.value)}
                      className="wallet-form__input"
                    />
                  </div>
                  <p className="wallet-form__hint">Available to withdraw: $3,200.00</p>
                </div>

                <div className="wallet-form__field">
                  <label>Withdrawal Method</label>
                  <select className="wallet-form__select">
                    <option>Bank Transfer</option>
                    <option>Crypto Wallet</option>
                  </select>
                </div>

                <div className="wallet-form__field">
                  <label>Bank / Wallet Details</label>
                  <input type="text" placeholder="Enter account number or wallet address"
                    className="wallet-form__input wallet-form__input--standalone" />
                </div>

                <div className="wallet-notice">
                  <i className="ri-information-line"></i>
                  <p>Funds currently allocated to active copy positions cannot be withdrawn until copying is stopped.</p>
                </div>

                <button className="btn btn-primary wallet-form__submit">
                  Confirm Withdrawal <i className="ri-arrow-right-line"></i>
                </button>
              </div>
            )}
          </div>

          {/* Right: Transaction History */}
          <div className="wallet-history">
            <div className="wallet-history__head">
              <h3 className="wallet-history__title">Transaction History</h3>
              <div className="wallet-history__filters">
                <button className="wallet-history__filter active">All</button>
                <button className="wallet-history__filter">Deposits</button>
                <button className="wallet-history__filter">Profits</button>
                <button className="wallet-history__filter">Withdrawals</button>
              </div>
            </div>
            <div className="wallet-table-wrap">
              <table className="wallet-table">
                <thead>
                  <tr>
                    <th>Date & Time</th>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {TRANSACTIONS.map((tx, i) => (
                    <tr key={i}>
                      <td><span className="wallet-table__date mono">{tx.date}</span></td>
                      <td><span className={txTypeStyle(tx.type)}>{tx.type}</span></td>
                      <td><span className="wallet-table__desc">{tx.desc}</span></td>
                      <td>
                        <span className={`mono wallet-table__amount${tx.amount.startsWith('+') ? ' wallet-table__amount--pos' : ' wallet-table__amount--neg'}`}>
                          {tx.amount}
                        </span>
                      </td>
                      <td><span className={statusStyle(tx.status)}>{tx.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </DashboardLayout>
  )
}
