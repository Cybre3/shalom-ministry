import React from 'react';
// import { NavLink } from 'react-router-dom';

// import CWATphoto from '../../../assets/Home/CWATphoto.jpg';
// import CWATflyer from '../../../assets/Home/CWAT-Site-Banner-NoPrice.png';
// import ministryPhoto1 from '../../../assets/Event-Category-Card.png';
// import shine from '../../../assets/mountainBlueBottom.png';

import './homeFlyer.css';

function HomeFlyer(props) {
  return (
    <div className="home-flyer flex justify-center px-1 w-full xl:flex overflow-hidden xl:h-screen h-screen">
      <div className='relative w-1/2 h-1/2 mt-32 p-5 flex items-center justify-start bg-clouds bg-no-repeat bg-cover bg-center rounded rounded-full'>

        <span className='absolute top-28 text-5xl font-semibold'>Welcome to</span>
        <span className='absolute left-14 bottom-32 text-7xl text-fuchsia-950 font-extrabold'>Shalom Ministry</span>

        <div className='rounded rounded-full bg-white w-72 h-72 block bg-shalom-watermark bg-center bg-no-repeat bg-cover border border-fuchsia-950 border-4'></div>
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