import React from 'react';
// import RegisterBackground from './RegisterBackground/RegisterBackground';
import RegisterForm from './RegisterForm/RegisterForm';
import './register.css';

function Register() {
  return (
    <div className="register-container h-full w-screen pt-0 my-10 mb-16 lg:my-0">
      {/* <RegisterBackground /> */}
      <RegisterForm />
    </div>
  );
}

export default Register;
