import './registerForm.css'

const RegisterForm = () => {
  return (
    <>
      <form className="registrationForm_form">
        <div className="register_content-inputs">
          <input
            required
            type="email"
            id="email"
            placeholder="Email"
            className="fullw"
          />
          <input type="password" placeholder="Password" className="halfw" />
          <input
            type="password"
            placeholder="Repeat your password"
            className="halfw"
          />
          <input type="text" placeholder="Name" className="halfw" />
          <input type="text" placeholder="Surname" className="halfw" />
          <input
            type="text"
            placeholder="Select your country"
            className="halfw"
          />
          <input type="text" placeholder="Your city" className="halfw" />
          <input type="phone" placeholder="Mobile number" className="fullw" />
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

export default RegisterForm
