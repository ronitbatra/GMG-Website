import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        // Reset menus when resizing to desktop
        setIsOpen(false);
        setActiveSubMenu(null);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Toggle body scroll when menu is open
  useEffect(() => {
    if (isOpen && isMobile) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isOpen, isMobile]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && !e.target.closest('.header-container')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Reset active submenu when toggling main menu
    if (!isOpen) {
      setActiveSubMenu(null);
    }
  };

  const toggleSubMenu = (menuName, e) => {
    if (isMobile) {
      e.preventDefault();
      setActiveSubMenu(activeSubMenu === menuName ? null : menuName);
    }
  };

  // Close menu when route changes (e.g. when clicking a link)
  const handleNavigation = () => {
    setIsOpen(false);
    setActiveSubMenu(null);
    window.scrollTo(0, 0);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <Link to="/" onClick={handleNavigation}>
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
              <Link to="/" onClick={handleNavigation}>Home</Link>
            </li>
            <li>
              <Link to="/what-we-do" onClick={handleNavigation}>What We Do</Link>
            </li>
            <li className="has-submenu">
              <span onClick={(e) => toggleSubMenu('members', e)}>
                Members <i className={`fas fa-angle-down ${activeSubMenu === 'members' ? 'rotate' : ''}`}></i>
              </span>
              <ul className={`submenu ${activeSubMenu === 'members' ? 'show' : ''}`}>
                <li>
                  <Link to="/executive-board" onClick={handleNavigation}>Executive Board</Link>
                </li>
                <li>
                  <Link to="/members" onClick={handleNavigation}>Members</Link>
                </li>
                <li>
                  <Link to="/placement" onClick={handleNavigation}>Placement</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/gallery" onClick={handleNavigation}>Gallery</Link>
            </li>
            <li>
              <Link to="/apply" onClick={handleNavigation}>Apply</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 