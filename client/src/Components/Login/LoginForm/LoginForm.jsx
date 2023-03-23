import React from 'react';
import { NavLink, Navigate } from 'react-router-dom';

import Joi from 'joi-browser';
import Form from '../../common/form';
import { login } from '../../../services/authService';

import './loginForm.css';

class Login extends Form {
  state = {
    data: {
      email: '',
      password: '',
    },
    errors: {},
    bool: false,
  };

  schema = {
    _id: Joi.string(),
    email: Joi.string().email().required().label('Email'),
    password: Joi.string().required().label('Password'),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await login(data.email, data.password);
      window.location = '/';
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="signin">
        <div className="content">
          <h1>sign in</h1>
          <form onSubmit={this.handleSubmit}>
            {this.renderCustomInput('email', 'Email', 'email')}
            {this.renderCustomInput('password', 'Password', 'password')}
            <div className="formlinks">
              <NavLink to="/">Forgot Password</NavLink>
              <NavLink to="/register">Register</NavLink>
            </div>
            {this.renderButton('Login', this.state.bool, 'send-btn')}
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
