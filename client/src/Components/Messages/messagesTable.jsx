import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Table from '../common/Table';

class InvoicesTable extends Component {
  columns = [
    {
      path: 'messageNumber',
      label: 'Message#',
      content: (message) => <Link to={`/messages/${message._id}`}>{message.messageNumber}</Link>,
    },
    { path: 'category', label: 'Category' },
    { path: 'fullname', label: 'Full Name' },
    { path: 'firstname', label: 'First Name' },
    { path: 'lastname', label: 'Last Name' },
    { path: 'organizationName', label: 'Organization Name' },
    { path: 'email', label: 'Email' },
    { path: 'phone', label: 'Phone' },
    { path: 'message', label: 'Message' },
    { path: 'bestContact', label: 'Best Mode of Contact' },
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

export default InvoicesTable;
