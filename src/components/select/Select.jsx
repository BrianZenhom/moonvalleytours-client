import { useState } from 'react'
import './select.css'
import PropTypes from 'prop-types'

export function Select({ value, onChange, options }) {
  const [open, setOpen] = useState(false)

  function selectOption(option) {
    console.log(option)
    onChange(option)
  }
  return (
    <div
      onBlur={() => setOpen(false)}
      onClick={() => setOpen(prev => !prev)}
      tabIndex={0}
      className="select__container"
    >
      <span className="select__value">{value?.value}</span>
      <button className="select__clearbtn">&times;</button>
      <div className="select__divider"></div>
      <div className="select__caret"></div>
      <ul className={open ? 'select__options show' : 'select__options'}>
        {options.map(option => (
          <li
            onClick={e => {
              e.stopPropagation()
              selectOption(option)
              setOpen(false)
            }}
            key={option.label}
            className="select__option"
          >
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
