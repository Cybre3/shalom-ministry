import React from 'react';

function GiveOptions(props) {
  return (
    <div className="users-give mx-auto my-10 box-content w-1/2 rounded-md border border-white px-6 py-4 xl:py-6 shadow-echo sm:w-2/6 xl:-mt-96 xl:w-[12%] xl:px-16 space-y-4 tracking-wide">
      <h2 className="text-xl font-bold">Donation Options</h2>
      <div className="space-y-3 tracking-wider">
        <div>
          <h3 className="font-bold">Zelle</h3>
          <p>786 - 400 - 4072</p>
          {/* <button className="give-opt-btn">Donate</button> */}
        </div>
        <div>
          <h3 className="font-bold">Cashapp</h3>
          <p>SHALOM99MINISTRY</p>
          {/* <button className="give-opt-btn">Donate</button> */}
        </div>
      </div>
    </div>
  );
}

export default GiveOptions;
