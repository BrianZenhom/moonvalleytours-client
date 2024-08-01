import { HidePw } from '../../assets/icons/AllIcons'
import SeePw from '../../assets/icons/SeePw'
import PropTypes from 'prop-types'
import Switch from '../../assets/icons/Switch'
import { Apple, Facebook, Google } from '../../assets/icons/SocialsRegistration'
import SocialRegister from '../socialRegister/socialRegister'

const LoginForm = ({
  open,
  handleClick,
  handleHiddenPw,
  handleChange,
  visible,
  loading,
  error,
  toggleDialog,
}) => {
  return (
    <>
      <div className={open ? 'dropdown-login visible' : 'dropdown-login'}>
        <div className="booking-tab">
          <h4>Bookings</h4>
          <span>
            Don&apos;t want to register? <br /> Check your booking without
            registering
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
              required
            />
            <div className="password_input">
              <input
                type={visible ? 'text' : 'password'}
                id="password"
                placeholder="Password"
                onChange={handleChange}
                required
              />
              <div className="hideshow" onClick={handleHiddenPw}>
                {visible ? <SeePw /> : <HidePw />}
              </div>
            </div>
            <div className="remember-me">
              <small>Remember me</small>
              <Switch id="check" />
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
            <div className="loginForm_alternatives">
              <span>or login with</span>
              <div className="loginForm_socials">
                <SocialRegister icon={<Facebook />} social="Facebook" />
                <SocialRegister icon={<Google />} social="Google" />
                <SocialRegister icon={<Apple />} social="Apple" />
              </div>
            </div>
            <div className="registerBtn">
              Dont have an account?
              <span className="registerWrd" onClick={toggleDialog}>
                Register
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

LoginForm.propTypes = {
  handleClick: PropTypes.func.isRequired,
  handleHiddenPw: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  toggleDialog: PropTypes.bool.isRequired,
  open: PropTypes.bool.isRequired,
  visible: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired,
}

export default LoginForm
