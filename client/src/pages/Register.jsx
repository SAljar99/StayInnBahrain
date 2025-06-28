import { useState } from "react"
import { RegisterUser } from "../services/Auth"
import { useNavigate } from "react-router-dom"

const Register = () => {
  let navigate = useNavigate()
  const initialState = {
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    cprFront: null,
    cprBack: null,
  }

  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    const { id, value, files } = e.target
    if (files) {
      setFormValues({ ...formValues, [id]: files[0] })
    } else {
      setFormValues({ ...formValues, [id]: value })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append("fullName", formValues.fullName)
    formData.append("email", formValues.email)
    formData.append("phone", formValues.phone)
    formData.append("password", formValues.password)
    formData.append("cprFront", formValues.cprFront)
    formData.append("cprBack", formValues.cprBack)

    await RegisterUser(formData)
    setFormValues(initialState)
    navigate("/signin")
  }

  return (
    <div className="col register">
      <img src="/images/register.png" alt="Register" />
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="input-wrapper">
          <label htmlFor="fullName">Full Name</label>

          <input
            onChange={handleChange}
            id="fullName"
            type="text"
            placeholder="John Doe"
            value={formValues.fullName}
            required
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="phone">Phone</label>
          <input
            onChange={handleChange}
            id="phone"
            type="text"
            value={formValues.phone}
            required
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            id="email"
            type="email"
            placeholder="example@example.com"
            value={formValues.email}
            required
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            type="password"
            id="password"
            value={formValues.password}
            required
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            onChange={handleChange}
            type="password"
            id="confirmPassword"
            value={formValues.confirmPassword}
            required
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="cprFront">CPR Front Image</label>
          <input
            onChange={handleChange}
            id="cprFront"
            type="file"
            accept="image/*"
            required
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="cprBack">CPR Back Image</label>
          <input
            onChange={handleChange}
            id="cprBack"
            type="file"
            accept="image/*"
            required
          />
        </div>

        <button
          disabled={
            !formValues.email ||
            (!formValues.password &&
              formValues.password === formValues.confirmPassword)
          }
        >
          Register
        </button>
      </form>
    </div>
  )
}

export default Register
