import React, { Component } from 'react';
import './login.css';
import '../common/mainBackground.css';

class LoginForm extends Component {
  render() {
    return (
      <div className="loginForm">
        <h1>Login</h1>
        <form action="">
          <label htmlFor="">Username</label>
          <input type="text" label="password" />
          <label htmlFor="">Password</label>
          <input type="password" label="password" />
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
