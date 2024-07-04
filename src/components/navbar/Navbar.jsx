import PropTypes from 'prop-types'
import Logo from '../../assets/logos/Logo'
import './navbar.css'
import User from './../../assets/icons/User'
import Cart from '../../assets/icons/Cart'
import More from '../../assets/icons/More'
import Spinner from '../../assets/icons/Spinner'
import { useState, useRef, useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'
import LoginForm from '../loginform/LoginForm'

export default function Navbar({ toggleDialog, type }) {
  const [activeLanguage, setActiveLanguage] = useState('English')
  const [activeCurrency, setActiveCurrency] = useState('US$')

  const [open, setOpen] = useState(false)
  const [openCart, setOpenCart] = useState(false)
  const [openLanguage, setOpenLanguage] = useState(false)
  const [openCurrency, setOpenCurrency] = useState(false)
  const [openUserMenu, setOpenUserMenu] = useState(false)
  const [visible, setVisible] = useState(false)

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

  const handleHiddenPw = e => {
    e.stopPropagation()
    setVisible(!visible)
  }
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
        'http://localhost:1234/api/v1/auth/login',
        credentials,
        {
          withCredentials: true,
        }
      )
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data })
      navigate('/')
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE', payload: err.response.data })
    }
  }

  const handleLogout = () => {
    setCredentials(undefined)
    navigate('/')
    dispatch({ type: 'LOGOUT' })
  }

  return (
    <nav className={scroll ? 'navbar' : 'navbar  visible'}>
      <div className={`navbar-content container ${type}`}>
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
              className="navbar-link"
              onClick={handleOpenCart}
              href="javascript:;"
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
            <span className="logginginspinner">
              <Spinner />
            </span>
          ) : user ? (
            <li
              className={openUserMenu ? 'userMenu active' : 'userMenu'}
              ref={dropdownUserMenuRef}
            >
              <a
                className="navbar-link"
                onClick={handleOpenUserMenu}
                href="javascript:;"
              >
                <span className="loggedInUser">
                  <User />
                  {user?.name}
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
                      <a href="/customers/bookings">
                        <div className="bookings">
                          <span>Bookings</span>
                        </div>
                      </a>
                      <a href="/customers/favorites">
                        <div className="favorites">
                          <span>Favourites</span>
                        </div>
                      </a>
                      <a href="/customers/my-account">
                        <div className="myaccount">
                          <span>My account</span>
                        </div>
                      </a>
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
                className="navbar-link"
                onClick={handleOpen}
                aria-label="log in here with your email or username information"
                href="javascript:;"
              >
                <User />
              </a>
              <LoginForm
                handleChange={handleChange}
                open={open}
                handleHiddenPw={handleHiddenPw}
                visible={visible}
                loading={loading}
                error={error}
                handleClick={handleClick}
                toggleDialog={toggleDialog}
              />
            </li>
          )}
          <li
            className={
              openLanguage ? 'language-selector active' : 'language-selector'
            }
            ref={dropdownLanguageRef}
          >
            <a
              className="navbar-link"
              onClick={handleOpenLanguage}
              aria-label="Select the language for the page, English, Spanish or Turkish"
              href="javascript:;"
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
              className="navbar-link"
              onClick={handleOpenCurrency}
              aria-label="Select currency Euros, US Dollars or Argentine Pesos"
              href="javascript:;"
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

Navbar.propTypes = {
  toggleDialog: PropTypes.func.isRequired,
}
