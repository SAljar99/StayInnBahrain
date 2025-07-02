import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import './MyBookings.css' // Import CSS file

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
    <div className="my-bookings-container">
      <h2 className="my-bookings-title">My Bookings</h2>
      <div className="bookings-list">
        {bookings.map(booking => (
          <div className="booking-card" key={booking._id}>
            <div className="booking-info">
              <p className="booking-detail"><span className="detail-label">Flat Number:</span> {booking.flatID?.number}</p>
              <p className="booking-detail"><span className="detail-label">From:</span> {new Date(booking.startDate).toLocaleDateString('en-US')}</p>
              <p className="booking-detail"><span className="detail-label">To:</span> {new Date(booking.endDate).toLocaleDateString('en-US')}</p>
            </div>
            <div className="booking-actions">
              <Link to={`/editbooking/${booking._id}`} className="edit-link">
                <button className="edit-button">Edit</button>
              </Link>
              <button className="cancel-button" onClick={() => handleDelete(booking._id)}>Cancel</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyBookings