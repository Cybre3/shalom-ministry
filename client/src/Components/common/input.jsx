import React from 'react';
import ErrorMessage from './ErrorMessage';

const Input = ({ name, label, error, disabled, value, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        {...rest}
        name={name}
        className="form-control"
        id={name}
        value={value}
        disabled={disabled}
      />
      {error && <ErrorMessage error={error} classname={'alert'} />}
    </div>
  );
};

export default Input;
