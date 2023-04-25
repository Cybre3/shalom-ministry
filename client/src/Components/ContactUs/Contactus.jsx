import React from 'react';
import { toast } from 'react-toastify';
import Joi from 'joi-browser';
import { saveContact } from '../../services/contactService';

import Form from './../common/form';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import TypicalContactMe from '../../utilities/Typical_Contactme';

import imgBack from '../../assets/email-pc-world2.png';

// import load1 from '../../assets/load2.gif';

import './contactus.css';

class ContactUs extends Form {
  state = {
    data: {
      fullname: '',
      email: '',
      message: '',
    },
    errors: {},
    banner: '',
    bool: false,
  };

  schema = {
    _id: Joi.string(),
    fullname: Joi.string().required().label('Full Name'),
    email: Joi.string().email().required().label('Email'),
    message: Joi.string().required().label('Message'),
  };

  doSubmit = () => {
    const { data } = this.state;
    this.setState({ bool: true });
    setTimeout(async () => {
      await saveContact(data);
      this.setState({ bool: false });
      toast.success('Thank you for contacting Shalom Ministry!');
    }, 2000);
  };

  render() {
    return (
      <div className="contactme-container" id={this.props.id || ''}>
        <ScreenHeading title={'Contact Us'} subHeading={"Let's keep in Touch"} />
        <div className="central-form">
          <div className="col">
            <h2 className="title">
              <TypicalContactMe />
            </h2>
            <a href="https://www.facebook.com/profile.php?id=100089261716387">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="https://www.linkedin.com">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/shalom9ministry/?next=%2F">
              <i className="fa fa-instagram"></i>
            </a>
          </div>
          <div className="back-form">
            <div className="img-back">
              <h4>Send us a message ➡ </h4>
              <img src={imgBack} alt="img not found" />
            </div>

            <form onSubmit={this.handleSubmit}>
              <p>{this.state.banner}</p>
              {this.renderInput('fullname', 'Full Name')}
              {this.renderInput('email', 'Email', 'email')}
              {this.renderTextarea('message', 'Your message Here')}
              {this.renderButton('Send', this.state.bool, 'send-btn')}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
