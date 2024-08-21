import Switch from '../../assets/icons/Switch'
import './user.css'
import { forwardRef } from 'react'
import { Apple, Facebook, Google } from '../../assets/icons/SocialsRegistration'
import SocialRegister from '../socialRegister/socialRegister'

export const User = forwardRef((props, ref, toggleDialog) => {
  return (
    <div ref={ref} id="shift-tab-2" className="user_nav">
      <form className="form user_form" action="">
        <div className="user_form-header">
          <h3>Account</h3>
          <span>
            Have an account? <br />
            Log into your account
          </span>
        </div>
        <div className="form__group user_width">
          <input
            required
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="fullw"
          />
          <label htmlFor="">Email</label>
        </div>
        <div className="form__group user_width">
          <input
            required
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="fullw"
          />
          <label htmlFor="">Password</label>
        </div>
        <div className="remember-me">
          <small>Remember me</small>
          <Switch id="check" />
        </div>
        <div className="button_container">
          <button className="user_login-btn">Log in</button>
          <small>forgot password?</small>
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
  )
})

// Set displayName for better debugging
User.displayName = 'User'