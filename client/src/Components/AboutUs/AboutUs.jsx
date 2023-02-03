import React, { Component } from 'react';
import oprah from '../../assets/Aboutus/Oprah.jfif';
import steveHarvey from '../../assets/Aboutus/steveHarvey.jfif';
import violaDavis from '../../assets/Aboutus/violaDavis.jfif';
import muhammedAli from '../../assets/Aboutus/muhammedAli.jfif';
import serenaWilliams from '../../assets/Aboutus/serenaWilliams.jfif';
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae
                quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis
                harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!
                Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius
                earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia
                aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis
                quas aliquid.
              </p>
            </div>
            <div className="img-box">
              <img src={oprah} alt="" className="about-member-img" />
            </div>

            <div className="img-box">
              <img src={steveHarvey} alt="" className="about-member-img" />
            </div>
            <div className="about-info">
              <p className="about-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae
                quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis
                harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!
                Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius
                earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia
                aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis
                quas aliquid.
              </p>
            </div>

            <div className="about-info">
              <p className="about-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae
                quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis
                harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!
                Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius
                earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia
                aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis
                quas aliquid.
              </p>
            </div>
            <div className="img-box">
              <img src={violaDavis} alt="" className="about-member-img" />
            </div>

            <div className="img-box">
              <img src={muhammedAli} alt="" className="about-member-img" />
            </div>
            <div className="about-info">
              <p className="about-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae
                quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis
                harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!
                Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius
                earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia
                aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis
                quas aliquid.
              </p>
            </div>

            <div className="about-info">
              <p className="about-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae
                quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis
                harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!
                Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius
                earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia
                aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis
                quas aliquid.
              </p>
            </div>
            <div className="img-box">
              <img src={serenaWilliams} alt="" className="about-member-img" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
