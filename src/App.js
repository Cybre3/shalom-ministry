import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './Login/loginForm';
import Nav from './Nav/Nav';
import './App.css';
import RegisterForm from './Register/registerForm';

class App extends Component {
  // state = {};

  render() {
    return (
      <>
        <main className="container">
          <BrowserRouter>
            <Nav />
            <Routes>
              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<RegisterForm />} />
            </Routes>
          </BrowserRouter>
        </main>
      </>
    );
  }
}

export default App;
