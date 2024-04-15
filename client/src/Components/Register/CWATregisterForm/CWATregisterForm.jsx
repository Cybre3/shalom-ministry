import React from 'react';
import { toast } from 'react-toastify';
import Joi from 'joi-browser';
// import _ from 'lodash';
// import { connect } from 'react-redux';


import Form from '../../common/form';
import { saveRegistrar } from '../../../services/registrarService';
// import { getCwatTicketTypes } from './../../../services/ticketSetvice';
// import { getConstant } from '../../../services/constantService';
import withRouter from '../../../utilities/withRouter';

import cwatHeader from '../../../assets/Register/CWAT-logo-color.png'



class CWATRegister extends Form {
  state = {
    data: {
      // registrarNumber: '',
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      allergies: '',
      questions: '',
      emergencyFullName: '',
      emergencyEmail: '',
      emergencyPhone: '',
      bedReq: ''
    },
    errors: {},
    bool: false,
    haveTicketAlready: false,
    ticketOptions: [],
    registrar: '',
  };


  schema = {
    _id: Joi.string(),
    // registrarNumber: Joi.number().required().label('Registrar Number'),
    firstname: Joi.string().required().label('First Name'),
    lastname: Joi.string().required().label('Last Name'),
    email: Joi.string().email().required().label('Email'),
    phone: Joi.string().required().label('Phone'),
    allergies: Joi.string().label('Allergies').allow(''),
    questions: Joi.string().label('Questions').allow(''),
    emergencyFullName: Joi.string().required().label('Emergency Full Name'),
    emergencyEmail: Joi.string().email().required().label('Emergency Last Name'),
    emergencyPhone: Joi.string().required().label('Emergency Phone'),
    bedReq: Joi.string().required().label('Bed Request'),
  };


  // Room request options

  bedOpts = [
    { id: 'xs', name: 'King', value: 'Shared Room (K/Q/D) - $425' },
    { id: 'sm', name: 'Queen', value: 'Shared Room (T) - $375' },
    { id: 'md', name: 'Double', value: 'General Admission (off campus) - $325' },
  ];


  // form input classes

  formClasses = {
    inputContainer: 'flex justify-between space-x-2',
    labelClass: 'text-lg',
    inputClass: 'border border-black/60 xl:w-3/4 w-2/3'
  }

  textareaClasses = {
    inputContainer: 'w-full text-left my-4 h-fit',
    labelClass: 'text-lg',
    inputClass: 'w-full h-3/4 py-1 px-2 mt-2 border border-black/60',
  };

  dropdownClasses = {
    inputContainer: 'w-2/3 text-left my-4 h-fit text-lg',
    labelClass: '',
    inputClass: 'w-full h-3/4 py-1 px-2 mt-2 border border-black/60 py-2',
    optionClass: ''
  }



  doSubmit = async () => {
    try {
      const { data } = this.state;
      this.setState({ bool: true });
      setTimeout(
        async () => {
          this.setState({ bool: false });
          await saveRegistrar('cwat-register', data);
          await toast.success('Registration submitted!');
          setTimeout(() => {
            window.location = '/registrars/cwat-register/new';
          }, 2500)
        },
        Promise.reject ? 1500 : 500
      );
    } catch (error) {
      console.log(error.message);
    }
  };



  render() {
    return (
      <div className="w-screen bg-purple-100/20 h-full">
        <div className='h-full xl:scale-[0.7] lg:scale-[0.8]'>

          <div className="xl:w-1/2 mx-auto">
            <div className='absolute md:relative z-10 md:bg-none md:opacity-100 bg-gradient-to-l from-black to-white to-20% opacity-40 h-36 md:h-fit'>
              <img src={cwatHeader} alt="cwat-header" className='md:mb-[-120px] scale-[0.8]' />
            </div>

            <div className='w-full h-36 bg-cwatHombre bg-[length:120%_110%] bg-center bg-no-repeat scale-y-[-1] scale-x-[-1] rounded'>
              {' '}
            </div>

            <form onSubmit={this.handleSubmit} className='md:p-16 p-4 py-12 border bg-white'>
              <div className="space-y-12">
                <div className="space-y-3">
                  <h2 className="text-center text-xl tracking-wide mb-10">YOUR INFO</h2>
                  {this.renderInput('firstname', 'First Name', '', '', this.formClasses)}
                  {this.renderInput('lastname', 'Last Name', '', '', this.formClasses)}
                  {this.renderInput('email', 'Email', 'email', '', this.formClasses)}
                  {this.renderInput('phone', 'Phone #', 'phone', '', this.formClasses)}
                </div>

                <div className="space-y-3">
                  <h2 className="text-center text-xl tracking-wide mb-10">EMERGENCY CONTACT</h2>
                  {this.renderInput('emergencyFullName', 'Full Name', '', '', this.formClasses)}
                  {this.renderInput('emergencyEmail', 'Email', 'email', '', this.formClasses)}
                  {this.renderInput('emergencyPhone', 'Phone #', 'phone', '', this.formClasses)}
                </div>

                {this.renderDropdown('bedReq', 'Room Selection', this.bedOpts, this.dropdownClasses)}

                {this.renderTextarea('allergies', 'Allergies', 'textarea', this.textareaClasses)}
                {this.renderTextarea('questions', 'Questions/Comments', 'textarea', this.textareaClasses)}
              </div>

              {this.renderButton('Register', '', 'text-center h-fit', 'w-fit px-20 py-2 mt-10 bg-blue-500 rounded rounded-md text-white text-xl tracking-wider cursor-pointer disabled:text-gray-500 disabled:bg-zinc-400 disabled:cursor-default')}
            </form>


            <div className='w-full h-36 bg-cwatHombre bg-[length:120%_110%] bg-center bg-no-repeat rounded opacity-90 xl:opacity-100'>
              {' '}
            </div>

          </div>

        </div>
      </div>
    );
  }
}


export default withRouter(CWATRegister);
