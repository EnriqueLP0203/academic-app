import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#f4f4f4' }}>
      <Link to="/">Home</Link> | 
      <Link to="/login">Login</Link> | 
      <Link to="/signup">Signup</Link> | 
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
}

export default Navbar;
