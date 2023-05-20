import React from 'react';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import Joi from 'joi-browser';

import Form from '../../common/form';
import { register } from './../../../services/userService';
import { getUserById } from '../../../services/authService';
import { getConstant } from '../../../services/constantService';
import withRouter from '../../../utilities/withRouter';

import './registerForm.css';

class RegisterForm extends Form {
  state = {
    data: {
      userNumber: '',
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

  async componentDidMount() {
    this.populateUser();
  }

  schema = {
    _id: Joi.string(),
    userNumber: Joi.number().required().label('User Number'),
    firstname: Joi.string().required().label('First Name'),
    lastname: Joi.string().required().label('Last Name'),
    email: Joi.string().email().required().label('Email'),
    password: Joi.string().required().label('Password'),
    rePassword: Joi.ref('password'),
    discover: Joi.string().label('How you did you hear about Shalom Ministry').allow(''),
    isAdmin: Joi.boolean(),
  };

  async populateUser() {
    try {
      const userId = this.props.params.id;
      if (userId === 'new') {
        const userNumber = (await getConstant('userNumber')).data.amount;
        this.setState({ data: { ...this.state.data, userNumber } });
        return;
      }

      const { data: user } = await getUserById(userId);
      console.log('regForm', user)
      this.setState({ data: this.mapToViewModel(user) });
    } catch (error) {
      console.log(error.message);
    }
  }

  mapToViewModel(user) {
    return {
      _id: user._id,
      userNumber: user.userNumber,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email
    };
  }

  doSubmit = async () => {
    try {
      await register(this.state.data);
      window.location = '/';
      toast.success('Registration complete!');
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
      <div className="signup">
        <div className="content">
          <h1>Register</h1>
          <form onSubmit={this.handleSubmit}>
            {this.renderCustomInput('firstname', 'First Name')}
            {this.renderCustomInput('lastname', 'Last Name')}
            {this.renderCustomInput('email', 'Email', 'email')}
            {this.renderCustomInput('password', 'Password', 'password')}
            {this.renderCustomInput('rePassword', 'Re-Password', 'password')}
            <hr></hr>
            {this.renderCustomInput(
              'discover',
              'How did you hear about Shalom Ministry',
              'textarea'
            )}
            <div className="formlinks">
              <NavLink to="/">Admin</NavLink>
              <NavLink to="/login">Sign in</NavLink>
            </div>
            {this.renderButton('Register')}
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(RegisterForm);
