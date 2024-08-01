import React, { Component } from 'react';

import HomeFlyer from './HomeFlyer/HomeFlyer';
import MissionStatement from './../common/missionStatement/MissionStatement';
import Scripture from '../common/Scripture';
import Branches from '../common/Branches';
import Umbrella from '../common/Umbrella';
// import UpcomingEvents from '../UpcomingEvents';

import './home.css';




class Home extends Component {



  render() {
    return (
      <div className="relative bg-neutral-50 w-screen pt-10 lg:pt-24 text-sky-900">
        <HomeFlyer />

        {/*   <div className='flex col block w-1/2 h-3/4 bg-neutral-500 z-20 mx-auto rounded rounded-md'>
          <img src={spaNsip} alt="test" />
          <NavLink to='/registrars/cwat-register/new' className='bg-white p-4 text-center mx-auto w-1/4 h-fit'>Register Here</NavLink>
        </div> */}

        <MissionStatement />
        <Scripture />
        <Branches />
        <Umbrella />
      {/*   <UpcomingEvents /> */}
      </div>
    );
  }
}

export default Home;