import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const EditBooking = ({ user }) => {
  const { bookingId } = useParams()
  const [formState, setFormState] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      alert('Please log in to edit your booking')
      navigate('/signin')
      return
    }

    const getBooking = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/bookings/${bookingId}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer '.concat(localStorage.getItem('token'))
          }
        })
        setFormState(res.data)
      } catch (err) {
        console.error('Error fetching booking:', err)
      }
    }

    getBooking()
  }, [])

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.put(
        `http://localhost:3001/bookings/${bookingId}`,
        {
          startDate: formState.startDate,
          endDate: formState.endDate
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer '.concat(localStorage.getItem('token'))
          }
        }
      )
      navigate('/mybookings')
    } catch (err) {
      console.error('Error updating booking:', err)
    }
  }

  return (
    <div>
      {formState ? (
        <form onSubmit={handleSubmit} className="booking-form">
          <label>Start Date:</label>
          <input
            type="date"
            name="startDate"
            value={formState.startDate?.slice(0, 10)}
            onChange={handleChange}
            required
          />
          <label>End Date:</label>
          <input
            type="date"
            name="endDate"
            value={formState.endDate?.slice(0, 10)}
            onChange={handleChange}
            required
          />
          <button type="submit">Update Booking</button>
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default EditBooking
