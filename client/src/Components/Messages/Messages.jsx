import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
// import { toast } from 'react-toastify';

import { getAllMessages } from '../../services/messageService';
import { paginate } from './../../utilities/paginate';

import MessagesTable from './messagesTable';
import Pagination from '../common/Pagination';

import '../Invoices/invoices.css';

class Messages extends Component {
  state = {
    messages: [],
    currentPage: 1,
    pageSize: 4,
    sortColumn: { path: 'messageNumber', order: 'asc' },
  };

  async componentDidMount() {
    const { data: messages } = await getAllMessages();

    this.setState({ messages });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  // handleDelete = async (message) => {
  //   const originalMessages = this.state.messages;
  //   const messages = originalMessages.filter((inv) => inv._id !== message._id);
  //   this.setState({ messages: message });

  //   try {
  //     await deleteMessage(message._id);
  //     toast.success(`Invoice ${message.messageNumber} deleted!`);
  //   } catch (error) {
  //     if (error.response && error.response.status === 404)
  //       toast.error('This invoice has already been deleted.');

  //     this.setState({ messages: message });
  //   }
  // };

  getPageData = () => {
    const { messages: allMessages, sortColumn, currentPage, pageSize } = this.state;

    let filtered = allMessages;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const messages = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: messages };
  };

  render() {
    const { pageSize, currentPage, sortColumn } = this.state;
    const user = this.props;

    const { totalCount, data: messages } = this.getPageData();

    return (
      <div className="invoices-table">
        <div>ListGroup</div>
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
