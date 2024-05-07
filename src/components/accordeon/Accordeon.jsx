import { createContext, useRef } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'
import DownArrow from '../../assets/icons/DownArrow'

const AccordeonContext = createContext()

export const Accordeon = ({ children, value, onChange, ...props }) => {
  const [selected, setSelected] = useState(value)

  useEffect(() => {
    onChange?.(selected)
  }, [selected])

  return (
    <ul {...props}>
      <AccordeonContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordeonContext.Provider>
    </ul>
  )
}

export const AccordeonItem = ({ children, value, trigger, ...props }) => {
  const { selected, setSelected } = useContext(AccordeonContext)
  const open = selected === value

  const ref = useRef(null)

  return (
    <li className="accordeon_tab" {...props}>
      <header
        className="accordeon_header"
        role="button"
        onClick={() => setSelected(open ? null : value)}
      >
        {trigger}
        <div className={open ? 'icon' : 'closed'}>
          <DownArrow />
        </div>
      </header>
      <div
        className="accordeon_container"
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div className="accordeon_content" ref={ref}>
          {children}
        </div>
      </div>
    </li>
  )
}

Accordeon.propTypes = {
  children: PropTypes.object.isRequired,
  value: PropTypes.object.isRequired,
  onChange: PropTypes.object.isRequired,
}
AccordeonItem.propTypes = {
  children: PropTypes.object.isRequired,
  value: PropTypes.object.isRequired,
  trigger: PropTypes.object.isRequired,
}
