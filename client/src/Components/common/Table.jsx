import React from 'react';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

const Table = ({ sortColumn, onSort, data, columns }) => {
  return (
    <table>
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;
