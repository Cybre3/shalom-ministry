import React, { Component, Fragment } from 'react';

import Ambassador from './Ambassador';

import dorisPresident from '../../assets/Aboutus/Doris.jpg';
import rebekaVP from '../../assets/Aboutus/Rebeka.JPG';
import mayaTreasurer from '../../assets/Aboutus/Maya.webp';
import zecheriah from '../../assets/Aboutus/Zecheriah.jpg';
import tonya from '../../assets/Aboutus/Tonya.jpeg';

import './aboutUs.css';

const ambassadors = [
  {
    _id: 1,
    name: 'Doris E. Singh',
    title: 'CEO',
    photo: dorisPresident,
    bio: (
      <Fragment>
        {/*  Doris E. Singh is the CEO of Shalom Ministry Corp. <br /> */}
        Doris compassionately serves the needs of those in her community and abroad. In doing so,
        she oversees a worldwide bible study and is a spiritual coach, teacher, counselor, and
        mentor, among other positions. <br />
        In Asankagraw and Bremen, Ghana, she has built and furnished a school and cafeteria,
        assisted with starting family businesses, and financially supported hospitals for widows and
        orphans. Her decades of mental health experience has also impacted her service to Shalom
        Ministry Corporation.
      </Fragment>
    ),
  },
  {
    _id: 2,
    name: 'Rebeka Fleurjuste',
    title: 'Vice President',
    photo: rebekaVP,
    bio: (
      <Fragment>
        {/*      Rebeka Fleurjuste serves as Vice President to Shalom Ministry.
        <br /> */}
        She brings years of ministerial experience from Cornerstone Haitian Baptist Church where she
        also serves as a praise and worship leader and Vice President of the Young Adults Ministry.
        Rebeka inspires to demonstrate the love of Jesus Christ through Shalom’s mission which is to
        holistically heal everyone that encounters this faith filled ministry.
      </Fragment>
    ),
  },
  {
    _id: 3,
    name: 'Maya Singh',
    title: 'Treasurer',
    photo: mayaTreasurer,
    bio: (
      <Fragment>
        {/*  Maya Singh serves as Treasurer to Shalom Ministry Corp. <br /> */}
        Her gifts of wisdom, administration, giving, and generosity empower her to fulfill her
        duties in excellence. With the foundations of her faith and medical background, Maya
        welcomes the mystery of miracles while utilizing her knowledge, skills, and expertise to
        ensure the health and well-being of those uplifted by Shalom Ministry.
      </Fragment>
    ),
  },
  {
    _id: 4,
    name: 'Zechariah Singh',
    title: 'Secretary',
    photo: zecheriah,
    bio: (
      <Fragment>
        {/*  Zechariah Singh serves as the Secretary of Shalom Ministry Corp. <br /> */}
        His service allows him to exhibit and cultivate his skills, passions, and interests which
        include visual arts, community building, and combating systemic disenfranchisement. Since
        earning a Business Administration degree, he is currently pursuing one in Fashion Design.{' '}
        <br />
        Zechariah envisions building a brand that extends fashion beyond materiality and status to
        make it a means to holistically edify individuals and communities. He holds the same vision
        for his service through Shalom Ministry.
      </Fragment>
    ),
  },
  {
    _id: 5,
    name: 'Tonya Watts',
    title: 'Creative Director',
    photo: tonya,
    bio: (
      <Fragment>
        {/*  Tonya Watts serves as the Creative Director of Shalom Ministry Corp. <br /> */}
        Growing up in the Caribbean, Tonya was raised to keep God central; and she leaves the touch
        of her beliefs in everything she does. Her trade as a designer and interior architect allows
        her to create buildings, homes, and spaces for people to gather, commune, and live in a way
        that echoes what she believes. Tonya seeks to bring both her work ethic and faith to Shalom
        Ministry.
      </Fragment>
    ),
  },
];
class AboutUs extends Component {
  render() {
    return (
      <div className="about-us-container">
        <div className="mx-auto my-16 lg:my-44 w-10/12 xl:w-3/4 2xl:w-[60%]">
          <h1 className="mb-16 text-4xl font-bold">Shalom Ministry Ambassadors</h1>
          <div className="bg-transparent md-lg:bg-black space-y-16 md-lg:space-y-8 lg:mt-32">
            {ambassadors.map((ambassador) => (
              <Ambassador ambassador={ambassador} key={ambassador._id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
