import React, { Component } from 'react';

import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import TypicalContactMe from '../../utilities/Typical_Contactme';

import imgBack from '../../assets/email-pc-world2.png';
import load1 from '../../assets/load2.gif';

import './contactus.css';

class Contactus extends Component {
  state = {
    name: '',
    email: '',
    message: '',
    banner: '',
    bool: false,
  };

  handleName = (e) => {
    this.setName(e.target.value);
  };

  handleEmail = (e) => {
    this.setEmail(e.target.value);
  };
  handleMessage = (e) => {
    this.setMessage(e.target.value);
  };

  submitForm = async (e) => {
    e.preventDefault();
    // const { name, email, message } = this.state;
    // try {
    //   let data = {
    //     name,
    //     email,
    //     message,
    //   };

    //   this.setBool(true);

    //   const res = await axios.post('/contact', data);

    //   if (name.length === 0 || email.length === 0 || message.length === 0) {
    //     setBanner(res.data.msg);
    //     toast.error(res.data.msg);
    //     setBool(false);
    //   } else if (res.status === 200) {
    //     setBanner(res.data.msg);
    //     toast.success(res.data.msg);
    //     setBool(false);

    //     emailjs
    //       .sendForm(
    //         process.env.REACT_APP_EMAILJS_SERVICE_ID,
    //         process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    //         e.target,
    //         process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    //       )
    //       .then(
    //         (result) => {
    //           console.log('SUCCESS!', result.status, result.text);
    //         },
    //         (error) => {
    //           console.log('FAILED...', error);
    //         }
    //       );

    //     setName('');
    //     setEmail('');
    //     setMessage('');
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  render() {
    const { bool, email, name, banner, message } = this.state;
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
            <form id="from_person_name" onSubmit={this.submitForm}>
              <p>{banner}</p>
              <label htmlFor="name"></label>
              <input
                type="text"
                placeholder="Full Name"
                onChange={this.handleName}
                value={name}
                name="from_person_name"
              />

              <label htmlFor="email"></label>
              <input
                id="person_email"
                type="email"
                placeholder="Email"
                onChange={this.handleEmail}
                value={email}
                name="person_email"
              />

              <label htmlFor="message"></label>
              <textarea
                id="message"
                type="textarea"
                placeholder="Your message here"
                onChange={this.handleMessage}
                value={message}
                name="message"
              />

              <div className="send-btn">
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
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contactus;
