import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getAllInvoices, deleteInvoice } from '../../services/invoiceService';
import InvoicesTable from './InvoicesTable';
import './invoices.css';

class Invoices extends Component {
  state = {
    invoices: [],
    sortColumn: { path: 'firstname', order: 'asc' },
  };

  async componentDidMount() {
    const { data: invoices } = await getAllInvoices();

    this.setState({invoices});
  }

  handleSort = () => {
    console.log('working');
  }

  handleDelete = () => {
    console.log('deleted');
  }

  getPageData = () => {
    const { invoices: allInvoices } = this.state;

    return { totalCount: allInvoices.length, data: allInvoices };
  };


  render() {
    const { sortColumn } = this.state;
    const user = this.props;

    const { totalCount, data: invoices } = this.getPageData();

    return (
      <div className="invoices-table">
        <div>ListGroup</div>
        <div>
          {user && <Link to="/invoices/create-new-invoice">New Invoice</Link>}
          <p>Showing {totalCount} invoices in the database.</p>
          <InvoicesTable
            invoices={invoices}
            sortColumn={sortColumn}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
        </div>
      </div>
    );
  }
}

export default Invoices;
