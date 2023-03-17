import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { toast } from 'react-toastify';
import { getAllMessages } from '../../services/messageService';
import MessagesTable from './messagesTable';
import '../Invoices/invoices.css';

class Messages extends Component {
  state = {
    messages: [],
    sortColumn: { path: 'fullname', order: 'asc' },
  };

  async componentDidMount() {
    const { data: messages } = await getAllMessages();

    this.setState({ messages });
  }

  handleSort = () => {
    console.log('working');
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
    const { messages: allMessages } = this.state;

    return { totalCount: allMessages.length, data: allMessages };
  };

  render() {
    const { sortColumn } = this.state;
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
        </div>
      </div>
    );
  }
}

export default Messages;
