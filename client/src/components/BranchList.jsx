import { Link } from 'react-router-dom'

const branchImages = {
  "HM": 'https://upload.wikimedia.org/wikipedia/commons/8/8e/HM_Building.jpg',

  '3900': 'https://upload.wikimedia.org/wikipedia/commons/4/40/Hotel_Room_Interior.jpg',

  "Gold": 'https://upload.wikimedia.org/wikipedia/commons/9/99/Golden_Hotel.jpg',

  "AljarColdStore": 'https://upload.wikimedia.org/wikipedia/commons/9/99/Golden_Hotel.jpg',

  "CazinoPark":'https://upload.wikimedia.org/wikipedia/commons/9/99/Golden_Hotel.jpg'


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
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address)}`}
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
