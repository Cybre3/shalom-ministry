import React, { Component } from 'react';
import './createInvoice.css';

class CreateInvoice extends Component {
  state = {
    firstName: 'star',
    lastName: 'mccloud',
    email: 'cybre3@gmail.com',
    phone: '6098151154',
    invoiceNumber: 1,
    date: Date.now,
    description: 'conference with a twist ticket',
    qty: 1,
    unitPrice: 500,
    amount: '',
    total: 500,
    paymentApplied: 250,
    balanceDue: '',
    comments: 'payment to be made next month',
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('fo Submitted');
  };

  handleOnChange = (e) => {
    console.log(e.target.value);
  }

  render() {
    return (
      <div className="invoice-container">
        <form action="" onSubmit={this.handleSubmit}>
          <div className="bill-to">
            <label htmlFor="">First Name</label>
            <input type="text" value={this.state.firstName} />
            <label htmlFor="">Last Name</label>
            <input type="text" value={this.state.lastName} />
            <label htmlFor="">Email</label>
            <input type="email" value={this.state.email} />
            <label htmlFor="">Phone Number</label>
            <input type="phone" value={this.state.phone} />
          </div>
          <div className="invoice-num-date">
            <label htmlFor="">Invoice #</label>
            <input type="text" value={this.state.invoiceNumber} disabled />
            <label htmlFor="">Date</label>
            <input type="date" value={this.state.date} />
          </div>
          <div className="invoice-description">
            <label htmlFor="">Description</label>
            <input type="text" value={this.state.description} />
            <label htmlFor="">Quantity</label>
            <input type="text" value={this.state.qty} />
            <label htmlFor="">Unit Price</label>
            <input type="text" value={this.state.unitPrice} />
            <label htmlFor="">Amount</label>
            <input type="text" value={Number(this.state.qty * this.state.unitPrice)} />
            <label htmlFor="">Total</label>
            <input type="text" value={this.state.total} disabled />
            <label htmlFor="">Payment Applied</label>
            <input type="text" value={this.state.paymentApplied} />
            <label htmlFor="">Balance Due</label>
            <input type="text" value={Number(this.state.total - this.state.paymentApplied)} disabled />
            <label htmlFor="">Comments</label>
            <textarea type="text" value={this.state.comments} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default CreateInvoice;
