import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getAllInvoices, deleteInvoice } from '../../services/invoiceService';
import InvoicesTable from './InvoicesTable';
import './invoices.css';

class Invoices extends Component {
  state = {
    invoices: [],
    sortColumn: { path: 'invoiceNumber', order: 'asc' },
  };

  async componentDidMount() {
    const { data: invoices } = await getAllInvoices();

    this.setState({ invoices });
  }

  handleDelete = async (invoice) => {
    const originalInvoices = this.state.invoices;
    const invoices = originalInvoices.filter((inv) => inv._id !== invoice._id);
    this.setState({ invoices });

    try {
      await deleteInvoice(invoice._id);
      toast.success(`Invoice ${invoice.invoiceNumber} deleted!`);
    } catch (error) {
      if (error.response && error.response.status === 404)
        toast.error('This invoice has already been deleted.');

      this.setState({ invoices });
    }
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

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
        <div className="table-sort-ategories">ListGroup</div>
        <div>
          {user && (
            <Link className="new-invoice-link" to="create-new-invoice">
              Create New Invoice
            </Link>
          )}
          <p className="invoice-db-count">Showing {totalCount} invoices in the database.</p>
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
