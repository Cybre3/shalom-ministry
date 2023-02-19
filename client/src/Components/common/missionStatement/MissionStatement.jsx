import React from 'react';
import './missionStatement.css';

function MissionStatement(props) {
  const uppercaseStatement =
    `We meet the needs of the lost, broken, and wounded as Yeshua’s extension of holistic
            help to those in need. Shalom Ministry is a non-profit organization whose ambassadors
            compassionately listen to the individuals we serve to understand their unique needs,
            leading to their transformation. Our ministry began in 2019, when our founder was sent
            by Yeshua to Eritrea and Ghana, where she preached the Gospel, helped build schools, and
            provided facilities to the underprivileged population of the regions. These projects
            serve as SHALOM MINISTRY’s heritage, which is still supported today. Today and tomorrow,
            we seek to be the answer, the missing link, and the hands and feet of Yeshua on Earth.`.toUpperCase();

  return (
    <div className="mission-statement-container">
      <p className="mission-statement">
        <img src={require('../../../assets/Nav/SM-Logo.png')} alt="" className="about-logo" />
        <h1 className="mission-heading">SHALOM MISSION</h1>
        {uppercaseStatement}
      </p>
    </div>
  );
}

export default MissionStatement;
