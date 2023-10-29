import React from 'react';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import Joi from 'joi';
import _ from 'lodash';
import { connect } from 'react-redux';

import Form from '../../common/form';
// import { register } from './../../../services/userService';
import { getUserById } from '../../../services/authService';
import { getConstant } from '../../../services/constantService';
import { addUser, loadUsers } from '../../../store/users';
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
    bool: false,
  };

  async componentDidMount() {
    this.props.loadUsers();
    this.populateUser();
  }

  schema = {
    _id: Joi.string(),
    userNumber: Joi.number().required().label('User Number'),
    firstname: Joi.string().required().label('First Name'),
    lastname: Joi.string().required().label('Last Name'),
    email: Joi.string().email().required().label('Email'),
    password: Joi.string().min(8).required().label('Password'),
    rePassword: Joi.any()
      .valid(Joi.ref('password'))
      .required()
      .label('Confirm password')
      .options({ language: { any: { allowOnly: 'must match password' } } }),
    discover: Joi.string().label('How did you hear about Shalom Ministry').allow(''),
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
      email: user.email,
    };
  }

  doSubmit = async () => {
    const creatingProfile = toast.loading('creating profile');

    try {
      const basicInfo = _.omit(this.state.data, 'isAdmin');
      basicInfo.email = basicInfo.email.toLowerCase();
      const { isAdmin } = this.state.data;
      const user = {
        basicInfo,
        admin: {
          isAdmin,
        }
      }

      await this.props.addUser(user);

      setTimeout(() => {
        toast.update(creatingProfile, { render: "Registration complete!", type: 'success', isLoading: false, autoClose: 3000 });
      }, 1500);

      /*   setTimeout(() => {
  
          window.location = `/dashboard/${_id}`;
        }, 3500); */
    } catch (error) {
      const errors = { ...this.state.errors };
      this.setState({ errors });

      setTimeout(() => {
        toast.update(creatingProfile, { render: error.message, type: 'error', isLoading: false, autoClose: 3000 });
      }, 1500);
    }
  };

  textareaClasses = {
    inputContainer: 'w-full text-left my-4 h-28 xl:h-[13vh]',
    inputClass: 'w-full h-3/4 rounded-md bg-neutral-600 text-white py-1 px-2 mt-2',
  };

  inputClasses = {
    inputContainer: 'h-20 xl:h-[13vh]',
    inputClass: 'h-[60%] pb-0.5 px-4 pt-4',
    labelClass: 'pl-2 pt-0.5',
  };

  render() {
    return (
      <div className="box-border flex w-[70%] items-center justify-center rounded-md bg-black p-6 text-white shadow-md sm:w-[60%] md:w-1/2 lg:my-52 lg:w-[40%] xl:w-[35%] 2xl:w-[30%]">
        <div className="relative flex w-full flex-col items-center justify-center">
          <h1 className="mb-10 text-2xl font-bold uppercase tracking-wider text-white">Register</h1>
          <form onSubmit={this.handleSubmit} className="space-y-2">
            {this.renderCustomInput('firstname', 'First Name', 'text', false, this.inputClasses)}
            {this.renderCustomInput('lastname', 'Last pName', 'text', false, this.inputClasses)}
            {this.renderCustomInput('email', 'Email', 'email', false, this.inputClasses)}
            {this.renderCustomInput('password', 'Password', 'password', false, this.inputClasses)}
            {this.renderCustomInput(
              'rePassword',
              'Confirm password',
              'password',
              false,
              this.inputClasses
            )}
            <hr></hr>
            {this.renderTextarea(
              'discover',
              'How did you hear about Shalom Ministry?',
              'textarea',
              this.textareaClasses
            )}
            <div className="text-md relative !my-10 flex w-full tracking-wider justify-center">
              Already Registered? Click here to
              <NavLink className="font-bold ml-1 text-blue-400" to="/login">
                Sign in
              </NavLink>
            </div>
            {this.renderButton(
              'Register',
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
  addUser: user => dispatch(addUser(user)),
  loadUsers: () => dispatch(loadUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RegisterForm))