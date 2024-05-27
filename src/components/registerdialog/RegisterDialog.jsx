import CloseModal from '../../assets/icons/CloseModal'
import RegisterForm from '../registerform/RegisterForm'
import PropTypes from 'prop-types'

const RegisterDialog = ({ setLoginOpen, setMenu, dialogRef }) => {
  const toggleCloseDialog = () => {
    if (!dialogRef.current) {
      return
    }

    dialogRef.current.close()
  }

  return (
    <>
      <dialog ref={dialogRef} className="registerForm">
        <div className="registerForm_content">
          <div className="registerForm_title">
            <div className="titleRegistration">Create an account</div>
            <div onClick={toggleCloseDialog}>
              <CloseModal />
            </div>
          </div>
          <RegisterForm
            setMenu={setMenu}
            toggleCloseDialog={toggleCloseDialog}
            setLoginOpen={setLoginOpen}
          />
          <small>
            By creating an account, you agree to MOONVALLEYTOURS, S.L.
            (MoonValleyTours) processing your data for service provision and
            commercial communications. Your rights include access,
            rectification, deletion, and limiting or opposing data processing,
            as well as data portability. For more details, refer to the General
            Terms and Conditions.
          </small>
        </div>
      </dialog>
    </>
  )
}

RegisterDialog.propTypes = {
  dialogRef: PropTypes.object.isRequired,
  setMenu: PropTypes.func.isRequired,
  setLoginOpen: PropTypes.func.isRequired,
}

export default RegisterDialog
