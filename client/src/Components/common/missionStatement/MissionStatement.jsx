import React from 'react';
import './missionStatement.css';

function MissionStatement(props) {
  const uppercaseStatement =
    `We meet the needs of the lost, broken, and wounded as Yeshua’s extension of holistic
            help to those in need. Shalom Ministry is a non-profit organization whose ambassadors
            compassionately listen to the individuals we serve to understand their unique needs,
            leading to their transformation. Our ministry began in 2018, when our founder was sent
            by Yeshua to Eritrea and Ghana, where she preached the Gospel, helped build schools, and
            provided facilities to the underprivileged population of the regions. These projects
            serve as SHALOM MINISTRY’s heritage, which is still supported today. Today and tomorrow,
            we seek to be the answer, the missing link, and the hands and feet of Yeshua on Earth.`.toUpperCase();

  return (
    <div className="shadow-inner p-4 shadow-black my-48 xl:my-72 bg-gray-300">

      <div className="mission-statement-container relative my-16 w-11/12 md:w-3/4 lg:w-7/12 xl:w-1/2 2xl:w-5/12 mx-auto pb-12 shadow-lg shadow-white/75 bg-gradient-to-b from-shalom-lavendar-less from-0 via-shalom-sky-blue-less via-45% to-white/50 to-75% text-shalom-dark-purple border-8 border-double border-black rounded-b-sm">

        <div className="mission-statement w-11/12 pt-4 pb-36 px-6 sm:px-10 md:px-16 xl:px-20 mx-auto -mt-3 border-yellow-500 border-double border-8 border-t-0 box-border rounded-b-full bg-gradient-to-b from-white from-30% via-shalom-sky-blue-less via-65% to-shalom-lavendar to-90% text-justify">
          <img
            src={require('../../../assets/Nav/SM-Logo.png')}
            alt=""
            className="w-20 mx-auto mb-4"
          />
          <h1 className="mission-heading">SHALOM MISSION</h1>
          {uppercaseStatement}
        </div>
      </div>
    </div>
  );
}

export default MissionStatement;
