import React from 'react'
import Carousel from "react-multi-carousel";

import spaNsip from '../assets/Home/spa&sip_Instagram.png';
import momNbrunch from '../assets/Home/mothersDayBrunch.png';


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



function UpcomingEvents() {
    return (
        <div className='w-screen h-screen mx-auto p-4 mb-20'>
            <div className='w-3/4 h-full mx-auto flex flex-col justify-between items-end text-sky-800'>
                <div className='flex items-end justify-between'>
                    <h2 className='text-5xl m-4 mb-2'>Upcoming Experiences</h2>

                    <p className='mr-4'>Notify Me</p>
                </div>

                <Carousel responsive={responsive} className='w-full h-3/4 px-2 py-4 border border-sky-800 border-8 rounded rounded-xl'>
                    <div className='mx-3 flex scale-y-150'><img className='rounded-sm my-auto' src={spaNsip} alt="spaNsip" /></div>
                    <div className='mx-3 flex'><img className='rounded-sm my-auto' src={momNbrunch} alt="momnbrunch" /></div>
                    <div className='mx-3 h-full flex'><img className='rounded-sm my-auto' src={momNbrunch} alt="momnbrunch" /></div>
                    <div className='mx-3 h-full flex'><img className='rounded-sm my-auto' src={momNbrunch} alt="momnbrunch" /></div>
                    <div className='mx-3 h-full flex'><img className='rounded-sm my-auto' src={momNbrunch} alt="momnbrunch" /></div>
                </Carousel>
            </div>
        </div>
    )
}

export default UpcomingEvents
