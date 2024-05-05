import { useState } from 'react'
import Logo from '../../assets/logos/Logo'
import './navbarmobile.css'
import User from '../../assets/icons/User'
import { ReservationsIcon } from '../../assets/icons/Reservations'
import Help from '../../assets/icons/Help'
import Menu from '../../assets/icons/Menu'
import Close from '../../assets/icons/Close'

const NavbarMobile = () => {
  const [menu, setMenu] = useState(false)

  const handleOpen = () => {
    setMenu(!menu)
  }

  return (
    <>
      <div className="navbarmobile">
        <Logo type={menu ? 'logonav logonavLeft' : 'logonav'} />
        <div className={menu ? 'button' : ' '}>
          <button onClick={handleOpen}>{menu ? <Close /> : <Menu />}</button>
        </div>
        <div className={menu ? 'wholescreen visible' : 'wholescreen'}>
          <nav className="mobilenav">
            <ul>
              <li>
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
              <li>
                <span>Language</span>
                <span>English</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default NavbarMobile
