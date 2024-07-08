import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import Finger from '../../assets/icons/Finger'
import Ticket from '../../assets/icons/Ticket'
import Heart from '../../assets/icons/Heart'

const AccountSidebar = () => {
  const { user } = useContext(AuthContext)
  return (
    <aside className="account__sidebar">
      <ul>
        <li className="account__sidebar--user">
          <span>Hi</span>
          <strong>{user?.name}</strong>
          <a href="/customers/my-account">
            <Finger />
            <small>My account</small>
          </a>
        </li>
        <hr />
        <li className="account__sidebar--items">
          <a href="/customers/bookings">
            <Ticket />
            <span>Bookings</span>
          </a>
        </li>
        <hr />
        <li className="account__sidebar--items">
          <a href="/customers/favorites">
            <Heart />
            <span>Favorites</span>
          </a>
        </li>
        <li></li>
      </ul>
    </aside>
  )
}

export default AccountSidebar
