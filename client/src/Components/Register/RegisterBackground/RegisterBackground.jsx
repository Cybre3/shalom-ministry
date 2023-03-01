import React, { Component } from 'react';

import pic1 from '../../../assets/Login/WhatsApp Image 2023-02-28 at 8.41.46 PM.jpeg';
import pic2 from '../../../assets/Login/WhatsApp Image 2023-02-28 at 8.57.18 PM.jpeg';

import './background.css';

class LoginBackground extends Component {
  render() {
    return (
      <div className="script-container">
        <span>
          The Spirit of the Lord God is upon me; because the Lord hath anointed me to preach good
          tidings unto the meek; he hath sent me to bind up the brokenhearted, to proclaim liberty
          to the captives, and the opening of the prison to them that are bound; <br /> <br />
          Isaiah 61:1 KJV
        </span>
        <span>
          <img id="register-back-pic-right" src={pic1} alt="" />
        </span>
        <span>
          <img id="register-back-pic-left" src={pic2} alt="" />
        </span>
        <span>
          The Spirit of the Lord is upon me, because he hath anointed me to preach the gospel to the
          poor; he hath sent me to heal the brokenhearted, to preach deliverance to the captives,
          and recovering of sight to the blind, to set at liberty them that are bruised <br />{' '}
          <br /> Luke 4:18 JKV
        </span>
      </div>
    );
  }
}

export default LoginBackground;
