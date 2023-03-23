import React from 'react';
import ErrorMessage from './ErrorMessage';

const Dropdown = ({ name, label, error, options, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} {...rest} className="form-control" >
        <option value={null} key={'empty'} />
        {options.map((option) => (
          <option key={option.value} disabled={option.disabled} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
      {error && <ErrorMessage error={error} />}
    </div>
  );
};

export default Dropdown;
