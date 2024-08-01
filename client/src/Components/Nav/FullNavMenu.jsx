import React from 'react';
import { NavLink } from 'react-router-dom';

import { TOTAL_SCREENS } from '../../utilities/screens';

import navLogo from '../../assets/Nav/SM-Logo.png';

function FullNavMenu(props) {
   const getHeaderOptions = () => {
     return TOTAL_SCREENS.map((screen) => (
       <div
         key={screen.screen_name}
         className="p-6 px-8 text-white lg:mx-1 lg:rounded-sm lg:border-b-2 lg:border-transparent lg:px-6 lg:pt-2 lg:text-black lg:transition lg:duration-300 lg:ease-in-out lg:hover:border-fuchsia-950"
       >
         <NavLink className="active:group/nav:hidden" to={`/${screen.path}`}>
           {screen.screen_name}
         </NavLink>
       </div>
     ));
   };

   
  return (
    <div
      className="absolute z-10 hidden w-full items-center justify-between p-2 pr-12 lg:flex lg:transition lg:duration-300 lg:ease-in-out"
      id="navbar"
    >
      <NavLink className="transition duration-300 ease-in-out flex justify-center items-center space-x-2 text-blue-900" to="/">
        <img src={navLogo} alt="shalom ministry logo" className="h-16 w-16 rounded-50 bg-white" />
        <span className='text-4xl'>SHALOM MiNiSTRY</span>
      </NavLink>
      <div className="flex pt-4 text-xl" id="nav-options">
        {getHeaderOptions()}
      </div>
    </div>
  );
}

export default FullNavMenu;