// Footer.js

import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-info">
          <h3>WaterOnWay</h3>
          <p>Your reliable water supply service</p>
        </div>
        <div className="footer-links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/login">Orders</Link></li>
            <li><Link to="/">Contact</Link></li>
          </ul>
        </div>
        </div>
      <div className="footer-bottom">
        <p>&copy; 2023 WaterOnWay. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
