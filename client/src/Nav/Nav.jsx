import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import navLogo from '../assets/Nav/SM-Logo.png';
import './nav.css';

function Nav() {
  const location = useLocation();
  if(['/login', '/register', '/invoices/create-new-invoice'].includes(location.pathname)) return <></>
  return (
    <div className="navbar">
      <div className="nav-ministry-logo-name">
        <img src={navLogo} alt="shalom ministry logo" className="nav-ministry-logo" />
        <NavLink className="nav-ministry-name" to='/'>
          <span>
            SHALOM MiNiSTR<span className="y">y</span>
          </span>
          <span className="nav-ministry-slogan">Movin' 4ward</span>
        </NavLink>
      </div>
      <div className="nav-login-register">
        <NavLink className="nav-link" to="/login">
          Login
        </NavLink>
        <span className="nav-link">or</span>
        <NavLink className="nav-link" to="/register">
          Register
        </NavLink>
      </div>
      <div className="page-links">
        <NavLink to="/" className="nav-link no-arrow">
          Home
        </NavLink>
        <NavLink to="/about-us" className="nav-link no-arrow">
          About Us
        </NavLink>
        <NavLink to="/events" className="nav-link">
          Events
        </NavLink>
        <NavLink to="/give" className="nav-link no-arrow">
          Give
        </NavLink>
        <NavLink to="/contact-us" className="nav-link no-arrow">
          Contact Us
        </NavLink>
        <NavLink to="/serve" className="nav-link">
          Serve
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
