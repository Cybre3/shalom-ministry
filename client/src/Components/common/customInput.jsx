import React from 'react';
import ErrorMessage from './ErrorMessage';

const CustomInput = ({ name, label, value, disabled, error, ...rest }) => {
  return (
    <div className="inputbox">
      <input {...rest} name={name} id={name} value={value} disabled={disabled} />
      <i>{label}</i>
      {error && <ErrorMessage error={error} />}
    </div>
  );
};

export default CustomInput;
