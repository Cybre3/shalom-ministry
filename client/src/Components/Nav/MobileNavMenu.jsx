import React from 'react';
import { NavLink } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Menu, Transition } from '@headlessui/react';

import { TOTAL_SCREENS } from '../../utilities/screens';
// import { generateUserOptions } from './userOptions';

function MobileNavMenu(props) {
  return (
    <div className='fixed flex flex-row bottom-0 right-0 left-0 w-screen justify-around bg-purple-950 z-10 p-6 text-white lg:hidden overflow-x-hidden'>
      {TOTAL_SCREENS.map((screen, index) => (

        <NavLink
        key={index}
          className=""
          to={`/${screen.path}`}
        >
          {screen.icon}

        </NavLink>

      ))}
    </div>
  );
}

export default MobileNavMenu;
