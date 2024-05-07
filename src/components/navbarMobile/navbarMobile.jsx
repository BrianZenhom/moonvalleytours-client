import './navbarmobile.css'
import { useState } from 'react'
import { ReservationsIcon } from '../../assets/icons/Reservations'
import Logo from '../../assets/logos/Logo'
import User from '../../assets/icons/User'
import Help from '../../assets/icons/Help'
import Menu from '../../assets/icons/Menu'
import Close from '../../assets/icons/Close'
import Cart from '../../assets/icons/Cart'
import SeePw from '../../assets/icons/SeePw'
import HidePw from '../../assets/icons/HidePw'
import LeftBack from '../../assets/icons/LeftBack'

const NavbarMobile = () => {
  const [menu, setMenu] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)
  const [visible, setVisible] = useState(false)
  const [remember, setRemember] = useState(false)

  const handleRemember = () => {
    setRemember(!remember)
  }

  const handleHiddenPw = () => {
    setVisible(!visible)
  }

  const handleLoginOpen = () => {
    setLoginOpen(!loginOpen)
  }

  const handleOpen = () => {
    setMenu(!menu)
    setLoginOpen(false)
  }

  return (
    <>
      <aside className="login_mobile">
        <div
          className={
            loginOpen
              ? 'login_mobile-fullscreen login_visible'
              : 'login_mobile-fullscreen'
          }
        >
          <div className="header_wrapper-nav">
            <button onClick={handleLoginOpen}>
              <LeftBack />
            </button>
            <span>My Account</span>
            <span>
              <Cart />
            </span>
          </div>
          <div className="login_content-container">
            <span>Have an account? Access your account.</span>
            <form className="login_mobile-form" action="">
              <div className="form_content">
                <div className="form_inputs">
                  <input type="text" placeholder="User or email" />
                  <div className="password_input">
                    <input
                      type={visible ? 'text' : 'password'}
                      placeholder="Password"
                    />
                    <div className="hideshow" onClick={handleHiddenPw}>
                      {visible ? <SeePw /> : <HidePw />}
                    </div>
                  </div>
                </div>
                <div onClick={handleRemember} className="rememberme">
                  Remember me {remember ? 'check' : 'unchecked'}
                </div>
              </div>
              <button aria-label="submit login">Login</button>
            </form>
            <div className="forgot_password">
              <span>I&apos;ve forgotten my password</span>
            </div>
            <div className="orlogin">
              <span>or login with</span>
              <div className="socials">Google Facebook Apple</div>
            </div>
          </div>
        </div>
      </aside>
      <nav className="navbarmobile">
        <Logo type={menu ? 'logonav logonavLeft' : 'logonav'} />
        <div className={menu ? 'button' : ' '}>
          <button onClick={handleOpen}>{menu ? <Close /> : <Menu />}</button>
        </div>
        <div className={menu ? 'navbarbg visible' : 'navbarbg'}>
          <nav className="mobilenav">
            <ul>
              <li onClick={handleLoginOpen}>
                <span>My Account</span>
                <span>
                  <User />
                </span>
              </li>
              <li>
                <span>Reservations</span>
                <span>
                  <ReservationsIcon />
                </span>
              </li>
              <li>
                <span>Help</span>
                <span>
                  <Help />
                </span>
              </li>
              <li className="dropdown-dark">
                <span>Language</span>
                <span>English</span>
              </li>
              <li className="lidropdown"></li>
            </ul>
          </nav>
        </div>
      </nav>
    </>
  )
}

export default NavbarMobile
