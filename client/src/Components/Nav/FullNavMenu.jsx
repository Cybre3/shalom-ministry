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
      <NavLink
        className="flex items-center justify-center text-blue-900 transition duration-300 ease-in-out"
        to="/"
      >
        <img src={navLogo} alt="shalom ministry logo" className="h-12 w-12 rounded-50 bg-white" />
        <span className="text-2xl">SHALOM MINISTRY</span>
      </NavLink>
      <div className="text-lg flex items-center pt-4" id="nav-options">
        {getHeaderOptions()}
        <div className="p-6 px-8 text-white lg:mx-1 lg:rounded-sm lg:border-b-2 lg:border-transparent lg:px-6 lg:pt-2 lg:text-black lg:transition lg:duration-300 lg:ease-in-out lg:hover:border-fuchsia-950">
          <a className="active:group/nav:hidden" href="https://shalom-ministry.ck.page/af60828f2f">
            Don't Miss a Beat
          </a>
        </div>
      </div>
    </div>
  );
}

export default FullNavMenu;
