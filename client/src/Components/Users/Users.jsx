import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import _ from 'lodash';

import { getAllUsers, deleteUser } from '../../services/authService';
// import { getAllCategories } from './../../services/categoryServices';
import { paginate } from './../../utilities/paginate';

import UsersTable from './usersTable';
import Pagination from '../common/Pagination';
import ListGroup from './../common/listGroup';

import '../Invoices/invoices.css';

class Messages extends Component {
  state = {
    categories: [],
    currentPage: 1,
    users: [],
    pageSize: 20,
    selectedCategory: null,
    sortColumn: { path: 'userNumber', order: 'asc' },
  };

  async componentDidMount() {
    const { data: users } = await getAllUsers();
    // const categories = await getAllCategories('messages');
    // console.log(categories)

    this.setState({ users });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  handleCategorySelect = (category) => {
    this.setState({ selectedCategory: category, currentPage: 1 });
  };

  handleDelete = async (user) => {
    const originalUsers = this.state.users;
    const users = originalUsers.filter((usr) => usr._id !== user._id);
    this.setState({ users });

    try {
      await deleteUser(user._id);
      toast.success(`User ${user.userNumber} deleted!`);
    } catch (error) {
      if (error.response && error.response.status === 404)
        toast.error('This user has already been deleted.');

      this.setState({ users });
    }
  };

  getPageData = () => {
    const { users: allUsers, sortColumn, currentPage, pageSize } = this.state;

    let filtered = allUsers;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const users = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: users };
  };

  render() {
    const { pageSize, currentPage, sortColumn, categories, selectedCategory } = this.state;
    const user = this.props;

    const { totalCount, data: users } = this.getPageData();

    return (
      <div className="w-full">
        {/* <div>
          <ListGroup
            items={categories}
            selectedItem={selectedCategory}
            onItemSelect={this.handleCategorySelect}
          />
        </div> */}
        <div>
          {/* {user && (
            <Link className="new-invoice-link" to="create-new-message">
              Create New Message
            </Link>
          )} */}
          {/* <p className="invoice-db-count">Showing {totalCount} messages in the database.</p> */}
          <div className="mt-10 rounded-lg bg-gray-200">
            <UsersTable
              users={users}
              sortColumn={sortColumn}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
            />
          </div>
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Messages;
