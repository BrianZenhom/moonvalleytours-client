import { useEffect, useRef, useState } from 'react'
import './select.css'
import PropTypes from 'prop-types'

export function Select({ value, onChange, options, classtype, title }) {
  const [open, setOpen] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState(0)
  const containerRef = useRef(null)

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

  useEffect(() => {
    const handler = e => {
      if (e.target != containerRef.current) return
      switch (e.code) {
        case 'Enter':
        case 'Space':
          setOpen(prev => !prev)
          if (open) selectOption(options[highlightedIndex])
          break
        case 'ArrowUp':
        case 'ArrowDown': {
          if (!open) {
            setOpen(true)
            break
          }

          const newValue = highlightedIndex + (e.code === 'ArrowDown' ? 1 : -1)
          if (newValue >= 0 && newValue < options.length) {
            setHighlightedIndex(newValue)
          }
          break
        }
        case 'Escape':
          setOpen(false)
          break
      }
    }

    containerRef.current?.addEventListener('keydown', handler)

    return () => {
      containerRef.current?.removeEventListener('keydown', handler)
    }
  }, [open, highlightedIndex, options])

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setOpen(false)
      }
    }
    window.addEventListener('click', handleClickOutside)

    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  })

  return (
    <div
      ref={containerRef}
      // onBlur={() => setOpen(false)}
      onClick={() => setOpen(prev => !prev)}
      tabIndex={0}
      className={`select__container ${classtype}`}
    >
      <span className="select__title">{title}</span>
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
  title: PropTypes.string,
}
