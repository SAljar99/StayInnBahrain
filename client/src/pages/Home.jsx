import { Link } from 'react-router-dom'

const Home = () => {
  return (
   <div className="home">
  <h1>Welcome to StayInn Bahrain</h1>
  <p>Select a city to view available branches:</p>
  <div className="city-links">
    <Link to="/branches/Manama">View Manama Branches</Link>
    <Link to="/branches/Muharraq">View Muharraq Branches</Link>
  </div>
</div>
  )
}

export default Home
