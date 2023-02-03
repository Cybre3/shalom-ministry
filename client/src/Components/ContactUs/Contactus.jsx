import React, { Component } from 'react';
import './contactus.css';

class Contactus extends Component {
  render() {
    return (
      <div className="contact-container">
        <div className="form-container">
            <h1>Contact Us</h1>
          <form action="">
            <div className="label-input">
              <label htmlFor="fname">First Name</label>
              <input type="text" id="fname" name="fname" />
            </div>
            <div className="label-input">
              <label htmlFor="lname">Last Name</label>
              <input type="text" id="lname" name="lname" />
            </div>
            <div className="label-input">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="label-input">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" name="phone" />
            </div>
            <div className="label-textarea">
              <label htmlFor="discover">How can we help?</label>
              <textarea rows="7" id="discover" name="discover" />
            </div>
            <button>Sumbit</button>
          </form>
        </div>
        <div className="contact-background-container">
          <div className="contact-text-container">
            <div>We want to</div>
            <div>Hear from you</div>
            <p className="contact-message">
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga
              praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
              obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contactus;
