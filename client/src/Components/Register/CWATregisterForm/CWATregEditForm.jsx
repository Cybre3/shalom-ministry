import React from 'react';
import { toast } from 'react-toastify';
import Joi from 'joi-browser';
import _ from 'lodash';

import Form from '../../common/form';
import { saveRegistrar, getCWATregistrarById } from '../../../services/registrarService';
import { getCwatTicketTypes } from './../../../services/ticketSetvice';
import { getConstant } from '../../../services/constantService';
import CheckTicketCode from './checkTicketCode';
import withRouter from '../../../utilities/withRouter';

import CWATpPlan from '../../../assets/Register/Payment-Plan--CWAT-Registration-Page-trnsprnt.png';

import './CWATregisterForm.css';

class CWATregEditForm extends Form {
  state = {
    data: {
      registrarNumber: '',
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
      shirtSize: '',
      date: '',
      category: '',
      __v: ''
    },
    errors: {},
    bool: false,
    haveTicketAlready: false,
    ticketOptions: [],
    registrar: '',
  };

  async componentDidMount() {
    const allTicketOptions = await getCwatTicketTypes();
    const ticketOne = allTicketOptions.data[0];
    ticketOne.displayLine = this.remove_SOLDOUT_tag(ticketOne.displayLine);
    ticketOne.disabled = false;
    this.setState({ ticketOptions: allTicketOptions.data });
    this.populateRegistrar();
  }

  schema = {
    _id: Joi.string(),
    __v: Joi.number(),
    registrarNumber: Joi.number().required().label('Registrar Number'),
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
    ticketOption: Joi.required().label('Ticket'),
    ticketOptionData: Joi.object(),
    ticketPurchaseData: Joi.object(),
    shirtSize: Joi.string().required().label('Shirt Size'),
    date: Joi.date(),
    category: Joi.string()
  };

  shirtSizes = [
    { id: 'xs', name: 'xsmall', value: 'Xs' },
    { id: 'sm', name: 'small', value: 'Sm' },
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

  populateUnregisteredRegistrarTicket = (data) => {
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

  async populateRegistrar() {
    try {
      const registrarId = this.props.params.registrarId;
      if (registrarId === 'new') {
        const registrarNumber = (await getConstant('registrarNumber')).data.amount;
        this.setState({ data: { ...this.state.data, registrarNumber } });
        return;
      }

      const { data: CWATregistrar } = await getCWATregistrarById(registrarId);
      this.setState({ data: { ...CWATregistrar } });
    } catch (error) {
      console.log(error.message);
    }
  }

  remove_SOLDOUT_tag(string) {
    const newString = string.replace(' - SOLD OUT!!', '');

    return newString;
  }

  doSubmit = async () => {
    try {
      const { data } = this.state;
      this.setState({ bool: true });
      setTimeout(
        async () => {
          this.setState({ bool: false });
          await saveRegistrar('cwat-register', data);
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
      <div className="cwatRegister-edit">
        <div className="content">
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
              <div>
                {this.renderInput('registrarNumber', 'Registrar#', '', true)}
                {this.renderInput('date', 'Date', 'date', true)}
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
                  <CheckTicketCode
                    populateUnregisteredUser={this.populateUnregisteredRegistrarTicket}
                  />
                </div>
              ) : (
                <div className="ticket-tiers">
                  {this.renderDropdown('shirtSize', 'Shirt Size', this.shirtSizes)}
                  {this.renderDropdown('ticketOption', 'Ticket', this.state.ticketOptions)}
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
            <aside className="cwat-background-image cwat-pPlan">
              <img src={CWATpPlan} alt="cwat-pPlan" />
            </aside>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(CWATregEditForm);
