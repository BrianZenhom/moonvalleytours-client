import Logo from '../../assets/logos/Logo'
import './navbar.css'
import User from './../../assets/icons/User'
import Cart from '../../assets/icons/Cart'
import More from '../../assets/icons/More'
import { useState, useRef, useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'

export default function Navbar() {
  const [activeLanguage, setActiveLanguage] = useState('English')
  const [activeCurrency, setActiveCurrency] = useState('US$')

  const [open, setOpen] = useState(false)
  const [openCart, setOpenCart] = useState(false)
  const [openLanguage, setOpenLanguage] = useState(false)
  const [openCurrency, setOpenCurrency] = useState(false)
  const [openUserMenu, setOpenUserMenu] = useState(false)

  const [scroll, setScroll] = useState(false)

  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  })

  const { user, loading, error, dispatch } = useContext(AuthContext)

  const dropdownLanguageRef = useRef(null)
  const dropdownCurrencyRef = useRef(null)
  const dropdownLoginRef = useRef(null)
  const dropdownCartRef = useRef(null)
  const dropdownUserMenuRef = useRef(null)

  const navigate = useNavigate()

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
      if (
        dropdownCartRef.current &&
        !dropdownCartRef.current.contains(event.target)
      ) {
        setOpenCart(false)
      }
      if (
        dropdownUserMenuRef.current &&
        !dropdownUserMenuRef.current.contains(event.target)
      ) {
        setOpenUserMenu(false)
      }
    }

    window.addEventListener('click', handleClickOutside)

    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [
    dropdownLanguageRef,
    dropdownCurrencyRef,
    dropdownLoginRef,
    dropdownCartRef,
    dropdownUserMenuRef,
  ])

  const handleOpenCurrency = e => {
    e.target.classList.add('active')
    setOpenCurrency(!openCurrency)
    setOpenLanguage(false)
    setOpen(false)
    setOpenCart(false)
  }

  const handleOpenLanguage = () => {
    setOpenLanguage(!openLanguage)
    setOpenCurrency(false)
    setOpen(false)
    setOpenCart(false)
  }

  const handleOpenCart = () => {
    setOpenCart(!openCart)
    setOpenLanguage(false)
    setOpenCurrency(false)
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(!open)
    setOpenCurrency(false)
    setOpenLanguage(false)
    setOpenCart(false)
  }

  const handleOpenUserMenu = () => {
    setOpenUserMenu(!openUserMenu)
    setOpen(false)
    setOpenCurrency(false)
    setOpenLanguage(false)
    setOpenCart(false)
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

  const handleActive = e => {
    setActiveLanguage(e.target.innerText)
  }

  const handleActiveCurrency = e => {
    setActiveCurrency(e.target.dataset.value)
  }

  const handleChange = e => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleClick = async e => {
    e.preventDefault()
    dispatch({ type: 'LOGIN_START' })
    try {
      const res = await axios.post(
        'http://localhost:8080/api/auth/login',
        credentials
      )
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data })
      navigate('/')
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE', payload: err.response.data })
    }
  }

  const handleLogout = () => {
    navigate('/')
    dispatch({ type: 'LOGOUT' })
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
          <li
            className={openCart ? 'cart active' : 'cart'}
            ref={dropdownCartRef}
          >
            <a
              onClick={handleOpenCart}
              href="#"
              aria-label="check your products in the cart and proceed to checkout"
            >
              <Cart />
            </a>
            <div
              className={
                openCart ? 'dropdown-cart visible-cart' : 'dropdown-cart'
              }
            >
              <span>Your cart is emty</span>
            </div>
          </li>
          {loading ? (
            <dialog>Loading</dialog>
          ) : user ? (
            <li
              className={openUserMenu ? 'userMenu active' : 'userMenu'}
              ref={dropdownUserMenuRef}
            >
              <a onClick={handleOpenUserMenu} href="#">
                <span className="loggedInUser">
                  <User />
                  {user.name}
                </span>
              </a>
              <div
                className={
                  openUserMenu
                    ? 'dropdown-userMenu visible'
                    : 'dropdown-userMenu'
                }
              >
                <div className="userMenu-content">
                  <div className="userMenu-header">
                    <div className="userbuttons">
                      <div className="bookings">
                        <span>Bookings</span>
                      </div>
                      <div className="favorites">
                        <span>Favourites</span>
                      </div>
                      <div className="myaccount">
                        <span>My account</span>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="logoutBtn">
                    <button onClick={handleLogout} className="lButton">
                      logout
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ) : (
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
              <div
                className={open ? 'dropdown-login visible' : 'dropdown-login'}
              >
                <div className="booking-tab">
                  <h4>Bookings</h4>
                  <span>
                    Don&apos;t want to register? <br /> Check your booking
                    without registering
                  </span>
                  <form className="booking-form">
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Booking reference" />
                    <div className="reference">
                      <small>Don&apos;t know your booking reference?</small>
                    </div>
                    <div className="bookingBtn">
                      <button>Find my booking</button>
                    </div>
                  </form>
                </div>
                <div className="login-tab">
                  {error && (
                    <div className="error-message-wrapper">
                      <span className="errormessage">{error.message}</span>
                    </div>
                  )}
                  <h4>Account</h4>
                  <span>
                    Do you have an account? <br /> Log into your account
                  </span>
                  <form className="login-form">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Email"
                      onChange={handleChange}
                    />
                    <input
                      type="password"
                      id="password"
                      placeholder="Password"
                      onChange={handleChange}
                    />
                    <div className="remember-me">
                      <small>Remember me</small>
                      <input type="checkbox" />
                    </div>
                    <div className="loginBtn">
                      <button
                        disabled={loading}
                        onClick={handleClick}
                        className="lButton"
                      >
                        Login
                      </button>
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
          )}
          <li
            className={
              openLanguage ? 'language-selector active' : 'language-selector'
            }
            ref={dropdownLanguageRef}
          >
            <a
              onClick={handleOpenLanguage}
              aria-label="Select the language for the page, English, Spanish or Turkish"
              href="#"
            >
              {activeLanguage}
              <More />
            </a>
            <div
              className={
                openLanguage
                  ? 'dropdown-content-language visible'
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
                  ? 'dropdown-content-currency visible'
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
