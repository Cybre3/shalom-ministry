import React from 'react';

import GiveOptions from './GiveOptions';
import SponsorForm from './SponsorForm/SponsorForm';
import SponsorMessage from './sponsorMessage';

import './give.css';
import SponsorGreeting from './SponsorGreeting';

function Give(props) {
  return (
    <div className="give-container">
      <GiveOptions />

      <div className="sponsors-form">
        <h2>Sponsors</h2>
        <SponsorGreeting />
        <SponsorForm />
        <hr />
        <SponsorMessage />
      </div>
    </div>
  );
}

export default Give;
