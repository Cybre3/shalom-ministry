import React from 'react';

import paintingAct from '../../../assets/Home/WWSashoy.jpg';
import womanPool from '../../../assets/Home/womanpool.JPG';
import skypray from '../../../assets/Home/skypray smots423.jpg';
import internaionalLunch from '../../../assets/Home/Nadeige Eats.jfif';
// import test from '../../../assets/Login/WhatsApp Image 2023-02-28 at 8.41.46 PM.jpeg';
// import dorisNkids from '../../../assets/Home/dorisNkids.png';
// import churchFam from '../../../assets/Home/church doris sows into.jpg';
// import internationalLunchStaff from '../../../assets/Login/Registration Image 2.jfif';

import './homeFlyer.css';

const flyerItems = [
  { id: 2, src: paintingAct, alt: 'paintingAct image' },
  { id: 1, src: womanPool, alt: 'womanPool image' },
  { id: 3, src: skypray, alt: 'skypray image' },
  { id: 7, src: internaionalLunch, alt: 'internaionalLunch image' },
  // { id: 5, src: churchFam, alt: 'churchFam image' },
  // { id: 6, src: internationalLunchStaff, alt: 'internationalLunchStaff image' },
  // { id: 4, src: dorisNkids, alt: 'dorisNkids image' },
  // { id: 8, src: test, alt: 'test' },
];

function HomeFlyer(props) {
  return (
    <div className="hidden h-auto pt-8 lg:block mb-[-100px]">
      <div className="bg-gradient-to-r from-violet-300 to-blue-300">
        <div className="grid grid-cols-4 p-2 pt-6 pr-6">
          {flyerItems.map((item) => (
            <img
              src={item.src}
              alt={item.alt}
              className="h-4/5 w-full scale-y-125 py-2 grayscale transition duration-500 ease-in-out hover:z-10 hover:scale-125 hover:scale-y-150 hover:rounded hover:border-2 hover:border-white hover:shadow-md hover:shadow-gray-500 hover:grayscale-0"
            />
          ))}
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
