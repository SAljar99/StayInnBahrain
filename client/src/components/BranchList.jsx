import { Link } from 'react-router-dom'

const BranchList = ({ branch }) => {
  return (
    <div className="branch-card">
      <h2>{branch.name}</h2>
      <p>
        <a href={branch.location} target="_blank" rel="noopener noreferrer">
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
