import PropTypes from 'prop-types'
import './registerForm.css'
import axios from 'axios'
import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const RegisterForm = ({
  handleHiddenPw,
  visible,
  setMenu,
  setLoginOpen,
  toggleCloseDialog,
}) => {
  const [body, setBody] = useState({})

  const { dispatch } = useContext(AuthContext)

  const navigate = useNavigate()

  const handleChange = e => {
    setBody({ ...body, [e.target.name]: e.target.value })
  }
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
      navigate('/')
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE', payload: err.response.data })
    }
  }

  return (
    <>
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
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="halfw"
            onChange={handleChange}
          />
          <input
            type="password"
            name="passwordConfirm"
            placeholder="Repeat your password"
            className="halfw"
            onChange={handleChange}
          />
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
            name="nationality"
            placeholder="Select your country"
            className="halfw"
            onChange={handleChange}
          />
          <input
            name="phone"
            type="phone"
            placeholder="Mobile number"
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
    </>
  )
}

RegisterForm.propTypes = {
  toggleCloseDialog: PropTypes.func.isRequired,
  setMenu: PropTypes.func.isRequired,
  setLoginOpen: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
}

export default RegisterForm
