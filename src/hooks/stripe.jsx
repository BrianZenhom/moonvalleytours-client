import { useContext } from 'react'
import axios from 'axios'
import { AuthContext } from './../context/AuthContext' // Import your AuthContext

export default function TourBookingComponent({ tourId }) {
  const { user, loading, error } = useContext(AuthContext)

  const bookTour = async event => {
    event.preventDefault() // Prevent default form action or link navigation

    if (loading) return // Prevent action if loading
    if (error) {
      console.error('Error in authentication context:', error)
      return
    }

    try {
      console.log(user)
      const token = user?.token // Assuming your token is stored in the user object

      if (!token) {
        console.error('No token found, user may not be authenticated')
        return
      }

      const session = await axios.post(
        `http://localhost:1234/api/v1/bookings/checkout-session/${tourId}`,
        {}, // Empty data object since you're sending no body content
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      console.log(session.data) // Log session data from response
    } catch (err) {
      console.error('Error during booking:', err)
    }
  }

  return (
    <button onClick={bookTour} disabled={loading}>
      Book Tour
    </button>
  )
}
