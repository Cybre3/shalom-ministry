import React from 'react';

const Input = ({ name, label, error, disabled, value, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input {...rest} name={name} className="form-control" id={name} value={value} disabled={disabled} />
      {error && (
        <div className="alert alert-danger" style={{ zIndex: 1 }}>
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;
