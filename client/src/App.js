import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Slide, ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';

import ScrollToTop from './utilities/scrollToTop';
import auth from './services/authService';
import configureStore from './store/configureStore'

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
import RegisterForm from './Components/Register/Register';
import Registrars from './Components/Register/Registrars';
import Users from './Components/Users/Users';
import ThankYouNote from './Components/Forms/ThankYouNote';
import CWATregEditForm from './Components/Register/CWATregisterForm/CWATregEditForm';
import Settings from './Components/Dashboard/Settings';
import Recovery from './Components/Recovery';
import ResetPassword from './Components/ResetPassword';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import DashHome from './Components/Dashboard/DashHome';
import MyEvents from './Components/Dashboard/myEvents';
import MyMessages from './Components/Dashboard/myMessages';

const store = configureStore();

class App extends Component {
  state = {
    scrollBtnDisplay: 'none',
    messageNumber: 0,
  };

  componentDidMount() {
    window.onscroll = () => {
      this.scrollFunction();
    };
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  scrollFunction() {
    this.setState({
      scrollBtnDisplay:
        document.body.scrollTop > 500 || document.documentElement.scrollTop > 500
          ? 'block'
          : 'none',
    });
  }

  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <Provider store={store} >

          <BrowserRouter>
            <ScrollToTop />
            <ToastContainer position='top-center' newestOnTop={true} transition={Slide} progressStyle={false} />
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
                <Route path="/register/:id" element={<RegisterForm />} />
                <Route path="/registrars/cwat-register/:id" element={<CWATregister />} />
                <Route path="/contact-us/:id" element={<Contactus />} />
                <Route path="/give/:id" element={<Give />} />
                <Route path="/recovery" element={<Recovery />} />
                <Route path="/reset-password/:email" element={<ResetPassword />} />
                {/* <Route path="/movies" render={(props) => <Movies {...props} user={user} />} /> */}

                <Route element={<ProtectedRoutes />}>
                  <Route path="/dashboard/:id" element={<Dashboard />}>
                    <Route path='home' element={<DashHome />} />
                    <Route path='events' element={<MyEvents />} />
                    <Route path='my-messages' element={<MyMessages />}>
                      <Route path='compose' element={<MyMessages />} />
                      <Route path='inbox' element={<MyMessages />} />
                    </Route>
                    <Route path="invoices" element={<Invoices />} />
                    <Route path="invoices/:invoiceId" element={<CreateInvoice />} />
                    <Route path="forms/thankyou/:id" element={<ThankYouNote />} />
                    <Route path="users" element={<Users />} />
                    <Route path="messages" element={<Messages />} />
                    <Route path="registrars" element={<Registrars />} />
                    <Route path="registrars/cwat-register/:registrarId" element={<CWATregEditForm />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="data" element={<SaveData />} />
                  </Route>
                </Route>
                {/* <Route path="/invoices/:id" element={<CreateInvoice />} /> */}
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
                className="fa fa-arrow-up p-2 py-3 bg-black"
              />
            </main>
            <Footer />
          </BrowserRouter>
        </Provider>
      </React.Fragment >
    );
  }
}

export default App;
