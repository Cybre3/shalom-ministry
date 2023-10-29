import React, { Fragment } from 'react';
import { toast } from 'react-toastify';
import Joi from 'joi-browser';
import _ from 'lodash';

import Form from '../../common/form';
import { saveRegistrar, getCWATregistrarById } from '../../../services/registrarService';
import { getCwatTicketTypes } from './../../../services/ticketSetvice';
import { getConstant } from '../../../services/constantService';
import CheckTicketCode from './checkTicketCode';
import withRouter from '../../../utilities/withRouter';

import qrCode from '../../../assets/Register/Cashapp-Code--CWAT-Registration-Page-trnsprnt.png';

import './CWATregisterForm.css';

class CWATRegister extends Form {
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
      ticketOption: 'Tier Two',
      ticketOptionData: {},
      ticketPurchaseData: {},
      shirtSize: 'Md',
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
    this.populateRegistrar();
  }

  schema = {
    _id: Joi.string(),
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
    ticketOption: Joi.string().required().label('Choose Your Ticket'),
    ticketOptionData: Joi.object().required().label('Ticket Option Data'),
    ticketPurchaseData: Joi.object().required().label('Ticket Purchase Data'),
    shirtSize: Joi.string().required().label('Shirt Size'),
  };

  shirtSizes = [
    { id: 'xs', name: 'xsmall', label: 'Xs' },
    { id: 'sm', name: 'small', label: 'Sm' },
    { id: 'md', name: 'medium', label: 'Md' },
    { id: 'lg', name: 'large', label: 'Lg' },
    { id: 'xl', name: 'xlarge', label: 'XL' },
    { id: '2x', name: '2x', label: '2x' },
    { id: '3x', name: '3x', label: '3x' },
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
      const registrarId = this.props.params.id;
      if (registrarId === 'new') {
        const registrarNumber = (await getConstant('registrarNumber')).data.amount;
        this.setState({ data: { ...this.state.data, registrarNumber } });
        return;
      }

      const { data: CWATregistrar } = await getCWATregistrarById(registrarId);
      this.setState({ data: this.mapToViewModel(CWATregistrar) });
    } catch (error) {
      console.log(error.message);
    }
  }

  mapToViewModel(CWATregistrar) {
    return {
      _id: CWATregistrar._id,
      registrarNumber: CWATregistrar.registrarNumber,
      firstname: CWATregistrar.firstname,
      lastname: CWATregistrar.lastname,
      email: CWATregistrar.email,
      phone: CWATregistrar.phone,
      allergies: CWATregistrar.allergies,
      questions: CWATregistrar.questions,
      discover: CWATregistrar.discover,
      emergencyFullName: CWATregistrar.emergencyFullName,
      emergencyEmail: CWATregistrar.emergencyEmail,
      emergencyPhone: CWATregistrar.emergencyPhone,
      ticketOption: CWATregistrar.ticketOption,
      shirtSize: CWATregistrar.shirtSize,
    };
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
      <div className="cwatRegister pt-10 xl:pt-48 xl:pb-40 lg:pt-36 lg:w-3/4 xl:w-3/5 lg:mx-auto xl:px-0">
        <div className="content w-full xl:pt-4">
          <h1 className="text-3xl font-normal tracking-wide mt-4 mb-12 lg:mt-6 lg:mb-12">
            CONFERENCE WITH A TWIST
          </h1>

          <form onSubmit={this.handleSubmit}>
            <div className="cwat-bg-right flex-column grid grid-row-2 h-fit py-4 xl:py-8 pr-2 gap-y-6 border-black border-2 xl:border-x-0">
              <div className="cwat-contact-info text-left w-full ml-2 md:w-3/4 xl:w-3/5 md:ml-6 xl:ml-16 xl:space-y-4">
                <h2 className="cwat-header mb-2 ml-16 md:ml-32">YOUR INFO</h2>
                {this.renderCustomInput('firstname', 'First Name')}
                {this.renderCustomInput('lastname', 'Last Name')}
                {this.renderCustomInput('email', 'Email', 'email')}
                {this.renderCustomInput('phone', 'Phone #', 'phone')}
              </div>

              <div className="cwat-contact-info text-right justify-self-end w-full md:w-3/4 xl:w-3/5 md:mr-6 xl:mr-12 xl:space-y-4">
                <h2 className="cwat-header mb-2 mr-8 md:mr-20">EMERGENCY CONTACT</h2>
                {this.renderInput('emergencyFullName', 'Full Name')}
                {this.renderInput('emergencyEmail', 'Email', 'email')}
                {this.renderInput('emergencyPhone', 'Phone #', 'phone')}
              </div>
            </div>

            <hr className="border-black mt-6 xl:mt-16 mb-16 xl:mb-24" />

            <div className="cwat-questions-container cwat-bg-left w-full text-left relative px-2 py-4 border-black border-2 md:space-y-4 md:text-lg xl:border-x-0 xl:rounded-sm xl:px-8">
              <h2 className="absolute bottom-full mb-4">A FEW QUESTIONS</h2>
              {this.renderTextarea(
                'allergies',
                'Do you have any food allergies or dietary restrictions?'
              )}
              {this.renderTextarea('questions', 'Do you have any questions for us?')}
              {this.renderTextarea('discover', 'How did you hear about Shalom Ministry?')}

              <div className="flex-column w-full mt-4 xl:pt-10">
                {this.state.haveTicketAlready ? (
                  <Fragment>
                    {this.renderRadioGroupSmall('shirtSize', 'Shirt Size', this.shirtSizes, 3)}
                    <CheckTicketCode
                      populateUnregisteredUser={this.populateUnregisteredRegistrarTicket}
                    />
                  </Fragment>
                ) : (
                  <Fragment>
                    {this.renderRadioGroupSmall('shirtSize', 'Shirt Size', this.shirtSizes, 3)}
                    {this.renderRadioGroup(
                      'ticketOption',
                      { title: 'Ticket Options', subTitle: 'Choose Your Ticket' },
                      this.state.ticketOptions,
                      2
                    )}
                  </Fragment>
                )}
              </div>
            </div>

            <hr className="border-black my-2" />

            <input
              type="checkbox"
              id={'haveTicketAlready'}
              value={'haveTicketAlready'}
              name={'haveTicketAlready'}
              onChange={this.hasAticket}
              className="mr-1"
            />
            <label htmlFor={'haveTicketAlready'} className="md:text-lg lg:text-xl">
              I have selected my ticket prior to registering and have made a payment(s)
            </label>
            {this.renderButton('SUBMIT', this.state.bool, 'send-btn lg:mb-20 lg:text-3xl text-2xl')}
            <span className="lg:text-lg">
              <i>No refunds once committed to a ticket</i>
            </span>
            <aside className="absolute bottom-10 lg:bottom-16 xl:bottom-10 inset-x-0 mx-auto w-44 lg:w-60">
              <img src={qrCode} alt="" className="w-full" />
            </aside>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(CWATRegister);
