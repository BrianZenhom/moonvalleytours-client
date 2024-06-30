import './account.css'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import AccountSidebar from '../../components/accountSidebar/accountSidebar'
import Navbar from '../../components/navbar/Navbar'
import Upload from '../../assets/icons/Upload'
import User from '../../assets/icons/User'
import { Accordeon, AccordeonItem } from '../../components/accordeon/Accordeon'
import Input from '../../components/input/Input'
import { Select } from '../../components/select/Select'
import axios from 'axios'

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
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()
  const [value, setValue] = useState(options[0])
  const [monthValue, setMonthValue] = useState(monthOptions[0])
  const [yearValue, setYearValue] = useState(yearOptions[0])

  const [formData, setFormData] = useState({
    name: user?.data?.user?.name || '',
    surname: user?.data?.user?.surname || '',
    phone: user?.data?.user?.phone || '',
    instagram: '',
    country: user?.data?.user?.nationality || '',
    email: user?.data?.user?.email || '',
  })

  useEffect(() => {
    if (!user) {
      navigate('/')
    }
  }, [user, navigate])

  const handleChange = event => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
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

  return (
    <div className="my_account">
      <Navbar />
      <section className="account">
        <AccountSidebar />
        <article className="account__content">
          <h2>My account</h2>
          <div className="account__user--info">
            <div className="account__image--wrapper">
              <div className="account_image">
                {user?.data?.user?.photo ? (
                  <img
                    src={user?.data?.user?.photo}
                    alt={`photo of ${user?.data?.user?.name}`}
                  />
                ) : (
                  <User type="iconsvgphoto" />
                )}
                <div className="mini_icon">
                  <Upload />
                </div>
              </div>
              {user?.data?.user?.photo ? (
                <small>change photo</small>
              ) : (
                <small>upload photo</small>
              )}
            </div>
            <div className="account__user--details">
              <div className="name">
                <span>{user?.data?.user?.name}</span>
                <span>{user?.data?.user?.surname}</span>
              </div>
              <div className="phone">{user?.data?.user?.phone}</div>
              <div className="email">{user?.data?.user?.email}</div>
            </div>
          </div>
          <Accordeon>
            <AccordeonItem value="Item 1" trigger="My Personal Information">
              <form className="form">
                {[
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
                    pattern: '[a-zA-Z0-9._-]{2,}',
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
                ].map(field => (
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
                  <span>Change password</span>
                </div>
                <div className="form__group">
                  <span>
                    I want to receive the latest news from MoonValleyTours and
                    the best tips for my trips
                  </span>
                </div>
                <button
                  onClick={e => {
                    e.preventDefault()
                    submitForm(e)
                  }}
                >
                  Save changes
                </button>
              </form>
            </AccordeonItem>
            <AccordeonItem value="Item 2" trigger="Billing Information">
              <strong>This is the form</strong>
            </AccordeonItem>
          </Accordeon>
        </article>
      </section>
    </div>
  )
}

export default Account
