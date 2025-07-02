import { Link } from 'react-router-dom'

const Nav = ({ user, handleLogOut }) => {
  let userOptions

  if (user) {
    userOptions = (
      <nav>
        <h3>Welcome {user.fullName}!</h3>
        <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/mybookings">My Bookings</Link>
                  <Link to="/about">About</Link>

        <Link onClick={handleLogOut} to="/">
          Sign Out
        </Link>
      </nav>
    )
  }

  const publicOptions = (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/signin">Sign In</Link>
            <Link to="/about">About</Link>

    </nav>
  )

  return (
    <header>
    
      {user ? userOptions : publicOptions}
    </header>
  )
}

export default Nav
