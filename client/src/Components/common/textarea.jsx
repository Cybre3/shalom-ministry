import React from 'react';

const Textarea = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <textarea {...rest} name={name} className="form-control" id={name} />
      {error && (
        <div className="alert alert-danger" style={{ zIndex: 1 }}>
          {error}
        </div>
      )}
    </div>
  );
};

export default Textarea;
