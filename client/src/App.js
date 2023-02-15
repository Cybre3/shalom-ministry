import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import AboutUs from './Components/AboutUs/AboutUs';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Contactus from './Components/ContactUs/Contactus';
import './App.css';
import CreateInvoice from './Components/Invoices/CreateInvoice/CreateInvoice';
import Invoices from './Components/Invoices/Invoices';
import CWATregister from './Components/Register/CWATregister/CWATregister';

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
              <Route path="/register" element={<Register />} />
              <Route path="/CWATregister" element={<CWATregister />} />
              <Route path="/contact-us" element={<Contactus />} />

              <Route exact path="/invoices" element={<Invoices />}></Route>
              <Route exact path="/invoices/create-new-invoice" element={<CreateInvoice />} />
            </Routes>
          </BrowserRouter>
        </main>
      </>
    );
  }
}

export default App;
