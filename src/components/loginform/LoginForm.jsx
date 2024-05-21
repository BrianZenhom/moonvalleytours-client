import HidePw from '../../assets/icons/HidePw'
import SeePw from '../../assets/icons/SeePw'
import PropTypes from 'prop-types'
import Switch from '../../assets/icons/Switch'

const LoginForm = ({
  open,
  handleClick,
  handleHiddenPw,
  handleChange,
  visible,
  loading,
  error,
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
              <span>Register</span>
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
  open: PropTypes.bool.isRequired,
  visible: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired,
}

export default LoginForm
