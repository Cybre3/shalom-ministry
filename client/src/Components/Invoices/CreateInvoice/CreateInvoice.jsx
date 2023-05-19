import React from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import Joi from 'joi-browser';

import Form from '../../common/form';
import { saveInvoice } from '../../../services/invoiceService';
import { getInvoice } from '../../../services/invoiceService';
import withRouter from '../../../utilities/withRouter';

import './createInvoice.css';

class CreateInvoice extends Form {
  state = {
    data: {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      invoiceNumber: '',
      currentDate: new Date().toISOString().substring(0, 10),
      description: '',
      qty: '',
      unitPrice: '',
      amount: '',
      total: 0,
      paymentApplied: 0,
      balanceDue: 0,
      comments: '',
    },
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    firstname: Joi.string().required().label('First Name'),
    lastname: Joi.string().required().label('Last Name'),
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
    comments: Joi.string().label('Comments').allow(''),
  };

  componentDidMount() {
    this.populateInvoice();
  }

  componentDidUpdate() {
    // let { total, paymentApplied, balanceDue } = { ...this.state.data };
    // balanceDue = parseInt(total - paymentApplied);
    // this.setState({ data: { ...this.state.data, balanceDue } });
  }

  async populateInvoice() {
    try {
      const invoiceId = this.props.params.id;
      if (invoiceId === 'new') return;

      const { data: invoice } = await getInvoice(invoiceId);
      this.setState({ data: this.mapToViewModel(invoice) });
    } catch (error) {
      console.log(error.message);
    }
  }

  mapToViewModel(invoice) {
    return {
      _id: invoice._id,
      firstname: invoice.firstname,
      lastname: invoice.lastname,
      email: invoice.email,
      phone: invoice.phone,
      invoiceNumber: invoice.invoiceNumber,
      currentDate: invoice.currentDate,
      description: invoice.description,
      qty: invoice.qty,
      unitPrice: invoice.unitPrice,
      amount: invoice.amount,
      total: invoice.total,
      paymentApplied: invoice.paymentApplied,
      balanceDue: invoice.balanceDue,
      comments: invoice.comments,
    };
  }

  doSubmit = async () => {
    await saveInvoice(this.state.data);
    const originalData = { ...this.state.data };
    let invoiceNumber = { ...originalData.invoiceNumber };
    invoiceNumber += 1;
    this.setState({ data: { ...originalData, invoiceNumber } });

    <Navigate to="invoices" replace={true} />;
    toast.success('Invoiced Saved');
  };

  render() {
    return (
      <div className="invoice-container">
        <div className="logo">
          <NavLink to="/">
            <img src={require('../../../assets/SM-Logo-w-Title.png')} alt="" />
          </NavLink>
          <NavLink to="/dashboard/invoices">View Invoices</NavLink>
          <h1>sales receipt</h1>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="invoice-top">
            <div className="bill-to">
              <h2>Bill to</h2>
              <div className="entries">
                {this.renderInput('firstname', 'First Name')}
                {this.renderInput('lastname', 'Last Name')}
                {this.renderInput('email', 'Email', 'email')}
                {this.renderInput('phone', 'Phone', 'phone')}
              </div>
            </div>
            <div className="invoice-num-date">
              <div className="title">
                <h2>invoice #</h2>
                <h2>date</h2>
              </div>
              <div className="entries no-border">
                {this.renderInput('invoiceNumber', '', '')}
                {this.renderInput('currentDate', '', 'date')}
              </div>
            </div>
          </div>
          <div className="invoice-description">
            <div className="title invoice-bottom">
              <h2>description</h2>
              <h2>qty</h2>
              <h2>unit price</h2>
              <h2>amount</h2>
            </div>
            <div className="invoice-details">
              {this.renderInput('description', '', 'textarea')}
              {this.renderInput('qty', '')}
              {this.renderInput('unitPrice', '')}
              {this.renderInput('amount', '')}
              {this.renderTextarea('comments', 'ORDER COMMENTS')}
              <div className="totalcolumn">
                {this.renderInput('total', 'Total')}
                {this.renderInput('paymentApplied', 'Payment Applied')}
                <hr />
                {this.renderInput('balanceDue', 'Balance Due')}
              </div>
            </div>
          </div>
          {this.renderButton('Submit')}
        </form>
      </div>
    );
  }
}

export default withRouter(CreateInvoice);
