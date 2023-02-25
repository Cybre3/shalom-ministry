import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AboutUs from './Components/AboutUs/AboutUs';
import Contactus from './Components/ContactUs/Contactus';
import CreateInvoice from './Components/Invoices/CreateInvoice/CreateInvoice';
import CWATregister from './Components/Register/CWATregisterForm/CWATregisterForm';
import Give from './Components/Give/Give';
import Home from './Components/Home/Home';
import Invoices from './Components/Invoices/Invoices';
import Login from './Components/Login/Login';
import Nav from './Components/Nav/Nav';
import Register from './Components/Register/Register';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Footer from './Components/Footer/Footer';

class App extends Component {
  /* state = {
    scrollBtnDisplay: 'none',
  }; */

  /*   componentDidMount() {
    // window.onscroll = () => {
    //   // this.scrollFunction();
    // };
  } */

  /*   scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      this.setState({scrollBtnDisplay: 'block'});
    } else {
      this.setState({scrollBtnDisplay: 'none'});
    }
  }
 */
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
              <Route path="/give" element={<Give />} />

              <Route exact path="/invoices" element={<Invoices />}></Route>
              <Route exact path="/invoices/create-new-invoice" element={<CreateInvoice />} />
            </Routes>
            {/* <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              style={{ display: this.state.scrollBtnDisplay }}
              id="back-to-top-btn"
            >
              <i className="bi bi-chevron-bar-up"></i>
            </button> */}
          </main>
          <Footer />
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
