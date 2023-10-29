import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Table from '../common/Table';
import auth from '../../services/authService';

class MessagesTable extends Component {
  columns = [
    {
      path: 'messageNumber',
      label: 'Message#',
      content: (message) => (
        <Link
          className="rounded-md bg-gray-600 px-4 py-0.5 tracking-wider text-white ring-1 ring-blue-400 hover:ring-2 hover:ring-blue-600"
          to={`${message._id}`}
        >
          {message.messageNumber}
        </Link>
      ),
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
    const { messages, onSort, sortColumn } = this.props;

    return <Table data={messages} onSort={onSort} sortColumn={sortColumn} columns={this.columns} />;
  }
}

export default MessagesTable;
