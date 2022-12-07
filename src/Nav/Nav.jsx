import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import navLogo from '../assets/Nav/SM-Logo.png';
import './nav.css';

const Nav = (props) => {
  return (
    <div className="navbar">
      {/* <div className="back-text">
        We meet the needs of the lost, broken, and wounded as Yeshua’s extension of holistic help to
        those in need. Shalom Ministry is a non-profit organization whose ambassadors
        compassionately listen to the individuals we serve to understand their unique needs, leading
        to their transformation. Our ministry began in 2019, when our founder was sent by Yeshua to
        Eritrea and Ghana, where she preached the Gospel, helped build schools, and provided
        facilities to the underprivileged population of the regions. Thse projects serve as SHALOM
        MINISTRY’s heritage, which is still supported today. Today and tomorrow, we seek to be the
        answer, the missing link, and the hands and feet of Yeshua on Earth.
      </div> */}
      <div className="links">
        <NavLink className="nav-home-logo-text" to='/'>
          <img src={navLogo} alt="shalom ministry logo" className="nav-home-logo" />
          <span>SHALOM MiNiSTR</span>
          <span className="y">y</span>
        </NavLink>
        <div className="page-links">
          <a href="/" className="nav-link">
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
          <span className="nav-link">|</span>
          <NavLink className="nav-link" to='/login'>
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Nav;
