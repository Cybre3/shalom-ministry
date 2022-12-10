import React, { Component } from 'react';
import './register.css';
import '../common/mainBackground.css';

class RegisterForm extends Component {
  render() {
    return (
      <div className="registerForm">
        <h1>Register</h1>
        <form action="">
          <div className="label-input">
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="fname" />
          </div>
          <div className="label-input">
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" name="lname" />
          </div>
          <div className="label-input">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="label-input">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" label="username" />
          </div>
          <div className="label-input">
            <label htmlFor="pass">Password</label>
            <input type="password" id="pass" name="pass" />
          </div>
          <div className="label-input">
            <label htmlFor="re-pass">Re-Password</label>
            <input type="password" id="re-pass" name="re-pass" />
          </div>
          <div className="label-textarea">
            <label htmlFor="discover">
              We would love to know how you heard about Shalom Ministry
            </label>
            <textarea rows='7' id="discover" name="discover" />
          </div>
          <button>Move 4ward</button>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
