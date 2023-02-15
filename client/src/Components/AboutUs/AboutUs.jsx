import React, { Component } from 'react';
import dorisPresident from '../../assets/Aboutus/Doris.jpg';
import rebekaVP from '../../assets/Aboutus/Rebeka.JPG';
import mayaTreasurer from '../../assets/Aboutus/Maya.webp';
import zecheriah from '../../assets/Aboutus/Zecheriah.jpg';
import tonya from '../../assets/Aboutus/Tonya.jpeg';
import './aboutUs.css';

const uppercaseStatement =
  `We meet the needs of the lost, broken, and wounded as Yeshua’s extension of holistic
            help to those in need. Shalom Ministry is a non-profit organization whose ambassadors
            compassionately listen to the individuals we serve to understand their unique needs,
            leading to their transformation. Our ministry began in 2019, when our founder was sent
            by Yeshua to Eritrea and Ghana, where she preached the Gospel, helped build schools, and
            provided facilities to the underprivileged population of the regions. These projects
            serve as SHALOM MINISTRY’s heritage, which is still supported today. Today and tomorrow,
            we seek to be the answer, the missing link, and the hands and feet of Yeshua on Earth.`.toUpperCase();

class AboutUs extends Component {
  render() {
    return (
      <div className="about-us-container">
        <div className="mission-statement-container">
          <p className="mission-statement">
            <img src={require('../../assets/Nav/SM-Logo.png')} alt="" className="about-logo" />
            <h1 className="mission-heading">WHAT WE DO</h1>
            {uppercaseStatement}
          </p>
        </div>

        <div className="meet-members">
          <h1>Meet Our Ambassadors</h1>
          <div className="about-each-member">
            <div className="about-info">
              <p className="about-text">
                Doris E. Singh is the CEO of Shalom Ministry Corp. <br />
                Doris compassionately serves the needs of those in her community and abroad. In
                doing so, she oversees a worldwide bible study and is a spiritual coach, teacher,
                counselor, and mentor, among other positions. <br />
                In Asankagraw and Bremen, Ghana, she has built and furnished a school and cafeteria,
                assisted with starting family businesses, and financially supported hospitals for
                widows and orphans. Her decades of mental health experience has also impacted her
                service to Shalom Ministry Corporation.
              </p>
            </div>
            <div className="img-box">
              <img src={dorisPresident} alt="" className="about-member-img" />
            </div>

            <div className="img-box">
              <img src={rebekaVP} alt="" className="about-member-img" />
            </div>
            <div className="about-info">
              <p className="about-text">
                Rebeka Fleurjuste serves as Vice President to Shalom Ministry.
                <br />
                She brings years of ministerial experience from Cornerstone Haitian Baptist Church
                where she also serves as a praise and worship leader and Vice President of the Young
                Adults Ministry. Rebeka inspires to demonstrate the love of Jesus Christ through
                Shalom’s mission which is to holistically heal everyone that encounters this faith
                filled ministry.
              </p>
            </div>

            <div className="about-info">
              <p className="about-text">
                Maya Singh serves as Treasurer to Shalom Ministry Corp. <br />
                Her gifts of wisdom, administration, giving, and generosity empower her to fulfill
                her duties in excellence. With the foundations of her faith and medical background,
                Maya welcomes the mystery of miracles while utilizing her knowledge, skills, and
                expertise to ensure the health and well-being of those uplifted by Shalom Ministry.
              </p>
            </div>
            <div className="img-box">
              <img src={mayaTreasurer} alt="" className="about-member-img" />
            </div>

            <div className="img-box">
              <img src={zecheriah} alt="" className="about-member-img" />
            </div>
            <div className="about-info">
              <p className="about-text">
                Zechariah Singh serves as the Secretary of Shalom Ministry Corp. <br />
                His service allows him to exhibit and cultivate his skills, passions, and interests
                which include visual arts, community building, and combating systemic
                disenfranchisement. Since earning a Business Administration degree, he is currently
                pursuing one in Fashion Design. <br />
                Zechariah envisions building a brand that extends fashion beyond materiality and
                status to make it a means to holistically edify individuals and communities. He
                holds the same vision for his service through Shalom Ministry.
              </p>
            </div>

            <div className="about-info">
              <p className="about-text">
                Tonya Watts serves as the Creative Director of Shalom Ministry Corp. Growing up in
                the Caribbean, Tonya was raised to keep God central; and she leaves the touch of her
                beliefs in everything she does. Her trade as a designer and interior architect
                allows her to create buildings, homes, and spaces for people to gather, commune, and
                live in a way that echoes what she believes. Tonya seeks to bring both her work
                ethic and faith to Shalom Ministry.
              </p>
            </div>
            <div className="img-box">
              <img src={tonya} alt="" className="about-member-img" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
