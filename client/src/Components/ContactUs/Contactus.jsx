import React from 'react';
import { toast } from 'react-toastify';
import Joi from 'joi-browser';

import Form from './../common/form';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import TypicalContactMe from '../../utilities/Typical_Contactme';
import { saveContact } from '../../services/contactService';
import { getConstant } from '../../services/constantService';
import { getMessageByIdAndCategory } from '../../services/messageService';

import imgBack from '../../assets/email-pc-world2.png';

// import load1 from '../../assets/load2.gif';

import './contactus.css';

class ContactUs extends Form {
  state = {
    data: {
      messageNumber: '',
      fullname: '',
      email: '',
      message: '',
    },
    errors: {},
    banner: '',
    bool: false,
  };

  componentDidMount() {
    this.populateContactMessage();
  }

  schema = {
    _id: Joi.string(),
    messageNumber: Joi.number().required(),
    fullname: Joi.string().required().label('Full Name'),
    email: Joi.string().email().required().label('Email'),
    message: Joi.string().required().label('Message'),
  };

  async populateContactMessage() {
    try {
      const messageId = this.props.params.id;
      if (messageId === 'new') {
        const messageNumber = (await getConstant('messageNumber')).data.amount;
        this.setState({ data: { ...this.state.data, messageNumber } });
        return;
      }

      const { data: contactMessage } = await getMessageByIdAndCategory(messageId, 'Contact');
      this.setState({ data: this.mapToViewModel(contactMessage) });
    } catch (error) {
      console.log(error.message);
    }
  }

  mapToViewModel(message) {
    return {
      _id: message._id,
      messageNumber: message.messageNumber,
      firstname: message.firstname,
      lastname: message.lastname,
      email: message.email,
      message: message.message,
    };
  }

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
