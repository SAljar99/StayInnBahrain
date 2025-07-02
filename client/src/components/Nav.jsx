import { Link } from 'react-router-dom'

const Nav = ({ user, handleLogOut }) => {
  const contactInfo = (
    <p style={{
      marginTop: '0.5rem',
      fontSize: '0.9rem',
      color: '#555',
      textAlign: 'center'
    }}>
      Any concerns? don't hesitate to contact me! Saud Yahya Aljar: <a href="tel:33360136">33360136</a> (WhatsApp same number)
    </p>
  )

  const userOptions = (
    <>
      <nav style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <h3>Welcome</h3>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/mybookings">My Bookings</Link>
        <Link to="/about">About</Link>
        <Link onClick={handleLogOut} to="/">
          Sign Out
        </Link>
      </nav>
      {contactInfo}
    </>
  )

  const publicOptions = (
    <>
      <nav style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/about">About</Link>
      </nav>
      {contactInfo}
    </>
  )

  return (
    <header style={{ padding: '1rem', borderBottom: '1px solid #eee' }}>
      {user ? userOptions : publicOptions}
    </header>
  )
}

export default Nav
