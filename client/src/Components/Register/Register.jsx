import React from 'react';
import RegisterBackground from './RegisterBackground/RegisterBackground';
import RegisterForm from './RegisterForm/RegisterForm';
import './register.css';

function Register() {
  return (
    <div className="register-container">
      <RegisterBackground />
      <RegisterForm />
    </div>
  );
}

export default Register;
