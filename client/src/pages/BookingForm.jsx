import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const BookingForm = () => {
  const { flatId } = useParams()
  const navigate = useNavigate()
  const [flat, setFlat] = useState(null)
  const [formData, setFormData] = useState({
    startDate: '',
    endDate: ''
  })

  useEffect(() => {
    const fetchFlat = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/flats/${flatId}`)
        setFlat(res.data)
      } catch (err) {
        console.error(err)
      }
    }

    fetchFlat()
  }, [flatId])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:3001/bookings', {
  flatID: flat._id,
  startDate: formData.startDate,
  endDate: formData.endDate
}, {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
})
      alert('Booking successful!')
      navigate('/')
    } catch (err) {
      console.error(err)
      alert('Booking failed.')
    }
  }

  if (!flat) return <p>Loading...</p>
  if (flat.isRented) return <p>This flat is currently rented.</p>

  return (
    <div className="booking-form">
      <h2>Book Flat #{flat.number}</h2>
      <form onSubmit={handleSubmit}>
        <label>Start Date:</label>
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          required
        />
        <br />
        <label>End Date:</label>
        <input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  )
}

export default BookingForm
