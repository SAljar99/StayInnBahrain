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
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "1rem" }}>
      <h2 style={{ marginBottom: "1.5rem" }}>Edit Your Booking</h2>
      
      {formState ? (
        <form onSubmit={handleSubmit} style={{
          padding: "1.5rem",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          backgroundColor: "#fff"
        }}>
          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: "500"
            }}>Start Date:</label>
            <input
              type="date"
              name="startDate"
              value={formState.startDate?.slice(0, 10)}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "1rem"
              }}
            />
          </div>
          
          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: "500"
            }}>End Date:</label>
            <input
              type="date"
              name="endDate"
              value={formState.endDate?.slice(0, 10)}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "1rem"
              }}
            />
          </div>

          <button type="submit" style={{
            width: "100%",
            padding: "0.75rem",
            backgroundColor: "purple",
            color: "white",
            border: "none",
            borderRadius: "4px",
            fontSize: "1rem",
            fontWeight: "500",
            cursor: "pointer",
            transition: "background-color 0.2s",
            "&:hover": {
              backgroundColor: "#6b46c1"
            }
          }}>
            Update Booking
          </button>
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default EditBooking