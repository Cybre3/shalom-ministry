import React, { Component } from 'react';

import HomeFlyer from './HomeFlyer/HomeFlyer';
import MissionStatement from './missionStatement/MissionStatement';
import Scripture from './Scripture';
import Branches from './Branches';
import Umbrella from './Umbrella';
// import UpcomingEvents from '../UpcomingEvents';

import shOpenHousePic from '../../assets/Home/SMCOH-26TH-SQ.png';

import './home.css';

class Home extends Component {
  render() {
    return (
      <div className="relative w-screen bg-neutral-50 text-sky-900 md:pt-10 lg:pt-24">
        <HomeFlyer />

        <div className="mb-28 h-fit w-screen lg:mb-32 lg:h-screen lg:p-0">
          <img
            className="mx-auto shadow-lg shadow-black lg:w-2/5 lg:border-2 lg:border-gray-300 lg:p-5"
            src={shOpenHousePic}
            alt="ShalomMinistryOpenHousePic"
          />
        </div>

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
