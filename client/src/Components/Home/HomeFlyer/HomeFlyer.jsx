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
        <div className="ministry-title">
          <h2 className="ministry-name">SHALOM MiNiSTRY</h2>
          <h5 className="subtitle">presents our first annual</h5>
        </div>

        <h2 className="event-title">
          CONfERENCE WiTH A TWiST: <br /> MOViN'4WARd
        </h2>

        <div className="description">
          <p>
            Ladies, join us for 4 days & 3 nights to ignite a new spark in your faith through
            memorable experiences including dynamic speakers, break-out sessions. delectable dining,
            beach fun, relaxation, prayer walks and much, much more!
          </p>
        </div>

        <div className="location-details">
          <div className="conference-detail">
            <h3 className="label">where:</h3>
            <p className="detail">
              627 Gulf Shore Dr. <br /> Villa Blanco Destin FL. 32540
            </p>
          </div>
          <div className="conference-detail">
            <h3 className="label">when:</h3>
            <p className="detail">Oct 19-22, 2023</p>
          </div>
          <div className="conference-detail">
            <h3 className="label">cost:</h3>
            <p className="detail">$500 lodging & meals included</p>
          </div>
        </div>
        <NavLink to="/CWATregister">Payment plan Available!</NavLink>
      </div>
    </div>
  );
}

export default HomeFlyer;
