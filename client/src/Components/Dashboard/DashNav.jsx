import React from 'react'
import { Popover } from '@headlessui/react';
import { NavLink } from 'react-router-dom';

import loginImg from '../../assets/Nav/loginImg.png';

function DashNav(props) {
    const { user } = props;
    return (
        <div className="bg-gray-200 w-full flex text-white">
            <NavLink className='ml-2' to="/">
                <img className='w-10' src={require('../../assets/Nav/SM-Logo.png')} alt="" />
            </NavLink>


            <div className='flex self-center ml-auto mr-3 space-x-3 h-fit w-fit'>
                <NavLink to="settings">
                    <img className='w-6' src={require('../../assets/Dashboard/settingsCogIcon.png')} alt="" />
                </NavLink>

                <Popover className="flex space-y-10">
                    <Popover.Button className="relative w-6 h-fit my-auto">
                        <img src={loginImg} alt="loginImg" />
                    </Popover.Button>

                    <Popover.Panel className="absolute right-2 z-10 flex flex-col rounded-md bg-indigo-950 text-center">
                        {user() && (
                            <NavLink
                                className="no-bg rounded-sm p-5 text-sm text-white hover:bg-neutral-100 hover:text-black lg:px-8"
                                to="/"
                            >
                                Home
                            </NavLink>
                        )}
                        {user() && user().isAdmin ? (
                            <NavLink
                                className="no-bg rounded-sm p-5 text-sm text-white hover:bg-neutral-100 hover:text-black lg:px-8"
                                to="/dashboard"
                            >
                                Dashboard
                            </NavLink>
                        ) : null}

                        {user() && (
                            <NavLink
                                className="no-bg rounded-sm p-5 text-sm text-white hover:bg-neutral-100 hover:text-black lg:px-8"
                                to="/contact"
                            >
                                Support
                            </NavLink>
                        )}
                        {user() && (
                            <NavLink
                                className="no-bg rounded-sm p-5 text-sm text-white hover:bg-neutral-100 hover:text-black lg:px-8"
                                to="/logout"
                            >
                                Logout
                            </NavLink>
                        )}
                    </Popover.Panel>
                </Popover>
            </div>
        </div>
    )
}

export default DashNav
