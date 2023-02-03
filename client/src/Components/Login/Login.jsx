import React from 'react';
import LoginBackground from './LoginBackground/LoginBackground';
import LoginForm from './LoginForm/LoginForm';
import './login.css';

function Login() {
  return (
    <div className="login-container">
      <LoginBackground />
      <LoginForm />
    </div>
  );
}

export default Login;
