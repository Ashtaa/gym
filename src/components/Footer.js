import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './../style/Footer.css'; // Assuming you'll style the footer here

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <h3>Gym Website</h3>
        <p className='footer-p'>Stay connected with us on social media for the latest updates and fitness tips.</p>
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin />
          </a>
        </div>
        <p className="footer-copyright">© {new Date().getFullYear()} Gym Website. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

