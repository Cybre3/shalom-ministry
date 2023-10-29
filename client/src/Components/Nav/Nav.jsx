import React, { Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import $ from 'jquery';

import MobileNavMenu from './MobileNavMenu';
import FullNavMenu from './FullNavMenu';

import './nav.css';

function Nav(props) {

  const location = useLocation();
  const dashboardLocation = location.pathname.includes('dashboard') ? location.pathname : null;

  if (['/dashboard', dashboardLocation].includes(location.pathname)) return <></>;

  $('#nav-options').hover(
    () => {
      $('#navbar').css('background-color', 'white');
    },
    () => {
      $('#navbar').css('background-color', 'transparent');
    }
  );

  location.pathname !== '/'
    ? $('#navbar').css('box-shadow', '0 0 0.5em rgba(0,0,0,.5)')
    : $('#navbar').css('box-shadow', 'none');

  return (
    <Fragment>
      <MobileNavMenu user={props.user} />
      <FullNavMenu user={props.user} />
    </Fragment>
  );
}

export default Nav;
