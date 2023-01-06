import React from 'react';
import './loginForm.css';

function LoginForm(props) {
  return (
    <div className="signin">
      <div className="content">
        <form action="">
          <h1>sign in</h1>
          <div className="inputbox">
            <input type="text" autoComplete='username' required />
            <i>Username</i>
          </div>
          <div className="inputbox">
            <input type="password" autoComplete="current-password" required />
            <i>Password</i>
          </div>
          <div className="formlinks">
            <a href="/">Forgot Password</a>
            <a href="/">Register</a>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
