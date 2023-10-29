import React from 'react';
import { NavLink } from 'react-router-dom';
import Joi from 'joi-browser';

import Form from '../../common/form';
import withRouter from '../../../utilities/withRouter';
import { saveInvoice } from '../../../services/invoiceService';
import { getInvoice } from '../../../services/invoiceService';
import { getConstant } from '../../../services/constantService';

import './createInvoice.css';

class CreateInvoice extends Form {
  state = {
    data: {
      invoiceNumber: '',
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      currentDate: new Date().toISOString().substring(0, 10),
      description: '',
      qty: '',
      unitPrice: '',
      amount: 0,
      total: 0,
      paymentApplied: 0,
      balanceDue: 0,
      comments: '',
    },
    errors: {},
    bool: false,
  };

  schema = {
    _id: Joi.string(),
    invoiceNumber: Joi.number().required().label('Invoice Number'),
    firstname: Joi.string().required().label('First Name'),
    lastname: Joi.string().required().label('Last Name'),
    email: Joi.string().email().required().label('Email'),
    phone: Joi.string().required().label('Phone'),
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
      const invoiceId = this.props.params.invoiceId;
      if (invoiceId === 'new') {
        const invoiceNumber = (await getConstant('invoiceNumber')).data.amount;
        this.setState({ data: { ...this.state.data, invoiceNumber } });
        return;
      }

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
      currentDate: invoice.date,
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
    try {
      this.setState({ bool: true });
      setTimeout(
        async () => {
          this.setState({ bool: false });
          await saveInvoice(this.state.data);
          // setTimeout(() => (window.location = '/dashboard/invoices'), 2000);
        },
        Promise.reject ? 2000 : 1000
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  render() {
    const { qty, unitPrice, paymentApplied } = this.state.data;
    const total = qty * unitPrice;
    return (
      <div className="invoice-container">
        <div className="logo">
          <NavLink to="/">
            <img src={require('../../../assets/other/SM-Logo-w-Title.png')} alt="" />
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
                {this.renderInput('invoiceNumber', '', '', true)}
                {this.renderInput(
                  'currentDate',
                  '',
                  'date',
                  this.props.params.invoiceId !== 'new' ? true : false
                )}
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
              <div>
                <span>{total}</span>
              </div>
              {this.renderTextarea('comments', 'ORDER COMMENTS')}
              <div className="totalcolumn">
                <div>
                  <h3>Total</h3>
                  <span>{qty * unitPrice}</span>
                </div>
                {this.renderInput('paymentApplied', 'Payment Applied')}
                <hr />
                <div>
                  <h3>Balance Due</h3>
                  <span>{total - paymentApplied}</span>
                </div>
              </div>
            </div>
          </div>
          {this.renderButton('Submit', this.state.bool)}
        </form>
      </div>
    );
  }
}

export default withRouter(CreateInvoice);
