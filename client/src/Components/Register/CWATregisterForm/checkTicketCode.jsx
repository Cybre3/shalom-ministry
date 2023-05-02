import React from 'react';
import Form from './../../common/form';
import Joi from 'joi-browser';
import $ from 'jquery';
import { getCwatUnregistrarTicket } from '../../../services/ticketSetvice';

class CheckTicketCode extends Form {
  state = {
    data: {
      ticketCode: '',
    },
    codeValid: false,
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    ticketCode: Joi.string().required().min(7).label('Ticket Code'),
  };

  componentDidUpdate() {
    $('.checkCode').on('click', async (e) => {
      this.handleCheckCode(e);
    });
  }

  checkCode = async () => {
    const { ticketCode } = this.state.data;

    try {
      const originalData = this.state.data;
      const unregisteredUserInDB = await getCwatUnregistrarTicket(ticketCode);
      this.props.populateUnregisteredUser(unregisteredUserInDB.data);
      this.setState({ codeValid: true, data: { ...originalData, ...unregisteredUserInDB.data } });
    } catch (error) {
      this.setState({errors: {message: error.message}})
    }
  };

  render() {
    const { bedType, roomType, paymentMethod, numberOfPayments } = this.state.data;
    return (
      <div className='ticketCode'>
        {this.renderInput('ticketCode', 'Ticket Code')}
        {this.state.codeValid && (
          <div className="ticket-information">
            <span className="ticket-info-piece">Bed Type: {bedType} </span>
            <span className="ticket-info-piece">Room Type: {roomType} </span>
            <span className="ticket-info-piece">Payment Method: {paymentMethod} </span>
            <span className="ticket-info-piece">Number of payments made: {numberOfPayments} </span>
          </div>
        )}
        {!this.state.codeValid && this.renderButton('Check Code', false, 'checkCode')}
      </div>
    );
  }
}

export default CheckTicketCode;
