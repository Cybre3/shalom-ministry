import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './home.css';

class Home extends Component {
  render() {
    return (
     <div className='home'>
      <NavLink to='/invoices'>View Invoices</NavLink>
      <NavLink to='/invoices/create-new-invoice'>Create Invoice</NavLink>
      <NavLink to='/CWATregister'>Conference with a twist registration</NavLink>
     </div>
    );
  }
}

export default Home;
