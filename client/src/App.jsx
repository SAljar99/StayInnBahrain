import { useState, useEffect } from "react"
import { Route, Routes } from "react-router"
import { useLocation } from "react-router-dom"
import Nav from "./components/Nav"
import Register from "./pages/Register"
import SignIn from "./pages/SignIn"
import HotelBranches from "./pages/HotelBranches"
import BranchList from "./components/BranchList"
import Home from "./pages/Home"
import "./App.css"
import { CheckSession } from "./services/Auth"
import BookingForm from "./pages/BookingForm"
import AvailableFlats from "./pages/AvailableFlats"
import Dashboard from "./pages/Dashboard"
import EditUser from "./pages/EditUser"
import MyBookings from './pages/MyBookings'


const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem("token")
    // Check if token exists before requesting to validate the token
    if (token) {
      checkToken()
    }
  }, [])

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    localStorage.clear()
  }

  const checkToken = async () => {
    //If a token exists, sends token to localStorage to persist logged in user
    const user = await CheckSession()
    setUser(user)
  }

  const BranchListWithCity = () => {
    const location = useLocation()
    const city = location.state?.city || "Manama"
    return <BranchList city={city} />
  }

  return (
    <>
      <Nav user={user} handleLogOut={handleLogOut} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/branches/:city" element={<HotelBranches />} />
          <Route
            path="/branches/:branchId/flats"
            element={<AvailableFlats />}
          />
          <Route path="/book/:flatId" element={<BookingForm />} />
          <Route path="/dashboard" element={<Dashboard user={user} />} />
          <Route path="/edit/:user_id" element={<EditUser />} />
          <Route path="/my-bookings" element={<MyBookings />} />
        </Routes>
      </main>
    </>
  )
}

export default App
