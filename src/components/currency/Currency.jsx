import { forwardRef } from 'react'
import './currency.css'

export const Currency = forwardRef(({ handleActiveCurr }, ref) => {
  return (
    <div ref={ref} id="shift-tab-1" className="currency_selector">
      <div onClick={handleActiveCurr} data-value="US$" className="usd">
        <span data-value="US$">US$</span>
        <small data-value="US$">United States Dollar</small>
      </div>
      <div onClick={handleActiveCurr} data-value="&euro;" className="euro">
        <span data-value="&euro;">&euro;</span>
        <small data-value="&euro;">Euro</small>
      </div>
    </div>
  )
})

Currency.displayName = 'Currency'
