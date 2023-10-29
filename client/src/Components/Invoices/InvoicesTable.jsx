import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import Table from '../common/Table';
import auth from '../../services/authService';

import trashIcon from '../../assets/Dashboard/trashIcon.png';

class InvoicesTable extends Component {
  columns = [
    {
      path: 'invoiceNumber',
      label: 'Invoice#',
      content: (invoice) => (
        <NavLink
          className="rounded-md bg-gray-600 px-4 py-0.5 tracking-wider text-white ring-1 ring-blue-400 hover:ring-2 hover:ring-blue-600"
          to={`${invoice._id}`}
        >
          {invoice.invoiceNumber}
        </NavLink>
      ),
    },
    { path: 'firstname', label: 'First Name' },
    { path: 'lastname', label: 'Last Name' },
    { path: 'email', label: 'Email' },
    { path: 'phone', label: 'Phone' },
    { path: 'date', label: 'Invoice Date' },
    { path: 'description', label: 'Item Description' },
  ];

  deleteColumn = {
    key: 'delete',
    content: (invoice) => (
      <div className='w-fit flex space-x-2 items-center'>
        <i className="fa fa-edit cursor-pointer text-black" />
        <i
          onClick={() => {
            this.props.onDelete(invoice);
          }}
          className="fa fa-trash cursor-pointer text-red-500"
        />
      </div>
    ),
  };

  constructor() {
    super();
    const user = auth.getCurrentUser();
    if (user && user.authorizedToDelete) this.columns.push(this.deleteColumn);
  }

  render() {
    const { invoices, onSort, sortColumn } = this.props;

    return <Table data={invoices} onSort={onSort} sortColumn={sortColumn} columns={this.columns} />;
  }
}

export default InvoicesTable;
