import DownCaret from '../../assets/icons/DownCaret'
import './select.css'
import PropTypes from 'prop-types'

export function Select({ value, onChange, options }) {
  return (
    <div tabIndex={0} className="select__container">
      <span className="select__value">Day</span>
      <button className="select__clearbtn">&times;</button>
      <div className="select__divider"></div>
      <div className="select__caret"></div>
      <ul className="select__options show">
        {options.map(option => (
          <li key={option.label} className="select__option">
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  )
}

Select.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })
  ),
}
