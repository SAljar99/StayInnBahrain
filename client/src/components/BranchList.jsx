import FlatList from './FlatList'

const BranchList = ({ branch }) => {
  return (
    <div className="branch-card">
      <h2>{branch.name}</h2>
      <p>
  <a href={branch.location}>
     View on Map 📍
  </a>
</p>

      <div className="flats-container">
        {branch.flats.map((flat) => (
          <FlatList key={flat._id} flat={flat} />
        ))}
      </div>
    </div>
  )
}

export default BranchList