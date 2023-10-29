import React from 'react';
import { NavLink } from 'react-router-dom';

const SponsorGreeting = () => {
  return (
    <div className="mb-10 relative">
      <i>
        Questions or concerns?{' '}
        <br className='xl:hidden'/>
        <NavLink
          to="/contact-us/new"
          className="px-4 py-1 bg-blue-400 inline-block mt-3 rounded-lg outline outline-2 outline-white xl:absolute xl:ml-2 xl:mt-0 "
        >
          ➡ Contact Us ⬅{' '}
        </NavLink>
      </i>
    </div>
  );
};

export default SponsorGreeting;
