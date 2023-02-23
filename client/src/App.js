import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import AboutUs from './Components/AboutUs/AboutUs';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Contactus from './Components/ContactUs/Contactus';
import CreateInvoice from './Components/Invoices/CreateInvoice/CreateInvoice';
import Invoices from './Components/Invoices/Invoices';
import CWATregister from './Components/Register/CWATregisterForm/CWATregisterForm';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

class App extends Component {
  // state = {};

  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <ToastContainer />
          <Nav />
          <main className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/CWATregister" element={<CWATregister />} />
              <Route path="/contact-us" element={<Contactus />} />

              <Route exact path="/invoices" element={<Invoices />}></Route>
              <Route exact path="/invoices/create-new-invoice" element={<CreateInvoice />} />
            </Routes>
          </main>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
