import React, { Component } from 'react';
import MyCalender from '../../utilities/calendar';
import UpcomingEvents from './UpcomingEvents';
import spaNsip from '../../assets/Events/SSS25-Save-The-Date.jpg';


import smLogo from '../../assets/SM-Logo.png';

class Events extends Component {
  render() {
    return (
      <div className="h-full w-screen">
        {/* Event Carousel */}
        <div className="mb-20 pt-16 lg:pt-32">
          <UpcomingEvents />
        </div>

        <div className="mb-20">
          <div className={window.innerWidth > 1024 ? 'flex' : 'flex-col'}>
            <h2 className="my-auto bg-black px-10 py-24 text-center text-3xl font-bold uppercase text-white lg:bg-[length:400px_250px]">
              Shalom Ministry's Spring Spa N' Sip
            </h2>
            <p className="leading-16 text-md border-4 border-black bg-white bg-shalom-gradient bg-[length:250px_350px] bg-[250px_275px] bg-no-repeat bg-origin-border px-10 py-16 text-justify lg:w-2/5 lg:border-l-2 lg:bg-[length:350px_450px] lg:bg-[-100px] lg:px-24 lg:py-10 lg:text-center">
              <br />
              <img src={spaNsip} alt="spaNsipPhoto" className='w-full' />
              {/* <i className="text-justify text-sm">
                👇 RSVP, donate, or pay it forward using the link 👇
              </i>

              <br />
              <br />
              <a
                className="text-center font-bold uppercase italic text-blue-600"
                href="https://www.zeffy.com/ticketing/shalom-ministrys-international-luncheon--2025"
              >
                {window.innerWidth > 1024
                  ? `*Shalom Ministry's International Luncheon 2025 RSVP*`
                  : `*International Luncheon 2025 RSVP*`}
              </a> */}
            </p>
          </div>
        </div>

        {/* Black Divider */}
        <div
          className={`flex h-72 items-end justify-center bg-black pb-6 text-white ${
            window.innerWidth < 1024 ? 'hidden' : 'block'
          }`}
        >
          <div className="flex items-center">
            <img src={smLogo} alt="smLogo" className="inline-block h-20 w-16" />
            <span className="h-10 w-fit text-4xl uppercase">Shalom Ministry Calendar</span>
            <img src={smLogo} alt="smLogo" className="h-20 w-16" />
          </div>
        </div>

        {/* Shalom Calendar */}
        <div className={`mt-10 ${window.innerWidth < 1024 ? 'hidden' : 'block'}`}>
          <MyCalender />
        </div>
      </div>
    );
  }
}

export default Events;
