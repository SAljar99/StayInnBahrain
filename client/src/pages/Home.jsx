import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home" style={{ textAlign: 'center', padding: '2rem' }}>
      {/* Logo at top */}
      <img
        src="/images/Logo.png"
        alt="StayInn Bahrain Logo"
        style={{ maxWidth: '200px', marginBottom: '1.5rem' }}
      />

      <h1>Welcome to StayInn Bahrain</h1>
      <p>Select a city to view available branches:</p>
      <div className="city-links" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
        <Link to="/branches/Manama">
          <button style={{ padding: '0.5rem 1rem', borderRadius: '4px', border: 'none', backgroundColor: 'purple', color: '#fff', cursor: 'pointer' }}>
            View Manama Branches
          </button>
        </Link>
        <Link to="/branches/Muharraq">
          <button style={{ padding: '0.5rem 1rem', borderRadius: '4px', border: 'none', backgroundColor: 'purple', color: '#fff', cursor: 'pointer' }}>
            View Muharraq Branches
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Home
