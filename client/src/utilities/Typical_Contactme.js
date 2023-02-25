import React from 'react';
import { TypeAnimation } from 'react-type-animation';

class TypicalContactMe extends React.PureComponent {
  render() {
    return (
      <TypeAnimation
        sequence={[
          'Get in touch through 📧',
          2000,
          'OR',
          2000,
          'Explore our social media pages',
          5000,
        ]}
        repeat={Infinity}
      />
    );
  }
}

export default TypicalContactMe;
