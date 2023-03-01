import React from 'react';
// import { toast } from 'react-toastify';
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
  };

  schema = {
    _id: Joi.string(),
    fullname: Joi.string().required().label('Full Name'),
    email: Joi.string().email().required().label('Email'),
    message: Joi.string().required().label('Your message here'),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await saveContact(data);
    } catch (error) {
      console.log(error);
    }
  };

  // doSubmit = async (e) => {
  // e.preventDefault();
  // try {
  //   let data = {
  //     name,
  //     email,
  //     message,
  //   };

  //   // const { name, email, message } = data;

  //   // setBool(true);

  //   const res = await saveContact(data);
  //   console.log(res);

  //   if (name.length === 0 || email.length === 0 || message.length === 0) {
  //     console.log('something missing')
  //     // console.log(res.data.message);
  //     // setBanner(res.data.message);
  //     // toast.error(res.data.message);
  //     // setBool(false);
  //   // } else if (res.status === 200) {
  //     // setBanner(res.data.msg);
  //     // toast.success(res.data.msg);
  //     // setBool(false);

  //     setName('');
  //     setEmail('');
  //     setMessage('');
  //   }
  // } catch (error) {
  //   console.log(error);
  // }
  // };

  render() {
    return (
      <div className="contactme-container" id={this.props.id || ''}>
        <ScreenHeading title={'Contact Us'} subHeading={"Let's keep in Touch"} />
        <div className="central-form">
          <div className="col">
            <h2 className="title">
              <TypicalContactMe />
            </h2>
            <a href="https://www.facebook.com">
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
              {/* <p>{banner}</p> */}
              {this.renderInput('fullname', 'Full Name')}
              {this.renderInput('email', 'Email', 'email')}
              {this.renderTextarea('message', 'Your message Here')}
              {this.renderButton('Send')}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;

{
  /*  <div className="send-btn">
      <button type="submit">
        Send
        <i className="fa fa-paper-plane" />
        {bool ? (
          <b className="load">
            <img src={load1} alt="img not responding" />
          </b>
        ) : (
          ''
        )}
      </button>
    </div> */
}
