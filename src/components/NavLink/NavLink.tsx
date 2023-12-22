import { Link } from 'react-router-dom';

export default function NavLink() {
  return (
    <div>
      <nav className="nav__header">
        <ul>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
        </ul>
      </nav>
    </div>
  );
}
