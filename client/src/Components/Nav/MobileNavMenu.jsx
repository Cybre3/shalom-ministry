import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu, Transition } from '@headlessui/react';

import { TOTAL_SCREENS } from '../../utilities/screens';
import { generateUserOptions } from './userOptions';

import { faBars } from '@fortawesome/free-solid-svg-icons';

function MobileNavMenu(props) {
  return (
    <Menu as="div" className="group/nav relative text-center lg:hidden">
      <div>
        <Menu.Button className="p-2">
          <FontAwesomeIcon className="header-hamburger-bars" icon={faBars} />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute inset-x-0 z-10 mx-auto w-fit rounded-md bg-indigo-950">

          {TOTAL_SCREENS.map((screen) => (
            <Menu.Item key={screen.screen_name}>
              {({ close }) => (
                <div className="p-6 px-8 text-white lg:mx-1 lg:rounded-sm lg:border-b-2 lg:border-transparent lg:px-6 lg:pt-2 lg:text-black lg:transition lg:duration-300 lg:ease-in-out lg:hover:border-slate-900">
                  <NavLink
                    className="active:group/nav:hidden"
                    to={`/${screen.path}`}
                    onClick={close}
                  >
                    {screen.screen_name}
                  </NavLink>
                </div>
              )}
            </Menu.Item>
          ))}

          <div className="flex justify-between">
            {generateUserOptions(props.user).map((option) => (
              <NavLink key={option.screen_name} className="userOption" to={`/${option.path}`}>
                <div className="rounded-sm p-5 text-sm text-white hover:bg-neutral-100 hover:text-black lg:px-8">
                  {option.screen_name}
                </div>
              </NavLink>
            ))}
          </div>

        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default MobileNavMenu;
