import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import _ from 'lodash';

import { getAllInvoices, deleteInvoice } from '../../services/invoiceService';
import InvoicesTable from './InvoicesTable';
import { paginate } from './../../utilities/paginate';
import Pagination from '../common/Pagination';
import ListGroup from './../common/listGroup';

import './invoices.css';

class Invoices extends Component {
  state = {
    categories: [],
    currentPage: 1,
    invoices: [],
    pageSize: 4,
    selectedCategory: null,
    sortColumn: { path: 'invoiceNumber', order: 'asc' },
  };

  async componentDidMount() {
    const { data: invoices } = await getAllInvoices();

    this.setState({ invoices });
  }

  handleDelete = async (invoice) => {
    const originalInvoices = this.state.invoices;
    const invoices = originalInvoices.filter((inv) => inv._id !== invoice._id);
    this.setState({ invoices });

    try {
      await deleteInvoice(invoice._id);
      toast.success(`Invoice ${invoice.invoiceNumber} deleted!`);
    } catch (error) {
      if (error.response && error.response.status === 404)
        toast.error('This invoice has already been deleted.');

      this.setState({ invoices });
    }
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  handleCategorySelect = (category) => {
    this.setState({ selectedCategory: category, currentPage: 1 });
  };

  getPageData = () => {
    const { invoices: allInvoices, sortColumn, currentPage, pageSize } = this.state;

    let filtered = allInvoices;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const invoices = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: invoices };
  };

  render() {
    const { pageSize, currentPage, sortColumn, categories, selectedCategory } = this.state;
    const user = this.props;
    const { totalCount, data: invoices } = this.getPageData();

    return (
      <div className="invoices-table">
        <div className="table-sort-ategories">
          <ListGroup
            items={categories}
            selectedItem={selectedCategory}
            onItemSelect={this.handleCategorySelect}
          />
        </div>
        <div>
          {user && (
            <Link className="new-invoice-link" to="create-new-invoice">
              Create New Invoice
            </Link>
          )}
          <p className="invoice-db-count">Showing {totalCount} invoices in the database.</p>
          <InvoicesTable
            invoices={invoices}
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

export default Invoices;
