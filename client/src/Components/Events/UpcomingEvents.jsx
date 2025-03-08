import React from 'react';
import Carousel from 'react-multi-carousel';

import calendar from '../../assets/Events/SMC-2025-Calendar.png';
import recurringEvents from '../../assets/Events/SMC-recurring events.png';
import spaNsip from '../../assets/Events/SSS25-Save-The-Date.jpg';
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
      <div className="mx-auto flex h-full flex-col text-sky-800 lg:w-4/5">
        <div className="mb-5 flex items-end justify-between">
          <h2 className="m-4 mb-2 text-center text-5xl">Upcoming Experiences</h2>

          {/* <p className="mr-4">Notify Me</p> */}
        </div>

        <Carousel
          responsive={responsive}
          className="flex h-72 w-full rounded-xl border-sky-800 lg:h-4/5 lg:border-8 lg:px-2 lg:py-20"
          showDots={true}
          autoPlay
          autoPlaySpeed={window.innerWidth  < 1024 ? 4500 : 2500}
          centerMode={window.innerWidth < 1024 ? false : true}
          infinite={true}
          rewind
          rewindWithAnimation={true}
        >
          <div className="mx-20 flex h-full items-center lg:mx-6">
            <img className="scale-150 rounded-sm lg:scale-100" src={calendar} alt="calendar" />
          </div>
          <div className="mx-20 flex h-full items-center lg:mx-6">
            <img
              className="scale-150 rounded-sm lg:scale-100"
              src={recurringEvents}
              alt="recurringEvents"
            />
          </div>
          <div className="mx-20 flex h-full items-center lg:mx-6">
            <img
              className="scale-150 rounded-sm lg:scale-100"
              src={internationalLuncheon}
              alt="momnbrunch"
            />
          </div>
          <div className="mx-20 flex h-full items-center lg:mx-6">
            <img className="scale-150 rounded-sm lg:scale-100" src={spaNsip} alt="spaNsip" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default UpcomingEvents;
