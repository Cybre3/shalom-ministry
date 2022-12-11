import React, { Component } from 'react';
import './login.css';
import '../common/mainBackground.css';

class LoginForm extends Component {
  render() {
    return (
      <div className="login-container">
        <div className="welcome-back">
          <div className="welcome-back-box">
            <div>Welcome</div>
            <div>Back</div>
            <p className="message">
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga
              praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
              obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil.
            </p>
          </div>
        </div>
        <form action="">
          <h1>Sign in</h1>
          <label htmlFor="">Username</label>
          <input type="text" label="password" />
          <label htmlFor="">Password</label>
          <input type="password" label="password" />
          <button>Sign-In</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
