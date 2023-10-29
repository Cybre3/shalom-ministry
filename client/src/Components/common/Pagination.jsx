import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import './pagination.css';

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          /* eslint-disable */
          <a className="page-link cursor-pointer" key={page} onClick={() => onPageChange(page)}>
            <li className={`${page === currentPage ? 'page-item active' : 'page-item'}`}>{page}</li>
          </a>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
