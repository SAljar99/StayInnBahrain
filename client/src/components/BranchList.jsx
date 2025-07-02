import { Link } from 'react-router-dom'

const branchImages = {
  "HM": '/images/HM.jpg',
  "3900": '/images/threenineoo.jpg',
  "Gold": '/images/Gold.jpg',
  "Aljar Cold Store": '/images/CS.jpg',
  "Cazino Park": '/images/CP.png'
}

const BranchList = ({ branch }) => {
  const imageUrl = branchImages[branch.name]

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h3>{branch.name}</h3>

      {imageUrl && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '10px'
        }}>
          <img
            src={imageUrl}
            alt={`${branch.name} branch`}
            style={{ width: '300px', borderRadius: '8px' }}
          />

       
          <a
            href={branch.location}
            target="_blank"
            rel="noreferrer"
            style={{ marginLeft: '1rem', textDecoration: 'none' }}
          >
            <button style={{
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              backgroundColor: 'purple',
              color: 'white',
              border: 'none',
              cursor: 'pointer'
            }}>
              View on Map 📍
            </button>
          </a>
        </div>
      )}

      <Link to={`/branches/${branch._id}/flats`}>
        <button>View Available Flats</button>
      </Link>
    </div>
  )
}

export default BranchList
