import React from 'react';
import Joi from 'joi';
import { toast } from 'react-toastify';

import Form from '../common/form';
import { saveSponsor } from '../../services/giveService';
import { getConstant } from '../../services/constantService';
import { getMessageByIdAndCategory } from '../../services/messageService';
import withRouter from '../../utilities/withRouter';

class SponsorForm extends Form {
  state = {
    data: {
      messageNumber: '',
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

  componentDidMount() {
    this.populateSponsorMessage();
  }

  modeOfContactOptions = [
    { name: 'phone', value: 'Phone' },
    { name: 'email', value: 'Email' },
  ];

  schema = {
    _id: Joi.string(),
    messageNumber: Joi.number().required(),
    firstname: Joi.string().label('First Name').allow(''),
    lastname: Joi.string().label('Last Name').allow(''),
    organizationName: Joi.string().label('Organization Name').allow(''),
    email: Joi.string().email().required().label('Email'),
    phone: Joi.string().required().label('Phone'),
    message: Joi.string().required().label('Message'),
    bestContact: Joi.string().required().label('Best Mode of Contact'),
  };

  async populateSponsorMessage() {
    try {
      const messageId = this.props.params.id;
      if (messageId === 'new') {
        const messageNumber = (await getConstant('messageNumber')).data.amount;
        this.setState({ data: { ...this.state.data, messageNumber } });
        return;
      }

      const { data: sponsorMessage } = await getMessageByIdAndCategory(messageId, 'Sponsor');
      this.setState({ data: this.mapToViewModel(sponsorMessage) });
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
      phone: message.phone,
      organizationName: message.organizationName,
      bestContact: message.bestContact,
      message: message.message,
    };
  }

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

  classes = {
    inputContainer: 'sm:items-center',
    inputClass: 'sm:w-3/4 py-1 text-center',
  };

  dropdownClasses = {
    inputContainer: 'mx-auto w-3/4 sm:w-1/2 lg:w-2/6',
    inputClass: 'w-full py-1 text-center',
    optionClass: 'text-xs',
  };

  textareaClasses = {
    inputContainer: 'sm:items-center',
    inputClass: 'sm:w-3/4 py-1 px-3',
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <div className="mb-2 space-y-2">
            {this.renderInput('firstname', 'First Name', 'text', false, this.classes)}
            {this.renderInput('lastname', 'Last Name', 'text', false, this.classes)}
          </div>
          <span>or</span>
          <br />
          {this.renderInput('organizationName', 'Organization Name', 'text', false, this.classes)}
        </div>
        <hr />
        <div className="space-y-4">
          <div className="space-y-2">
            {this.renderInput('email', 'Email', 'email', false, this.classes)}
            {this.renderInput('phone', 'Phone #', 'phone', false, this.classes)}
            {this.renderTextarea('message', 'Message', 'textarea', this.textareaClasses)}
          </div>
          <div>
            {this.renderDropdown(
              'bestContact',
              'Best Mode of Contact',
              this.modeOfContactOptions,
              this.dropdownClasses
            )}
          </div>
        </div>
        {this.renderButton('Send', this.state.bool, 'send-btn')}
      </form>
    );
  }
}

export default withRouter(SponsorForm);
