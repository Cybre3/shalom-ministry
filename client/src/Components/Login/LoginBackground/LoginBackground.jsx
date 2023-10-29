import React, { Component, Fragment } from 'react';

import pic1 from '../../../assets/Login/WhatsApp Image 2023-02-28 at 8.41.46 PM.jpeg';
import pic2 from '../../../assets/Login/WhatsApp Image 2023-02-28 at 8.57.18 PM.jpeg';

import './background.css';

class LoginBackground extends Component {
  spanFill = [
    {
      _id: 1,
      data: (
        <Fragment>
          {' '}
          The Spirit of the Lord God is upon me; because the Lord hath anointed me to preach good
          tidings unto the meek; he hath sent me to bind up the brokenhearted, to proclaim liberty
          to the captives, and the opening of the prison to them that are bound; <br /> <br />
          Isaiah 61:1 KJV
        </Fragment>
      ),
    },
    {
      _id: 2,
      data: <img src={pic1} alt="" />,
      picPosition: 'login-back-pic-right',
    },
    {
      _id: 3,
      data: <img src={pic2} alt="" />,
      picPosition: 'login-back-pic-left',
    },
    {
      _id: 4,
      data: (
        <Fragment>
          The Spirit of the Lord is upon me, because he hath anointed me to preach the gospel to the
          poor; he hath sent me to heal the brokenhearted, to preach deliverance to the captives,
          and recovering of sight to the blind, to set at liberty them that are bruised <br />{' '}
          <br /> Luke 4:18 JKV
        </Fragment>
      ),
    },
  ];
  render() {
    return (
      <div className="script-container hidden bg-shalom-lavendar-less lg:mt-32 lg:grid lg:h-screen lg:w-screen lg:auto-cols-auto lg:grid-rows-2 lg:gap-0.5 lg:border-2 lg:border-black">
        {this.spanFill.map((span) => (
          <span id={span.picPosition} key={span._id} className="lg:h-full">
            {span.data}
          </span>
        ))}
      </div>
    );
  }
}

export default LoginBackground;
