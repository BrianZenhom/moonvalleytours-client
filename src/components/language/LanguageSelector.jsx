import './languageselector.css'
import { forwardRef } from 'react'

export const LanguageSelector = forwardRef(({ handleActive }, ref) => {
  return (
    <div ref={ref} id="shift-tab-0" className="language_selector">
      <span onClick={handleActive}>Español</span>
      <span onClick={handleActive}>Turkish</span>
    </div>
  )
})

LanguageSelector.displayName = 'LanguageSelector'
