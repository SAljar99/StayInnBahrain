import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const Dashboard = ({ user }) => {
  const navigate = useNavigate()
  const [userInfo, setUserInfo] = useState(null)
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    if (!user) {
      navigate('/signin')
      return
    }

    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token')
        const userRes = await axios.get(`http://localhost:3001/auth/${user.id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setUserInfo(userRes.data)

        const bookingRes = await axios.get(`http://localhost:3001/bookings/user/${user.id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setBookings(bookingRes.data)
      } catch (err) {
        console.error(err)
      }
    }

    fetchUserData()
  }, [user, navigate])

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete your account?")) return;

    try {
      const token = localStorage.getItem('token')
      await axios.delete(`http://localhost:3001/auth/${user._id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      alert('Account deleted.')
      localStorage.removeItem('token')
      navigate('/')
    } catch (err) {
      console.error(err)
      alert('Failed to delete account.')
    }
  }

  const handleEdit = () => {
    navigate(`/edit/${user.id}`)
  }

  if (!userInfo) return <p>Loading dashboard...</p>

  return (
    <div>
      <h2>Your Profile</h2>
      <p><strong>Name:</strong> {userInfo.fullName}</p>
      <p><strong>Email:</strong> {userInfo.email}</p>
      <p><strong>Phone:</strong> {userInfo.phone}</p>
      <button onClick={handleEdit}>Edit Info</button>
      <button onClick={handleDelete}>Delete Account</button>

<h3>
        <Link to="/mybookings" >
          Your Bookings
        </Link>
      </h3>      {bookings.length > 0 ? (
        bookings.map((booking) => (
          <div key={booking._id}>
            <p>Flat Number: {booking.flatID.number}</p>
            <p>Start: {new Date(booking.startDate).toLocaleDateString()}</p>
            <p>End: {new Date(booking.endDate).toLocaleDateString()}</p>
          </div>
        ))
      ) : (
        <p>No bookings found.</p>
      )}
    </div>
  )
}

export default Dashboard
