import React from 'react';

const CustomInput = ({ name, label, value, disabled, error, ...rest }) => {
  return (
    <div className="inputbox">
      <input {...rest} name={name} id={name} value={value} disabled={disabled} />
      <i>{label}</i>
      {error && (
        <div className="alert alert-danger" style={{ zIndex: 5, position: 'relative' }}>
          {error}
        </div>
      )}
    </div>
  );
};

export default CustomInput;
