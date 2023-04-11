import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Table from '../common/Table';

class RegistrarsTable extends Component {
  columns = [
    {
      path: 'registrarNumber',
      label: 'registrar#',
      content: (registrar) => (
        <Link to={`/messages/${registrar._id}`}>{registrar.registrarNumber}</Link>
      ),
    },
    { path: 'category', label: 'Category' },
    { path: 'ticketOption', label: 'Ticket Option' },
    { path: 'fullname', label: 'Full Name' },
    { path: 'firstname', label: 'First Name' },
    { path: 'lastname', label: 'Last Name' },
    { path: 'email', label: 'Email' },
    { path: 'phone', label: 'Phone' },
    { path: 'allergies', label: 'Allergies' },
    { path: 'questions', label: 'Questions' },
    { path: 'discover', label: 'Discover' },
    { path: 'emergencyFullName', label: 'Emergency Full Name' },
    { path: 'emergencyEmail', label: 'Emergency Email' },
    { path: 'emergencyPhone', label: 'Emergency Phone' },
    { path: 'date', label: 'Message Date' },
  ];

  deleteColumn = {
    key: 'delete',
    content: (message) => (
      <button
        onClick={() => {
          this.props.onDelete(message);
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
    this.columns.push(this.deleteColumn);
  }

  render() {
    const { messages, onSort, sortColumn } = this.props;

    return <Table data={messages} onSort={onSort} sortColumn={sortColumn} columns={this.columns} />;
  }
}

export default RegistrarsTable;
