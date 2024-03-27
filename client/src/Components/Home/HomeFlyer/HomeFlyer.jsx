import React from 'react';
import test from '../../../assets/Login/WhatsApp Image 2023-02-28 at 8.41.46 PM.jpeg';

import './homeFlyer.css';

function HomeFlyer(props) {
  return (
    <div className="mt-20 h-screen">
      <div className='grid grid-rows-2 grid-cols-4'>
        <img src={test} alt="test" className='transition ease-in-out duration-500 grayscale hover:grayscale-0 hover:scale-125 hover:scale-y-150 hover:z-10 scale-y-125'/>
        <img src={test} alt="test" className='transition ease-in-out duration-500 grayscale hover:grayscale-0 hover:scale-125 hover:scale-y-150 hover:z-10 scale-y-125'/>
        <img src={test} alt="test" className='transition ease-in-out duration-500 grayscale hover:grayscale-0 hover:scale-125 hover:scale-y-150 hover:z-10 scale-y-125'/>
        <img src={test} alt="test" className='transition ease-in-out duration-500 grayscale hover:grayscale-0 hover:scale-125 hover:scale-y-150 hover:z-10 scale-y-125'/>
        <img src={test} alt="test" className='transition ease-in-out duration-500 grayscale hover:grayscale-0 hover:scale-125 hover:scale-y-150 hover:z-10 scale-y-125'/>
        <img src={test} alt="test" className='transition ease-in-out duration-500 grayscale hover:grayscale-0 hover:scale-125 hover:scale-y-150 hover:z-10 scale-y-125'/>
        <img src={test} alt="test" className='transition ease-in-out duration-500 grayscale hover:grayscale-0 hover:scale-125 hover:scale-y-150 hover:z-10 scale-y-125'/>
        <img src={test} alt="test" className='transition ease-in-out duration-500 grayscale hover:grayscale-0 hover:scale-125 hover:scale-y-150 hover:z-10 scale-y-125'/>
       
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