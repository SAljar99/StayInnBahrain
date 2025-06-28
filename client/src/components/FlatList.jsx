import { Link } from 'react-router-dom'

const FlatList = ({ flat }) => {
  return (
    <div className="flat-card">
      <Link to={`/book/${flat._id}`}>
        Flat #{flat.number} – {flat.isRented ? 'Unavailable' : 'Available'}
      </Link>
    </div>
  )
}

export default FlatList
