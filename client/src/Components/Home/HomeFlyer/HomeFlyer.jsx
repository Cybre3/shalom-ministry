import React from 'react';
import { NavLink } from 'react-router-dom';
import CWATphoto from '../../../assets/Home/CWATphoto.jpg';
import './homeFlyer.css';

function HomeFlyer(props) {
  return (
    <div className="home-flyer">
      <div className="home-flyer-picture">
        <img src={CWATphoto} alt="CWATphoto" />
      </div>
      <div className="home-flyer-description">
        <NavLink className='register-now' to="/CWATregister">
          Register Now! <br /> <i>Payment plan available</i>
        </NavLink>
        <div className="home-outer-spin-circle">
          <div className="home-inner-spin-circle"></div>
        </div>
      </div>
    </div>
  );
}

export default HomeFlyer;
