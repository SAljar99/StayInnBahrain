import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BranchList from '../components/BranchList'
import axios from 'axios'

const HotelBranches = ({ user }) => {
  const { city } = useParams()
  const [branches, setBranches] = useState([])

  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/branches?city=${city}`)
        setBranches(res.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchBranches()
  }, [])

  return (
    <div className="hotel-branches">
      <h1>{city} Branches</h1>
      <div className="branches-container">
        {branches.length > 0 ? (
          branches.map((branch) => (
            <BranchList key={branch._id} branch={branch} />
          ))
        ) : (
          <p>Loading branches...</p>
        )}
      </div>
    </div>
  )
}

export default HotelBranches
