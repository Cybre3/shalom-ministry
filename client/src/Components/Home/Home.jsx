import React, { Component } from 'react';
import CategoryCardNoPic from '../common/CategoryCard/CategoryCardNoPic';
import './home.css';
import HomeFlyer from './HomeFlyer/HomeFlyer';

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <HomeFlyer />
        <div className="home-category-cards">
          <CategoryCardNoPic title="Events" />
          <CategoryCardNoPic title="Give" />
          <CategoryCardNoPic title={`Get Involved`} />
          <CategoryCardNoPic title="Testimonies" />
        </div>
      </div>
    );
  }
}

export default Home;
/* 
<div className='home'>
      <NavLink to='/invoices'>View Invoices</NavLink>
      <NavLink to='/invoices/create-new-invoice'>Create Invoice</NavLink>
      <NavLink to='/CWATregister'>Conference with a twist registration</NavLink>
     </div>
*/
