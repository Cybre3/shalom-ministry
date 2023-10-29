import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import _ from 'lodash';

import RegistrarsTable from './registrarsTable';
import {
  // getCWATregistrarById,
  deleteRegistrarById,
  getAllRegistrars,
} from '../../services/registrarService';
import { getAllCategories } from '../../services/categoryServices';
import { paginate } from './../../utilities/paginate';
import withRouter from '../../utilities/withRouter';
import Pagination from '../common/Pagination';
import ListGroup from './../common/listGroup';

import '../Invoices/invoices.css';

class Registrars extends Component {
  state = {
    categories: [],
    currentPage: 1,
    registrars: [],
    pageSize: 20,
    selectedCategory: null,
    sortColumn: { path: 'registrarNumber', order: 'asc' },
  };

  async componentDidMount() {
    const { data: registrars } = await getAllRegistrars();
    const categories = await getAllCategories('registrars');
    // console.log(categories)

    this.setState({ registrars, categories });
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
      await deleteRegistrarById('cwat-register', registrar._id);
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
      <div className="w-full">
        {/* <div>
          <ListGroup
            items={categories}
            selectedItem={selectedCategory}
            onItemSelect={this.handleCategorySelect}
          />
        </div> */}
        <div>
          {/* <p className="invoice-db-count">Showing {totalCount} registrars in the database.</p> */}
          <div className="mt-10 w-full rounded-lg bg-gray-200">
            <RegistrarsTable
              registrars={registrars}
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

export default withRouter(Registrars);
