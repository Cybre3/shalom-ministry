import React from 'react';
import { toast } from 'react-toastify';
import Joi from 'joi-browser';
import _ from 'lodash';

import Form from '../../common/form';
import { CWATregister } from '../../../services/userService';
import { getCwatTicketTypes } from './../../../services/ticketSetvice';
import CheckTicketCode from './checkTicketCode';

import CWATpPlan from '../../../assets/Register/Payment-Plan--CWAT-Registration-Page-trnsprnt.png';
import qrCode from '../../../assets/Register/Cashapp-Code--CWAT-Registration-Page-trnsprnt.png';

import './CWATregisterForm.css';

class CWATRegister extends Form {
  state = {
    data: {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      allergies: '',
      questions: '',
      discover: '',
      emergencyFullName: '',
      emergencyEmail: '',
      emergencyPhone: '',
      ticketOption: '',
      ticketOptionData: {},
      ticketPurchaseData: {},
      shirtSize: ''
    },
    errors: {},
    bool: false,
    haveTicketAlready: false,
    ticketOptions: [],
    registrar: '',
  };

  async componentDidMount() {
    const allTicketOptions = await getCwatTicketTypes();
    this.setState({ ticketOptions: allTicketOptions.data });
  }

  schema = {
    _id: Joi.string(),
    firstname: Joi.string().required().label('First Name'),
    lastname: Joi.string().required().label('Last Name'),
    email: Joi.string().email().required().label('Email'),
    phone: Joi.string().required().label('Phone'),
    allergies: Joi.string().label('Allergies').allow(''),
    questions: Joi.string().label('Questions').allow(''),
    discover: Joi.string().label('How you did you hear about Shalom Ministry').allow(''),
    emergencyFullName: Joi.string().required().label('Emergency Full Name'),
    emergencyEmail: Joi.string().email().required().label('Emergency Last Name'),
    emergencyPhone: Joi.string().required().label('Emergency Phone'),
    ticketOption: Joi.required().label('Choose Your Ticket'),
    ticketOptionData: Joi.object(),
    ticketPurchaseData: Joi.object(),
    shirtSize: Joi.string().required().label('Shirt Size')
  };

  shirtSizes = [
    { id: 'sm', name: 'xsmall', value: 'Sm' },
    { id: 'xs', name: 'small', value: 'Xs' },
    { id: 'md', name: 'medium', value: 'Md' },
    { id: 'lg', name: 'large', value: 'Lg' },
    { id: 'xl', name: 'xlarge', value: 'XLg' },
    { id: '2x', name: '2x', value: '2x' },
    { id: '3x', name: '3x', value: '3x' },
  ];

  hasAticket = (e) => {
    this.setState({
      haveTicketAlready: e.target.checked,
    });
  };

  populateRegistrar = (data) => {
    const originalData = { ...this.state.data };
    const requiredData = _.pick(data, ['firstname', 'lastname', 'phone', 'email']);
    const { ticketOptions } = this.state;
    let ticketTier = 1;

    switch (data.bedType) {
      case 'Queen':
      case 'Double':
      case 'Full':
        ticketTier = 2;
        break;
      case 'Twin':
        ticketTier = 3;
        break;
      default:
        ticketTier = 1;
    }

    this.setState({
      data: {
        ...originalData,
        ticketOption: ticketOptions[ticketTier - 1].displayLine,
        ...requiredData,
        ticketOptionData: ticketOptions[ticketTier - 1],
        ticketPurchaseData: data,
      },
    });
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      this.setState({ bool: true });
      setTimeout(
        async () => {
          this.setState({ bool: false });
          await CWATregister(data);
          toast.success('Registration submitted!');
        },
        Promise.reject ? 2000 : 1000
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  render() {
    return (
      <div className="cwatRegister">
        <div className="content">
          <h1>CONFERENCE WITH A TWIST</h1>

          <form onSubmit={this.handleSubmit}>
            <div className="cwat-title-container">
              <h2 className="cwat-header">YOUR INFO</h2>
              <h2 className="cwat-header">EMERGENCY CONTACT</h2>
            </div>
            <div className="cwat-contact-info cwat-bg-right">
              <div className="cwat-your-info">
                {this.renderCustomInput('firstname', 'First Name')}
                {this.renderCustomInput('lastname', 'Last Name')}
                {this.renderCustomInput('email', 'Email', 'email')}
                {this.renderCustomInput('phone', 'Phone #', 'phone')}
              </div>

              <div className="cwat-emergency-contact">
                {this.renderCustomInput('emergencyFullName', 'Full Name')}
                {this.renderCustomInput('emergencyEmail', 'Email', 'email')}
                {this.renderCustomInput('emergencyPhone', 'Phone #', 'phone')}
              </div>
            </div>

            <hr></hr>

            <div className="cwat-questions-container cwat-bg-left">
              <h2 className="cwat-header">A FEW QUESTIONS</h2>
              {this.renderTextarea(
                'allergies',
                'Do you have any food allergies or dietary restrictions?'
              )}
              {this.renderTextarea('questions', 'Do you have any questions for us?')}
              {this.renderTextarea('discover', 'How did you hear about Shalom Ministry?')}

              {this.state.haveTicketAlready ? (
                <div>
                  {this.renderDropdown('shirtSize', 'Shirt Size', this.shirtSizes)}
                  <CheckTicketCode populateUnregisteredUser={this.populateRegistrar} />
                </div>
              ) : (
                <div className="ticket-tiers">
                  {this.renderDropdown('shirtSize', 'Shirt Size', this.shirtSizes)}
                  {this.renderDropdown(
                    'ticketOption',
                    'Choose Your Ticket',
                    this.state.ticketOptions
                  )}
                </div>
              )}
            </div>
            <input
              type="checkbox"
              id={'haveTicketAlready'}
              value={'haveTicketAlready'}
              name={'haveTicketAlready'}
              onChange={this.hasAticket}
            />
            <label htmlFor={'haveTicketAlready'}>
              I have selected my ticket prior to registering and have made a payment(s)
            </label>
            {this.renderButton('SUBMIT', this.state.bool, 'send-btn')}
            <span>
              <i>No refunds once committed to a ticket</i>
            </span>
            <aside className="cwat-background-image cwat-pPlan">
              <img src={CWATpPlan} alt="cwat-pPlan" />
            </aside>
            <aside className="cwat-background-image cwat-qrcode">
              <img src={qrCode} alt="" />
            </aside>
          </form>
        </div>
      </div>
    );
  }
}

export default CWATRegister;
