import { useContext } from 'react'
import axios from 'axios'
import { AuthContext } from './../context/AuthContext' // Import your AuthContext
import { useNavigate } from 'react-router-dom'

export default function TourBookingComponent({ tourId }) {
  const navigate = useNavigate()
  const { user, loading, error } = useContext(AuthContext)

  const bookTour = async event => {
    event.preventDefault() // Prevent default form action or link navigation

    if (!user) {
      navigate('/customers/login')
      return
    }

    if (loading) return // Prevent action if loading
    if (error) {
      console.error('Error in authentication context:', error)
      return
    }

    try {
      const session = await axios.post(
        `http://13.60.105.136/api/v1/bookings/checkout-session/${tourId}`,
        {}, // Empty data object since you're sending no body content
        {
          withCredentials: true,
        }
      )

      window.open(`${session.data.redirectURL}`)
    } catch (err) {
      console.error('Error during booking:', err)
    }
  }

  return (
    <button onClick={bookTour} disabled={loading} className="main_button">
      Book
    </button>
  )
}
