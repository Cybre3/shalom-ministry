import React, { Component } from 'react';

// import CategoryLinks from './CategoryLinks';
import HomeFlyer from './HomeFlyer/HomeFlyer';
import MissionStatement from './../common/missionStatement/MissionStatement';
import MyTabs from '../common/tabs';

import './home.css';

/* const tabs = [
  { _id: 'events', title: 'Previous Events' },
  { _id: 'give', title: 'Give' },
  { _id: 'get-invloved', title: 'Get Involved' },
  { _id: 'testimonies', title: 'Testimonies' },
] */
class Home extends Component {
  render() {
    return (
      <div className="relative w-screen pt-10 lg:pt-16">
        <HomeFlyer />
        {/* <CategoryLinks /> */}
        <MyTabs />
        <MissionStatement />
      </div>
    );
  }
}

export default Home;