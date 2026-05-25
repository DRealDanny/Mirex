import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import HowItWorks from './pages/HowItWorks/HowItWorks'
import Traders from './pages/Traders/Traders'
import FAQ from './pages/FAQ/FAQ'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import Dashboard from './pages/Dashboard/Dashboard'
import Wallet from './pages/Wallet/Wallet'

/* Pages that use the public Header + Footer layout */
const PUBLIC_ROUTES = ['/', '/about', '/how-it-works', '/traders', '/faq']

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function Layout() {
  const { pathname } = useLocation()
  const isPublic = PUBLIC_ROUTES.includes(pathname)

  return (
    <>
      <ScrollToTop />
      {isPublic && <Header />}
      <main>
        <Routes>
          <Route path="/"             element={<Home />} />
          <Route path="/about"        element={<About />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/traders"      element={<Traders />} />
          <Route path="/faq"          element={<FAQ />} />
          <Route path="/login"        element={<Login />} />
          <Route path="/signup"       element={<SignUp />} />
          <Route path="/dashboard"    element={<Dashboard />} />
          <Route path="/wallet"       element={<Wallet />} />
        </Routes>
      </main>
      {isPublic && <Footer />}
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}
