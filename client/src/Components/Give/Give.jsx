import React from 'react';
import Form from './../common/form';
import './give.css';

class Give extends Form {
  render() {
    return (
      <div className="give-container">
        <div className="users-give">
          <h2>Select Donation Option</h2>
          <div className="give-opts">
            <div className="give-opt">
              <h3 className="give-opt-title">Zelle</h3>
              <p>SHALOM99MINISTRY</p>
              {/* <button className="give-opt-btn">Donate</button> */}
            </div>
            <div className="give-opt">
              <h3 className="give-opt-title">Cashapp</h3>
              <p>786-400-4072</p>
              {/* <button className="give-opt-btn">Donate</button> */}
            </div>
            {/*   <div className="give-opt">
              <h3 className="give-opt-title">PayPal</h3>
              <button className="give-opt-btn">Donate</button>
            </div> */}
          </div>
        </div>

        <div className="sponsors-form">
          <h2>Sponsors</h2>
          <div className="give-subtitle">
            <i>
              Please contact Shalom Ministry
              <br /> 786 400 4072
            </i>{' '}
            or Send us a message
          </div>

          <form action="">
            <div className="sponsor-name">
              {this.renderInput('firstname', 'First Name')}
              {this.renderInput('lastname', 'Last Name')}
            </div>
            <div>or</div>
            {this.renderInput('organizationName', 'Organization Name')}
            {this.renderInput('email', 'Email', 'email')}
            {this.renderInput('phone', 'Phone #', 'phone')}
            {this.renderTextarea('message', 'Message')}
            <div>
              <h3>Best Mode of contact</h3>
              <input type="checkbox" id="phone" name="phone" value="phone" />
              <label for="test">Phone</label>
              <input type="checkbox" id="email" name="email" value="email" />
              <label for="test">Email</label>
            </div>
            {/* {this.renderButton('Send')} */}
          </form>
        </div>
      </div>
    );
  }
}

export default Give;
