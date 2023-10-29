import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Joi from 'joi-browser';

import { loadUsers, loginUser } from '../../../store/users';
import { getCurrentUser } from '../../../services/authService';

import Form from '../../common/form';

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

  async componentDidMount() {
    await this.props.loadUsers();
  }

  schema = {
    _id: Joi.string(),
    email: Joi.string().email().required().label('Email'),
    password: Joi.string().required().label('Password'),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      data.email = data.email.toLowerCase();

      await this.props.loginUser(data)
      window.location = `/dashboard/${getCurrentUser()._id}/home`;
    } catch (error) {
      const errors = { ...this.state.errors };
      this.setState({ errors });
    }
  };

  classes = {
    inputContainer: 'h-28 xl:h-[13vh]',
    inputClass: 'h-1/2'
  };

  render() {
    return (
      <div className="absolute box-border flex w-[70%] sm:w-[60%] md:w-1/2 lg:w-[40%] xl:w-1/4 items-center justify-center rounded-md bg-black p-6 text-white shadow-md lg:mt-24">
        <div className="relative flex w-full flex-col items-center justify-center">

          <h1 className="mb-10 font-bold uppercase tracking-wider text-white text-2xl">sign in</h1>

          <form onSubmit={this.handleSubmit} className="flex w-full flex-col gap-2">
            {this.renderCustomInput('email', 'Email', 'email', false, this.classes)}
            {this.renderCustomInput('password', 'Password', 'password', false, this.classes)}
            <div className="relative mb-10 flex w-full justify-between text-sm tracking-wider">
              <NavLink to="/recovery">Forgot Password</NavLink>
              <NavLink className="font-bold" to="/register/new">
                Register
              </NavLink>
            </div>
            {this.renderButton(
              'Login',
              this.state.bool,
              'send-btn w-1/2 self-center',
              'disabled:text-gray-500 w-full rounded-md py-2 disabled:bg-zinc-800 space-x-1 cursor-pointer disabled:cursor-default bg-white text-black'
            )}
          </form>

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.entities.users.list
});

const mapDispatchToProps = dispatch => ({
  loadUsers: () => dispatch(loadUsers()),
  loginUser: data => dispatch(loginUser(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(Login);
