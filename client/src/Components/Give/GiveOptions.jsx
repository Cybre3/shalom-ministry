import React from 'react';

function GiveOptions(props) {
  return (
    <div className="users-give">
      <h2>Select Donation Option</h2>
      <div className="give-opts">
        <div className="give-opt">
          <h3 className="give-opt-title">Zelle</h3>
          <p>786-400-4072</p>
          {/* <button className="give-opt-btn">Donate</button> */}
        </div>
        <div className="give-opt">
          <h3 className="give-opt-title">Cashapp</h3>
          <p>SHALOM99MINISTRY</p>
          {/* <button className="give-opt-btn">Donate</button> */}
        </div>
      </div>
    </div>
  );
}

export default GiveOptions;
