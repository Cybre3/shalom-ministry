import React from 'react';
// import { NavLink } from 'react-router-dom';

// import CWATphoto from '../../../assets/Home/CWATphoto.jpg';
// import CWATflyer from '../../../assets/Home/CWAT-Site-Banner-NoPrice.png';
import ministryPhoto1 from '../../../assets/Event-Category-Card.png';
import shine from '../../../assets/mountainBlueBottom.png';

import './homeFlyer.css';

function HomeFlyer(props) {
  return (
    <div className="home-flyer px-1 w-full xl:flex relative overflow-hidden h-fit xl:h-screen">
      <div className="flex w-full h-3/4 after:bg-black/20 after:content-[' '] after:block after:absolute after:top-0 after:left-0 after:w-full after:h-3/4 bg-shalom-watermark bg-[length:1000px_1200px] bg-no-repeat bg-[78%_40%]">

        <span className='animate-slideIn absolute top-[15%] left-1/3 text-5xl font-semibold'>Welcome to</span>
        <span className='animate-slideIn absolute top-1/4 left-[40%] text-7xl text-blue-800 font-extrabold'>Shalom Ministry</span>

        <div className="w-full h-52 xl:h-full">
          <img src={ministryPhoto1} alt="ministryPhoto" className="w-1/2 h-full animate-fadeIn" />
        </div>

        <div className="xl:relative w-full h-60 xl:h-full xl:overflow-hidden">
          <img src={shine} alt="ministryPhoto" className="w-full h-full" />
        </div>

      </div>
    </div>
  );
}

export default HomeFlyer;


/* 

/* <NavLink
          className="absolute bottom-0 xl:bottom-2 xl:right-3 xl:left-auto text-sm mx-auto inset-x-0 text-center z-20 animate-shake-left-right xl:animate-shake-up-down w-fit leading-4"
          to="/registrars/cwat-register/new"
          >
          Register Now!
          <br />
          <span>Click here</span>
          <br /> <i>Payment plan available</i>
        </NavLink> */
/* <div className="block absolute top-96 xl:top-72 xl:-right-16 xl:left-auto xl:bottom-0 mt-2 xl:mt-4 mx-auto inset-x-0 w-72 h-72 xl:w-64 xl:h-64 bg-gradient-to-r from-outer-circle-blue to-outer-circle-teal rounded-full z-10 animate-spin-slow text-transparent">
<div className="absolute bg-white h-98 w-98 xl:inset-px m-auto rounded-full inset-0 z-30">
''
</div>
</div>

*/