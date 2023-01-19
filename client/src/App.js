import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav/Nav';
import Home from './Home/Home';
import AboutUs from './AboutUs/AboutUs';
import Login from './Login/Login';
import RegisterForm from './Register/registerForm';
import Contactus from './ContactUs/Contactus';
import './App.css';
import CreateInvoice from './Invoices/CreateInvoice/CreateInvoice';

class App extends Component {
  // state = {};

  render() {
    return (
      <>
        <main className="container">
          <BrowserRouter>
            <Nav />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/contact-us" element={<Contactus />} />

              <Route path="/invoices">
                <Route path="/invoices/create-new-invoice" element={<CreateInvoice />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </main>
      </>
    );
  }
}

export default App;
