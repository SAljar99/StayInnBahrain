import { useEffect, useState } from "react"
import { GetHotelBranches  } from "../services/HotelBranchService"
import { useNavigate } from "react-router-dom"

const HotelBranches = () => {
  const [branches, setBranches] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetHotelBranches()
      setBranches(data)
    }
    fetchData()
  }, [])

  return (
    <div className="branches">
      <h2>Hotel Branches</h2>
      {branches.length ? (
        <ul>
          {branches.map((branch) => (
            <li key={branch._id}>
              <h3>{branch.name}</h3>
              <p>{branch.address}</p>
              <a
                href={branch.location}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Map
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading branches...</p>
      )}
    </div>
  )
}

export default HotelBranches
