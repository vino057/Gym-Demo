import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Dumbbell, Menu, X } from 'lucide-react';
import '../styles/navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Trainers', path: '/trainers' },
    { name: 'Membership', path: '/membership' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="navbar">
      <div className="nav-container">

        <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
          <Dumbbell size={29} />
          <span>IRON<span className="gold-text">CORE</span></span>
        </Link>

        <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
          {links.map(link => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}

          <NavLink
            to="/membership"
            className="nav-join"
            onClick={() => setMenuOpen(false)}
          >
            JOIN NOW
          </NavLink>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

      </div>
    </header>
  );
}

export default Navbar;