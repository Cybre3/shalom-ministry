import React from 'react';
import FooterSection from './FooterSection';
import { useLocation, NavLink } from 'react-router-dom';

import './Footer.css';

const waysToGive = [
  {
    title: 'Zelle -',
    data: '786-400-4072',
    // link: '/',
  },
  {
    title: 'CashApp -',
    data: 'SHALOM99MINISTRY',
    // link: '/',
  },
];

const contactUs = [
  { title: 'Phone:', data: '786-400-4072' },
  { title: 'Email:', data: 'shalom9ministry@gmail.com' },
];

const links = [
  {
    _id: 1,
    url: 'https://www.facebook.com/profile.php?id=100089261716387',
    class: 'fa fa-facebook-square',
  },
  { _id: 2, url: 'https://www.linkedin.com', class: 'fa fa-linkedin' },
  {
    _id: 3,
    url: 'https://www.instagram.com/shalom9ministry/?next=%2F',
    class: 'fa fa-instagram',
  },
];

function Footer(props) {
  const location = useLocation();
  const dashboardLocation = location.pathname.includes('dashboard') ? location.pathname : null;

  if (
    [
      '/invoices',
      '/invoices/create-new-invoice',
      '/dashboard',
      '/dashboard',
      dashboardLocation,
    ].includes(location.pathname)
  )
    return <></>;

  return (
    <footer className="relative w-full bg-black py-4 text-white">
      <div className="ml-auto mr-0 h-fit w-fit">
        {links.map((link) => (
          <a href={link.url} className="" key={link._id}>
            <i className={`${link.class} w-10 p-2 text-white hover:scale-150`}></i>
          </a>
        ))}
      </div>
      <div className="flex w-full justify-around text-center md:justify-center md:gap-12 lg:gap-20 xl:gap-32">
        <FooterSection header="Ways to Give" list={waysToGive} path="/give/new" />
        <FooterSection header="Contact Us" list={contactUs} path="/contact-us/new" />
      </div>
      <div className="flex-column lg:text-md mx-auto w-fit text-center text-xs text-white md:absolute md:bottom-2 md:left-2 lg:bottom-4 lg:left-4">
        <NavLink to="/">
          <img
            className="mx-auto w-10"
            src={require('../../assets/Footer/SM_Graphic Kit_2022_transparent.png')}
            alt="shalom-ministry-logo"
          />
        </NavLink>
        <NavLink className="italic" to="/">
          Privacy & Liability
        </NavLink>
      </div>
      {/* add privacy link under est logo */}
    </footer>
  );
}

export default Footer;
