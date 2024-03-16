import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './Header.css';
import {  signOut } from 'firebase/auth';
import { database } from '../firebase/FirebaseConfig';
// import { collection } from 'firebase/firestore';

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
 const handleClick1 =() =>
     signOut(database).then (val=>
      window.location.href = '/'
      )
 

  return (
    <nav className={`navbar navbar-expand-lg navbar-Dark bg-lightblue  ${isMobile ? 'mobile' : ''}`}>
      <Link className="navbar-brand" to="/homeAf">
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
            <Link className="nav-link" to="/homeAf">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/features">
              Features
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/order">
              Orders
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/subscription">
              Subscription
            </Link>
          </li>
        </ul>
        <div className='col text-right nav-item'>
            <Link to="/myprofile"
              className="nav-link">
             My Profile
            </Link>
          </div>
        <div className="nav-item">
          <Link 
            className="nav-link" onClick={handleClick1}>
            Logout
          </Link>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
