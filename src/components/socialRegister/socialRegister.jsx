import './socialsregister.css'

const socialRegister = ({ icon, social }) => {
  return (
    <a className={`SocialButton ${social}`}>
      <span className="SocialButton-icon">{icon}</span>
      <span className="SocialButton-text">{social}</span>
    </a>
  )
}

export default socialRegister
