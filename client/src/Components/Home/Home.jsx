import React, { Component } from 'react';
import homePic from '../../assets/Home/church doris sows into.jpg';
/* import homePic2 from '../../assets/Home/foundation of new school.jpg';
import homePic3 from '../../assets/Home/IMG-20221104-WA0021.jpg'; */
import './home.css';

class Home extends Component {
  render() {
    return (
      <div className="home-picture container">
        <img src={homePic} alt="Shalom ministry sowing" />
      </div>
    );
  }
}

export default Home;
