import { useRef, useState, useEffect, useContext } from 'react'
import './nav.css'
import { LanguageSelector } from '../language/LanguageSelector'
import UserIcon from '../../assets/icons/User'
import Cart from '../../assets/icons/Cart'
import { Currency } from '../currency/Currency'
import { User } from '../user/User'
import { SlideWrapper } from '../slidewrapper/SlideWrapper'
import clsx from 'clsx'
import { CartDropdown } from '../cartdropdown/CartDropdown'
import Logo from '../../assets/logos/Logo'
import { QuestionIcon } from '../../assets/icons/AllIcons'
import { useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'

export function Nav() {
  const [hovering, setHovering] = useState(null)
  const [popoverLeft, setPopoverLeft] = useState(null)
  const [popoverHeight, setPopoverHeight] = useState(null)
  const [popoverWidth, setPopoverWidth] = useState(null)
  const [setNub, setLeftNub] = useState(null)

  const [activeLanguage, setActiveLanguage] = useState('English')
  const [activeCurrency, setActiveCurrency] = useState('Currency')
  const [activeLink, setActiveLink] = useState(null)
  const [scroll, setScroll] = useState(false)

  const [navScrolled, setNavScrolled] = useState(null)
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  })

  const refs = useRef([])
  const navigate = useNavigate()

  const handleActive = e => {
    setActiveLanguage(e.target.innerText)
  }

  const handleActiveCurr = e => {
    setActiveCurrency(e.target.dataset.value)
  }

  const onMouseEnter = (index, el) => {
    setHovering(index)
    setPopoverLeft(el.offsetLeft)
    setActiveLink(index)
  }

  const { user, loading, dispatch } = useContext(AuthContext)

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
      setHovering(null)
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

  useEffect(() => {
    let scrolled = 0
    const handleNavScrolled = () => {
      const { scrollTop } = document.documentElement
      if (scrollTop > scrolled) {
        setNavScrolled(true)
      } else if (scrollTop === scrolled) {
        setNavScrolled(false)
      }
    }
    window.addEventListener('scroll', handleNavScrolled)
    return () => {
      window.removeEventListener('scroll', handleNavScrolled)
    }
  }, [])

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

  useEffect(() => {
    if (hovering !== null) {
      const menuElement = refs.current[hovering]
      if (menuElement) {
        setPopoverHeight(menuElement.offsetHeight)
        setPopoverWidth(menuElement.offsetWidth)
      }
    }
  }, [hovering])

  useEffect(() => {
    const listLinks = document.querySelectorAll('.nav_link')

    listLinks.forEach(item => {
      item.addEventListener('mouseenter', ({ target }) => {
        const { left, width } = target.getBoundingClientRect()
        const centerNub = left + width / 2

        setLeftNub(centerNub)
      })
    })
  })

  const location = useLocation()

  return (
    <div
      className={`newnavbar_content ${scroll ? '' : 'activate'} ${
        navScrolled ? 'bg' : ''
      } ${location.pathname === '/' ? '' : 'withBg'}`}
    >
      <div
        className={`custom_nub ${activeLink ? '' : 'nonub'}`}
        style={{ left: setNub || undefined }}
      ></div>
      <nav className={scroll ? 'nav_wrapper active' : 'nav_wrapper'}>
        <div className="logo">
          <Logo type="navlogo" />
        </div>
        <div
          onMouseLeave={() => {
            setHovering(null)
            setPopoverWidth(null)
            setPopoverHeight(null)
            setPopoverLeft(null)
            setActiveLink(null)
          }}
          className={`new_nav-links ${scroll ? 'colored_links' : ''}`}
        >
          <span
            onMouseEnter={event => onMouseEnter(1, event.currentTarget)}
            className={clsx('nav_link', activeLink === 1 && 'active')}
            href="#"
          >
            {activeLanguage}
          </span>
          <span
            onMouseEnter={event => onMouseEnter(2, event.currentTarget)}
            className={clsx('nav_link', activeLink === 2 && 'active')}
            href="#"
          >
            {activeCurrency}
          </span>
          <span
            onMouseEnter={event => onMouseEnter(3, event.currentTarget)}
            className={clsx('nav_link', activeLink === 3 && 'active')}
            href="#"
          >
            <UserIcon activeIcon={activeLink === 3} />{' '}
            {user ? <span>{user.name}</span> : ''}
          </span>
          <span
            onMouseEnter={event => onMouseEnter(4, event.currentTarget)}
            className={clsx('nav_link', activeLink === 4 && 'active')}
            href="#"
          >
            <Cart activeIcon={activeLink === 4} />
          </span>
          <div
            style={{
              left: popoverLeft || undefined,
              height: popoverHeight || undefined,
              width: popoverWidth || undefined,
            }}
            className={clsx(
              'dropdown_nav',
              hovering !== null ? 'transitionAll' : 'opacity_cero'
            )}
            id="overlay-content"
          >
            <SlideWrapper index={1} hovering={hovering}>
              <LanguageSelector
                ref={element => (refs.current[1] = element)}
                handleActive={handleActive}
              />
            </SlideWrapper>
            <SlideWrapper index={2} hovering={hovering}>
              <Currency
                ref={element => (refs.current[2] = element)}
                handleActiveCurr={handleActiveCurr}
              />
            </SlideWrapper>

            <SlideWrapper index={3} hovering={hovering}>
              {user ? (
                <div
                  ref={element => (refs.current[3] = element)}
                  className="user_nav"
                >
                  <li>herro</li>
                  <button onClick={handleLogout}>logout</button>
                </div>
              ) : (
                <User
                  loading={loading}
                  handleClick={handleClick}
                  handleChange={handleChange}
                  ref={element => (refs.current[3] = element)}
                />
              )}
            </SlideWrapper>
            <SlideWrapper index={4} hovering={hovering}>
              <CartDropdown ref={element => (refs.current[4] = element)} />
            </SlideWrapper>
          </div>
        </div>
        <div className="help_wrapper">
          <div className="help">
            <QuestionIcon />
            <span className="help_text">Help</span>
          </div>
        </div>
      </nav>
    </div>
  )
}
