import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav/Nav';
import Home from './Home/Home';
import LoginForm from './Login/loginForm';
import RegisterForm from './Register/registerForm';
import './App.css';

class App extends Component {
  // state = {};

  render() {
    return (
      <>
        <main className="container">
          <BrowserRouter>
            <Nav />
            <Routes>
              <Route exact path='/' element={<Home />} />
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
