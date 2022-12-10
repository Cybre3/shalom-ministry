import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import navLogo from '../assets/Nav/SM-Logo.png';
import './nav.css';

const Nav = (props) => {
  return (
    <div className="navbar">
      <NavLink className="nav-ministry-logo-name" to="/">
        <img src={navLogo} alt="shalom ministry logo" className="nav-ministry-logo" />
        <div className="nav-ministry-name">
          <span>
            SHALOM MiNiSTR<span className="y">y</span>
          </span>
          <span className="nav-ministry-slogan">Movin' 4ward</span>
        </div>
        <div className="nav-login-register">
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
          <span className="nav-link">or</span>
          <NavLink className="nav-link" to='/register'>Register</NavLink>
        </div>
      </NavLink>
      <div className="page-links">
        <a href="/" className="nav-link no-arrow">
          Home
        </a>
        <a href="/" className="nav-link">
          About Us
        </a>
        <a href="/" className="nav-link">
          Events
        </a>
        <a href="/" className="nav-link">
          Give
        </a>
        <a href="/" className="nav-link">
          Contact Us
        </a>
        <a href="/" className="nav-link">
          Serve
        </a>
      </div>
    </div>
  );
};

export default Nav;
