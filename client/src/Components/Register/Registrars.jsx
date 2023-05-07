import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import _ from 'lodash';

import RegistrarsTable from './registrarsTable';
import { getAllCWATregistrars, deleteRegistrar } from './../../services/userService';
import { paginate } from './../../utilities/paginate';
import Pagination from '../common/Pagination';
import ListGroup from './../common/listGroup';

import '../Invoices/invoices.css';

class Registrars extends Component {
  state = {
    categories: [],
    currentPage: 1,
    registrars: [],
    pageSize: 4,
    selectedCategory: null,
    sortColumn: { path: 'registrarNumber', order: 'asc' },
  };

  async componentDidMount() {
    const { data: registrars } = await getAllCWATregistrars();

    this.setState({ registrars });
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

  handleDelete = async (registrar) => {
    const originalRegistrars = this.state.registrars;
    const registrars = originalRegistrars.filter((reg) => reg._id !== registrar._id);
    this.setState({ registrars });

    try {
      await deleteRegistrar(registrar._id);
      toast.success(`Registrar ${registrar.registrarNumber} deleted!`);
    } catch (error) {
      if (error.response && error.response.status === 404)
        toast.error('This registrar has already been deleted.');

      this.setState({ registrars });
    }
  };

  getPageData = () => {
    const { registrars: allRegistrars, sortColumn, currentPage, pageSize } = this.state;

    let filtered = allRegistrars;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const registrars = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: registrars };
  };

  render() {
    const { pageSize, currentPage, sortColumn, categories, selectedCategory } = this.state;

    const { totalCount, data: registrars } = this.getPageData();

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
          <p className="invoice-db-count">Showing {totalCount} registrars in the database.</p>
          <RegistrarsTable
            registrars={registrars}
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

export default Registrars;
