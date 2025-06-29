import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"

const AvailableFlats = () => {
  const { branchId } = useParams()
  const [flats, setFlats] = useState([])

  useEffect(() => {
    const fetchFlats = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3001/flats/byBranch/${branchId}`
        )
        const available = res.data.filter((flat) => flat.isRented === false)
        setFlats(available)
      } catch (err) {
        console.error(err)
      }
    }

    fetchFlats()
  }, [branchId])

  return (
    <div>
      <h2>Available Flats</h2>
      {flats.length > 0 ? (
        flats.map((flat) => (
          <div key={flat._id}>
            <p>Flat #{flat.number}</p>
            <p>Status: Available</p>
            <Link to={`/book/${flat._id}`}>
              <button>Book Now</button>
            </Link>
          </div>
        ))
      ) : (
        <p>No available flats in this branch.</p>
      )}
    </div>
  )
}

export default AvailableFlats
