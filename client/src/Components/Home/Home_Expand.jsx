import React, { Component } from 'react';
import Carousel from "react-multi-carousel";

// import CategoryLinks from './CategoryLinks';
import HomeFlyer from './HomeFlyer/HomeFlyer';
import MissionStatement from '../common/missionStatement/MissionStatement';
import MyTabs from '../common/tabs';

// import intLunch from '../../assets/Home/Intlunch24.png';
import spaNsip from '../../assets/Home/spa&sip_Instagram.png';

import './home.css';

/* const tabs = [
  { _id: 'events', title: 'Previous Events' },
  { _id: 'give', title: 'Give' },
  { _id: 'get-invloved', title: 'Get Involved' },
  { _id: 'testimonies', title: 'Testimonies' },
] */

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const aboutInfo = [
  {
    id: 1,
    title: 'Who We Are',
    description: `Shalom Ministry is a nonprofit organization whose Ambassadors compassionately listen to the individuals we serve to understand their unique needs, leading to their transformation.`
  },
  {
    id: 2,
    title: 'What We Do',
    description: `Create experiences for people to be edified, empowered, invigorated, transformed, and healed.
    Facilitate an environment for people to gather and foster community, fellowship, oneness, and unity.
    Give generously to our local and international communities who are in need.
    Pray daily and fast.
    `
  }
];

class Home extends Component {
  render() {
    return (
      <div className="relative bg-neutral-50 w-screen pt-10 lg:pt-16">
        <HomeFlyer />
        {/* <CategoryLinks /> */}
        <MyTabs />
        <div className='bg-white w-3/4 mx-auto shadow-md shadow-fuchsia-950 rounded rounded-md p-4'>
          <h2 className='text-3xl font-bold m-4'>Upcoming Events</h2>

          <Carousel responsive={responsive} className='px-6 py-6'>
            <div className='mx-3 h-full flex'><img className='rounded-sm my-auto outline outline-offset-4 outline-neutral-300' src={spaNsip} alt="spaNsip" /></div>
          </Carousel>
        </div>
        <MissionStatement />

        <div className='flex flex-row justify-center space-x-24 px-4 w-screen mb-12'>
          {
            aboutInfo.map(item =>
              <div key={item.id} className='border border-neutral-300 border-4 w-1/3 p-20 px-20 pt-12 rounded shadow shadow-lg shadow-fuchsia-950 rounded rounded-md' >
                <h2 className='text-center font-bold text-2xl mb-6 tracking-wider uppercase'>{item.title}</h2>
                <p className='text-justify'>{item.description}</p>
              </div>)
          }
        </div>
      </div>
    );
  }
}

export default Home;