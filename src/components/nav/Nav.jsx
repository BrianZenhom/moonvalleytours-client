import { useRef, useState, useEffect } from 'react'
import './nav.css'
import { LanguageSelector } from '../language/LanguageSelector'
import UserIcon from '../../assets/icons/User'
import Cart from '../../assets/icons/Cart'
import { Currency } from '../currency/Currency'
import { User } from '../user/User'
import { SlideWrapper } from '../slidewrapper/SlideWrapper'
import clsx from 'clsx'
import { CartDropdown } from '../cartdropdown/CartDropdown'

export function Nav() {
  const [hovering, setHovering] = useState(null)
  const [popoverLeft, setPopoverLeft] = useState(null)
  const [popoverHeight, setPopoverHeight] = useState(null)
  const [popoverWidth, setPopoverWidth] = useState(null)

  const [activeLanguage, setActiveLanguage] = useState('English')
  const [activeCurrency, setActiveCurrency] = useState('Currency')
  const [activeLink, setActiveLink] = useState(null)

  const refs = useRef([])

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

  useEffect(() => {
    if (hovering !== null) {
      const menuElement = refs.current[hovering]
      if (menuElement) {
        setPopoverHeight(menuElement.offsetHeight)
        setPopoverWidth(menuElement.offsetWidth)
      }
    }
  }, [hovering])

  return (
    <nav
      onMouseLeave={() => {
        setHovering(null)
        setPopoverWidth(null)
        setPopoverHeight(null)
        setPopoverLeft(null)
        setActiveLink(null)
      }}
      className="new_nav-links"
    >
      <a
        onMouseEnter={event => onMouseEnter(0, event.currentTarget)}
        className={clsx('nav_link', activeLink === 0 && 'active')}
        href="#"
      >
        {activeLanguage}
      </a>
      <a
        onMouseEnter={event => onMouseEnter(1, event.currentTarget)}
        className={clsx('nav_link', activeLink === 1 && 'active')}
        href="#"
      >
        {activeCurrency}
      </a>
      <a
        onMouseEnter={event => onMouseEnter(2, event.currentTarget)}
        className={clsx('nav_link', activeLink === 2 && 'active')}
        href="#"
      >
        <UserIcon activeIcon={activeLink === 2} />
      </a>
      <a
        onMouseEnter={event => onMouseEnter(3, event.currentTarget)}
        className={clsx('nav_link', activeLink === 3 && 'active')}
        href="#"
      >
        <Cart activeIcon={activeLink === 3} />
      </a>

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
      >
        <SlideWrapper index={0} hovering={hovering}>
          <LanguageSelector
            ref={element => (refs.current[0] = element)}
            handleActive={handleActive}
          />
        </SlideWrapper>
        <SlideWrapper index={1} hovering={hovering}>
          <Currency
            ref={element => (refs.current[1] = element)}
            handleActiveCurr={handleActiveCurr}
          />
        </SlideWrapper>

        <SlideWrapper index={2} hovering={hovering}>
          <User ref={element => (refs.current[2] = element)} />
        </SlideWrapper>

        <SlideWrapper index={3} hovering={hovering}>
          <CartDropdown ref={element => (refs.current[3] = element)} />
        </SlideWrapper>
      </div>
    </nav>
  )
}
