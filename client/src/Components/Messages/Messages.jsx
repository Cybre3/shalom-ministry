import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import _ from 'lodash';
// import { toast } from 'react-toastify';

import { getAllMessages, deleteMessage } from '../../services/messageService';
import { getAllCategories } from './../../services/categoryServices';
import { paginate } from './../../utilities/paginate';

import MessagesTable from './messagesTable';
import Pagination from '../common/Pagination';
import ListGroup from './../common/listGroup';

import '../Invoices/invoices.css';

class Messages extends Component {
  state = {
    categories: [],
    currentPage: 1,
    messages: [],
    pageSize: 4,
    selectedCategory: null,
    sortColumn: { path: 'messageNumber', order: 'asc' },
  };

  async componentDidMount() {
    const { data: messages } = await getAllMessages();
    const categories = await getAllCategories('messages');
    // console.log(categories)

    this.setState({ messages, categories });
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

  handleDelete = async (message) => {
    const originalMessages = this.state.messages;
    const messages = originalMessages.filter((msg) => msg._id !== message._id);
    this.setState({ messages });

    try {
      await deleteMessage(message._id, message.category);
      toast.success(`Message ${message.messageNumber} deleted!`);
    } catch (error) {
      if (error.response && error.response.status === 404)
        toast.error('This message has already been deleted.');

      this.setState({ messages });
    }
  };

  getPageData = () => {
    const { messages: allMessages, sortColumn, currentPage, pageSize } = this.state;

    let filtered = allMessages;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const messages = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: messages };
  };

  render() {
    const { pageSize, currentPage, sortColumn, categories, selectedCategory } = this.state;
    const user = this.props;

    const { totalCount, data: messages } = this.getPageData();

    return (
      <div className="invoices-table">
        <div>
          <ListGroup
            items={categories}
            selectedItem={selectedCategory}
            onItemSelect={this.handleCategorySelect}
          />
        </div>
        <div>
          {user && (
            <Link className="new-invoice-link" to="create-new-message">
              Create New Message
            </Link>
          )}
          <p className="invoice-db-count">Showing {totalCount} messages in the database.</p>
          <MessagesTable
            messages={messages}
            sortColumn={sortColumn}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
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
