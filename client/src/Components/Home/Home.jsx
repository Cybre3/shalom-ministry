import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Carousel from "react-multi-carousel";

import HomeFlyer from './HomeFlyer/HomeFlyer';
import MissionStatement from './../common/missionStatement/MissionStatement';
import Scripture from '../common/Scripture';

import spaNsip from '../../assets/Home/spa&sip_Instagram.png';
import momNbrunch from '../../assets/Home/mothersDayBrunch.png';

import './home.css';


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

class Home extends Component {



  render() {
    return (
      <div className="relative bg-neutral-50 w-screen pt-10 lg:pt-16">
        <HomeFlyer />

        <div className='flex col block w-1/2 h-3/4 bg-neutral-500 z-20 mx-auto rounded rounded-md'>
          <img src={spaNsip} alt="test" />
          <NavLink to='/registrars/cwat-register/new' className='bg-white p-4 text-center mx-auto w-1/4 h-fit'>Register Here</NavLink>
        </div>
        <MissionStatement />
        <Scripture />

        <div className='w-screen h-screen mt-20'>
          <div className='h-full w-3/4 flex flex-col items-center mx-auto'>

            <h2 className='text-8xl mb-4 text-cyan-600'>MiNiSTRY BRANCHES</h2>

            <div className='p-10 grid grid-rows-2 grid-cols-2 gap-20 gap-x-0 text-center text-black'>
              <div className='w-1/2 mx-auto'>
                <h3 className='text-3xl'>Ghana Community Outreach</h3>
                <p>Breman Elementary School</p>
                <p>Breman Parish Fund</p>
              </div>
              <div className='w-1/2 mx-auto'>
                <h3 className='text-3xl'>Conference With A Twist</h3>
                <p>A retreat style conference for spiritual transformation and healing among a community of believers of all seasons of life, also know as CWAT</p>
              </div>
              <div className='w-1/2 mx-auto'>
                <h3 className='text-3xl'>Community Experiences</h3>
                <p>Local fundraising events and activities, that support our annual CWAT that are focused on  commmunity-building and fellowship</p>
              </div>
              <div className='w-1/2 mx-auto'>
                <h3 className='text-3xl'>Financial Aid Services</h3>
                <p>Offering monetary supplement to those experiencing financial hardship</p>
              </div>
              <div className='w-1/4 mx-auto col-span-full'>
                <h3 className='text-3xl'>In Da Streetz</h3>
                <p>Providing meals, hygiene products, and prayers to our local South Florida homeless communities.</p>
              </div>
            </div>
          </div>
        </div>

       


        <div className='w-3/4 mx-auto p-4 mb-20'>
          <div className='flex justify-between items-end text-sky-800'>
          <h2 className='text-5xl m-4 mb-2'>Upcoming Experiences</h2>

          <p className='mr-4'>Notify Me</p>
          </div>

          <Carousel responsive={responsive} className='px-2 py-4 border border-sky-800 border-4 rounded rounded-lg'>
            <div className='mx-3 h-full flex'><img className='rounded-sm my-auto' src={spaNsip} alt="spaNsip" /></div>
            <div className='mx-3 h-full flex'><img className='rounded-sm my-auto' src={momNbrunch} alt="momnbrunch" /></div>
            <div className='mx-3 h-full flex'><img className='rounded-sm my-auto' src={momNbrunch} alt="momnbrunch" /></div>
            <div className='mx-3 h-full flex'><img className='rounded-sm my-auto' src={momNbrunch} alt="momnbrunch" /></div>
            <div className='mx-3 h-full flex'><img className='rounded-sm my-auto' src={momNbrunch} alt="momnbrunch" /></div>
          </Carousel>
        </div>



      </div>
    );
  }
}

export default Home;