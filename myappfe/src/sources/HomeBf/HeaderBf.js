import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './Header.css';


const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  return (
    <nav className={`navbar navbar-expand-lg navbar-Dark bg-lightblue  ${isMobile ? 'mobile' : ''}`}>
      <Link className="navbar-brand" to="/">
        WaterOnWay
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/features">
              Features
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Orders
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Subscription
            </Link>
          </li>
        </ul>
        <div className='col text-right nav-item'>
            <Link to="/login"
              className="nav-link">
              My profile
            </Link>
          </div>
        <div className="nav-item">
          <Link to="/Login"
            className="nav-link">
            Login
          </Link>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
