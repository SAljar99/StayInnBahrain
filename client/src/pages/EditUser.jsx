import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const EditUser = () => {
  const { user_id } = useParams()
  const navigate = useNavigate()
  const [form, setForm] = useState({ fullName: '', email: '', phone: '' })

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token')
        const res = await axios.get(`http://localhost:3001/auth/${user_id}`, {
          headers: { Authorization: `Bearer ${token}` }
        })
        setForm({
          fullName: res.data.fullName || '',
          email: res.data.email || '',
          phone: res.data.phone || ''
        })
      } catch (err) {
        console.error(err)
      }
    }

    fetchUser()
  }, [user_id])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const token = localStorage.getItem('token')
      await axios.put(
        `http://localhost:3001/auth/edit/${user_id}`,
        form,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      alert('User info updated!')
      navigate('/dashboard')
    } catch (err) {
      console.error(err)
      alert('Update failed.')
    }
  }

  return (
    <div className="centered">
      <div className="form-container">
        <h2>Edit Your Info</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="fullName">Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  )
}

export default EditUser
