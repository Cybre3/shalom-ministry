import React from 'react';
import { toast } from 'react-toastify';
import Form from '../../common/form';
import Joi from 'joi-browser';
import { CWATregister } from '../../../services/userService';
import { getCwatTicketTypes } from './../../../services/ticketSetvice';

import CWATpPlan from '../../../assets/Register/Payment-Plan--CWAT-Registration-Page-trnsprnt.png';
import qrCode from '../../../assets/Register/Cashapp-Code--CWAT-Registration-Page-trnsprnt.png';

import CheckTicketCode from './checkTicketCode';
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
    // this.populateRegistrar(this.state.data)
  }


  componentDidUpdate() {

    console.log(this.state.data)
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
    ticketOption: Joi.string().required().label('Choose Your Ticket'),
  };

  // update implementation
  hasAticket = (e) => {
    // const registrar = this.state.data;
    // const { ticketCode, ticketOption } = this.state.data;
    // if (ticketCode)
    this.setState({
      haveTicketAlready: e.target.checked,
      // next lin needs to be updated
    });
  };
  
  populateRegistrar = (data) => {
    // const updatedData = this.mapToViewModel(data);
    const originalData = {...this.state.data};
    console.log(data)
    this.setState({data: {...originalData, ...data}})
  }
  
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

              <aside className="cwat-background-image cwat-pPlan">
                <img src={CWATpPlan} alt="cwat-pPlan" />
              </aside>
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
                  <CheckTicketCode populateUnregisteredUser={this.populateRegistrar} />
                </div>
              ) : (
                <div className="ticket-tiers">
                  {this.renderDropdown(
                    'ticketOption',
                    'Choose Your Ticket',
                    this.state.ticketOptions
                  )}
                </div>
              )}

              <aside className="cwat-background-image cwat-qrcode">
                <img src={qrCode} alt="" />
              </aside>
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
          </form>
        </div>
      </div>
    );
  }
}

export default CWATRegister;
