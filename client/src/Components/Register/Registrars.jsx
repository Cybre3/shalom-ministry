import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { toast } from 'react-toastify';
import RegistrarsTable from './registrarsTable';
import { getAllCWATregistrars } from './../../services/userService';

import '../Invoices/invoices.css';

class Registrars extends Component {
  state = {
    registrars: [],
    sortColumn: { path: 'fullname', order: 'asc' },
  };

  async componentDidMount() {
    const { data: registrars } = await getAllCWATregistrars();

    this.setState({ registrars });
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
    const { registrars: allRegistrars } = this.state;

    return { totalCount: allRegistrars.length, data: allRegistrars };
  };

  render() {
    const { sortColumn } = this.state;
    // const user = this.props;

    const { totalCount, data: registrars } = this.getPageData();

    return (
      <div className="invoices-table">
        <div>ListGroup</div>
        <div>
          <p className="invoice-db-count">Showing {totalCount} registrars in the database.</p>
          <RegistrarsTable
            messages={registrars}
            sortColumn={sortColumn}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
        </div>
      </div>
    );
  }
}

export default Registrars;
