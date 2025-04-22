import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <Link to="/">
            <span className="logo-text">Global Markets Group</span>
          </Link>
        </div>

        <div className={`menu-icon ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <Link to="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link to="/what-we-do" onClick={toggleMenu}>What We Do</Link>
            </li>
            <li className="has-submenu">
              <span>
                Members <i className="fas fa-angle-down"></i>
              </span>
              <ul className="submenu">
                <li>
                  <Link to="/executive-board" onClick={toggleMenu}>Executive Board</Link>
                </li>
                <li>
                  <Link to="/members" onClick={toggleMenu}>Members</Link>
                </li>
                <li>
                  <Link to="/placement" onClick={toggleMenu}>Placement</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/gallery" onClick={toggleMenu}>Gallery</Link>
            </li>
            <li>
              <Link to="/apply" onClick={toggleMenu}>Apply</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 