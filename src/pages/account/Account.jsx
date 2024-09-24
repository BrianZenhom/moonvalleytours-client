import './account.css'
import { useContext, useEffect, useRef, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import AccountSidebar from '../../components/accountSidebar/accountSidebar'
import { Toaster, toast } from 'sonner'
import Upload from '../../assets/icons/Upload'
import { Accordeon, AccordeonItem } from '../../components/accordeon/Accordeon'
import Input from '../../components/input/Input'
import { Select } from '../../components/select/Select'
import axios from 'axios'
import CloseModal from '../../assets/icons/CloseModal'
import Error from '../../assets/icons/Error'
import Success from '../../assets/icons/Success'
import { NewNavbar } from '../../components/newnavbar/NewNavbar'

const options = Array.from({ length: 31 }, (_, i) => ({
  label: i + 1,
  value: i + 1,
}))

const monthOptions = [
  {
    label: 'January',
    value: 'January',
  },
  {
    label: 'February',
    value: 'February',
  },
  {
    label: 'March',
    value: 'March',
  },
  {
    label: 'April',
    value: 'April',
  },
  {
    label: 'May',
    value: 'May',
  },
  {
    label: 'June',
    value: 'June',
  },
  {
    label: 'July',
    value: 'July',
  },
  {
    label: 'August',
    value: 'August',
  },
  {
    label: 'September',
    value: 'September',
  },
  {
    label: 'October',
    value: 'October',
  },
  {
    label: 'November',
    value: 'November',
  },
  {
    label: 'December',
    value: 'December',
  },
]
// organize in decending order years

const yearOptions = Array.from({ length: 100 }, (_, i) => ({
  label: i + 1925,
  value: i + 1925,
}))

yearOptions.sort((a, b) => b.value - a.value)

const Account = () => {
  const { user, dispatch } = useContext(AuthContext)
  const navigate = useNavigate()
  const [value, setValue] = useState(options[0])
  const [monthValue, setMonthValue] = useState(monthOptions[0])
  const [yearValue, setYearValue] = useState(yearOptions[0])
  const [formData, setFormData] = useState({
    name: user?.name || '',
    surname: user?.surname || '',
    phone: user?.phone || '',
    instagram: user?.instagram || '',
    country: user?.country || '',
    city: user?.city || '',
    email: user?.email || '',
    photo: user?.photo || '',
  })

  const [passwordData, setPasswordData] = useState({
    passwordCurrent: '',
    password: '',
    passwordConfirm: '',
  })
  const dialogRef = useRef(null)

  const toggleDialog = () => {
    if (!dialogRef.current) {
      return
    }

    dialogRef.current.hasAttribute('open')
      ? dialogRef.current.close()
      : dialogRef.current.showModal()
  }

  useEffect(() => {
    if (!user) {
      navigate('/')
    } else {
      setFormData({
        name: user?.name || '',
        surname: user?.surname || '',
        phone: user?.phone || '',
        instagram: user?.instagram || '',
        country: user?.country || '',
        city: user?.city || '',
        email: user?.email || '',
        photo: user?.photo || '',
      })
    }
  }, [user, navigate])

  const handleChange = event => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleFileChange = async event => {
    const file = event.target.files[0]
    const formData = new FormData()
    formData.append('photo', file)

    try {
      const res = await axios.patch(
        'http://localhost:1234/api/v1/users/updateMe',
        formData,
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )

      // Update the user and token in the context
      dispatch({
        type: 'UPDATE_USER',
        payload: { user: res.data.user, token: res.data.token },
      })

      toast.success('Profile photo updated successfully')
    } catch (err) {
      toast.error(err.response.data.message)
    }
  }

  const handlePasswordChange = event => {
    const { name, value } = event.target
    setPasswordData({ ...passwordData, [name]: value })
  }

  // Handle prefix addition for Instagram field
  const handleInstagramChange = event => {
    const { name, value } = event.target
    const prefix = '@'
    if (!value.startsWith(prefix)) {
      setFormData({ ...formData, [name]: prefix + value })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  // create a post request to the server
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.patch(
        'http://localhost:1234/api/v1/users/updateMe',
        formData,
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )
      // Update the user and token in the context
      dispatch({
        type: 'UPDATE_USER',
        payload: { user: res.data.user, token: res.data.token },
      })
      toast.promise(promise, {
        loading: 'Updating profile...',
        success: 'Profile updated successfully',
        error: 'Something went wrong, please try again',
      })
    } catch (err) {
      toggleCloseDialog()

      toast.error(err.response.data.message)
    }
  }

  const promise = () =>
    new Promise(resolve =>
      setTimeout(() => resolve({ name: user?.name }), 1000)
    )

  const handleSubmitPassword = async () => {
    try {
      const res = await axios.patch(
        'http://localhost:1234/api/v1/auth/updateMyPassword',
        passwordData,
        {
          withCredentials: true,
        }
      )
      // Update the user and token in the context
      dispatch({
        type: 'UPDATE_USER',
        payload: { user: res.data.user, token: res.data.token },
      })

      setPasswordData({
        passwordCurrent: '',
        password: '',
        passwordConfirm: '',
      })

      toggleCloseDialog()
      toast.promise(promise, {
        loading: 'Changing password...',
        success: 'Password changed successfully',
        error: 'Something went wrong, please try again',
      })
    } catch (err) {
      setPasswordData({
        passwordCurrent: '',
        password: '',
        passwordConfirm: '',
      })
      toggleCloseDialog()
      toast.error(err.response.data.message)
    }
  }

  const toggleCloseDialog = () => {
    if (!dialogRef.current) {
      return
    }

    dialogRef.current.close()
  }

  const formFields = [
    {
      name: 'name',
      pattern: '[a-zA-Z]{3,}',
      placeholder: 'name',
      title: 'Name',
    },
    {
      name: 'surname',
      pattern: '[a-zA-Z]{3,}',
      placeholder: 'surname',
      title: 'Surname',
    },
    {
      name: 'phone',
      pattern: '[0-9]{3,}',
      placeholder: 'phone',
      title: 'Phone',
      type: 'phone',
    },
    {
      name: 'instagram',
      pattern: '[a-zA-Z0-9._-]+@',
      placeholder: 'Instagram',
      title: 'Enter your Instagram username',
    },
    {
      name: 'city',
      pattern: '[a-zA-Z -]{2,}',
      placeholder: 'City',
      title: 'City',
    },
    {
      name: 'country',
      pattern: '[a-zA-Z -]{2,}',
      placeholder: 'Country',
      title: 'Country',
    },
    {
      name: 'email',
      pattern: '[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-z]{2,}',
      placeholder: 'Email',
      title: 'Email',
      type: 'email',
    },
  ]

  return (
    <div className="my_account">
      <NewNavbar type="wider" />
      <dialog ref={dialogRef} className="account__dialog">
        <div className="dialog__content">
          <div className="dialog__content-body">
            <div className="dialog__header">
              <div className="dialog__title">
                <strong>Edit password</strong>
                <small>Choose a new password</small>
              </div>
              <div onClick={toggleCloseDialog} className="button-dialog">
                <CloseModal />
              </div>
            </div>
            <form className="form">
              <div className="form__group edit__password">
                <Input
                  title="Current password"
                  name="passwordCurrent"
                  type="text"
                  className="form__input"
                  placeholder="Current password"
                  value={passwordData.passwordCurrent}
                  onChange={handlePasswordChange}
                  required
                />
                <label htmlFor="currentPassword">Current password</label>
              </div>
              <div className="form__group edit__password">
                <Input
                  title="New password"
                  name="password"
                  type="text"
                  className="form__input"
                  value={passwordData.password}
                  placeholder="New password"
                  onChange={handlePasswordChange}
                  required
                />
                <label htmlFor="newPassword">New password</label>
              </div>
              <div className="form__group edit__password">
                <Input
                  title="Repeat new password"
                  name="passwordConfirm"
                  type="text"
                  className="form__input"
                  value={passwordData.passwordConfirm}
                  placeholder="Repeat new password"
                  onChange={handlePasswordChange}
                  required
                />
                <label htmlFor="repeatNewPassword">Repeat new password</label>
              </div>
              <div className="cta__buttons">
                <button
                  onClick={e => {
                    e.preventDefault()
                    e.stopPropagation()
                    toggleCloseDialog()
                  }}
                  className="btn discard__changes"
                >
                  Discard changes
                </button>
                <button
                  onClick={e => {
                    e.preventDefault()
                    e.stopPropagation()
                    handleSubmitPassword()
                  }}
                  className="btn btn__save"
                >
                  Confirm password
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
      <section className="account">
        <AccountSidebar />
        <article className="account__content">
          <h2>My account</h2>
          <div className="account__user--info">
            <div className="account__image--wrapper">
              <div className="account_image">
                {user?.photo ? (
                  <img
                    src={`http://localhost:1234/public/img/users/${user?.photo}`}
                    alt={`photo of ${user?.name}`}
                  />
                ) : (
                  <img src="/default.jpg" alt="Photo of user" />
                )}
                <div className="mini_icon">
                  <Upload />
                </div>
              </div>
              <input
                className="form__upload"
                type="file"
                accept="image/*"
                name="photo"
                id="photo"
                onChange={handleFileChange}
              />
              <label htmlFor="photo">
                {user?.photo ? (
                  <small>change photo</small>
                ) : (
                  <small>upload photo</small>
                )}
              </label>
            </div>
            <div className="account__user--details">
              <div className="name">
                <span>{user?.name}</span>
                <span>{user?.surname}</span>
              </div>
              <div className="phone">{user?.phone}</div>
              <div className="email">{user?.email}</div>
            </div>
          </div>
          <Accordeon>
            <AccordeonItem
              type="myaccount_accordeon"
              value="Item 1"
              trigger="My Personal Information"
            >
              <form className="form">
                {formFields.map(field => (
                  <div className="form__group" key={field.name}>
                    <Input
                      title={field.title}
                      name={field.name}
                      pattern={field.pattern}
                      type={field.type || 'text'}
                      className="form__input"
                      placeholder={field.placeholder}
                      value={formData[field.name]}
                      onChange={
                        field.name === 'instagram'
                          ? handleInstagramChange
                          : handleChange
                      }
                      required
                    />
                    <label htmlFor={field.name}>{field.title}</label>
                  </div>
                ))}
                <div className="form__group birth">
                  <Select
                    title="Day"
                    options={options}
                    value={value}
                    onChange={o => setValue(o)}
                    classtype="day"
                  />
                  <Select
                    title="Month"
                    options={monthOptions}
                    value={monthValue}
                    onChange={o => setMonthValue(o)}
                    classtype="month"
                  />
                  <Select
                    title="Year"
                    options={yearOptions}
                    value={yearValue}
                    onChange={o => setYearValue(o)}
                    classtype="year"
                  />
                </div>
                <div className="form__group">
                  <button
                    onClick={e => {
                      e.preventDefault()
                      toggleDialog()
                    }}
                    className="btn__password"
                  >
                    Edit password
                  </button>
                </div>
                <div className="form__group">
                  <span>
                    I want to receive the latest news from MoonValleyTours and
                    the best tips for my trips
                  </span>
                </div>
                <button className="btn btn__save" onClick={handleSubmit}>
                  Confirm changes
                </button>
              </form>
            </AccordeonItem>
            <AccordeonItem
              type="myaccount_accordeon"
              value="Item 2"
              trigger="Billing Information"
            >
              <strong>This is the form</strong>
            </AccordeonItem>
          </Accordeon>
        </article>
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
      </section>
    </div>
  )
}

export default Account
