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
      await axios.put(`http://localhost:3001/auth/edit/${user_id}`, form, {
        headers: { Authorization: `Bearer ${token}` }
      })
      alert('User info updated!')
      navigate('/dashboard')
    } catch (err) {
      console.error(err)
      alert('Update failed.')
    }
  }

  return (
    <div>
      <h2>Edit Your Info</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="fullName" value={form.fullName} onChange={handleChange} />
        <label>Email:</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} />
        <label>Phone:</label>
        <input type="text" name="phone" value={form.phone} onChange={handleChange} />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  )
}

export default EditUser
