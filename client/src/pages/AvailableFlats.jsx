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
        const available = res.data.filter((flat) => !flat.isRented)
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
          <div
            key={flat._id}
            style={{
              display: "flex",
              alignItems: "flex-start",
              padding: "1rem",
              marginBottom: "1.5rem",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }}
          >
            <div style={{ flex: 1 }}>
              <p style={{ margin: "0 0 .5rem", fontSize: "1.1rem", fontWeight: "600" }}>
                Flat Number: {flat.number}
              </p>
              <p style={{ margin: "0 0 .5rem" }}>Status: Available</p>
              <p style={{ margin: "0 0 1rem" }}>
                Price: <strong>{flat.price} BHD/month</strong>
              </p>

              <Link to={`/book/${flat._id}`} style={{ textDecoration: "none" }}>
                <button style={{
                  padding: "0.5rem 1rem",
                  border: "none",
                  borderRadius: "4px",
                  backgroundColor: "purple",
                  color: "#fff",
                  cursor: "pointer"
                }}>
                  Book Now
                </button>
              </Link>
            </div>

            {flat.flatImages?.length > 0 && (
              <div
                style={{
                  display: "flex",
                  overflowX: "auto",
                  gap: "0.5rem",
                  marginLeft: "1rem",
                  maxWidth: "400px"
                }}
              >
                {flat.flatImages.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Flat ${flat.number} view ${idx + 1}`}
                    style={{
                      width: "120px",
                      height: "80px",
                      objectFit: "cover",
                      borderRadius: "4px",
                      flexShrink: 0
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        ))
      ) : (
        <p>No available flats in this branch.</p>
      )}
    </div>
  )
}

export default AvailableFlats
