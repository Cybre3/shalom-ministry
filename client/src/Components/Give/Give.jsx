import React from 'react';

import GiveOptions from './GiveOptions';
import SponsorForm from './SponsorForm';
import SponsorMessage from './sponsorMessage';
import SponsorGreeting from './SponsorGreeting';

import './give.css';

function Give(props) {
  return (
    <div className="give-container flex-column relative h-full items-center bg-shalom-watermark bg-70 bg-[-120%_70%] bg-repeat-y py-20 text-center text-white before:absolute before:inset-0 before:-z-10 before:h-full before:bg-shalom-watermark before:bg-70 before:bg-[215%_25%] before:bg-repeat-y before:content-[''] lg:pt-44 xl:flex xl:justify-around xl:pt-20">
      <GiveOptions />

      <div className="sponsors-form mx-auto my-48 w-10/12 rounded-md border border-white p-10 shadow-lg shadow-black sm:w-3/4 xl:w-5/12">
        <h2 className="text-2xl font-bold">Sponsors</h2>
        <SponsorGreeting />
        <SponsorForm />
        <hr className="mb-4" />
        <SponsorMessage />
      </div>
    </div>
  );
}

export default Give;
