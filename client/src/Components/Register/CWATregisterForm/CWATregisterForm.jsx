import React from 'react';
import { toast } from 'react-toastify';
import Form from '../../common/form';
import Joi from 'joi-browser';
import { CWATregister } from '../../../services/userService';
import CWATpPlan from '../../../assets/Register/shalomMinitryPaymentPlan.png';
import smLogo from '../../../assets/Register/SM-Logo.png';
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
    },
    errors: {},
  };

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
  };

  doSubmit = async () => {
    try {
      await CWATregister(this.state.data);
      toast.success('Registration form submitted!');
      console.log('form submitted');
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        toast.error(ex.response.message)
        this.setState({ errors });
      }
      console.log(ex);
    }
  };

  transformText(text) {
    const newText = text
      .split('')
      .map((char, index, string) =>
        (string[index - 1] !== ' ' && char === 'i') || (string[index - 1] !== ' ' && char === 'f') || (string[index - 1] !== ' ' && char === 'b')
          ? char
          : char.toUpperCase()
      )
      .join('');

    return newText;
  }

  render() {
    return (
      <div className="cwatRegister">
        <div className="content">
          <h1>{this.transformText('conference with a twist')}</h1>
          <img src={CWATpPlan} alt="cwat-pPlan" className="cwat-pPlan" />
          <form onSubmit={this.handleSubmit}>
            <div className="cwat-contact-info">
              <div className="cwat-your-info">
                <h2 className="cwat-header">{this.transformText('your info')}</h2>
                {this.renderCustomInput('firstname', 'First Name')}
                {this.renderCustomInput('lastname', 'Last Name')}
                {this.renderCustomInput('email', 'Email', 'email')}
                {this.renderCustomInput('phone', 'Phone #', 'phone')}
              </div>
              <div className="cwat-emergency-contact">
                <h2 className="cwat-header">{this.transformText('emergency contact')}</h2>
                {this.renderCustomInput('emergencyFullName', 'Full Name')}
                {this.renderCustomInput('emergencyEmail', 'Email', 'email')}
                {this.renderCustomInput('emergencyPhone', 'Phone #', 'phone')}
              </div>
              <div className="cwat-input-background cwat-bg-right"></div>
            </div>
            <hr></hr>
            <div className="cwat-questions-container">
              <h2 className="cwat-header">{this.transformText('a few questions')}</h2>
              {this.renderTextarea('allergies', 'Do you have any food allergies or dietary restrictions?')}
              {this.renderTextarea('questions', 'Do you have any questions for us?')}
              {this.renderTextarea('discover', 'How you did you hear about Shalom Ministry?')}
              <div className="cwat-input-background cwat-bg-left"></div>
            </div>
            {this.renderButton(this.transformText('Submit'))}
          </form>
        </div>
        <img src={smLogo} alt='shalom-ministry-logo' className="cwat-shalom-logo" />
      </div>
    );
  }
}

export default CWATRegister;
