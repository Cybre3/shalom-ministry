import React from 'react';
import { Navigate } from "react-router-dom";
import Form from '../../common/form';
import Joi from 'joi-browser';
import './createInvoice.css';
import { saveInvoice } from './../../services/invoiceService';

class CreateInvoice extends Form {
  state = {
    data: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      invoiceNumber: 1,
      currentDate: Date.now,
      description: '',
      qty: '',
      unitPrice: '',
      amount: '',
      total: '',
      paymentApplied: '',
      balanceDue: '',
      comments: '',
    },
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    firstName: Joi.string().required().label('First Name'),
    lastName: Joi.string().required().label('Last Name'),
    email: Joi.string().email().required().label('Email'),
    phone: Joi.string().required().label('Phone'),
    invoiceNumber: Joi.number().required().label('Invoice Number'),
    currentDate: Joi.date().required().label('Date'),
    description: Joi.string().required().label('Description'),
    qty: Joi.number().required().label('Quantity'),
    unitPrice: Joi.number().required().label('Unit Price'),
    amount: Joi.number().required().label('Amount'),
    total: Joi.number().required().label('Total'),
    paymentApplied: Joi.number().required().label('Payment Applied'),
    balanceDue: Joi.number().required().label('Balance Due'),
    comments: Joi.string().required().label('Comments'),
  };

  doSubmit = async () => {
    // Call from server
    await saveInvoice(this.state.data);

   <Navigate to="/" replace={true} />; // TODO: redirect after submit not functional
    console.log('Invoice Saved');
  };

  render() {
    return (
      <div className="invoice-container">
        <h1>Invoice</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="bill-to">
            {this.renderInput('firstName', 'First Name')}
            {this.renderInput('lastName', 'Last Name')}
            {this.renderInput('email', 'Email', 'email')}
            {this.renderInput('phone', 'Phone', 'phone')}
          </div>
          <div className="invoice-num-date">
            {this.renderInput('invoiceNumber', 'Invoice Number')}
            {this.renderInput('currentDate', 'Date', 'date')}
          </div>
          <div className="invoice-description">
            {this.renderInput('description', 'Description', 'textarea')}
            {this.renderInput('qty', 'Quantity')}
            {this.renderInput('unitPrice', 'Unit Price')}
            {this.renderInput('amount', 'Amount')}
            {this.renderInput('total', 'Total')}
            {this.renderInput('paymentApplied', 'Payment Applied')}
            {this.renderInput('balanceDue', 'Balance Due')}
            {this.renderInput('comments', 'Comments')}
          </div>
          {this.renderButton('Submit')}
        </form>
      </div>
    );
  }
}

export default CreateInvoice;
