import PropTypes from 'prop-types'
import './navbarmobile.css'
import { useContext, useState } from 'react'
import { ReservationsIcon } from '../../assets/icons/Reservations'
import Logo from '../../assets/logos/Logo'
import User from '../../assets/icons/UserIcon'
import Help from '../../assets/icons/Help'
import Menu from '../../assets/icons/Menu'
import Close from '../../assets/icons/Close'
import Cart from '../../assets/icons/Cart'
import SeePw from '../../assets/icons/SeePw'
import { HidePw } from '../../assets/icons/AllIcons'
import LeftBack from '../../assets/icons/LeftBack'
import Switch from '../../assets/icons/Switch'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Spinner from '../../assets/icons/Spinner'

const NavbarMobile = ({
  setMenu,
  handleLoginOpen,
  handleOpen,
  setLoginOpen,
  loginOpen,
  menu,
  handleHiddenPw,
  visible,
  toggleDialog,
}) => {
  const navigate = useNavigate()

  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  })

  const { user, loading, error, dispatch } = useContext(AuthContext)

  const handleChange = e => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleClick = async e => {
    e.preventDefault()
    dispatch({ type: 'LOGIN_START' })
    try {
      const res = await axios.post(
        'http://localhost:1234/api/v1/auth/login',
        credentials
      )
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data })
      setMenu(false)
      setLoginOpen(false)
      navigate('/')
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE', payload: err.response.data })
    }
  }

  const handleLogout = () => {
    setMenu(false)
    setLoginOpen(false)
    navigate('/')
    dispatch({ type: 'LOGOUT' })
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
            {error && (
              <div className="error-message-wrapper">
                <span className="errormessage">{error.message}</span>
              </div>
            )}
            <span>Have an account? Access your account.</span>
            <form className="login_mobile-form">
              <div className="form_content">
                <div className="form_inputs">
                  <input
                    type="text"
                    id="email"
                    placeholder="Email"
                    onChange={handleChange}
                  />
                  <div className="password_input">
                    <input
                      type={visible ? 'text' : 'password'}
                      id="password"
                      placeholder="Password"
                      onChange={handleChange}
                    />
                    <div className="hideshow" onClick={handleHiddenPw}>
                      {visible ? <SeePw /> : <HidePw />}
                    </div>
                  </div>
                </div>
                <div className="rememberme">
                  <label htmlFor="checkMobile">
                    <small>Remember me</small>
                    <Switch id="checkMobile" />
                  </label>
                </div>
              </div>
              {loading ? (
                <>
                  <button disabled>
                    <Spinner />
                  </button>
                </>
              ) : (
                <button
                  disabled={loading}
                  onClick={handleClick}
                  aria-label="submit login"
                >
                  Login
                </button>
              )}
            </form>
            <div className="forgot_password">
              <span>I&apos;ve forgotten my password</span>
            </div>
            <div className="orlogin">
              <span>or login with</span>
              <div className="socials">Google Facebook Apple</div>
            </div>
            <div className="registerMobile">
              <span>Dont have an account?</span>{' '}
              <span className="registerMobile_Wrd" onClick={toggleDialog}>
                Register here
              </span>
            </div>
          </div>
        </div>
      </aside>
      <nav className="navbarmobile">
        <Link className={menu ? 'logonav logonavLeft' : 'logonav'} to="/">
          <Logo />
        </Link>
        <div className={menu ? 'button' : ' '}>
          <button onClick={handleOpen}>{menu ? <Close /> : <Menu />}</button>
        </div>
        <div className={menu ? 'navbarbg visible' : 'navbarbg'}>
          <nav className="mobilenav">
            <ul>
              {user ? (
                <Link to="/customers/my-account">
                  <li>
                    <span>{user?.name}</span>
                    <span>
                      <User />
                    </span>
                  </li>
                </Link>
              ) : (
                <li onClick={handleLoginOpen}>
                  <span>My Account</span>
                  <span>
                    <User />
                  </span>
                </li>
              )}
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
              {user ? (
                <li onClick={handleLogout} className="logout-mark">
                  <span>Logout</span>
                  <button className="lButton">logout</button>
                </li>
              ) : (
                ' '
              )}
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

NavbarMobile.propTypes = {
  toggleDialog: PropTypes.bool.isRequired,
  setMenu: PropTypes.func.isRequired,
  handleLoginOpen: PropTypes.func.isRequired,
  handleOpen: PropTypes.func.isRequired,
  setLoginOpen: PropTypes.func.isRequired,
  loginOpen: PropTypes.bool.isRequired,
  menu: PropTypes.bool.isRequired,
  handleHiddenPw: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
}

export default NavbarMobile
