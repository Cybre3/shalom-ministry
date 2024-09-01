import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Slide, ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';

import ScrollToTop from './utilities/scrollToTop';
import auth from './services/authService';
import configureStore from './store/configureStore'

import AboutUs from './Components/AboutUs/AboutUs';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import RegisterForm from './Components/Register/Register';
import CWATregister from './Components/Register/CWATregisterForm/CWATregisterForm';
import Emailsend from './Components/Emailsend';
// import NotFound from './Components/NotFound';


import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-multi-carousel/lib/styles.css';

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
            <main className="">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/register/:id" element={<RegisterForm />} />
                <Route path="/registrars/cwat-register/:id" element={<CWATregister />} />
                <Route path="/emailsend" element={<Emailsend />} />
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
      </React.Fragment>
    );
  }
}

export default App;
