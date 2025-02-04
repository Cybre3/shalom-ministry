import React, { Component } from 'react';
import MyCalender from '../../utilities/calendar';
import UpcomingEvents from '../UpcomingEvents';

import smLogo from '../../assets/SM-Logo.png';

class Events extends Component {
  render() {
    return (
      <div className="h-full w-screen">
        {/* Event Carousel */}
        <div className="mb-20 pt-32">
          <UpcomingEvents />
        </div>

        <div className="mb-20">
          <div className="flex">
            <h2 className="my-auto bg-sky-800 bg-thinGoldBorder bg-[length:400px_250px] bg-center bg-no-repeat px-10 py-24 text-2xl font-bold uppercase text-white">
              Shalom Ministry's International Luncheon
            </h2>
            <p className="leading-16 text-md w-1/2 rounded-l-lg rounded-r-full border-4 border-l-2 border-black bg-white bg-shalom-gradient bg-[length:350px_450px] bg-[-100px] bg-no-repeat bg-origin-border px-24 py-10 text-center">
              <span className="text-lg">
                Be a part of the mission, the Great Commission, by making disciples of all nations
                at this year's International Luncheon! YOU are the disciple to bring others to the
                Kingdom of God. One simple invitation can change everything! And what better way to
                welcome others than by feasting together with food from around the globe?
              </span>
              <br />
              <i className="text-justify text-sm">
                All proceeds go to our Kenya mission! We can't wait to share with you the story of
                our Kenyan farm and the flourishing community around it, all told by VFP Doris who
                is currently, in Kenya!! Bring a friend an empty stomach and great expectation for
                an amazing time!
                <br />
                👇 RSVP, donate, or pay it forward using the link 👇
              </i>

              <br />
              <br />
              <a
                className="font-bold uppercase italic text-blue-600"
                href="https://www.zeffy.com/ticketing/shalom-ministrys-international-luncheon--2025"
              >
                *Shalom Ministry's International Luncheon 2025 RSVP*
              </a>
            </p>
          </div>
        </div>

        {/* Black Divider */}
        <div className="flex h-72 items-end justify-center bg-black pb-6 text-white">
          <div className="flex items-center">
            <img src={smLogo} alt="smLogo" className="inline-block h-20 w-16" />
            <span className="h-10 w-fit text-4xl uppercase">Shalom Ministry Calendar</span>
            <img src={smLogo} alt="smLogo" className="h-20 w-16" />
          </div>
        </div>

        {/* Shalom Calendar */}
        <div className="mt-10">
          <MyCalender />
        </div>
      </div>
    );
  }
}

export default Events;
