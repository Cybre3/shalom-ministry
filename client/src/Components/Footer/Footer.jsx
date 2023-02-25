import React from 'react';
import FooterSection from './FooterSection';
import { useLocation } from 'react-router-dom';

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

const projects = [
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
    githubCode: '',
    link: '/',
  },
  {
    title: 'CashApp',
    githubCode: '',
    link: '/',
  },
];

const upcomingProjs = [{ title: 'Phone:' }, { title: 'Email:' }];

function Footer(props) {
  const location = useLocation();
  if (
    ['/login', '/register', '/invoices', '/invoices/create-new-invoice'].includes(location.pathname)
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
          <FooterSection header="Ways to Give" list={projects} />
          <FooterSection header="Contact Us" list={upcomingProjs} />
        </div>
        <em>Est. 2018</em>
      </div>
    </footer>
  );
}

export default Footer;
