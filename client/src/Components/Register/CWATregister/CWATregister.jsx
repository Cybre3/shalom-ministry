import React from 'react';
import Form from '../../common/form';
import Joi from 'joi-browser';
import '../RegisterForm/registerForm.css';
import { register } from './../../../services/userService';

class CWATregister extends Form {
  state = {
    data: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      rePassword: '',
      discover: '',
      isAdmin: false,
    },
    errors: {},
  };

  shirtOptions = [
    {id: 1, name: 'Small'},
    {id: 1, name: 'Medium'},
    {id: 1, name: 'Large'},
    {id: 1, name: 'X-Large'}
  ];
  pantsOptions = [
    {id: 1, name: 'Small'},
    {id: 1, name: 'Medium'},
    {id: 1, name: 'Large'},
    {id: 1, name: 'X-Large'}
  ];

  schema = {
    _id: Joi.string(),
    firstname: Joi.string().required().label('First Name'),
    lastname: Joi.string().required().label('Last Name'),
    email: Joi.string().email().required().label('Email'),
    password: Joi.string().required().label('Password'),
    rePassword: Joi.ref('password'),
    discover: Joi.string().label('How you did you hear about Shalom Ministry').allow(''),
    isAdmin: Joi.boolean(),
  };

  doSubmit = async () => {
    try {
      await register(this.state.data);
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
      console.log(ex);
    }
  };

  render() {
    return (
      <div className="cwatRegister">
        <div className="content">
          <h1>Conference</h1>
          <form onSubmit={this.handleSubmit}>
            {this.renderCustomInput('firstname', 'First Name')}
            {this.renderCustomInput('lastname', 'Last Name')}
            {this.renderCustomInput('email', 'Email', 'email')}
            {this.renderCustomInput('phone', 'Phone', 'phone')}
            {this.renderTextarea('allergies', 'Food allergies and dietary restrictions')}
            {this.renderTextarea('questions', 'Questions')}
            {this.renderCustomInput(
              'discover',
              'How you did you hear about Shalom Ministry',
              'textarea'
            )}
            <hr></hr>
            <h3>Emergency Contact</h3>
            {this.renderCustomInput('Fullname', 'Full Name')}
            {this.renderCustomInput('email', 'Email', 'email')}
            {this.renderCustomInput('phone', 'Phone', 'phone')}

            {this.renderButton('Register')}
          </form>
        </div>
      </div>
    );
  }
}

export default CWATregister;
