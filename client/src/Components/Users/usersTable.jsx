import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Table from '../common/Table';
import auth from '../../services/authService';

class UsersTable extends Component {
  columns = [
    {
      path: 'userNumber',
      label: 'User#',
      content: (user) => <Link to={`${user._id}`}>{user.userNumber}</Link>,
    },
    { path: 'firstname', label: 'First Name' },
    { path: 'lastname', label: 'Last Name' },
    { path: 'email', label: 'Email' },
    { path: 'date', label: 'Register Date' },
  ];

  deleteColumn = {
    key: 'delete',
    content: (user) => (
      <button
        onClick={() => {
          this.props.onDelete(user);
        }}
        className="invoice-table-delete-btn"
      >
        Delete
      </button>
    ),
  };

  constructor() {
    super();
    const user = auth.getCurrentUser();
    if (user && user.isAdmin) this.columns.push(this.deleteColumn);
  }

  render() {
    const { users, onSort, sortColumn } = this.props;

    return <Table data={users} onSort={onSort} sortColumn={sortColumn} columns={this.columns} />;
  }
}

export default UsersTable;
