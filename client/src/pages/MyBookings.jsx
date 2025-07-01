import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const MyBookings = () => {
  const [bookings, setBookings] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const userId = localStorage.getItem('userId') 
const res = await axios.get(`http://localhost:3001/bookings/user/${userId}`, {

          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        setBookings(res.data)
      } catch (err) {
        console.error(err)
      }
    }

    fetchBookings()
  }, [])

  const handleDelete = async (bookingId) => {

    const confirmDelete = window.confirm("Are you sure you want to cancel this booking?");
  if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:3001/bookings/${bookingId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      })
      setBookings(bookings.filter(b => b._id !== bookingId))
    } catch (err) {
      console.error(err)
    }
  }

  const handleEdit = (flatId) => {
    navigate(`/book/${flatId}`)  // Reuse BookingForm for editing
  }

  return (
    <div>
      <h2>My Bookings</h2>
      {bookings.map(booking => (
        <div key={booking._id}>
          <p>Flat Number: {booking.flatID?.number}</p>
          <p>From: {booking.startDate}</p>
          <p>To: {booking.endDate}</p>
          <Link to={`/editbooking/${booking._id}`}>
  <button>Edit</button>
</Link>

          <button onClick={() => handleDelete(booking._id)}>Cancel</button>
        </div>
      ))}
    </div>
  )
}

export default MyBookings
