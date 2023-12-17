import React from 'react';
import './Footer.css'; 
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
    const date = '18 December 2023';

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/#">Home</a></li>
            <li><a href="/#">Search</a></li>
            <li><a href="/#">Sell</a></li>
            <li><a href="/#">Reach Us</a></li>
          </ul>
        </div>

        <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-icons">
                <a href="/#" rel="noopener noreferrer"><FaFacebook /></a>
                <a href="/#" rel="noopener noreferrer"><FaTwitter /></a>
                <a href="/#" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="/#" rel="noopener noreferrer"><FaGithub /></a>
            </div>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>Email: example@example.com</p>
          <br />
          <p>Phone: +91 xxxxx xxxxx</p>
        </div>
      </div>

      <div className="footer-bottom">
      <p>Last Update - {date}. TradeTreasure</p>
    </div>
    </footer>
  );
}

export default Footer;