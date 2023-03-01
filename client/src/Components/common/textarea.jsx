import React from 'react';
import ErrorMessage from './ErrorMessage';

const Textarea = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <textarea {...rest} name={name} className="form-control" id={name} />
      {error && <ErrorMessage error={error} />}
    </div>
  );
};

export default Textarea;
