import React from 'react';
import { NavLink } from 'react-router-dom';
import { Popover } from '@headlessui/react';

import { generateUserOptions } from './userOptions';
import { TOTAL_SCREENS } from '../../utilities/screens';

import navLogo from '../../assets/Nav/SM-Logo.png';
import loginImg from '../../assets/Nav/loginImg.png';

function FullNavMenu(props) {
   const getHeaderOptions = () => {
     return TOTAL_SCREENS.map((screen) => (
       <div
         key={screen.screen_name}
         className="p-6 px-8 text-white lg:mx-1 lg:rounded-sm lg:border-b-2 lg:border-transparent lg:px-6 lg:pt-2 lg:text-black lg:transition lg:duration-300 lg:ease-in-out lg:hover:border-slate-900"
       >
         <NavLink className="active:group/nav:hidden" to={`/${screen.path}`}>
           {screen.screen_name}
         </NavLink>
       </div>
     ));
   };

   const getUserOptions = (user) => {
     return generateUserOptions(user).map((option) => (
       <NavLink key={option.screen_name} className="userOption" to={`/${option.path}`}>
         <div className="rounded-sm p-5 text-sm text-white hover:bg-neutral-100 hover:text-black lg:px-8">
           {option.screen_name}
         </div>
       </NavLink>
     ));
   };
   
  return (
    <div
      className="absolute z-10 hidden w-full items-center justify-between p-2 pr-12 lg:flex lg:transition lg:duration-300 lg:ease-in-out"
      id="navbar"
    >
      <NavLink className="transition rounded-50 bg-white duration-300 ease-in-out" to="/">
        <img src={navLogo} alt="shalom ministry logo" className="h-16 w-16" />
      </NavLink>
      <div className="flex pt-4" id="nav-options">
        {getHeaderOptions()}
        <Popover className="relative">
          <Popover.Button className="m-2 w-6">
            <img src={loginImg} alt="loginImg" />
          </Popover.Button>
          <Popover.Panel className="absolute right-0 z-10 rounded-md bg-indigo-950 text-center">
            {getUserOptions(props.user)}
          </Popover.Panel>
        </Popover>
      </div>
    </div>
  );
}

export default FullNavMenu;