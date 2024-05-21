import PropTypes from 'prop-types'

const Switch = ({ id }) => {
  return (
    <>
      <div className="checkboxcontainer">
        <input type="checkbox" id={id} />
        <label htmlFor={id} className="checkbutton"></label>
      </div>
    </>
  )
}

Switch.propTypes = {
  id: PropTypes.string.isRequired,
}

export default Switch
