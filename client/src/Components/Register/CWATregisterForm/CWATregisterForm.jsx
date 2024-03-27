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

  bedOpts = [
    { id: 'xs', name: 'King', value: 'Shared Room (K/Q/D) - $425' },
    { id: 'sm', name: 'Queen', value: 'Shared Room (T) - $375' },
    { id: 'md', name: 'Double', value: 'General Admission (off campus) - $325' },
  ]

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

  formClasses = {
    inputContainer: 'flex justify-between space-x-4',
    inputClass: 'border'
  }

  render() {
    return (
      <div className="w-screen pt-32 h-screen">
        <div className="w-fit border p-10 mx-auto">
          <h1 className="mb-6">
            CONFERENCE WITH A TWIST
          </h1>

          <form onSubmit={this.handleSubmit}>
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="">YOUR INFO</h2>
                {this.renderInput('firstname', 'First Name', '', '', this.formClasses)}
                {this.renderInput('lastname', 'Last Name', '', '', this.formClasses)}
                {this.renderInput('email', 'Email', 'email', '', this.formClasses)}
                {this.renderInput('phone', 'Phone #', 'phone', '', this.formClasses)}
              </div>

              <div className="space-y-2">
                <h2 className="">EMERGENCY CONTACT</h2>
                {this.renderInput('emergencyFullName', 'Full Name', '', '', this.formClasses)}
                {this.renderInput('emergencyEmail', 'Email', 'email', '', this.formClasses)}
                {this.renderInput('emergencyPhone', 'Phone #', 'phone', '', this.formClasses)}
              </div>

              {this.renderDropdown('pref', 'Bed preference', this.bedOpts)}
            </div>


          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(CWATRegister);
