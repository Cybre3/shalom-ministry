import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import navLogo from '../../assets/Nav/SM-Logo.png';
import './nav.css';

function Nav() {
  const location = useLocation();
  const dashboardLocation = location.pathname.includes('dashboard') ? location.pathname : null;

  if (
    [
      '/invoices',
      '/invoices/create-new-invoice',
      '/dashboard',
      '/dashboard',
      dashboardLocation,
    ].includes(location.pathname)
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
        {/*       <NavLink to="/events" className="nav-link">
          TBD
        </NavLink> */}
        <NavLink to="/give" className="nav-link no-arrow">
          Give
        </NavLink>
        {/* <NavLink to="/get-involved" className="nav-link no-arrow">
          Get Involved
        </NavLink> */}
        <NavLink to="/contact-us" className="nav-link no-arrow">
          Contact Us
        </NavLink>
      </div>
      <div className="nav-login-register">
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
