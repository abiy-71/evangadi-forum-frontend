import { Link, useNavigate } from 'react-router-dom';
import { useState,useContext } from 'react';
import { AppState } from '../../App';
import logo from '../../assets/images/evangadi_logo.png';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useContext(AppState);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };


  return (
    <header className="header">
      <div className="header_container">
        <Link to="/" className="logo">
          <img src={logo} alt="Evangadi" />
        </Link>

        <button
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`navigation ${isOpen ? "show" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="#">How it Works</Link>

          {user ? (
            <button onClick={handleLogout}>LOG OUT</button>
          ) : (
            <button onClick={() => navigate("/login")}>SIGN IN</button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;