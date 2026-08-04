import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='navbar'>
      <h2>My App</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  )
}

export default Nav
