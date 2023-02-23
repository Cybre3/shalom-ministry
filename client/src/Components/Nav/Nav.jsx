import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import navLogo from '../../assets/Nav/SM-Logo.png';
import './nav.css';

function Nav() {
  const location = useLocation();
  if (
    ['/login', '/register', '/invoices', '/invoices/create-new-invoice'].includes(
      location.pathname
    )
  )
    return <></>;
  return (
    <div className="navbar">
      <div className="nav-ministry-logo-name">
        <NavLink className="nav-ministry-name" to="/">
        <img src={navLogo} alt="shalom ministry logo" className="nav-ministry-logo" />
          {/* <span>
            SHALOM MiNiSTR<span className="y">y</span>
          </span>
          <span className="nav-ministry-slogan">Movin' 4ward</span> */}
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
      </div>
      <div className="invoices-links">
        <NavLink className="nav-link" to="/invoices">
          View Invoices
        </NavLink>
        <NavLink className="nav-link" to="/invoices/create-new-invoice">
          Create Invoice
        </NavLink>
      </div>
      <div className="nav-login-register">
        <NavLink className="nav-link" to="/login">
          {' '}
        </NavLink>
        <div className="login-register-dropdown">
          <NavLink className="no-bg" to="/login">
            Login
          </NavLink>
          <NavLink className="no-bg" to="/register">
            Register
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Nav;
