import PropTypes from 'prop-types'
import './registerForm.css'
import axios from 'axios'
import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
// import { useNavigate } from 'react-router-dom'

import { toast, Toaster } from 'sonner'
import Error from '../../assets/icons/Error'
import Success from '../../assets/icons/Success'
import CountriesForm from '../../mocks/CountriesForm.json'

const RegisterForm = ({ setMenu, setLoginOpen, toggleCloseDialog }) => {
  const countriesForForm = CountriesForm
  const hasCountries = countriesForForm?.length > 0

  const sortedCountries = [...countriesForForm].sort((a, b) =>
    a.name.common.localeCompare(b.name.common)
  )

  console.log(hasCountries)

  const [body, setBody] = useState({})
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
        'https://api.moonvalleytours.lat/api/v1/auth/register',
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

          <input
            id="password"
            name="password"
            placeholder="Password"
            className="fullw"
            onChange={handleChange}
          />
          <input
            id="passwordConfirm"
            name="passwordConfirm"
            placeholder="Confirm password"
            className="fullw"
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
          <select onChange={handleChange} className="halfw" name="" id="">
            <option value="Country" selected disabled>
              Country
            </option>
            {hasCountries
              ? sortedCountries?.map(country => (
                  <option key={country.name.common}>
                    {country.name.common}
                  </option>
                ))
              : ''}
          </select>
          <select
            disabled
            onChange={handleChange}
            className="halfw"
            name=""
            id=""
          >
            <option value="City" selected disabled>
              City
            </option>
          </select>
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
