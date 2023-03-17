import React from 'react';
import FooterSection from './FooterSection';
import { useLocation, NavLink } from 'react-router-dom';

import './Footer.css';

/* const challenges = [
  {
    title: 'React Demo Tic-Tac-Toe',
    link: 'https://demo-react-tic-tac-toe-demo.netlify.app/',
  },
  { title: 'Product Sorter', link: 'https://product-sorter.netlify.app/' },
  { title: 'Forecast', link: 'https://rapidapi-forecast.herokuapp.com/' },
  { title: 'Word Manifest', link: 'https://word-manifest.netlify.app/' },
  {
    title: 'Fisher Catches',
    link: 'https://my-fisher-catches.herokuapp.com/',
  },
]; */

const waysToGive = [
  /*  {
    title: 'Wiki Blog',
    githubCode: 'https://github.com/Cybre3/KingsWikiApp',
    link: 'https://kings-wiki-blog.herokuapp.com/',
  },
  {
    title: '3dfmb',
    link: 'http://www.3dfmb.com',
  },
  {
    title: 'Rubix Cube',
    githubCode: 'https://github.com/Cybre3/cubeExpressGen',
    link: 'https://kings-cube-app.herokuapp.com/',
  }, */
  /*    {
      title: "Zephlipgloss",
      description: "Eccomerce Lipgloss website",
      link: "https://61b98b11d3e7375e5af0e4b7--zephlipgloss-client.netlify.app",
      githubCode: "https://github.com/Cybre3/Zephlipgloss/tree/admin",
      image:
        "https://d33wubrfki0l68.cloudfront.net/61b98b11d3e7375e5af0e4b7/screenshot_2021-12-15-06-31-17-0000.png",
    }, */
  // {
  //   title: 'Course Enroll',
  //   githubCode: 'https://github.com/Cybre3/KingsVideoTutorialApp',
  //   link: 'https://kings-video-course-app.herokuapp.com/',
  // },
  {
    title: 'Zelle',
    data: '786-400-4072',
    link: '/',
  },
  {
    title: 'CashApp',
    data: 'SHALOM99MINISTRY',
    link: '/',
  },
];

const contactUs = [
  { title: 'Phone:', data: '786-400-4072' },
  { title: 'Email:', data: 'shalom9ministry@gmail.com' },
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
    <footer className="footer-container">
      <div className="">
        <div className="col">
          <a href="https://www.facebook.com">
            <i className="fa fa-facebook-square"></i>
          </a>
          <a href="https://www.linkedin.com">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/shalom9ministry/?next=%2F">
            <i className="fa fa-instagram"></i>
          </a>
        </div>
        <div className="footer-sections">
          <FooterSection header="Ways to Give" list={waysToGive} />
          <FooterSection header="Contact Us" list={contactUs} />
        </div>
        <img
          className="footer-est-logo"
          src={require('../../assets/Footer/SM_Graphic Kit_2022_transparent.png')}
          alt=""
        />
        <NavLink className='privacy-policy' to='/'>Privacy & Liability</NavLink>
        {/* add privacy link under est logo */}
      </div>
    </footer>
  );
}

export default Footer;
