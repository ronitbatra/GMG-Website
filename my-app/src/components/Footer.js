import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-media">
          <p>Follow @gmgatuva on Instagram to stay updated!</p>
          <div className="social-icons">
            <a href="https://www.instagram.com/gmgatuva/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="copyright">
          <p>This organization is a registered student organization of The University of Virginia ©{currentYear} Global Markets Group</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 