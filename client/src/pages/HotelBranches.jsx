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
        const res = await axios.get(`http://localhost:3001/hotelbranches?city=${city}`)
        setBranches(res.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchBranches()
  }, [city])

  return (
    <div className="hotel-branches">
      <h2>{city} Branches</h2>
      {branches.length ? (
        branches.map(branch => (
          <BranchList key={branch._id} branch={branch} />
        ))
      ) : (
        <p>No branches found in this city.</p>
      )}
    </div>
  )
}

export default HotelBranches
