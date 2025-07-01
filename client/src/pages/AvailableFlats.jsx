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
          <div key={flat._id} style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem" }}>
            <p><strong>Flat #{flat.number}</strong></p>
            <p>Status: Available</p>
            <p>Price: {flat.price} BHD/month</p>

            {/* Show flat images if available */}
            {flat.flatImages && flat.flatImages.length > 0 && (
              <div style={{ display: "flex", gap: "10px", margin: "10px 0" }}>
                {flat.flatImages.map((img, index) => (
                  <img 
                    key={index} 
                    src={img} 
                    alt={`Flat ${flat.number} view ${index + 1}`} 
                    style={{ width: "150px", height: "auto", borderRadius: "8px" }} 
                  />
                ))}
              </div>
            )}

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
