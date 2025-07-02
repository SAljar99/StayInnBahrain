import { useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import axios from "axios"

const BookingForm = () => {
  const { flatId } = useParams()
  const navigate = useNavigate()
  const [flat, setFlat] = useState(null)
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
  })

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) {
      alert("You must be signed in to book a flat.")
      navigate("/signin")
      return
    }

    const fetchFlat = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/flats/${flatId}`)
        setFlat(res.data)
      } catch (err) {
        console.error(err)
      }
    }

    fetchFlat()
  }, [flatId, navigate])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post(
        "http://localhost:3001/bookings",
        {
          flatID: flat._id,
          startDate: formData.startDate,
          endDate: formData.endDate,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      alert("Booking successful! ✅ ")
      navigate("/")
    } catch (err) {
      console.error(err)
      alert("Booking failed.")
    }
  }

  if (!flat) return <p>Loading...</p>
  if (flat.isRented) return <p>This flat is currently rented.</p>

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "1rem" }}>
      <h2 style={{ marginBottom: "1.5rem" }}>Book Flat Number: {flat.number}</h2>
      
      <div style={{
        display: "flex",
        gap: "2rem",
        alignItems: "flex-start"
      }}>
        <form onSubmit={handleSubmit} style={{
          flex: 1,
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
              value={formData.startDate}
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
              value={formData.endDate}
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
            transition: "background-color 0.2s"
          }}>
            Confirm Booking
          </button>
        </form>

        {flat.flatImages?.length > 0 && (
          <div style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "1rem"
          }}>
            {flat.flatImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Flat ${flat.number} view ${idx + 1}`}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                }}
              />
            ))}
          </div>
        )}
      </div>

    </div>
  )
}

export default BookingForm