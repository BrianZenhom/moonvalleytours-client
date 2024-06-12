import { useContext, useEffect } from 'react'
import './account.css'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Account = () => {
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/')
    }
  })

  return <section className="account container"></section>
}

export default Account
