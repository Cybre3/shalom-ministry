import React from 'react';
import Joi from 'joi';
import { toast } from 'react-toastify';
import { saveSponsor } from '../../services/giveService';

import Form from './../common/form';

import load1 from '../../assets/load2.gif';

import './give.css';

class Give extends Form {
  state = {
    data: {
      firstname: '',
      lastname: '',
      organizationName: '',
      email: '',
      phone: '',
      message: '',
      bestContact: '',
    },
    errors: {},
    bool: false,
  };

  modeOfContactOptions = [
    { name: 'phone', value: 'Phone' },
    { name: 'email', value: 'Email' },
  ];

  schema = {
    _id: Joi.string(),
    firstname: Joi.string().label('First Name').allow(''),
    lastname: Joi.string().label('Last Name').allow(''),
    organizationName: Joi.string().label('Organization Name').allow(''),
    email: Joi.string().email().required().label('Email'),
    phone: Joi.string().required().label('Phone'),
    message: Joi.string().required().label('Message'),
    bestContact: Joi.string().required().label('Best Mode of Contact'),
  };

  doSubmit = () => {
    try {
      this.setState({ bool: true });
      setTimeout(async () => {
        await saveSponsor(this.state.data);
        this.setState({ bool: false });
        toast.success('Thank you for interest in partnering with Shalom Ministry!');
      }, 2000);
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  render() {
    return (
      <div className="give-container">
        <div className="users-give">
          <h2>Select Donation Option</h2>
          <div className="give-opts">
            <div className="give-opt">
              <h3 className="give-opt-title">Zelle</h3>
              <p>786-400-4072</p>
              {/* <button className="give-opt-btn">Donate</button> */}
            </div>
            <div className="give-opt">
              <h3 className="give-opt-title">Cashapp</h3>
              <p>SHALOM99MINISTRY</p>
              {/* <button className="give-opt-btn">Donate</button> */}
            </div>
          </div>
        </div>

        <div className="sponsors-form">
          <h2>Sponsors</h2>
          <div className="give-subtitle">
            <i>
              Please contact Shalom Ministry
              <br /> 786 400 4072
            </i>{' '}
            or Send us a message
          </div>

          <form onSubmit={this.handleSubmit}>
            <div className="sponsor-name">
              <div className="personal-name">
                {this.renderInput('firstname', 'First Name')}
                {this.renderInput('lastname', 'Last Name')}
              </div>
              <div>or</div>
              <br />
              {this.renderInput('organizationName', 'Organization Name')}
            </div>
            <hr />
            <div className="sponsor-contact-info">
              <div className="sponsor-input">
                {this.renderInput('email', 'Email', 'email')}
                {this.renderInput('phone', 'Phone #', 'phone')}
                {this.renderTextarea('message', 'Message')}
              </div>
              <div className="mode-of-contact">
                {this.renderDropdown(
                  'bestContact',
                  'Best Mode of Contact',
                  this.modeOfContactOptions
                )}
              </div>
            </div>
            {this.renderButton('Send', load1, this.state.bool, 'send-btn')}
          </form>
          <hr />
          <div className="sponsor-message">
            Thank you so much for your gift! <br /> <br /> Our written expression of thanks cannot
            compare to that which we feel in our hearts. Shalom Ministry is more than an
            organization; it is an organism made up of members of the Body of Christ. <br /> <br />{' '}
            As sponsors, partners, participants, and givers, you too are a member of The Body. As
            one, we operate as the manifestation of Christ’s hands and feet on the earth, doing to
            Him what is done to the least of these (Matt. 25:40). <br /> <br /> So again, we offer
            our deepest heartfelt thanks for your gift - for you are giving to the Kingdom of God.
            Shalom! <br /> <br /> 1 Cor. 12:12-18
          </div>
        </div>
      </div>
    );
  }
}

export default Give;
