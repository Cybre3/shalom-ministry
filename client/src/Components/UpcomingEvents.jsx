import React from 'react';
import Carousel from 'react-multi-carousel';

import calendar from '../assets/Events/SMC-2025-Calendar.png';
import recurringEvents from '../assets/Events/SMC-recurring events.png';
import spaNsip from '../assets/Home/spa&sip_Instagram.png';
import momNbrunch from '../assets/Home/mothersDayBrunch.png';
import internationalLuncheon from '../assets/Events/internationalLuncheon.webp';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function UpcomingEvents() {
  return (
    <div className="mx-auto h-fit w-screen p-4">
      <div className="mx-auto flex h-full w-4/5 flex-col text-sky-800">
        <div className="mb-5 flex items-end justify-between">
          <h2 className="m-4 mb-2 text-5xl">Upcoming Experiences</h2>

          {/* <p className="mr-4">Notify Me</p> */}
        </div>

        <Carousel
          responsive={responsive}
          className="flex h-4/5 w-full rounded-xl border-8 border-sky-800 px-2 py-20"
          showDots={true}
          autoPlay
          autoPlaySpeed={2500}
          centerMode={true}
          infinite={true}
          rewind
          rewindWithAnimation={true}
        >
          <div className="mx-6 flex h-full items-center">
            <img className="flex h-full items-center rounded-sm" src={calendar} alt="calendar" />
          </div>
          <div className="mx-6 flex h-full items-center">
            <img className="rounded-sm" src={recurringEvents} alt="recurringEvents" />
          </div>
          <div className="mx-6 flex h-full items-center">
            <img className="rounded-sm" src={spaNsip} alt="spaNsip" />
          </div>
          <div className="mx-6 flex h-full items-center">
            <img className="rounded-sm" src={internationalLuncheon} alt="momnbrunch" />
          </div>
          <div className="mx-6 flex h-full items-center">
            <img className="rounded-sm" src={momNbrunch} alt="momnbrunch" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default UpcomingEvents;
