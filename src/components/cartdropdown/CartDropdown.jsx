import { forwardRef } from 'react'
import './cartdropdown.css'

export const CartDropdown = forwardRef((props, ref) => {
  return (
    <div className="cartdropdown" id="shift-tab-3" ref={ref}>
      <div className="cartdropdown_content">
        <span>Cart emty</span>
      </div>
    </div>
  )
})

CartDropdown.displayName = 'CartDropdown'
