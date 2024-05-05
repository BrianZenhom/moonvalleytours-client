import './navbarmobile.css'
import { useState } from 'react'
import { ReservationsIcon } from '../../assets/icons/Reservations'
import Logo from '../../assets/logos/Logo'
import User from '../../assets/icons/User'
import Help from '../../assets/icons/Help'
import Menu from '../../assets/icons/Menu'
import Close from '../../assets/icons/Close'

const NavbarMobile = () => {
  const [menu, setMenu] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)

  const handleLoginOpen = () => {
    setLoginOpen(!loginOpen)
  }

  const handleOpen = () => {
    setMenu(!menu)
  }

  console.log(loginOpen)

  return (
    <>
      <div className="navbarmobile">
        <Logo type={menu ? 'logonav logonavLeft' : 'logonav'} />
        <div className={menu ? 'button' : ' '}>
          <button onClick={handleOpen}>{menu ? <Close /> : <Menu />}</button>
        </div>
        <div className={menu ? 'navbarbg visible' : 'navbarbg'}>
          <nav className="mobilenav">
            <ul>
              <li onClick={handleLoginOpen}>
                <span>My Account</span>
                <span>
                  <User />
                </span>
              </li>
              <li>
                <span>Reservations</span>
                <span>
                  <ReservationsIcon />
                </span>
              </li>
              <li>
                <span>Help</span>
                <span>
                  <Help />
                </span>
              </li>
              <li className="dropdown-dark">
                <span>Language</span>
                <span>English</span>
              </li>
              <li className="lidropdown"></li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default NavbarMobile
