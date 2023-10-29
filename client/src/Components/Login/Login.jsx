import React from 'react';
// import LoginBackground from './LoginBackground/LoginBackground';
import LoginForm from './LoginForm/LoginForm';
import './login.css';

function Login({user}) {
  return (
    <div className="login-container h-screen w-screen pt-0">
      {/* <LoginBackground /> */}
      <LoginForm user={user} />
    </div>
  );
}

export default Login;