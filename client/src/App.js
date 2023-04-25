import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ScrollToTop from './utilities/scrollToTop';
import auth from './services/authService';

import AboutUs from './Components/AboutUs/AboutUs';
import Contactus from './Components/ContactUs/Contactus';
import CreateInvoice from './Components/Invoices/CreateInvoice/CreateInvoice';
import CWATregister from './Components/Register/CWATregisterForm/CWATregisterForm';
import Dashboard from './Components/Dashboard/Dashboard';
import Footer from './Components/Footer/Footer';
import Give from './Components/Give/Give';
import Home from './Components/Home/Home';
import Invoices from './Components/Invoices/Invoices';
import Login from './Components/Login/Login';
import Logout from './Components/logout';
import Messages from './Components/Messages/Messages';
import Nav from './Components/Nav/Nav';
import ProtectedRoutes from './Components/common/protectedRoutes';
import SaveData from './Components/SaveData/SaveData';
import Register from './Components/Register/Register';
import Registrars from './Components/Register/Registrars';
import Users from './Components/Users/Users';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

class App extends Component {
  state = {
    scrollBtnDisplay: 'none',
    messageNumber: 0,
    invoiceNumber: 0,
  };
  componentDidMount() {
    window.onscroll = () => {
      this.scrollFunction();
    };
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      this.setState({ scrollBtnDisplay: 'block' });
    } else {
      this.setState({ scrollBtnDisplay: 'none' });
    }
  }

  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <BrowserRouter>
          <ScrollToTop />
          <ToastContainer />
          <Nav user={user} />
          <main className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/get-involved" element={<Home />} />
              <Route exact path="/testimonies" element={<Home />} />
              <Route exact path="/events" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/login" element={<Login user={user} />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/register" element={<Register />} />
              <Route path="/CWATregister" element={<CWATregister />} />
              <Route path="/contact-us" element={<Contactus />} />
              <Route path="/give" element={<Give />} />
              {/* <Route path="/movies" render={(props) => <Movies {...props} user={user} />} /> */}

              <Route element={<ProtectedRoutes />}>
                <Route path="/dashboard" element={<Dashboard />}>
                  <Route path="invoices" element={<Invoices />} />
                  <Route path="users" element={<Users />} />
                  <Route path="invoices/create-new-invoice" element={<CreateInvoice />} />
                  <Route path="messages" element={<Messages />} />
                  <Route path="registrars" element={<Registrars />} />
                  <Route path="data" element={<SaveData />} />
                </Route>
              </Route>
            </Routes>

            {/* <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              style={{ display: this.state.scrollBtnDisplay }}
              id="back-to-top-btn"
            >
              {' '}
            </button> */}

            <i
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              style={{ display: this.state.scrollBtnDisplay }}
              id="back-to-top-btn"
              className="fa fa-arrow-up"
            />
          </main>
          <Footer />
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
