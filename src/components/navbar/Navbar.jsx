import Logo from '../../assets/logos/Logo'
import './navbar.css'
import User from './../../assets/icons/User'
import Cart from '../../assets/icons/Cart'
import More from '../../assets/icons/More'
import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [activeLanguage, setActiveLanguage] = useState('English')
  const [activeCurrency, setActiveCurrency] = useState('US$')
  const [open, setOpen] = useState(false)
  const [openLanguage, setOpenLanguage] = useState(false)
  const [openCurrency, setOpenCurrency] = useState(false)
  const [scroll, setScroll] = useState(false)

  const dropdownLanguageRef = useRef(null)
  const dropdownCurrencyRef = useRef(null)
  const dropdownLoginRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        dropdownLanguageRef.current &&
        !dropdownLanguageRef.current.contains(event.target)
      ) {
        setOpenLanguage(false)
      }
      if (
        dropdownCurrencyRef.current &&
        !dropdownCurrencyRef.current.contains(event.target)
      ) {
        setOpenCurrency(false)
      }
      if (
        dropdownLoginRef.current &&
        !dropdownLoginRef.current.contains(event.target)
      ) {
        setOpen(false)
      }
    }

    window.addEventListener('click', handleClickOutside)

    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [dropdownLanguageRef, dropdownCurrencyRef, dropdownLoginRef])

  const handleOpenCurrency = e => {
    e.preventDefault()
    e.target.classList.add('active')
    setOpenCurrency(!openCurrency)
    setOpenLanguage(false)
    setOpen(false)
  }

  const handleOpenLanguage = e => {
    e.preventDefault()
    setOpenLanguage(!openLanguage)
    setOpenCurrency(false)
    setOpen(false)
  }

  useEffect(() => {
    let lastScrollTop = 0
    const handleScroll = () => {
      const { scrollTop } = document.documentElement
      if (scrollTop > lastScrollTop) {
        setScroll(true)
      } else if (scrollTop < lastScrollTop) {
        setScroll(false)
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleOpen = () => {
    setOpen(!open)
    setOpenCurrency(false)
    setOpenLanguage(false)
  }

  const handleActive = e => {
    setActiveLanguage(e.target.innerText)
  }

  const handleActiveCurrency = e => {
    setActiveCurrency(e.target.dataset.value)
  }

  return (
    <nav className={scroll ? 'navbar' : 'navbar  visible'}>
      <div className="navbar-content container">
        <div className="logo">
          <Link
            aria-label="Click this logo to go to the top of the website"
            to="/"
          >
            <Logo type="logonav" />
          </Link>
        </div>
        <ul className="navbar-links">
          <li>
            <a
              href="#cart"
              aria-label="check your products in the cart and proceed to checkout"
            >
              <Cart />
            </a>
          </li>
          <li
            className={open ? 'login active' : 'login'}
            ref={dropdownLoginRef}
          >
            <a
              onClick={handleOpen}
              aria-label="log in here with your email or username information"
              href="#"
            >
              <User />
            </a>
            <div className={open ? 'dropdown-login visible' : 'dropdown-login'}>
              <div className="booking-tab">
                <h4>My Bookings</h4>
                <span>
                  Don&apos;t want to register? <br /> Access your booking
                  without registering
                </span>
                <form className="booking-form">
                  <input type="text" placeholder="Email" />
                  <input type="text" placeholder="Booking reference" />
                  <div className="reference">
                    <small>Can&apos;t find your booking reference?</small>
                  </div>
                  <div className="bookingBtn">
                    <button>Find my booking</button>
                  </div>
                </form>
              </div>
              <div className="login-tab">
                <h4>My Account</h4>
                <span>
                  Do you have a customer account? <br /> Access your account
                </span>
                <form className="login-form">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="User name or Email"
                  />
                  <input type="password" placeholder="Password" />
                  <div className="remember-me">
                    <small>Remember me</small>
                  </div>
                  <div className="loginBtn">
                    <button>Login</button>
                  </div>
                  <div className="hr"></div>
                  <div className="login-methods">
                    or login with
                    <div className="login-method-socials">
                      <h3>Facebook </h3>
                      <h3>Google </h3>
                      <h3>Apple </h3>
                    </div>
                  </div>
                  <div className="registerBtn">
                    Dont have an account?
                    <span>
                      <a href="/register">Signup</a>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </li>
          <li
            className={
              openLanguage ? 'language-selector active' : 'language-selector'
            }
            ref={dropdownLanguageRef}
          >
            <a
              onClick={handleOpenLanguage}
              aria-label="Select the language for the page, English, Spanish or Turkish"
              href="#lang"
            >
              {activeLanguage} <More />
            </a>
            <div
              className={
                openLanguage
                  ? 'dropdown-content-language language-visible'
                  : 'dropdown-content-language'
              }
            >
              <span onClick={handleActive}>Español (ES)</span>
              <span onClick={handleActive}>Turkish</span>
            </div>
          </li>
          <li
            className={
              openCurrency ? 'currency-selector active' : 'currency-selector'
            }
            ref={dropdownCurrencyRef}
          >
            <a
              onClick={handleOpenCurrency}
              aria-label="Select currency Euros, US Dollars or Argentine Pesos"
              href="#curr"
            >
              {activeCurrency} <More />
            </a>
            <div
              className={
                openCurrency
                  ? 'dropdown-content-currency visible-currency'
                  : 'dropdown-content-currency'
              }
            >
              <div
                onClick={handleActiveCurrency}
                data-value="US$"
                className="usd"
              >
                <span data-value="US$">US$</span>
                <small data-value="US$">United States Dollar</small>
              </div>

              <div
                onClick={handleActiveCurrency}
                data-value="&euro;"
                className="euro"
              >
                <span data-value="&euro;">&euro;</span>
                <small data-value="&euro;">Euro</small>
              </div>
              <div
                onClick={handleActiveCurrency}
                data-value="ARS"
                className="argpeso"
              >
                <span data-value="ARS">ARS</span>
                <small data-value="ARS">Argentine Peso</small>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}
