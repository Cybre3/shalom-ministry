import React from 'react';
import { toast } from 'react-toastify';
import Joi from 'joi-browser';

import Form from './../common/form';
import withRouter from './../../utilities/withRouter';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
// import TypicalContactMe from '../../utilities/Typical_Contactme';
import { saveContact } from '../../services/contactService';
import { getConstant } from '../../services/constantService';
import { getMessageByIdAndCategory } from '../../services/messageService';

import imgBack from '../../assets/Nav/SM-Logo.png';

// import load1 from '../../assets/load2.gif';

import './contactus.css';
import { NavLink } from 'react-router-dom';

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

  inputClasses = {
    inputContainer: 'flex flex-col w-full font-roboto-condensed space-y-1',
    inputClass: 'w-3/4 md-lg:w-1/2 mx-auto rounded-md text-black px-3 py-1 border border-black',
  };

  render() {
    return (
      <div className="contactus-container pb-32 pt-16 lg:pt-36">
        <ScreenHeading title={'Contact Us'} subHeading={"Let's keep in Touch"} />

        <div className="mx-auto w-3/4 space-y-3 text-center text-black sm:w-[60%] lg:grid lg:grid-cols-2 lg:auto-rows-auto lg:py-2 lg:gap-x-2 lg:space-y-0 lg:gap-y-12 xl:w-1/2">
          <div className="flex flex-col justify-center rounded-md bg-gray-400 p-3 py-12">
            <h2 className="text-2xl">Call Us</h2>
            <span>Monday - Saturday</span>
            <span>8:30am EST - 5:30pm EST</span>
            <span>786 400 4072</span>
          </div>

          <div className="flex flex-col justify-center rounded-md bg-gray-400 p-3 py-12">
            <h2 className="text-2xl">Sponsors</h2>
            <span className="">
              Please complete our{' '}
              <NavLink
                className="rounded-full bg-shalom-lavendar px-2 font-bold italic text-slate-800 underline"
                to="/give/new"
              >
                Sponsor form
              </NavLink>
            </span>
            <span>or</span>
            <span>⬇ Send us a message ⬇</span>
          </div>

          <div className="col-span-full space-y-4 rounded-md bg-gray-400 p-10 px-4 text-black">
            <div className="space-y-3 rounded-md border-2 border-gray-300 bg-shalom-lavendar p-1 pb-8 pt-0 md-lg:mx-8 xl:mx-12">
              <div className="mx-auto w-1/4">
                <img src={imgBack} alt="img not found" className="w-full" />
              </div>
              <div className="space-x-4">
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
              <h2 className="text-2xl">Send us a message</h2>
              <form className="space-y-3" onSubmit={this.handleSubmit}>
                <p>{this.state.banner}</p>
                {this.renderInput('fullname', 'Full Name', 'text', false, this.inputClasses)}
                {this.renderInput('email', 'Email', 'email', false, this.inputClasses)}
                {this.renderTextarea('message', 'Your Message Here', 'textarea', this.inputClasses)}
                {this.renderButton(
                  'Send',
                  this.state.bool,
                  'send-btn !mt-8',
                  'disabled:bg-gray-300 disabled:text-gray-400 px-3 px-1 rounded-md text-lg bg-white space-x-1'
                )}
              </form>
            </div>
          </div>
        </div>
        {/* <div className="central-form">
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
        </div> */}
      </div>
    );
  }
}

export default withRouter(ContactUs);
