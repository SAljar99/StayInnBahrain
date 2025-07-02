import { Link } from 'react-router-dom'

const branchImages = {
  "HM": '/images/HM.jpg',
  "3900": '/images/threenineoo.jpg',
  "Gold": '/images/Gold.jpg',
  "Aljar Cold Store": '/images/CS.jpg',
  "Cazino Park": '/images/CP.png'
}


const BranchList = ({ branch }) => {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <h3>{branch.name}</h3>

      {branchImages[branch.name] && (
        <img
          src={branchImages[branch.name]}
          alt={`${branch.name} branch`}
          style={{ width: '300px', borderRadius: '8px', marginBottom: '10px' }}
        />
      )}

      <p>
        <a
  href={branch.location}
  target="_blank"
  rel="noreferrer"
  style={{ color: 'purple', textDecoration: 'underline' }}
>
  View on Map 📍
</a>

      </p>

      <Link to={`/branches/${branch._id}/flats`}>
        <button>View Available Flats</button>
      </Link>
    </div>
  )
}

export default BranchList
