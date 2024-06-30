import { useEffect, useState } from 'react'
import './select.css'
import PropTypes from 'prop-types'

export function Select({ value, onChange, options, classtype }) {
  const [open, setOpen] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState(0)

  function clearOptions() {
    onChange(undefined)
  }

  function selectOption(option) {
    if (option !== value) onChange(option)
  }

  function isOptionSelected(option) {
    return option === value
  }

  useEffect(() => {
    if (open) setHighlightedIndex(0)
  }, [open])

  return (
    <div
      // onBlur={() => setOpen(false)}
      onClick={() => setOpen(prev => !prev)}
      tabIndex={0}
      className={`select__container ${classtype}`}
    >
      <span className="select__value">{value?.label}</span>
      <button
        onClick={e => {
          e.stopPropagation()
          clearOptions()
        }}
        className="select__clearbtn"
      >
        &times;
      </button>
      <div className="select__divider"></div>
      <div className="select__caret"></div>
      <ul className={`select__options ${open ? 'show' : ''}`}>
        {options.map((option, index) => (
          <li
            onClick={e => {
              e.stopPropagation()
              selectOption(option)
              setOpen(false)
            }}
            onMouseEnter={() => setHighlightedIndex(index)}
            key={option.label}
            className={`select__option ${
              isOptionSelected(option) ? 'selected' : ''
            } ${index === highlightedIndex ? 'highlighted' : ''}`}
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
  classtype: PropTypes.string,
}
