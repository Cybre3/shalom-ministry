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

  componentDidMount() {
    $('.check-code-btn').on('click', async (e) => this.handleCheckCode(e));
  }

  checkCode = async () => {
    const originalData = this.state.data;

    try {
      const { ticketCode } = this.state.data;
      const unregisteredUserInDB = await getCwatUnregistrarTicket(ticketCode);
      this.props.populateUnregisteredUser(unregisteredUserInDB.data);
      this.setState({ codeValid: true, data: { ...originalData, ...unregisteredUserInDB.data } });
    } catch (error) {
      this.setState({ errors: { message: error.message } });
    }
  };

  render() {
    const { bedType, roomType, paymentMethod, numberOfPayments, paymentsLeft } = this.state.data;
    return (
      <div className="relative h-fit w-full mx-auto text-center">
        <div className="text-center check-code-inBtn space-y-2 md:space-y-4">
          {this.renderInput('ticketCode', 'Ticket Code')}
          {!this.state.codeValid && this.renderButton('Check Code', false, 'check-code-btn lg:text-xl')}
        </div>
        {this.state.codeValid && (
          <div className="ticket-information">
            <span className="ticket-info-piece">Bed Type: {bedType} </span>
            <span className="ticket-info-piece">Room Type: {roomType} </span>
            <span className="ticket-info-piece">Payment Method: {paymentMethod} </span>
            <span className="ticket-info-piece">Payments made: {numberOfPayments} </span>
            <span className="ticket-info-piece">Payments remaining: {paymentsLeft} </span>
          </div>
        )}
      </div>
    );
  }
}

export default CheckTicketCode;
