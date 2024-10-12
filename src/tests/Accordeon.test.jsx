import { render, screen, cleanup } from '@testing-library/react'
import { afterEach, describe, it } from 'vitest'
import { Accordeon } from './../components/accordeon/Accordeon'

describe('Accordeon ', () => {
  afterEach(cleanup)
  it('should render', () => {
    render(<Accordeon />)
  })

  // Test to ensure children are rendered correctly
  it('should render children correctly', () => {
    render(
      <Accordeon>
        <li>Item 1</li>
        <li>Item 2</li>
      </Accordeon>
    )
    screen.getByText('Item 1')
  })
})
