import React, { Component } from 'react';
import CategoryCardNoPic from '../common/CategoryCard/CategoryCardNoPic';
import './home.css';
import HomeFlyer from './HomeFlyer/HomeFlyer';
import MissionStatement from './../common/missionStatement/MissionStatement';

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <HomeFlyer />
        <div className="home-category-cards">
          <CategoryCardNoPic title="Events" id="events" />
          <CategoryCardNoPic title="Give" id="give" />
          <CategoryCardNoPic title="Get Involved" id="get-involved" />
          <CategoryCardNoPic title="Testimonies" id="testimonies" />
        </div>
        <MissionStatement />
      </div>
    );
  }
}

export default Home;
/* 
<div className='home'>
      
     </div>
*/
