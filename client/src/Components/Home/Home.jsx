import React, { Component } from 'react';
import Carousel from "react-multi-carousel";

// import CategoryLinks from './CategoryLinks';
import HomeFlyer from './HomeFlyer/HomeFlyer';
import MissionStatement from './../common/missionStatement/MissionStatement';
import MyTabs from '../common/tabs';

// import intLunch from '../../assets/Home/Intlunch24.png';
import spaNsip from '../../assets/Home/spa&sip_Instagram.png';

import './home.css';
// import Timeline from '../common/Timeline';

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

// const items = [{
//   title: "May 1940",
//   cardTitle: "Dunkirk",
//   url: "http://www.history.com",
//   cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
//   cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
//   media: {
//       type: "IMAGE",
//       source: {
//           url: "http://someurl/image.jpg"
//       }
//   }
// }, ];

class Home extends Component {
  render() {
    return (
      <div className="relative bg-neutral-50 w-screen pt-10 lg:pt-16">
        <HomeFlyer />
        {/* <CategoryLinks /> */}
        <MyTabs />
        <div className='bg-white w-3/4 mx-auto shadow-md shadow-fuchsia-950 rounded rounded-md p-4'>
          <h2 className='text-3xl font-bold m-4'>Upcoming Events</h2>

          <Carousel responsive={responsive} className='px-6'>
            <div className='mx-3 h-full flex'><img className='rounded-sm my-auto outline outline-offset-4 outline-neutral-300' src={spaNsip} alt="spaNsip" /></div>
          </Carousel>
        </div>
        <MissionStatement />
        {/* <Timeline items={items} /> */}
      </div>
    );
  }
}

export default Home;