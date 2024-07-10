import PropTypes from 'prop-types'
import './registerForm.css'
import axios from 'axios'
import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
// import { useNavigate } from 'react-router-dom'
import HidePw from '../../assets/icons/HidePw'
import SeePw from '../../assets/icons/SeePw'
import { toast, Toaster } from 'sonner'
import Error from '../../assets/icons/Error'
import Success from '../../assets/icons/Success'

const RegisterForm = ({ setMenu, setLoginOpen, toggleCloseDialog }) => {
  const [body, setBody] = useState({})
  const [visible, setVisible] = useState(false)
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false)

  const handleConfirmPasswordVisible = e => {
    e.stopPropagation()
    setConfirmPasswordVisible(!confirmPasswordVisible)
  }

  const handleHiddenPw = e => {
    e.stopPropagation()
    setVisible(!visible)
  }

  const { dispatch } = useContext(AuthContext)

  // const navigate = useNavigate()

  const handleChange = e => {
    setBody({ ...body, [e.target.name]: e.target.value })
  }

  const promise = () =>
    new Promise(resolve => setTimeout(() => resolve(), 1000))

  const handleRegistration = async e => {
    e.preventDefault()
    try {
      const res = await axios.post(
        'http://localhost:1234/api/v1/auth/register',
        body
      )
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data })
      toggleCloseDialog()
      setMenu(false)
      setLoginOpen(false)
      toast.promise(promise, {
        loading: 'Creating your account...',
        success: 'Account created successfully',
        error: 'Something went wrong, please try again',
      })
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE', payload: err.response.data })
    }
  }

  return (
    <div className="registerForm__wrapper">
      <form onSubmit={handleRegistration} className="registrationForm_form">
        <div className="register_content-inputs">
          <input
            required
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="fullw"
            onChange={handleChange}
          />

          <div className=" halfw password_input-reg">
            <input
              type={visible ? 'text' : 'password'}
              id="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <div className="hideshow" onClick={handleHiddenPw}>
              {visible ? <SeePw /> : <HidePw />}
            </div>
          </div>
          <div className=" halfw password_input-reg">
            <input
              type={confirmPasswordVisible ? 'text' : 'password'}
              id="passwordConfirm"
              name="passwordConfirm"
              placeholder="Confirm password"
              onChange={handleChange}
            />
            <div className="hideshow" onClick={handleConfirmPasswordVisible}>
              {confirmPasswordVisible ? <SeePw /> : <HidePw />}
            </div>
          </div>
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="halfw"
            onChange={handleChange}
          />
          <input
            name="surname"
            type="text"
            placeholder="Surname"
            className="halfw"
            onChange={handleChange}
          />
          <input
            type="text"
            name="country"
            placeholder="Select your country"
            className="halfw"
            onChange={handleChange}
          />
          <input
            type="text"
            name="city"
            placeholder="Select your city"
            className="halfw"
            onChange={handleChange}
          />
          <input
            name="phone"
            type="phone"
            placeholder="+34 Phone"
            className="fullw"
            onChange={handleChange}
          />
        </div>
        <div className="checkboxes">
          <label>
            <input type="checkbox" id="receive" />I want to receive latest
            updates from Moon Valley Tours
          </label>
          <label>
            <input required type="checkbox" id="terms" />I accept privacy policy
            and general conditions
          </label>
        </div>

        <button>Confirm registration</button>
      </form>
      <Toaster
        toastOptions={{
          classNames: {
            error: 'error-bg',
            success: 'success-bg',
            warning: 'warning-bg',
            info: 'info-bg',
          },
        }}
        icons={{
          error: <Error />,
          success: <Success />,
        }}
      />
    </div>
  )
}

RegisterForm.propTypes = {
  toggleCloseDialog: PropTypes.func.isRequired,
  setMenu: PropTypes.func.isRequired,
  setLoginOpen: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  handleHiddenPw: PropTypes.func.isRequired,
}

export default RegisterForm
