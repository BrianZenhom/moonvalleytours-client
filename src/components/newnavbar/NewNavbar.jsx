import { Nav } from '../nav/Nav'
import './newnavbar.css'
import Logo from './../../assets/logos/Logo'

export const NewNavbar = () => {
  return (
    <div className="newnavbar_content">
      <div className="newnavbar_wrapper">
        <div className="logo">
          <Logo type="navlogo" />
        </div>
        <Nav />
        <div className="help">
          <span>Help</span>
        </div>
      </div>
    </div>
  )
}
