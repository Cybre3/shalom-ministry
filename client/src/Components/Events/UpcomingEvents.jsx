import React from 'react';
import Carousel from 'react-multi-carousel';
import { isMobile } from 'react-device-detect';

import calendar from '../../assets/Events/SMC-2025-Calendar.png';
import recurringEvents from '../../assets/Events/SMC-recurring events.png';
import spaNsip from '../../assets/Home/spa&sip_Instagram.png';
// import momNbrunch from '../../assets/Home/mothersDayBrunch.png';
import internationalLuncheon from '../../assets/Events/internationalLuncheon.webp';

import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
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

function UpcomingEvents(props) {
  return (
    <div className="mx-auto h-fit w-screen p-4">
      <div className="mx-auto flex h-full w-4/5 flex-col text-sky-800">
        <div className="mb-5 flex items-end justify-between">
          <h2 className="m-4 mb-2 text-5xl text-center">Upcoming Experiences</h2>

          {/* <p className="mr-4">Notify Me</p> */}
        </div>

        <Carousel
          responsive={responsive}
          className="flex h-72 w-full rounded-xl border-8 border-sky-800 px-2 py-4 lg:h-4/5 lg:py-20"
          showDots={true}
          autoPlay
          autoPlaySpeed={isMobile ? 4500 : 2500}
          centerMode={true}
          infinite={true}
          rewind
          rewindWithAnimation={true}
        >
          <div className="mx-7 lg:mx-6 flex h-full items-center">
            <img className="scale-150 rounded-sm lg:scale-100" src={calendar} alt="calendar" />
          </div>
          <div className="mx-7 lg:mx-6 flex h-full items-center">
            <img
              className="scale-150 rounded-sm lg:scale-100"
              src={recurringEvents}
              alt="recurringEvents"
            />
          </div>
          <div className="mx-7 lg:mx-6 flex h-full items-center">
            <img
              className="scale-150 rounded-sm lg:scale-100"
              src={internationalLuncheon}
              alt="momnbrunch"
            />
          </div>
          <div className="mx-7 lg:mx-6 flex h-full items-center">
            <img className="scale-150 rounded-sm lg:scale-100" src={spaNsip} alt="spaNsip" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default UpcomingEvents;
