import Switch from '../../assets/icons/Switch'
import './user.css'
import { forwardRef } from 'react'
import { Apple, Facebook, Google } from '../../assets/icons/SocialsRegistration'
import SocialRegister from '../socialRegister/socialRegister'
import Input from '../input/Input'

export const User = forwardRef((props, ref) => {
  const { handleClick, handleChange, toggleDialog, loading } = props

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
          <Input
            autoComplete="off"
            required
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="form__input fullw"
            onChange={handleChange}
          />
          <label htmlFor="">Email</label>
        </div>
        <div className="form__group user_width">
          <Input
            autoComplete="off"
            required
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="form__input fullw"
            onChange={handleChange}
          />
          <label htmlFor="">Password</label>
        </div>
        <div className="remember-me">
          <small>Remember me</small>
          <Switch id="check" />
        </div>
        <div className="login__container">
          <button className="loginBtn" disabled={loading} onClick={handleClick}>
            Login
          </button>
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
