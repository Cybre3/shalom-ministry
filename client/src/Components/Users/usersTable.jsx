import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Table from '../common/Table';
import auth from '../../services/authService';

class UsersTable extends Component {
  columns = [
    {
      path: 'userNumber',
      label: 'User#',
      content: (user) => (
        <Link
          className="rounded-md bg-gray-600 px-4 py-0.5 tracking-wider text-white ring-1 ring-blue-400 hover:ring-2 hover:ring-blue-600"
          to={`${user._id}`}
        >
          {user.userNumber}
        </Link>
      ),
    },
    { path: 'firstname', label: 'First Name' },
    { path: 'lastname', label: 'Last Name' },
    { path: 'email', label: 'Email' },
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
    const { users, onSort, sortColumn } = this.props;

    return <Table data={users} onSort={onSort} sortColumn={sortColumn} columns={this.columns} />;
  }
}

export default UsersTable;
