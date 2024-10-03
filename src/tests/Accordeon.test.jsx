// import { render, screen, fireEvent } from '@testing-library/react'
// import '@testing-library/jest-dom' // for additional matchers like 'toBeInTheDocument'
// import { describe, it, expect, vi } from 'vitest' // Vitest testing functions
// import { Accordeon, AccordeonItem } from './Accordeon' // Import your components

// // Mock the DownArrow component to avoid issues with external asset imports
// vi.mock('../../assets/icons/DownArrow', () => ({
//   default: () => <div data-testid="down-arrow-icon" />, // Mock the DownArrow as a simple div
// }))

// describe('Accordeon Component', () => {
//   it('should render the Accordeon with provided children', () => {
//     render(
//       <Accordeon value="item1" onChange={() => {}}>
//         <AccordeonItem value="item1" trigger="Item 1">
//           Content 1
//         </AccordeonItem>
//         <AccordeonItem value="item2" trigger="Item 2">
//           Content 2
//         </AccordeonItem>
//       </Accordeon>
//     )

//     // Check if both accordion items are rendered with the correct triggers
//     expect(screen.getByText('Item 1')).toBeInTheDocument()
//     expect(screen.getByText('Item 2')).toBeInTheDocument()
//   })

//   it('should trigger onChange when an item is clicked', () => {
//     const handleChange = vi.fn() // Mock the onChange handler

//     render(
//       <Accordeon value="item1" onChange={handleChange}>
//         <AccordeonItem value="item1" trigger="Item 1">
//           Content 1
//         </AccordeonItem>
//         <AccordeonItem value="item2" trigger="Item 2">
//           Content 2
//         </AccordeonItem>
//       </Accordeon>
//     )

//     const item2 = screen.getByText('Item 2')

//     // Click the second item
//     fireEvent.click(item2)

//     // Verify if the onChange handler is called with the correct value ('item2')
//     expect(handleChange).toHaveBeenCalledWith('item2')
//   })

//   it('should toggle the visibility of content when clicking an item', () => {
//     render(
//       <Accordeon value="item1" onChange={() => {}}>
//         <AccordeonItem value="item1" trigger="Item 1">
//           Content 1
//         </AccordeonItem>
//         <AccordeonItem value="item2" trigger="Item 2">
//           Content 2
//         </AccordeonItem>
//       </Accordeon>
//     )

//     const item1Content = screen.getByText('Content 1')
//     const item2Content = screen.queryByText('Content 2') // Content 2 should not be visible initially

//     // Initially, Content 1 should be visible, and Content 2 should not be
//     expect(item1Content).toBeVisible()
//     expect(item2Content).not.toBeInTheDocument()

//     // Click to open item 2
//     fireEvent.click(screen.getByText('Item 2'))

//     const item2ContentAfterClick = screen.getByText('Content 2')
//     expect(item2ContentAfterClick).toBeVisible()
//   })
// })
