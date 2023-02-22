import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Table from '../common/Table';

class InvoicesTable extends Component {
  columns = [
    {
      path: 'invoiceNumber',
      label: 'Invoice#',
      content: (invoice) => <Link to={`/invoices/${invoice._id}`}>{invoice.invoiceNumber}</Link>,
    },
    { path: 'firstname', label: 'First Name' },
    { path: 'lastname', label: 'Last Name' },
    { path: 'email', label: 'Email' },
    { path: 'phone', label: 'Phone' },
    { path: 'currentDate', label: 'Invoice Date' },
    { path: 'description', label: 'Item Description' },
  ];

  deleteColumn = {
    key: 'delete',
    content: (invoice) => (
      <button
        onClick={() => {
          this.props.onDelete(invoice);
        }}
        className="invoice-table-delete-btn"
      >
        Delete
      </button>
    ),
  };

    constructor() {
      super();
      // const user = auth.getCurrentUser();
      // if (user && user.authorizedToDelete) this.columns.push(this.deleteColumn);
      this.columns.push(this.deleteColumn)
    }

  render() {
    const { invoices, onSort, sortColumn } = this.props;

    return <Table data={invoices} onSort={onSort} sortColumn={sortColumn} columns={this.columns} />
  }
}

export default InvoicesTable;
