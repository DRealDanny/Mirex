import { useState } from 'react'
import { Link } from 'react-router-dom'
import './FAQ.css'

const FAQS = [
  { q: 'What is copy trading?',
    a: 'Copy trading allows you to automatically mirror the live trades of an experienced forex trader. When they open or close a position, your account does the same — proportionally, in real time. You do not need to analyse charts or understand forex mechanics. Your chosen trader does that for you.' },
  { q: 'Is Mirex a regulated platform?',
    a: 'Yes. Mirex operates under applicable financial compliance standards and takes regulatory obligation seriously. We apply KYC (Know Your Customer) and AML (Anti-Money Laundering) procedures to protect all users and maintain the integrity of the platform.' },
  { q: 'How much do I need to start?',
    a: 'You can begin copy trading with as little as $100. This is the minimum deposit required to fund your Mirex Wallet and allocate to a trader. There is no maximum investment limit.' },
  { q: 'How do traders earn money on Mirex?',
    a: 'Traders earn a commission from the profits they generate for their copiers — typically between 15% and 30% of the profit, disclosed clearly on each trader\'s profile. Importantly, traders only earn when you earn. There are no flat fees or retainers.' },
  { q: 'Can I lose money?',
    a: 'Yes. Forex trading carries inherent market risk, and past performance does not guarantee future results. While Mirex vets traders thoroughly and provides risk ratings, all investments carry the possibility of loss. We strongly recommend diversifying across multiple traders and only investing what you can afford to risk.' },
  { q: 'How do I choose which trader to copy?',
    a: 'Use the Traders page to filter by risk level, trading style, monthly return, and win rate. Each profile displays a full performance history, drawdown data, and trading activity. We recommend reviewing at least 6 months of live performance before copying any trader.' },
  { q: 'Can I copy more than one trader at a time?',
    a: 'Yes, and we actually recommend it. Copying 2–4 traders simultaneously across different styles and risk levels is an effective way to diversify your portfolio and reduce single-trader exposure.' },
  { q: 'How quickly are trades copied to my account?',
    a: 'Mirex uses automated copy execution technology. When a trader opens or closes a position, your account mirrors it in real time — typically within milliseconds, subject to market conditions.' },
  { q: 'When can I withdraw my funds?',
    a: 'You can request a withdrawal at any time from your Wallet page. Funds not currently allocated to active copy positions are available immediately. Withdrawals are processed within 1–3 business days, depending on your chosen withdrawal method.' },
  { q: 'What happens if a trader I\'m copying performs badly?',
    a: "You are in control at all times. You can stop copying any trader instantly from your dashboard, which closes all their currently mirrored positions on your account. You can also set a stop-loss limit per trader — if their performance breaches your threshold, copying stops automatically." },
  { q: 'Is my money safe on Mirex?',
    a: "Client funds are held separately from Mirex operational accounts. Your wallet balance is yours — Mirex does not use your funds for any purpose other than executing the copies you authorise. All transactions are encrypted and monitored 24/7." },
  { q: 'How do I contact Mirex support?',
    a: 'Our support team is available 24 hours a day, 5 days a week via live chat on the platform, or you can reach us at support@mirex.com. Premium account holders have access to a dedicated account manager.' },
]

function AccordionItem({ q, a, isOpen, onToggle }) {
  return (
    <div className={`faq-item${isOpen ? ' faq-item--open' : ''}`}>
      <button className="faq-item__trigger" onClick={onToggle}>
        <span className="faq-item__q">{q}</span>
        <span className="faq-item__icon">
          <i className={isOpen ? 'ri-subtract-line' : 'ri-add-line'}></i>
        </span>
      </button>
      <div className="faq-item__body">
        <p className="faq-item__a">{a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0)

  const toggle = (i) => setOpenIdx(openIdx === i ? -1 : i)

  return (
    <div className="faq-page">

      {/* Hero */}
      <section className="faq-hero">
        <div className="faq-hero__glow"></div>
        <div className="faq-hero__grid"></div>
        <div className="container faq-hero__inner">
          <span className="eyebrow">Have Questions?</span>
          <h1 className="faq-hero__title">
            Everything You<br />
            <span className="highlight">Need to Know.</span>
          </h1>
          <p className="faq-hero__sub">
            Clear answers to the most common questions about Mirex, copy trading,
            deposits, and how your money works on the platform.
          </p>
        </div>
      </section>

      {/* Accordion */}
      <section className="section faq-body">
        <div className="container faq-body__inner">
          <div className="faq-list">
            {FAQS.map((item, i) => (
              <AccordionItem
                key={i}
                q={item.q}
                a={item.a}
                isOpen={openIdx === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>
          <aside className="faq-sidebar">
            <div className="faq-sidebar__card">
              <div className="faq-sidebar__icon">
                <i className="ri-customer-service-2-line"></i>
              </div>
              <h3 className="faq-sidebar__title">Still Have Questions?</h3>
              <p className="faq-sidebar__body">
                Our support team is online 24/5. We'll get back to you fast.
              </p>
              <a href="mailto:support@mirex.com" className="btn btn-ghost" style={{width:'100%',justifyContent:'center'}}>
                Contact Support <i className="ri-arrow-right-line"></i>
              </a>
            </div>
            <div className="faq-sidebar__card faq-sidebar__card--cta">
              <div className="faq-sidebar__cta-icon">
                <i className="ri-bar-chart-grouped-fill"></i>
              </div>
              <h3 className="faq-sidebar__title">Ready to Start?</h3>
              <p className="faq-sidebar__body">
                Open your account in under 2 minutes. Start from $100.
              </p>
              <Link to="/signup" className="btn btn-primary" style={{width:'100%',justifyContent:'center'}}>
                Get Started <i className="ri-arrow-right-line"></i>
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="faq-disclaimer section-sm">
        <div className="container">
          <div className="faq-disclaimer__inner">
            <i className="ri-shield-check-line"></i>
            <p>
              Trading in financial markets involves substantial risk of loss. Past performance
              of any trader displayed on this platform is not indicative of future results.
              Mirex does not provide investment advice. Only invest funds you can afford to lose.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
