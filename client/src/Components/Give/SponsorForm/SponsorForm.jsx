import React from 'react';
import Joi from 'joi';
import { toast } from 'react-toastify';
import { saveSponsor } from '../../../services/giveService';

import Form from '../../common/form';

class SponsorForm extends Form {
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
      console.log(error);
    }
  };

  render() {
    return (
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
            {this.renderDropdown('bestContact', 'Best Mode of Contact', this.modeOfContactOptions)}
          </div>
        </div>
        {this.renderButton('Send', this.state.bool, 'send-btn')}
      </form>
    );
  }
}

export default SponsorForm;