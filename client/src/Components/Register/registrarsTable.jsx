import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Table from '../common/Table';
import auth from '../../services/authService';

class RegistrarsTable extends Component {
  columns = [
    {
      path: 'registrarNumber',
      label: 'Registrar#',
      content: (registrar) => (
        <Link
          className="rounded-md bg-gray-600 px-4 py-0.5 tracking-wider text-white ring-1 ring-blue-400 hover:ring-2 hover:ring-blue-600"
          to={`cwat-register/${registrar._id}`}
        >
          {registrar.registrarNumber}
        </Link>
      ),
    },
    { path: 'category', label: 'Category' },
    { path: 'firstname', label: 'First Name' },
    { path: 'lastname', label: 'Last Name' },
    { path: 'ticketOption', label: 'Ticket Option' },
    { path: 'email', label: 'Email' },
    { path: 'phone', label: 'Phone' },
    { path: 'shirtSize', label: 'Shirt Size' },
    { path: 'allergies', label: 'Allergies' },
    { path: 'questions', label: 'Questions' },
    { path: 'discover', label: 'Discover' },
    { path: 'emergencyFullName', label: 'Emergency Full Name' },
    { path: 'emergencyEmail', label: 'Emergency Email' },
    { path: 'emergencyPhone', label: 'Emergency Phone' },
    { path: 'date', label: 'Register Date' },
  ];

  deleteColumn = {
    key: 'delete',
    content: (invoice) => (
      <div className="flex w-fit items-center space-x-2">
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
    const { registrars, onSort, sortColumn } = this.props;

    return (
      <Table data={registrars} onSort={onSort} sortColumn={sortColumn} columns={this.columns} />
    );
  }
}

export default RegistrarsTable;
