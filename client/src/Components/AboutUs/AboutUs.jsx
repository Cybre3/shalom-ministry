import React, { Component, Fragment } from 'react';

import Ambassador from './Ambassador';

import dorisPresident from '../../assets/Aboutus/Doris.jpg';
// import rebekaVP from '../../assets/Aboutus/Rebeka.JPG';
import mayaTreasurer from '../../assets/Aboutus/Maya.webp';
import zecheriah from '../../assets/Aboutus/Zecheriah.jpg';
import tonya from '../../assets/Aboutus/Tonya.jpeg';
import jasmine from '../../assets/Aboutus/Jasmine.JPG';
import gracenie from '../../assets/Aboutus/Gracenie.jpg';
import nicole from '../../assets/Aboutus/Nicole.jpg';

import './aboutUs.css';

const ambassadors = [
  {
    _id: 1,
    name: 'Doris E. Singh',
    title: 'VFP',
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
    _id: 5,
    name: 'Tonya Watts',
    title: 'Vice President',
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
  // {
  //   _id: 2,
  //   name: 'Rebeka Fleurjuste',
  //   title: 'Vice President',
  //   photo: rebekaVP,
  //   bio: (
  //     <Fragment>
  //       {/*      Rebeka Fleurjuste serves as Vice President to Shalom Ministry.
  //       <br /> */}
  //       She brings years of ministerial experience from Cornerstone Haitian Baptist Church where she
  //       also serves as a praise and worship leader and Vice President of the Young Adults Ministry.
  //       Rebeka inspires to demonstrate the love of Jesus Christ through Shalom’s mission which is to
  //       holistically heal everyone that encounters this faith filled ministry.
  //     </Fragment>
  //   ),
  // },
  {
    _id: 6,
    name: 'Jasmine Camille',
    title: 'Chief of Staff - Teams Director',
    photo: jasmine,
    bio: <Fragment></Fragment>,
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
    title: 'Creative Director',
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
    _id: 7,
    name: 'Gracenie Volcy',
    title: 'Missions Director',
    photo: gracenie,
    bio: (
      <Fragment>
        Gracenie serves as Missions Director of Shalom Ministry. She loves to use my creative gifts
        and encouraging words to help people push forward with their businesses, plans, and ideas.
        She plans on using her gifts and talents to serve people in the kingdom and Shalom Ministry.
      </Fragment>
    ),
  },
  {
    _id: 8,
    name: 'Nicole Rodriguez',
    title: 'Creative Team Co-Lead',
    photo: nicole,
    bio: <Fragment></Fragment>,
  },
];
class AboutUs extends Component {
  render() {
    return (
      <div className="h-fit w-screen">
        <div className="relative h-full w-full pb-32 text-center before:absolute before:bottom-0 before:left-0 before:right-0 before:top-24 before:z-0 before:h-full before:w-full before:bg-black/60 before:bg-smBrandHorizontal before:bg-center before:opacity-10 lg:pt-24">
          {/* adjust bg position to left edge and reduce opacity in before div */}
          <div className="mx-auto h-full w-full p-12 px-0">
            <h1 className="mb-16 text-4xl font-bold uppercase drop-shadow">
              Shalom Ministry Ambassadors
            </h1>
            <div className="flex h-full w-full flex-col flex-wrap items-center rounded-md py-10 lg:flex-row lg:items-center lg:justify-around lg:p-10 lg:px-20 space-x-24 space-around">
              {ambassadors.map((ambassador) => (
                <Ambassador ambassador={ambassador} key={ambassador._id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
